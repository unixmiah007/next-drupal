import { NextDrupal } from "next-drupal"

const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL as string
const clientId = process.env.DRUPAL_CLIENT_ID as string
const clientSecret = process.env.DRUPAL_CLIENT_SECRET as string

export const drupal = new NextDrupal(baseUrl, {
  // Enable to use authentication
  // auth: {
  //   clientId,
  //   clientSecret,
  // },
  // withAuth: true,
  // debug: true,
})

// Patch getResourceCollectionPathSegments on the drupal instance so that
// generateStaticParams() in [...slug]/page.tsx never crashes the build when
// Drupal is unavailable (e.g. race condition on first deploy). Returning an
// empty array tells Next.js to skip pre-rendering those paths and serve them
// on-demand instead.
const _orig = drupal.getResourceCollectionPathSegments.bind(drupal)
drupal.getResourceCollectionPathSegments = async function (
  ...args: Parameters<typeof _orig>
) {
  try {
    return await _orig(...args)
  } catch (error) {
    console.error(
      "Failed to fetch resource path segments from Drupal:",
      error
    )
    // Return empty array so the build succeeds — pages render on-demand
    return []
  }
}
