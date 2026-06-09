import { ProductCard } from "@/components/artisan-market/ProductCard"
import { Link } from "@/components/navigation/Link"
import {
  getArtisanProducts,
  getCategoriesFromProducts,
} from "@/lib/artisan-market/drupal"
import { shuffleProducts } from "@/lib/artisan-market/products"

export default async function ArtisanMarketPage() {
  const products = await getArtisanProducts()
  const featured = shuffleProducts(products).slice(0, 8)
  const categories = getCategoriesFromProducts(products)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-800 via-amber-900 to-orange-950 text-amber-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-200">
            Handcrafted · Small-batch · Powered by Drupal
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Goods made with care, sold with soul
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-amber-100/80">
            Discover ceramics, textiles, woodwork, and pantry staples from
            artisans who put craft before scale. Products are managed in Drupal
            and rendered by Next.js.
          </p>
          <Link
            href="#products"
            className="mt-8 inline-flex rounded-xl bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-900 no-underline shadow-lg transition hover:bg-white"
          >
            Shop the collection
          </Link>
        </div>
      </section>

      <section className="border-b border-amber-200/60 bg-[#f5f0e8] py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6">
          <span className="text-sm font-semibold text-amber-900/60">Browse:</span>
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#cat-${cat.toLowerCase()}`}
              className="rounded-full border border-amber-300/60 bg-white px-4 py-1.5 text-sm font-medium text-amber-800 no-underline transition hover:border-amber-400 hover:bg-amber-50"
            >
              {cat}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-black text-amber-950">Featured today</h2>
        <p className="mt-2 text-amber-900/60">
          A fresh selection of artisan goods — changes every visit.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="products" className="border-t border-amber-200/60 bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-amber-950">Full catalog</h2>
              <p className="mt-2 text-amber-900/60">
                {products.length} handcrafted products from independent makers.
              </p>
            </div>
            <p className="text-sm text-amber-800/50">
              Manage products in{" "}
              <a
                href="http://127.0.0.1:65204/admin/content"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-700 underline"
              >
                Drupal admin
              </a>
            </p>
          </div>

          {categories.map((category) => {
            const categoryProducts = products.filter(
              (p) => p.category === category
            )
            return (
              <div
                key={category}
                id={`cat-${category.toLowerCase()}`}
                className="mt-12 scroll-mt-24"
              >
                <h3 className="mb-6 text-lg font-bold text-amber-800">
                  {category}
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
