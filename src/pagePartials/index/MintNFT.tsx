import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { isAddress } from '@ethersproject/address'

import TxButton from '@/src/components/buttons/txButton'
import { LabeledRadioButton } from '@/src/components/form/LabeledRadioButton'
import { Textfield as BaseTextfield } from '@/src/components/form/Textfield'
import { genericSuspense } from '@/src/components/helpers/SafeSuspense'
import { SimpleGrid } from '@/src/components/helpers/SimpleGrid'
import { BaseParagraph } from '@/src/components/text/BaseParagraph'
import { useContractInstance } from '@/src/hooks/useContractInstance'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'
import { ERC1155__factory, ERC721__factory } from '@/types/typechain'

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

const Textfield = styled(BaseTextfield)`
  ${CSSMaxWidth}
`

const Paragraph = styled(BaseParagraph)`
  font-size: 1.3rem;
  margin: 0;
`

const MintNFT = () => {
  const { address } = useWeb3Connection()
  const [amount, setAmount] = useState(1)
  const [tokenId, setTokenId] = useState<number>(Math.floor(Math.random() * 10000) + 1)
  const [addressToSend, setAddressToSend] = useState(address as string)
  const [standard, setStandard] = useState<'721' | '1155'>('721')

  const erc721 = useContractInstance(ERC721__factory, 'ERC721')
  const erc1155 = useContractInstance(ERC1155__factory, 'ERC1155')

  const clearForm = () => {
    setAmount(0)
    setTokenId(Math.floor(Math.random() * 10000) + 1)
    setAddressToSend('')
  }

  const disableSubmit = !isAddress(addressToSend)

  const mintAsset = () => {
    if (standard == '721') {
      return erc721.mint(addressToSend, 'https://storage.mint.bullsandapesproject.com/bulls/')
    } else {
      return erc1155.mint(
        addressToSend,
        tokenId,
        amount,
        `https://winterbearsnft.com/api/${tokenId}`,
      )
    }
  }

  return (
    <Grid>
      <div style={{ width: 100 }}>
        <Paragraph>Standard</Paragraph>
        <LabeledRadioButton active={standard == '721'} onClick={() => setStandard('721')}>
          ERC-721
        </LabeledRadioButton>
        <LabeledRadioButton active={standard == '1155'} onClick={() => setStandard('1155')}>
          ERC-1155
        </LabeledRadioButton>
      </div>
      <div>
        <Paragraph>to</Paragraph>
        <Textfield
          onChange={(e) => setAddressToSend(e.target.value)}
          placeholder="address..."
          value={addressToSend}
        />
      </div>
      {standard == '1155' && (
        <div>
          <Paragraph>token id</Paragraph>
          <Textfield
            max={10000}
            min={1}
            onChange={(e) => setTokenId(Number(e.target.value))}
            placeholder="token id"
            step={1}
            type="number"
            value={tokenId}
          />
        </div>
      )}
      {standard == '1155' && (
        <div>
          <Paragraph>amount</Paragraph>
          <Textfield
            min={1}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="amount"
            step={1}
            type="number"
            value={amount}
          />
        </div>
      )}

      <TxButton disabled={disableSubmit} onSend={(tx) => tx && clearForm()} tx={mintAsset}>
        Mint
      </TxButton>
    </Grid>
  )
}

export default genericSuspense(MintNFT)
