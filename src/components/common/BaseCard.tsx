import styled from 'styled-components'

export const BaseCard = styled.div`
  background-color: ${({ theme: { card } }) => card.backgroundColor};
  border-radius: ${({ theme: { card } }) => card.borderRadius};
  border: 2px solid ${({ theme: { card } }) => card.borderColor};
  padding: ${({ theme: { card } }) => card.padding};
  width: 100%;
`
