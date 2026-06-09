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

// Wrap getResourceCollectionPathSegments to prevent build failures when
// the Drupal backend is unavailable (e.g. race condition on first deploy).
const _getResourceCollectionPathSegments =
  drupal.getResourceCollectionPathSegments.bind(drupal)
drupal.getResourceCollectionPathSegments = async function (
  ...args: Parameters<typeof _getResourceCollectionPathSegments>
) {
  try {
    return await _getResourceCollectionPathSegments(...args)
  } catch (error) {
    console.error(
      "Failed to fetch resource path segments from Drupal:",
      error
    )
    // Return empty array so the build succeeds — pages render on-demand
    return []
  }
}
