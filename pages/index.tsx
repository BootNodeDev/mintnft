import type { NextPage } from 'next'

import { useTranslations } from 'next-intl'

import { BaseTitle } from '@/src/components/text/BaseTitle'
import MintNFT from '@/src/pagePartials/index/MintNFT'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'

const Home: NextPage = () => {
  const { isAppConnected } = useWeb3Connection()
  const t = useTranslations('home')

  return (
    <>
      <BaseTitle>{t('title')}</BaseTitle>
      {isAppConnected && <MintNFT />}
    </>
  )
}

export default Home
