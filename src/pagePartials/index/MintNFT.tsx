import React, { useState } from 'react'
import styled from 'styled-components'

import { isAddress } from '@ethersproject/address'

import { TxButton } from '@/src/components/buttons/txButton'
import { BaseCard } from '@/src/components/common/BaseCard'
import { LabeledRadioButton } from '@/src/components/form/LabeledRadioButton'
import { Textfield } from '@/src/components/form/Textfield'
import { genericSuspense } from '@/src/components/helpers/SafeSuspense'
import { BaseParagraph } from '@/src/components/text/BaseParagraph'
import { TokenExternalLink } from '@/src/components/token/TokenExternalLink'
import { useContractInstance } from '@/src/hooks/useContractInstance'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'
import { ERC1155__factory, ERC721__factory } from '@/types/typechain'

const MAX_WIDTH = '550px'

const Form = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 100%;
  min-height: 450px;
  row-gap: 25px;
  width: ${MAX_WIDTH};
`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
`

const Label = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.2;
`

const LabelWithNote = styled(Label)`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`

const UseConnectedAddressButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme: { colors } }) => colors.textColor};
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  &:active {
    opacity: 0.7;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      text-decoration: underline;
    }
  }
`

const FormField2x1Grid = styled(FormField)`
  column-gap: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const StandardWrapper = styled.div`
  display: flex;
  column-gap: 35px;
`

const InlineFlex = styled.div`
  align-items: center;
  display: flex;
  column-gap: 8px;
`

const Paragraph = styled(BaseParagraph)`
  font-size: 1.3rem;
  margin: 0;
`

const MintButton = styled(TxButton)`
  margin-top: auto;
`

const Note = styled(BaseParagraph)`
  font-size: 1.2rem;
  font-style: italic;
  margin: 0 auto;
  max-width: 100%;
  padding-top: 15px;
  width: ${MAX_WIDTH};
`

const MintNFT = () => {
  const maxTokenId = 10000
  const { address } = useWeb3Connection()
  const [amount, setAmount] = useState(1)
  const [isWorking, setIsWorking] = useState(false)
  const [tokenId, setTokenId] = useState<number>(Math.floor(Math.random() * maxTokenId) + 1)
  const [addressToSend, setAddressToSend] = useState(address as string)
  const [standard, setStandard] = useState<'721' | '1155'>('721')

  const erc721 = useContractInstance(ERC721__factory, 'ERC721')
  const erc1155 = useContractInstance(ERC1155__factory, 'ERC1155')

  const clearForm = () => {
    setAmount(1)
    setTokenId(Math.floor(Math.random() * maxTokenId) + 1)
  }

  const NftUrlA = 'bullsandapesproject.com'
  const NftUrlB = 'winterbearsnft.com'

  const disableSubmit =
    !isAddress(addressToSend) ||
    (standard === '1155' && !tokenId) ||
    (standard === '1155' && !amount)

  const mintAsset = () => {
    setIsWorking(true)
    if (standard == '721') {
      return erc721
        .mint(addressToSend, `https://storage.mint.${NftUrlA}/bulls/`)
        .finally(() => setIsWorking(false))
    } else {
      return erc1155
        .mint(addressToSend, tokenId, amount, `https://${NftUrlB}/api/${tokenId}`)
        .finally(() => setIsWorking(false))
    }
  }

  return (
    <>
      <Form>
        <FormField>
          <Label>Standard</Label>
          <StandardWrapper>
            <InlineFlex>
              <LabeledRadioButton
                active={standard == '721'}
                disabled={isWorking}
                onClick={() => setStandard('721')}
              >
                ERC-721
              </LabeledRadioButton>
              <TokenExternalLink address={erc721.address} />
            </InlineFlex>
            <InlineFlex>
              <LabeledRadioButton
                active={standard == '1155'}
                disabled={isWorking}
                onClick={() => setStandard('1155')}
              >
                ERC-1155
              </LabeledRadioButton>
              <TokenExternalLink address={erc1155.address} />
            </InlineFlex>
          </StandardWrapper>
        </FormField>
        <FormField>
          <LabelWithNote>
            <span>To</span>
            <UseConnectedAddressButton
              disabled={addressToSend === (address as string) || isWorking}
              onClick={() => setAddressToSend(address as string)}
            >
              Use connected wallet's address
            </UseConnectedAddressButton>
          </LabelWithNote>
          <Textfield
            disabled={isWorking}
            onChange={(e) => setAddressToSend(e.target.value)}
            placeholder="address..."
            value={addressToSend}
          />
        </FormField>
        {standard === '1155' && (
          <FormField2x1Grid>
            <FormField>
              <Paragraph>Token id (1 to {maxTokenId})</Paragraph>
              <Textfield
                disabled={isWorking}
                max={maxTokenId}
                min={1}
                onChange={(e) => setTokenId(Number(e.target.value))}
                placeholder="token id..."
                step={1}
                type="number"
                value={tokenId}
              />
            </FormField>
            <FormField>
              <Paragraph>Amount (minimum 1)</Paragraph>
              <Textfield
                disabled={isWorking}
                min={1}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="amount..."
                step={1}
                type="number"
                value={amount}
              />
            </FormField>
          </FormField2x1Grid>
        )}
        <MintButton
          disabled={disableSubmit || isWorking}
          onSend={(tx) => tx && clearForm()}
          tx={mintAsset}
        >
          Mint
        </MintButton>
      </Form>
      <Note>
        To check out your newly minted NFTs, connect your wallet to{' '}
        <a href="https://testnets.opensea.io/" rel="noreferrer" target="_blank">
          OpenSea (testnet)
        </a>
        . NFTs minted using{' '}
        <a href={`https://${NftUrlA}/`} rel="noreferrer" target="_blank">
          Bulls & Ape
        </a>
        's and{' '}
        <a href={`https://${NftUrlB}/`} rel="noreferrer" target="_blank">
          Winter Bear
        </a>
        's APIs.
      </Note>
    </>
  )
}

export default genericSuspense(MintNFT)
