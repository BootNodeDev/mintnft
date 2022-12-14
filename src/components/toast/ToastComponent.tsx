import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Toast, toast } from 'react-hot-toast'

import { Close } from '@/src/components/assets/Close'

const Wrapper = styled.div`
  --toast-icon-dimensions: 36px;
  --toast-padding: 15px;

  background-color: ${({ theme: { toast } }) => toast.backgroundColor};
  border-color: ${({ theme: { toast } }) => toast.borderColor};
  border-radius: ${({ theme: { common } }) => common.borderRadius};
  border-style: solid;
  border-width: 1px;
  box-shadow: ${({ theme: { toast } }) => toast.boxShadow};
  column-gap: 10px;
  display: grid;
  grid-template-columns: var(--toast-icon-dimensions) 1fr;
  max-width: 100vw;
  padding: var(--toast-padding);
  position: relative;
  width: 250px;
`

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: var(--toast-icon-dimensions);
  justify-content: center;
`

const TextContainer = styled.div`
  word-break: break-word;
`

const Title = styled.h4`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
`

const TextCSS = css`
  color: ${({ theme: { colors } }) => colors.textColor};
  font-size: 1.2rem;
`

const Text = styled.p`
  ${TextCSS}
  margin: 0 0 10px;

  &:last-child {
    margin-bottom: 0;
  }
`

const Link = styled.a`
  ${TextCSS}
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

const ButtonClose = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  margin: 0;
  outline: none;
  padding: 0;
  position: absolute;
  right: calc(var(--toast-padding) - 5px);
  top: calc(var(--toast-padding) - 5px);
  z-index: 5;
`

export const ToastComponent = ({
  icon,
  link,
  message,
  t,
  title,
}: {
  icon: ReactNode
  link?: {
    url: string
    text: string
  }
  message?: string
  t: Toast
  title: string
}) => (
  <Wrapper>
    <IconContainer>{icon}</IconContainer>
    <TextContainer>
      <Title>{title}</Title>
      {message && <Text>{message}</Text>}
      {link && (
        <Link href={link.url} rel="noreferrer" target="_blank">
          {link.text}
        </Link>
      )}
    </TextContainer>
    <ButtonClose onClick={() => toast.remove(t.id)}>
      <Close />
    </ButtonClose>
  </Wrapper>
)
