import { ObjectValues } from '@/types/utils'

export const Chains = {
  // mainnet: 1,
  goerli: 5,
  // kovan: 42,
} as const

export type ChainConfig = {
  id: ChainsValues
  name: string
  shortName: string
  chainId: ChainsValues
  chainIdHex: string
  rpcUrl: string
  blockExplorerUrls: string[]
  token: string
}

export type ChainsValues = ObjectValues<typeof Chains>
export type ChainsKeys = keyof typeof Chains

export enum RPCProviders {
  infura = 'infura',
  alchemy = 'alchemy',
}

export const RPCProvidersENV: Record<RPCProviders, any> = {
  [RPCProviders.infura]: process.env.NEXT_PUBLIC_INFURA_TOKEN,
  [RPCProviders.alchemy]: process.env.NEXT_PUBLIC_ALCHEMY_TOKEN,
}

export type ProviderChains = { [key in RPCProviders]: { [key in ChainsValues]: string } }

type BaseAppContractInfo = {
  abi: any[]
  decimals?: number
  icon?: JSX.Element
  symbol?: string
  priceTokenId?: string
}

export type ChainAppContractInfo = BaseAppContractInfo & {
  address: string
}

export type AppContractInfo = BaseAppContractInfo & {
  address: { [key in ChainsValues]: string }
}
