import Link from 'next/link'
import { ReactElement } from 'react'
import styled from 'styled-components'

import { useTranslations } from 'next-intl'

import type { NextPageWithLayout } from '@/pages/_app'
import { BaseCard } from '@/src/components/common/BaseCard'
import { SidebarLayout } from '@/src/components/layout/SidebarLayout'
import { BaseParagraph } from '@/src/components/text/BaseParagraph'
import { BaseTitle } from '@/src/components/text/BaseTitle'

const Card = styled(BaseCard)`
  min-height: 300px;
`

const LeftSidebarLayout2: NextPageWithLayout = () => {
  const t = useTranslations('rightSidebarLayout')

  return (
    <>
      <BaseTitle>{t('title')}</BaseTitle>
      <Card>
        <BaseParagraph>{t('mainMessage')}</BaseParagraph>
        <BaseParagraph>
          <Link href="/examples">{t('link')}</Link>
        </BaseParagraph>
      </Card>
    </>
  )
}

LeftSidebarLayout2.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout sidebarPlacement="right">{page}</SidebarLayout>
}

export default LeftSidebarLayout2
