import { useCallback } from 'react'

import { ContractTransaction } from 'ethers'

import { useTransactionNotification } from '@/src/providers/TransactionNotificationProvider'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'
import { TransactionError } from '@/src/utils/TransactionError'

export type QueryOptions = {
  refetchInterval: number
}

export default function useTransaction() {
  const { isAppConnected } = useWeb3Connection()
  const {
    notifyRejectSignature,
    notifyTxMined,
    notifyWaitingForSignature,
    notifyWaitingForTxMined,
  } = useTransactionNotification()

  const waitForTxExecution = useCallback(
    (tx: ContractTransaction) => {
      notifyWaitingForTxMined(tx.hash)
      tx.wait()
        .then((r) => notifyTxMined(r.transactionHash, true))
        .catch((e) => {
          const error = new TransactionError(
            e.data?.message || e.message || 'Unable to decode revert reason',
            e.data?.code || e.code,
            e.data,
          )

          console.error(error)

          notifyTxMined(tx.hash)
        })
    },
    [notifyTxMined, notifyWaitingForTxMined],
  )

  return useCallback(
    async (methodToCall: () => Promise<ContractTransaction>) => {
      if (!isAppConnected) {
        console.error('App is not connected')
        return null
      }
      try {
        notifyWaitingForSignature()
        const receipt = await methodToCall()
        if (receipt) waitForTxExecution(receipt)
        return receipt
      } catch (e: any) {
        console.error(e)
        const error = new TransactionError(
          e.data?.message || e.message || 'Unable to decode revert reason',
          e.data?.code || e.code,
          e.data,
        )

        notifyRejectSignature(error.code === 4001 ? 'User denied signature' : error.message)

        return null
      }
    },
    [isAppConnected, notifyWaitingForSignature, waitForTxExecution, notifyRejectSignature],
  )
}
