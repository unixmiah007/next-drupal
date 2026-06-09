export interface CommerceFeature {
  id: string
  title: string
  description: string
  icon: "products" | "cart" | "checkout" | "orders" | "payments" | "promotions"
}

export interface CommerceEntity {
  name: string
  endpoint: string
  description: string
}

export interface CommerceFlowStep {
  step: number
  title: string
  drupal: string
  nextjs: string
}

export const commerceFeatures: CommerceFeature[] = [
  {
    id: "products",
    title: "Product catalog",
    description:
      "Manage products, variations, attributes, and categories in Drupal. Expose them as JSON:API resources for your Next.js storefront.",
    icon: "products",
  },
  {
    id: "cart",
    title: "Shopping cart",
    description:
      "Cart sessions stored in Drupal Commerce. Next.js UI adds items, updates quantities, and displays totals via API calls.",
    icon: "cart",
  },
  {
    id: "checkout",
    title: "Headless checkout",
    description:
      "Multi-step checkout flows rendered in Next.js — shipping, billing, and payment collection with Drupal handling order creation.",
    icon: "checkout",
  },
  {
    id: "orders",
    title: "Order management",
    description:
      "Orders, fulfillments, and invoices live in Drupal admin. Editors and support teams manage everything from one backend.",
    icon: "orders",
  },
  {
    id: "payments",
    title: "Payment gateways",
    description:
      "Stripe, PayPal, and other gateways integrate through Drupal Commerce Payment modules — Next.js never touches card data.",
    icon: "payments",
  },
  {
    id: "promotions",
    title: "Promotions & pricing",
    description:
      "Coupons, discounts, and dynamic pricing rules configured in Drupal and applied automatically at checkout.",
    icon: "promotions",
  },
]

export const commerceEntities: CommerceEntity[] = [
  {
    name: "Product",
    endpoint: "/jsonapi/commerce_product/default",
    description: "Product listings with title, body, images, and variations",
  },
  {
    name: "Variation",
    endpoint: "/jsonapi/commerce_product_variation/default",
    description: "SKU, price, stock, and attribute combinations",
  },
  {
    name: "Order",
    endpoint: "/jsonapi/commerce_order/default",
    description: "Cart and completed orders with line items",
  },
  {
    name: "Store",
    endpoint: "/jsonapi/commerce_store/online",
    description: "Store configuration, currency, and default settings",
  },
]

export const commerceFlow: CommerceFlowStep[] = [
  {
    step: 1,
    title: "Browse products",
    drupal: "Products & variations stored as Commerce entities in MariaDB",
    nextjs: "Product grid and detail pages fetched via JSON:API",
  },
  {
    step: 2,
    title: "Add to cart",
    drupal: "Cart order entity created/updated with line items",
    nextjs: "Cart UI calls Commerce Cart API or JSON:API PATCH",
  },
  {
    step: 3,
    title: "Checkout",
    drupal: "Checkout flow collects shipping, billing, and payment info",
    nextjs: "Multi-step checkout form rendered in React components",
  },
  {
    step: 4,
    title: "Payment",
    drupal: "Payment gateway processes transaction, order marked complete",
    nextjs: "Redirects to confirmation page with order summary",
  },
  {
    step: 5,
    title: "Fulfillment",
    drupal: "Admin manages order status, shipping, and notifications",
    nextjs: "Customer order history page pulls from JSON:API",
  },
]

export const commerceBenefits = [
  {
    title: "Single source of truth",
    description: "Products, content, and orders all live in Drupal — no sync between separate systems.",
  },
  {
    title: "Editor-friendly",
    description: "Marketing pages and product catalog managed in the same Drupal admin your team already knows.",
  },
  {
    title: "Modern storefront",
    description: "Next.js delivers fast product pages, instant cart updates, and optimized checkout UX.",
  },
  {
    title: "Type-safe commerce",
    description: "TypeScript interfaces for Product, Variation, and Order entities from JSON:API responses.",
  },
]
