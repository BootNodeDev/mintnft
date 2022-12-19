import React, { ButtonHTMLAttributes, useCallback } from 'react'

import { ContractReceipt, ContractTransaction } from '@ethersproject/contracts'

import { ButtonPrimary } from '@/src/components/buttons/Button'
import useTransaction from '@/src/hooks/useTransaction'

interface TxButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onMined?: (r: ContractReceipt) => void
  onSend?: (t: ContractTransaction) => void
  onFail?: () => void
  tx: () => Promise<ContractTransaction>
}

export const TxButton: React.FC<TxButtonProps> = ({
  children,
  onFail,
  onMined,
  onSend,
  tx,
  ...restProps
}) => {
  const sendTx = useTransaction()

  const txHandler = useCallback(async () => {
    try {
      const transaction = await sendTx(tx)
      if (transaction && onSend) {
        onSend(transaction)
        const receipt = await transaction.wait()
        onMined && onMined(receipt)
      }
    } catch (error) {
      onFail && onFail()
    }
  }, [onFail, onMined, onSend, sendTx, tx])

  return (
    <ButtonPrimary onClick={txHandler} {...restProps}>
      {children}
    </ButtonPrimary>
  )
}

export default TxButton
