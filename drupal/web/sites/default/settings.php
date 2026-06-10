<?php

// phpcs:ignoreFile

/**
 * @file
 * Drupal site configuration for Railway deployment.
 *
 * This file configures the database connection and other critical settings
 * using environment variables provided by Railway.
 */

/**
 * Include the default settings file.
 */
if (file_exists($app_root . '/' . $site_path . '/default.settings.php')) {
  include $app_root . '/' . $site_path . '/default.settings.php';
}

/**
 * Database configuration.
 *
 * Reads connection details from Railway environment variables:
 *   DRUPAL_DB_HOST, DRUPAL_DB_PORT, DRUPAL_DB_USER,
 *   DRUPAL_DB_PASSWORD, DRUPAL_DB_NAME
 */
$databases['default']['default'] = [
  'driver'     => 'mysql',
  'database'   => getenv('DRUPAL_DB_NAME')     ?: 'drupal',
  'username'   => getenv('DRUPAL_DB_USER')     ?: 'drupal',
  'password'   => getenv('DRUPAL_DB_PASSWORD') ?: '',
  'host'       => getenv('DRUPAL_DB_HOST')     ?: '127.0.0.1',
  'port'       => getenv('DRUPAL_DB_PORT')     ?: '3306',
  'prefix'     => '',
  'collation'  => 'utf8mb4_general_ci',
  'init_commands' => [
    'isolation_level' => 'SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED',
  ],
];

/**
 * Hash salt.
 *
 * Used for one-time login links, cancel links, form tokens, etc.
 * Override this value via the DRUPAL_HASH_SALT environment variable in
 * production, or leave the generated default below.
 */
$settings['hash_salt'] = getenv('DRUPAL_HASH_SALT') ?: 'r8Kx2mP9vQnL5wYjT3cZ7bN4sA6eH1dF0uG';

/**
 * Trusted host patterns.
 *
 * Allows requests from Railway-generated domains (*.up.railway.app) as well
 * as any custom domain set via the DRUPAL_TRUSTED_HOST environment variable.
 *
 * To add a custom domain at runtime set:
 *   DRUPAL_TRUSTED_HOST=my-site\.example\.com
 */
$settings['trusted_host_patterns'] = [
  // Railway public domains
  '^.+\.up\.railway\.app$',
  // localhost for health checks and internal traffic
  '^localhost$',
  '^127\.0\.0\.1$',
];

// Allow an operator-supplied trusted host pattern (e.g. a custom domain).
if ($extra_host = getenv('DRUPAL_TRUSTED_HOST')) {
  $settings['trusted_host_patterns'][] = $extra_host;
}

/**
 * Public files path.
 *
 * Relative to the Drupal web root; must be writable by the web server.
 */
$settings['file_public_path'] = 'sites/default/files';

/**
 * Private files path.
 *
 * Absolute path outside the web root; must be writable by the web server.
 */
$settings['file_private_path'] = '/app/private';

/**
 * Configuration sync directory.
 */
$settings['config_sync_directory'] = '/app/config/sync';

/**
 * Load local development override configuration, if available.
 *
 * Create a settings.local.php file to override variables on secondary
 * (staging, development, etc.) installations of this site.
 */
if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}
