import styled, { css } from 'styled-components'

export const RadioButton = styled.div<{ active?: boolean; disabled?: boolean }>`
  background-color: ${({ active, theme: { radioButton } }) =>
    active ? radioButton.backgroundColorActive : radioButton.backgroundColor};
  border-color: ${({ theme: { radioButton } }) => radioButton.borderColor};
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${({ theme: { radioButton } }) => radioButton.dimensions};
  transition: all 0.15s linear;
  width: ${({ theme: { radioButton } }) => radioButton.dimensions};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`
