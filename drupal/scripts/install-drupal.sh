#!/usr/bin/env bash
# install-drupal.sh
#
# Runs drush site:install to initialise the Drupal database on first deployment.
# Subsequent runs are skipped when the `users` table already exists.
#
# Required environment variables:
#   DRUPAL_DB_HOST      – database hostname
#   DRUPAL_DB_PORT      – database port (default: 3306)
#   DRUPAL_DB_USER      – database username
#   DRUPAL_DB_PASSWORD  – database password
#   DRUPAL_DB_NAME      – database name
#
# Optional environment variables:
#   DRUPAL_ADMIN_PASSWORD – admin account password
#                           (a random password is generated when not set)

set -euo pipefail

# ---------------------------------------------------------------------------
# Resolve paths
# ---------------------------------------------------------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
DRUSH="${APP_DIR}/vendor/bin/drush"

# ---------------------------------------------------------------------------
# Read database credentials from environment variables
# ---------------------------------------------------------------------------
DB_HOST="${DRUPAL_DB_HOST:-127.0.0.1}"
DB_PORT="${DRUPAL_DB_PORT:-3306}"
DB_USER="${DRUPAL_DB_USER:-drupal}"
DB_PASSWORD="${DRUPAL_DB_PASSWORD:-}"
DB_NAME="${DRUPAL_DB_NAME:-drupal}"

# ---------------------------------------------------------------------------
# Check whether Drupal is already installed by probing the `users` table
# ---------------------------------------------------------------------------
echo "Checking whether Drupal is already installed..."

TABLE_EXISTS=$(mysql \
  --host="${DB_HOST}" \
  --port="${DB_PORT}" \
  --user="${DB_USER}" \
  --password="${DB_PASSWORD}" \
  --silent \
  --skip-column-names \
  --execute="SELECT COUNT(*) FROM information_schema.tables
             WHERE table_schema = '${DB_NAME}'
               AND table_name   = 'users';" 2>/dev/null || echo "0")

if [ "${TABLE_EXISTS}" = "1" ]; then
  echo "Drupal is already installed. Skipping site:install."
  exit 0
fi

# ---------------------------------------------------------------------------
# Determine admin password
# ---------------------------------------------------------------------------
if [ -n "${DRUPAL_ADMIN_PASSWORD:-}" ]; then
  ADMIN_PASSWORD="${DRUPAL_ADMIN_PASSWORD}"
else
  # Generate a random 24-character password when none is supplied
  ADMIN_PASSWORD="$(LC_ALL=C tr -dc 'A-Za-z0-9!@#$%^&*' </dev/urandom | head -c 24 || true)"
  echo "No DRUPAL_ADMIN_PASSWORD set — generated a random admin password."
  echo "Admin password: ${ADMIN_PASSWORD}"
fi

# ---------------------------------------------------------------------------
# Build the database URL for drush
# ---------------------------------------------------------------------------
DB_URL="mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"

# ---------------------------------------------------------------------------
# Run the Drupal installer
# ---------------------------------------------------------------------------
echo "Running drush site:install..."

"${DRUSH}" \
  --root="${APP_DIR}/web" \
  --yes \
  site:install standard \
  --db-url="${DB_URL}" \
  --account-name="admin" \
  --account-pass="${ADMIN_PASSWORD}" \
  --site-name="Drupal" \
  --locale="en"

echo "Drupal installation complete."
