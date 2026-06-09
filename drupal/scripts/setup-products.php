<?php

/**
 * @file
 * Create Product content type and seed Artisan Market products.
 */

use Drupal\field\Entity\FieldConfig;
use Drupal\field\Entity\FieldStorageConfig;
use Drupal\node\Entity\Node;
use Drupal\node\Entity\NodeType;

function setup_product_field(string $field_name, string $type, string $label): void {
  if (!FieldStorageConfig::loadByName('node', $field_name)) {
    FieldStorageConfig::create([
      'field_name' => $field_name,
      'entity_type' => 'node',
      'type' => $type,
      'cardinality' => 1,
    ])->save();
  }

  if (!FieldConfig::loadByName('node', 'product', $field_name)) {
    FieldConfig::create([
      'field_storage' => FieldStorageConfig::loadByName('node', $field_name),
      'bundle' => 'product',
      'label' => $label,
    ])->save();
  }
}

// Create Product content type.
if (!NodeType::load('product')) {
  NodeType::create([
    'type' => 'product',
    'name' => 'Product',
    'description' => 'Artisan Market product for headless ecommerce demo.',
  ])->save();

  FieldConfig::create([
    'field_storage' => FieldStorageConfig::loadByName('node', 'body'),
    'bundle' => 'product',
    'label' => 'Body',
    'settings' => [
      'display_summary' => TRUE,
      'required_summary' => FALSE,
    ],
  ])->save();

  setup_product_field('field_price', 'decimal', 'Price');
  setup_product_field('field_category', 'string', 'Category');
  setup_product_field('field_maker', 'string', 'Maker');
  setup_product_field('field_emoji', 'string', 'Emoji');
  setup_product_field('field_gradient', 'string', 'Gradient class');

  $display_repository = \Drupal::service('entity_display.repository');

  $display_repository->getFormDisplay('node', 'product', 'default')
    ->setComponent('body', [
      'type' => 'text_textarea_with_summary',
      'weight' => 1,
    ])
    ->setComponent('field_price', ['type' => 'number', 'weight' => 2])
    ->setComponent('field_category', ['type' => 'string_textfield', 'weight' => 3])
    ->setComponent('field_maker', ['type' => 'string_textfield', 'weight' => 4])
    ->setComponent('field_emoji', ['type' => 'string_textfield', 'weight' => 5])
    ->setComponent('field_gradient', ['type' => 'string_textfield', 'weight' => 6])
    ->save();

  $display_repository->getViewDisplay('node', 'product', 'default')
    ->setComponent('body', ['type' => 'text_default', 'label' => 'hidden', 'weight' => 1])
    ->setComponent('field_price', ['type' => 'number_decimal', 'label' => 'above', 'weight' => 2])
    ->setComponent('field_category', ['type' => 'string', 'label' => 'above', 'weight' => 3])
    ->setComponent('field_maker', ['type' => 'string', 'label' => 'above', 'weight' => 4])
    ->setComponent('field_emoji', ['type' => 'string', 'label' => 'hidden', 'weight' => 5])
    ->setComponent('field_gradient', ['type' => 'string', 'label' => 'hidden', 'weight' => 6])
    ->save();

  echo "Created Product content type.\n";
}

