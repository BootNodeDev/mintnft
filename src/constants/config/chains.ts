import nullthrows from 'nullthrows'

import { getProviderUrl } from '@/src/constants/config/rpc-providers'
import { ChainConfig, Chains, ChainsValues } from '@/src/constants/config/types'

// Default chain id from env var
export const INITIAL_APP_CHAIN_ID = Number(
  process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID || '42',
) as ChainsValues

export const chainsConfig: Record<ChainsValues, ChainConfig> = {
  // [Chains.mainnet]: {
  //   id: Chains.mainnet,
  //   name: 'Mainnet',
  //   shortName: 'Mainnet',
  //   chainId: Chains.mainnet,
  //   chainIdHex: '0x1',
  //   rpcUrl: getProviderUrl(Chains.mainnet),
  //   blockExplorerUrls: ['https://etherscan.io/'],
  //   token: 'ETH',
  // },
  [Chains.goerli]: {
    id: Chains.goerli,
    name: 'Görli Testnet',
    shortName: 'Goerli',
    chainId: Chains.goerli,
    chainIdHex: '0x5',
    rpcUrl: getProviderUrl(Chains.goerli),
    blockExplorerUrls: ['https://goerli.etherscan.io/'],
    token: 'ETH',
  },
  // [Chains.kovan]: {
  //   id: Chains.kovan,
  //   name: 'Kovan',
  //   shortName: 'Kovan',
  //   chainId: 42,
  //   chainIdHex: '0x2a',
  //   rpcUrl: getProviderUrl(Chains.kovan),
  //   blockExplorerUrls: ['https://kovan.etherscan.io/'],
  //   token: 'ETH',
  // },
}

export function getNetworkConfig(chainId: ChainsValues): ChainConfig {
  const networkConfig = chainsConfig[chainId]
  return nullthrows(networkConfig, `No config for chain id: ${chainId}`)
}
