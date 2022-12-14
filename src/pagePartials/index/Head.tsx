import NextHead from 'next/head'

import { useTranslations } from 'next-intl'

export const Head = () => {
  const t = useTranslations('meta')
  const { hostname, port, protocol } =
    typeof window !== 'undefined'
      ? window.location
      : { hostname: 'localhost', port: 3000, protocol: 'http:' }
  const portString = port ? `:${port}` : ''
  const siteURL = typeof window !== 'undefined' ? `${protocol}//${hostname}${portString}` : ''
  const title = t('title')
  const description = t('description')
  const twitterHandle = '@'

  return (
    <NextHead>
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={title} property="og:title" />
      <meta content={siteURL} property="og:url" />
      <meta content={`${siteURL}/shareable/ogImage.jpg`} property="og:image" />
      <meta content="website" property="og:type" />
      <meta content={description} property="og:description" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={title} name="twitter:site" />
      <meta content={twitterHandle} name="twitter:creator" />
    </NextHead>
  )
}