$products = [
  ['title' => 'Hand-Thrown Ceramic Mug', 'slug' => 'hand-thrown-ceramic-mug', 'summary' => 'Stoneware mug with a speckled glaze, perfect for morning coffee.', 'body' => '<p>Each mug is thrown on the wheel and fired in a small-batch kiln. The speckled ash glaze pools beautifully at the base. Microwave and dishwasher safe. Holds 12 oz.</p>', 'price' => '24.00', 'category' => 'Ceramics', 'maker' => 'Clay & Co.', 'emoji' => '☕', 'gradient' => 'from-stone-300 to-amber-200'],
  ['title' => 'Linen Market Tote', 'slug' => 'linen-market-tote', 'summary' => 'Natural linen tote with leather handles and interior pocket.', 'body' => '<p>Woven from European flax and washed for softness. Reinforced leather handles age gracefully. Fits a laptop and farmers market haul with room to spare.</p>', 'price' => '38.00', 'category' => 'Textiles', 'maker' => 'Thread & Field', 'emoji' => '👜', 'gradient' => 'from-amber-100 to-orange-200'],
  ['title' => 'Oak Cutting Board', 'slug' => 'oak-cutting-board', 'summary' => 'End-grain white oak board with juice groove and rubber feet.', 'body' => '<p>Sourced from sustainably harvested white oak. End-grain construction is gentle on knife edges. Finished with food-safe mineral oil and beeswax.</p>', 'price' => '56.00', 'category' => 'Woodwork', 'maker' => 'Hearth Woodworks', 'emoji' => '🪵', 'gradient' => 'from-amber-200 to-yellow-100'],
  ['title' => 'Merino Wool Throw', 'slug' => 'merino-wool-throw', 'summary' => 'Soft merino throw in a herringbone weave, undyed natural grey.', 'body' => '<p>Spun from ethically sourced merino wool. Lightweight enough for year-round use, warm enough for winter evenings. 50" × 60" with fringed edges.</p>', 'price' => '89.00', 'category' => 'Textiles', 'maker' => 'Loom House', 'emoji' => '🧶', 'gradient' => 'from-slate-200 to-stone-300'],
  ['title' => 'Beeswax Pillar Candles', 'slug' => 'beeswax-pillar-candles', 'summary' => 'Set of three hand-dipped beeswax pillars with cotton wicks.', 'body' => '<p>Pure local beeswax with a natural honey scent. Burn time approximately 40 hours per candle. No paraffin, no synthetic fragrance.</p>', 'price' => '32.00', 'category' => 'Candles', 'maker' => 'Hive & Wick', 'emoji' => '🕯️', 'gradient' => 'from-yellow-200 to-amber-300'],
  ['title' => 'Hammered Copper Bowl', 'slug' => 'hammered-copper-bowl', 'summary' => 'Small decorative bowl with hand-hammered texture.', 'body' => '<p>Formed from a single sheet of recycled copper. Each hammer mark is unique. Beautiful as a fruit bowl, catch-all, or centerpiece.</p>', 'price' => '45.00', 'category' => 'Metalwork', 'maker' => 'Forge & Flame', 'emoji' => '🥣', 'gradient' => 'from-orange-300 to-amber-400'],
  ['title' => 'Lavender Botanical Soap', 'slug' => 'lavender-botanical-soap', 'summary' => 'Cold-process soap with dried lavender and shea butter.', 'body' => '<p>Hand-cut bars cured for six weeks. Scented with essential oils and topped with organic lavender buds. Gentle enough for daily use.</p>', 'price' => '12.00', 'category' => 'Pantry', 'maker' => 'Meadow & Still', 'emoji' => '🧼', 'gradient' => 'from-purple-200 to-violet-100'],
  ['title' => 'Terracotta Planter Set', 'slug' => 'terracotta-planter-set', 'summary' => 'Set of three nested terracotta planters with drainage holes.', 'body' => '<p>Thrown from red clay and bisque-fired for breathability. Ideal for succulents and herbs. Includes matching saucers.</p>', 'price' => '34.00', 'category' => 'Ceramics', 'maker' => 'Clay & Co.', 'emoji' => '🪴', 'gradient' => 'from-orange-200 to-red-200'],
  ['title' => 'Brass Candle Holders', 'slug' => 'brass-candle-holders', 'summary' => 'Pair of tapered brass holders with a brushed satin finish.', 'body' => '<p>Cast in small batches and hand-polished. Fits standard taper candles. Develops a rich patina over time.</p>', 'price' => '42.00', 'category' => 'Metalwork', 'maker' => 'Forge & Flame', 'emoji' => '✨', 'gradient' => 'from-yellow-300 to-amber-200'],
  ['title' => 'Wildflower Raw Honey', 'slug' => 'raw-honey-jar', 'summary' => '16 oz jar of unfiltered wildflower honey from local apiaries.', 'body' => '<p>Harvested seasonally and never heated above hive temperature. Floral notes vary by season. Perfect on toast, in tea, or by the spoonful.</p>', 'price' => '18.00', 'category' => 'Pantry', 'maker' => 'Hive & Wick', 'emoji' => '🍯', 'gradient' => 'from-amber-300 to-yellow-200'],
  ['title' => 'Block-Print Table Runner', 'slug' => 'block-print-table-runner', 'summary' => 'Cotton runner with indigo block-print pattern, 72 inches.', 'body' => '<p>Each runner is block-printed by hand using traditional techniques. Slight variations in pattern make every piece one of a kind.</p>', 'price' => '48.00', 'category' => 'Textiles', 'maker' => 'Thread & Field', 'emoji' => '🎨', 'gradient' => 'from-indigo-200 to-blue-100'],
  ['title' => 'Walnut Serving Board', 'slug' => 'walnut-serving-board', 'summary' => 'Live-edge walnut board for cheese and charcuterie.', 'body' => '<p>Single slab of American black walnut with natural live edge preserved. Includes pre-drilled hole for hanging display.</p>', 'price' => '72.00', 'category' => 'Woodwork', 'maker' => 'Hearth Woodworks', 'emoji' => '🧀', 'gradient' => 'from-amber-800/30 to-amber-600/20'],
  ['title' => 'Sea Salt Caramels', 'slug' => 'sea-salt-caramels', 'summary' => 'Box of twelve handmade caramels with flaky sea salt.', 'body' => '<p>Small-batch caramels cooked in copper kettles. Wrapped in wax paper and packed in a recyclable gift box.</p>', 'price' => '16.00', 'category' => 'Pantry', 'maker' => 'Meadow & Still', 'emoji' => '🍬', 'gradient' => 'from-rose-200 to-amber-200'],
  ['title' => 'Stoneware Dinner Plates', 'slug' => 'stoneware-dinner-plates', 'summary' => 'Set of four dinner plates in a matte sage glaze.', 'body' => '<p>Durable stoneware for everyday dining. Stackable with a slightly raised rim. Dishwasher and microwave safe.</p>', 'price' => '64.00', 'category' => 'Ceramics', 'maker' => 'Clay & Co.', 'emoji' => '🍽️', 'gradient' => 'from-emerald-200 to-teal-100'],
  ['title' => 'Leather-Bound Journal', 'slug' => 'leather-journal', 'summary' => 'Refillable journal with vegetable-tanned leather cover.', 'body' => '<p>Hand-stitched binding with 192 pages of acid-free paper. Leather develops character with use. A5 size fits most bags.</p>', 'price' => '36.00', 'category' => 'Leather', 'maker' => 'Atelier North', 'emoji' => '📓', 'gradient' => 'from-amber-700/30 to-orange-300/40'],
  ['title' => 'Eucalyptus Body Oil', 'slug' => 'eucalyptus-body-oil', 'summary' => 'Nourishing body oil with eucalyptus, jojoba, and vitamin E.', 'body' => '<p>Blended in small batches with cold-pressed oils. Absorbs quickly without greasiness. Glass bottle with pump dispenser.</p>', 'price' => '28.00', 'category' => 'Pantry', 'maker' => 'Meadow & Still', 'emoji' => '🌿', 'gradient' => 'from-green-200 to-emerald-100'],
];

foreach ($products as $product_data) {
  $existing = \Drupal::entityTypeManager()
    ->getStorage('node')
    ->loadByProperties([
      'type' => 'product',
      'title' => $product_data['title'],
    ]);

  if ($existing) {
    echo "Product already exists: {$product_data['title']}\n";
    continue;
  }

  $node = Node::create([
    'type' => 'product',
    'title' => $product_data['title'],
    'body' => [
      'value' => $product_data['body'],
      'summary' => $product_data['summary'],
      'format' => 'basic_html',
    ],
    'field_price' => $product_data['price'],
    'field_category' => $product_data['category'],
    'field_maker' => $product_data['maker'],
    'field_emoji' => $product_data['emoji'],
    'field_gradient' => $product_data['gradient'],
    'status' => 1,
    'path' => [
      'alias' => '/demo/artisan-market/products/' . $product_data['slug'],
    ],
  ]);
  $node->save();
  echo "Created product: {$product_data['title']} ({$product_data['slug']})\n";
}

$user_role = \Drupal\user\Entity\Role::load('anonymous');
if ($user_role && !$user_role->hasPermission('access content')) {
  $user_role->grantPermission('access content')->save();
}

\Drupal::service('router.builder')->rebuild();
echo "Product setup complete.\n";
