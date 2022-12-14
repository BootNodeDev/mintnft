import { createContext, useContext } from 'react'

import useSWR from 'swr'

import { genericSuspense } from '@/src/components/helpers/SafeSuspense'
import { Token, TokenListResponse } from '@/src/constants/token'

type TokenListQueryReturn = {
  tokens: Token[]
  tokensByAddress: { [address: string]: Token | undefined }
  tokensBySymbol: { [symbol: string]: Token | undefined }
}

const ICONS_SOURCE = 'https://gateway.ipfs.io/ipns/tokens.1inch.eth'

const useTokenListQuery = () => {
  return useSWR(['token-list'], async () => {
    const response: TokenListResponse = await fetch(ICONS_SOURCE).then((x) => x.json())
    const allTokens: Token[] = response.tokens

    const { tokens, tokensByAddress, tokensBySymbol } = allTokens.reduce(
      (acc: TokenListQueryReturn, token) => {
        const address = token.address.toLowerCase()

        if (acc.tokensByAddress[address]) {
          return acc
        }

        acc.tokens.push(token)
        acc.tokensByAddress[address] = token
        acc.tokensBySymbol[token.symbol.toLowerCase()] = token

        return acc
      },
      {
        tokens: [],
        tokensByAddress: {},
        tokensBySymbol: {},
      },
    )
    return {
      tokens: tokens.sort((a, b) => a.symbol.localeCompare(b.symbol)),
      tokensByAddress,
      tokensBySymbol,
    }
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TokenIconsContext = createContext<TokenListQueryReturn>({} as any)

const TokenIconsContextProvider: React.FC = ({ children }) => {
  const { data } = useTokenListQuery()

  if (!data) return null

  return <TokenIconsContext.Provider value={data}>{children}</TokenIconsContext.Provider>
}

export default genericSuspense(TokenIconsContextProvider)

export function useTokenIcons(): TokenListQueryReturn {
  return useContext<TokenListQueryReturn>(TokenIconsContext)
}
