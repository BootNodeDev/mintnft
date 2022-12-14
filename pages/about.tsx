import type { NextPage } from 'next'
import styled from 'styled-components'

import { useTranslations } from 'next-intl'

import { BaseCard } from '@/src/components/common/BaseCard'
import { BaseParagraph } from '@/src/components/text/BaseParagraph'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { Code } from '@/src/components/text/Code'

const Card = styled(BaseCard)`
  min-height: 300px;
`

const About: NextPage = () => {
  const t = useTranslations('about')

  return (
    <>
      <BaseTitle>{t('title')}</BaseTitle>
      <Card>
        <BaseParagraph>
          {t('mainMessage')} <Code>pages/about.tsx</Code>
        </BaseParagraph>
      </Card>
    </>
  )
}

export default About
