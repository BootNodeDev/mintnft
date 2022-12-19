import Link from 'next/link'
import styled from 'styled-components'

import { Logo as BaseLogoSVG } from '@/src/components/assets/Logo'

const HomeLink = styled.a`
  transition: opacity 0.05s linear;

  &:active {
    opacity: 0.7;
  }
`

const LogoSVG = styled(BaseLogoSVG)`
  cursor: pointer;
  width: 40px;
`

export const Logo: React.FC = (props) => (
  <Link href="/" passHref title="Mint NFTs">
    <HomeLink {...props}>
      <LogoSVG />
    </HomeLink>
  </Link>
)
