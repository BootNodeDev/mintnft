import { useState } from 'react'
import styled, { css } from 'styled-components'

import { BaseCard } from '@/src/components/common/BaseCard'
import { LabeledCheckbox } from '@/src/components/form/LabeledCheckbox'
import { LabeledRadioButton } from '@/src/components/form/LabeledRadioButton'
import { Textfield } from '@/src/components/form/Textfield'
import { BaseParagraph } from '@/src/components/text/BaseParagraph'

const Wrapper = styled(BaseCard)`
  max-width: 100%;
`

const Row = styled.div`
  margin: 0 0 30px;

  &:last-child {
    margin-bottom: 0;
  }
`

const RadioButtonAndCheckBoxCSS = css`
  margin: 0 0 10px;

  &:last-child {
    margin-bottom: 0;
  }
`

const RadioButton = styled(LabeledRadioButton)`
  ${RadioButtonAndCheckBoxCSS}
`

const CheckBox = styled(LabeledCheckbox)`
  ${RadioButtonAndCheckBoxCSS}
`

export const Sidebar: React.FC = ({ ...restProps }) => {
  const [radioButton, setRadioButton] = useState<'one' | 'two' | 'three' | undefined>()
  const [checkbox, setCheckbox] = useState<'one' | 'two' | undefined>()

  return (
    <Wrapper {...restProps}>
      <Row>
        <BaseParagraph>Add something here:</BaseParagraph>
        <Textfield placeholder="Come on..." />
      </Row>
      <Row>
        <BaseParagraph>Radio Buttons!</BaseParagraph>
        <RadioButton active={radioButton === 'one'} onClick={() => setRadioButton('one')}>
          One
        </RadioButton>
        <RadioButton active={radioButton === 'two'} onClick={() => setRadioButton('two')}>
          Two
        </RadioButton>
        <RadioButton active={radioButton === 'three'} onClick={() => setRadioButton('three')}>
          Three
        </RadioButton>
      </Row>
      <Row>
        <BaseParagraph>Checkboxes!</BaseParagraph>
        <CheckBox active={checkbox === 'one'} onClick={() => setCheckbox('one')}>
          One
        </CheckBox>
        <CheckBox active={checkbox === 'two'} onClick={() => setCheckbox('two')}>
          Two
        </CheckBox>
      </Row>
    </Wrapper>
  )
}
