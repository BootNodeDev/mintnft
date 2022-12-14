/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ReactElement, useState } from 'react'
import styled from 'styled-components'

import { useTranslations } from 'next-intl'

import type { NextPageWithLayout } from '@/pages/_app'
import { ButtonPrimary } from '@/src/components/buttons/Button'
import { BaseCard } from '@/src/components/common/BaseCard'
import { Modal, ModalText } from '@/src/components/common/Modal'
import { SimpleGrid } from '@/src/components/helpers/SimpleGrid'
import { SidebarLayout } from '@/src/components/layout/SidebarLayout'
import { InlineLoading } from '@/src/components/loading/InlineLoading'
import { Loading } from '@/src/components/loading/Loading'
import { BaseParagraph } from '@/src/components/text/BaseParagraph'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import TokenDropdown from '@/src/components/token/TokenDropdown'
import { TokenExternalLink } from '@/src/components/token/TokenExternalLink'
import { Token } from '@/src/constants/token'
import { RequiredConnection } from '@/src/hooks/requiredConnection'
import SendUSDCForm from '@/src/pagePartials/example/SendUSDCForm'

const Card = styled(BaseCard)`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`

const TokenIconsContextProvider = dynamic(() => import('@/src/providers/tokenIconsProvider'), {
  ssr: false,
})

const TokenDropdownContainer = () => {
  const [token, setToken] = useState<Token | null>(null)

  return (
    <>
      <TokenDropdown onChange={setToken} />
      <TokenExternalLink address={token?.address} />
    </>
  )
}

export type QueryOptions = {
  refetchInterval: number
}

const LeftSidebarLayout: NextPageWithLayout = () => {
  const t = useTranslations('components')
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <BaseTitle>Alternative Layout</BaseTitle>
      <Card>
        <BaseParagraph>
          There should be a sidebar / menu on the left now (or at the bottom if you're looking at
          this on a mobile device). Change everything you want there.
        </BaseParagraph>
        <BaseParagraph>
          Going to{' '}
          <Link href="/right-sidebar-layout" passHref>
            Alternative Layout 2
          </Link>{' '}
          should only change the page's contents, but the sidebar / menu should remain unaltered.
        </BaseParagraph>
      </Card>
      <BaseTitle>{t('title')}</BaseTitle>
      <Card>
        <BaseParagraph>Token Icon:</BaseParagraph>
        <SimpleGrid>
          <TokenIconsContextProvider>
            <TokenDropdownContainer />
          </TokenIconsContextProvider>
        </SimpleGrid>
        <hr />
        <BaseParagraph>Token Input:</BaseParagraph>
        <RequiredConnection>
          <SendUSDCForm />
        </RequiredConnection>
        <hr />
        <BaseParagraph>Loading / spinner:</BaseParagraph>
        <SimpleGrid>
          <Loading style={{ margin: 0 }} text="Loading stuff..." />
        </SimpleGrid>
        <hr />
        <BaseParagraph>Inline loading:</BaseParagraph>
        <SimpleGrid>
          <InlineLoading text="Inline-ly loading more stuff..." />
        </SimpleGrid>
        <hr />
        <BaseParagraph>Modal:</BaseParagraph>
        <SimpleGrid>
          <ButtonPrimary onClick={() => setShowModal(true)}>Click to see a modal</ButtonPrimary>
          {showModal && (
            <Modal onClose={() => setShowModal(false)} title="I'm a beautiful modal!">
              <ModalText>
                <img
                  alt="Dance!"
                  src="https://media.giphy.com/media/S78kszeHfIrjTc44Hf/giphy.gif"
                />
              </ModalText>
              <ModalText>You should be dancing and you know it!</ModalText>
            </Modal>
          )}
        </SimpleGrid>
      </Card>
    </>
  )
}

LeftSidebarLayout.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>
}

export default LeftSidebarLayout
