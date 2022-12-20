import styled from 'styled-components'

import { useTranslations } from 'next-intl'

import { ButtonPrimary } from '@/src/components/buttons/Button'
import { Modal } from '@/src/components/common/Modal'
import { chainsConfig } from '@/src/constants/config/chains'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'

const NetworkButtons = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 200px;
  padding: 0 20px;
  row-gap: 20px;
  width: 100%;
`

const NetworkButton = styled(ButtonPrimary)`
  width: 100%;
`

export const ModalSwitchNetwork: React.FC<{ onClose: () => void }> = ({
  onClose,
  ...restProps
}) => {
  const { pushNetwork, setAppChainId } = useWeb3Connection()
  const chainOptions = Object.values(chainsConfig)
  const t = useTranslations('modalSwitchNetwork')

  return (
    <Modal onClose={onClose} size="sm" title={t('title')} {...restProps}>
      <NetworkButtons>
        {chainOptions.map((item, index) => (
          <NetworkButton
            key={index}
            onClick={() => {
              setAppChainId(item.chainId)
              pushNetwork({ chainId: item.chainIdHex })
              onClose()
            }}
          >
            {item.name}
          </NetworkButton>
        ))}
      </NetworkButtons>
    </Modal>
  )
}
