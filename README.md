# Next-Drupal Starter

Drupal 11 backend + Next.js frontend using [next-drupal](https://next-drupal.org).

## Structure

- `drupal/` — Drupal 11 site (DDEV)
- `web/` — Next.js 15 frontend (next-drupal basic starter)

## Quick start

### 1. Start Drupal (DDEV)

```bash
cd drupal
ddev start
```

Drupal URL: http://127.0.0.1:55539 (port may vary — run `ddev describe`)

Drupal admin: https://next-drupal.ddev.site/user/login (or use `ddev launch`)

### 2. Start Next.js

```bash
cd web
npm run dev
```

Open http://localhost:3000

## Example URLs (Next.js)

| URL | Content |
|-----|---------|
| http://localhost:3000 | Notes index |
| http://localhost:3000/notes/welcome | Welcome note |
| http://localhost:3000/notes/getting-started | Getting Started note |
| http://localhost:3000/notes/headless-drupal | Headless Drupal note |
| http://localhost:3000/about | About page |
| http://localhost:3000/contact | Contact page |
| http://localhost:3000/blog/hello-next-drupal | Hello Next-Drupal article |
| http://localhost:3000/blog/why-headless-cms | Why Headless CMS article |

## Drupal admin

- Content: `/admin/content`
- Next.js sites: `/admin/config/services/next`

## Re-seed example content

```bash
cd drupal
ddev drush php:script scripts/setup-notes.php
ddev drush php:script scripts/setup-content.php
ddev drush php:script scripts/setup-products.php
```

## Artisan Market products (Drupal)

Manage products at **Drupal admin → Content** (`/admin/content`), filter by type **Product**.

The Artisan Market demo at http://localhost:3000/demo/artisan-market pulls products from Drupal via JSON:API.

## Database dump (hosting)

A gzipped database snapshot lives at the project root:

- `drupal-database.sql.gz` — full Drupal DB (content, products, config in DB)

### Restore locally (DDEV)

```bash
cd drupal
ddev start
ddev import-db --file=../drupal-database.sql.gz
```

### Re-export after changes

```bash
cd drupal
ddev export-db --file=../drupal-database.sql.gz
```

On a remote host, import the same file into MariaDB/MySQL after `composer install` and Drupal install scaffolding. Point `web/.env.local` at your Drupal JSON:API URL.
