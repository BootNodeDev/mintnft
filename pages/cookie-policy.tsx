import type { NextPage } from 'next'

import { useTranslations } from 'next-intl'

import { BaseParagraph } from '@/src/components/text/BaseParagraph'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { Code } from '@/src/components/text/Code'

const About: NextPage = () => {
  const t = useTranslations('cookiePolicy')

  return (
    <>
      <BaseTitle>{t('title')}</BaseTitle>
      <BaseParagraph>
        {t('mainMessage')} <Code>pages/cookie-policy.tsx</Code>
      </BaseParagraph>
    </>
  )
}

export default About
