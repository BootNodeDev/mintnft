/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { isAddress } from '@ethersproject/address'
import { BigNumber } from '@ethersproject/bignumber'
import { ContractTransaction } from 'ethers'

import { ButtonPrimary } from '@/src/components/buttons/Button'
import TxButton from '@/src/components/buttons/txButton'
import { Textfield as BaseTextfield } from '@/src/components/form/Textfield'
import { genericSuspense } from '@/src/components/helpers/SafeSuspense'
import { SimpleGrid } from '@/src/components/helpers/SimpleGrid'
import { BaseParagraph } from '@/src/components/text/BaseParagraph'
import { TokenInput as BaseTokenInput } from '@/src/components/token/TokenInput'
import { ZERO_ADDRESS, ZERO_BN } from '@/src/constants/misc'
import { useContractCall } from '@/src/hooks/useContractCall'
import { useContractInstance } from '@/src/hooks/useContractInstance'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'
import { ERC20, ERC20__factory } from '@/types/typechain'

const Grid = styled(SimpleGrid)`
  display: grid;
  row-gap: 25px;

  @media (min-width: ${({ theme }) => theme.breakPoints.tabletLandscapeStart}) {
    align-items: start;
    display: flex;
  }
`

const CSSMaxWidth = css`
  max-width: 300px;
`

const TokenInput = styled(BaseTokenInput)`
  ${CSSMaxWidth}
`

const Textfield = styled(BaseTextfield)`
  ${CSSMaxWidth}
`

const Paragraph = styled(BaseParagraph)`
  font-size: 1.3rem;
  margin: 0;
`

const SendUSDCForm = () => {
  const { address } = useWeb3Connection()
  const [valueToSend, setValueToSend] = useState('0')
  const [addressToSend, setAddressToSend] = useState('')
  const [inputError, setInputError] = useState<boolean>(false)

  const erc20 = useContractInstance(ERC20__factory, 'USDC')

  const calls = [erc20.balanceOf, erc20.decimals] as const
  const [{ data }, refetch] = useContractCall<ERC20, typeof calls>(calls, [
    [address || ZERO_ADDRESS],
    [],
  ])

  const [usdcBalance, usdcDecimals] = data || [ZERO_BN, 18]

  const clearForm = () => {
    setValueToSend('')
    setAddressToSend('')
  }

  const disableSubmit =
    !isAddress(addressToSend) || inputError || BigNumber.from(valueToSend || ZERO_BN).eq(ZERO_BN)

  return (
    <Grid>
      <div>
        <Paragraph>Send</Paragraph>
        <TokenInput
          decimals={usdcDecimals}
          isError={setInputError}
          maxValue={usdcBalance.toString()}
          setValue={setValueToSend}
          symbol="USDC"
          value={valueToSend}
        />
      </div>
      <div>
        <Paragraph>to</Paragraph>
        <Textfield
          onChange={(e) => setAddressToSend(e.target.value)}
          placeholder="ETH address..."
          value={addressToSend}
        />
      </div>
      <TxButton
        disabled={disableSubmit}
        onMined={(r) => {
          refetch()
        }}
        onSend={(tx) => tx && clearForm()}
        tx={() => erc20.transfer(addressToSend, valueToSend)}
      >
        Send
      </TxButton>
    </Grid>
  )
}

export default genericSuspense(SendUSDCForm)
