<?php

/**
 * @file
 * Bootstrap script to create Note content type, path aliases, and sample notes.
 */

use Drupal\field\Entity\FieldConfig;
use Drupal\node\Entity\Node;
use Drupal\node\Entity\NodeType;
use Drupal\pathauto\Entity\PathautoPattern;

// Create Note content type if it does not exist.
if (!NodeType::load('note')) {
  $node_type = NodeType::create([
    'type' => 'note',
    'name' => 'Note',
    'description' => 'A simple note with a title and body.',
  ]);
  $node_type->save();

  // Attach the shared body field to the note bundle.
  FieldConfig::create([
    'field_storage' => \Drupal\field\Entity\FieldStorageConfig::loadByName('node', 'body'),
    'bundle' => 'note',
    'label' => 'Body',
    'settings' => [
      'display_summary' => TRUE,
      'required_summary' => FALSE,
    ],
  ])->save();

  /** @var \Drupal\Core\Entity\EntityDisplayRepositoryInterface $display_repository */
  $display_repository = \Drupal::service('entity_display.repository');

  $display_repository->getFormDisplay('node', 'note')
    ->setComponent('body', [
      'type' => 'text_textarea_with_summary',
      'weight' => 1,
      'settings' => [
        'rows' => 9,
        'summary_rows' => 3,
      ],
    ])
    ->save();

  $display_repository->getViewDisplay('node', 'note')
    ->setComponent('body', [
      'type' => 'text_default',
      'label' => 'hidden',
      'weight' => 1,
    ])
    ->save();

  echo "Created Note content type.\n";
}

// Configure path alias pattern for notes.
if (!PathautoPattern::load('note')) {
  PathautoPattern::create([
    'id' => 'note',
    'label' => 'Note',
    'type' => 'canonical_entities:node',
    'pattern' => 'notes/[node:title]',
    'weight' => 0,
    'selection_criteria' => [
      [
        'id' => 'entity_bundle:node',
        'bundles' => ['note' => 'note'],
        'negate' => FALSE,
        'context_mapping' => ['node' => 'node'],
      ],
    ],
    'selection_logic' => 'and',
  ])->save();

  echo "Created path alias pattern for notes.\n";
}

$notes = [
  [
    'title' => 'Welcome',
    'body' => '<p>Welcome to your next-drupal notes site. This note is served from Drupal and rendered by Next.js.</p>',
  ],
  [
    'title' => 'Getting Started',
    'body' => '<p>Edit notes in Drupal at <strong>/admin/content</strong>. They appear on the Next.js frontend at <code>/notes/[title]</code>.</p>',
  ],
  [
    'title' => 'Headless Drupal',
    'body' => '<p>Drupal stores content and exposes it via JSON:API. Next.js fetches that data and builds fast, modern pages.</p>',
  ],
];

foreach ($notes as $note_data) {
  $existing = \Drupal::entityTypeManager()
    ->getStorage('node')
    ->loadByProperties([
      'type' => 'note',
      'title' => $note_data['title'],
    ]);

  if ($existing) {
    echo "Note already exists: {$note_data['title']}\n";
    continue;
  }

  $node = Node::create([
    'type' => 'note',
    'title' => $note_data['title'],
    'body' => [
      'value' => $note_data['body'],
      'format' => 'basic_html',
    ],
    'status' => 1,
  ]);
  $node->save();
  echo "Created note: {$note_data['title']} (path: /node/{$node->id()})\n";
}

// Create Next.js site configuration.
$next_site_storage = \Drupal::entityTypeManager()->getStorage('next_site');
$existing_sites = $next_site_storage->loadMultiple();
if (empty($existing_sites)) {
  $next_site = $next_site_storage->create([
    'id' => 'nextjs',
    'label' => 'Next.js',
    'base_url' => 'http://localhost:3000',
    'preview_url' => 'http://localhost:3000/api/draft',
    'preview_secret' => 'preview-secret',
    'revalidate_url' => 'http://localhost:3000/api/revalidate',
    'revalidate_secret' => 'revalidate-secret',
  ]);
  $next_site->save();
  echo "Created Next.js site configuration.\n";
}

// Grant anonymous users permission to view published notes via JSON:API.
$user_role = \Drupal\user\Entity\Role::load('anonymous');
if ($user_role && !$user_role->hasPermission('access content')) {
  $user_role->grantPermission('access content')->save();
}

\Drupal::service('pathauto.generator')->resetCaches();
\Drupal::service('router.builder')->rebuild();
echo "Setup complete.\n";
