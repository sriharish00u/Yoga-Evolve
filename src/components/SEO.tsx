import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  path: string
  ogImage?: string
  keywords?: string
  jsonld?: Record<string, unknown>
}

const SITE_NAME = 'Yoga Evolve'
const SITE_URL = 'https://yogaevolve.app'
const DEFAULT_OG_IMAGE = '/logo3.jpg'

export default function SEO({ title, description, path, ogImage, keywords, jsonld }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path}`
  const image = ogImage ?? DEFAULT_OG_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonld && (
        <script type="application/ld+json">{JSON.stringify(jsonld)}</script>
      )}
    </Helmet>
  )
}
