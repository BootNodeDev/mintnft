import styled from 'styled-components'

import { Link } from '@/src/components/assets/Link'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'

const Wrapper = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    .fill {
      fill: ${({ theme: { colors } }) => colors.secondary};
    }
  }
`

export const TokenExternalLink: React.FC<{ address?: string }> = ({ address, ...restProps }) => {
  const { getExplorerUrl } = useWeb3Connection()

  return address ? (
    <Wrapper href={getExplorerUrl(address)} target="_blank" {...restProps}>
      <Link />
    </Wrapper>
  ) : null
}
