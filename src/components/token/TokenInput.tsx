import { DOMAttributes, HTMLAttributes, useState } from 'react'
import styled from 'styled-components'

import { BigNumberInput } from 'big-number-input'
import { BigNumber } from 'ethers/lib/ethers'
import { formatUnits } from 'ethers/lib/utils'

import { Textfield as BaseTextField, TextfieldState } from '@/src/components/form/Textfield'
import { Error } from '@/src/components/text/Error'

const Wrapper = styled.div`
  width: 100%;
`

const InputWrapper = styled.div`
  margin-bottom: 10px;
  position: relative;
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Textfield: any = styled(BaseTextField)`
  padding-right: 40px;
  position: relative;
  width: 100%;
  z-index: 0;
`

const MaxButton = styled.button`
  background: none;
  border-radius: 3px;
  border: none;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.15s linear;
  z-index: 1;

  &:active {
    opacity: 0.7;
  }
`

const Balance = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
`

interface Props extends DOMAttributes<HTMLDivElement>, HTMLAttributes<HTMLDivElement> {
  decimals: number
  disabled?: boolean
  maxDisabled?: boolean
  maxValue: string
  setValue: (value: string) => void
  isError?: (value: boolean) => void
  symbol?: string
  value: string
}

export const TokenInput = ({
  decimals,
  disabled,
  isError,
  maxDisabled,
  maxValue,
  setValue,
  symbol,
  value,
  ...restProps
}: Props) => {
  const setMax = () => setValue(maxValue)
  const [inputError, setInputError] = useState('')
  const maxValueFormatted = formatUnits(maxValue, decimals)

  return (
    <Wrapper {...restProps}>
      <InputWrapper>
        <BigNumberInput
          decimals={decimals}
          onChange={(value) => {
            setValue(value)
            if (value && BigNumber.from(value).gt(maxValue)) {
              setInputError('Insufficient balance')
              isError && isError(true)
            } else {
              setInputError('')
              isError && isError(false)
            }
          }}
          renderInput={(props) => (
            <Textfield
              disabled={disabled}
              placeholder="0"
              status={inputError ? TextfieldState.error : undefined}
              type="number"
              {...props}
            />
          )}
          value={value}
        />
        <MaxButton disabled={maxDisabled} onClick={setMax}>
          Max
        </MaxButton>
      </InputWrapper>
      <Balance>
        Balance: {maxValueFormatted} {symbol ? symbol : 'tokens'}
      </Balance>
      {inputError && <Error>{inputError}</Error>}
    </Wrapper>
  )
}
