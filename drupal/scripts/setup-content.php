<?php

/**
 * @file
 * Create example pages and articles with path aliases.
 */

use Drupal\node\Entity\Node;

$pages = [
  [
    'title' => 'About',
    'alias' => '/about',
    'body' => '<p>This is a basic page served from Drupal and rendered by Next.js at <strong>/about</strong>.</p>',
  ],
  [
    'title' => 'Contact',
    'alias' => '/contact',
    'body' => '<p>Reach us anytime. This page lives at <strong>/contact</strong>.</p>',
  ],
];

foreach ($pages as $page_data) {
  $existing = \Drupal::entityTypeManager()
    ->getStorage('node')
    ->loadByProperties([
      'type' => 'page',
      'title' => $page_data['title'],
    ]);

  if ($existing) {
    echo "Page already exists: {$page_data['title']}\n";
    continue;
  }

  $node = Node::create([
    'type' => 'page',
    'title' => $page_data['title'],
    'body' => [
      'value' => $page_data['body'],
      'format' => 'basic_html',
    ],
    'status' => 1,
    'path' => ['alias' => $page_data['alias']],
  ]);
  $node->save();
  echo "Created page: {$page_data['title']} ({$page_data['alias']})\n";
}

$articles = [
  [
    'title' => 'Hello Next-Drupal',
    'alias' => '/blog/hello-next-drupal',
    'body' => '<p>Your first article! Drupal stores the content; Next.js fetches it over JSON:API and builds the page.</p>',
  ],
  [
    'title' => 'Why Headless CMS',
    'alias' => '/blog/why-headless-cms',
    'body' => '<p>Decouple your content from presentation. Editors use Drupal; developers use modern front-end tools like Next.js.</p>',
  ],
];

foreach ($articles as $article_data) {
  $existing = \Drupal::entityTypeManager()
    ->getStorage('node')
    ->loadByProperties([
      'type' => 'article',
      'title' => $article_data['title'],
    ]);

  if ($existing) {
    echo "Article already exists: {$article_data['title']}\n";
    continue;
  }

  $node = Node::create([
    'type' => 'article',
    'title' => $article_data['title'],
    'body' => [
      'value' => $article_data['body'],
      'format' => 'basic_html',
    ],
    'status' => 1,
    'path' => ['alias' => $article_data['alias']],
  ]);
  $node->save();
  echo "Created article: {$article_data['title']} ({$article_data['alias']})\n";
}

\Drupal::service('router.builder')->rebuild();
echo "Content setup complete.\n";
