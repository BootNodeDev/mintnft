import {
  Chains,
  ChainsValues,
  ProviderChains,
  RPCProviders,
  RPCProvidersENV,
} from '@/src/constants/config/types'
import { ObjectValues } from '@/types/utils'

export const providerChains: ProviderChains = {
  [RPCProviders.infura]: {
    //[Chains.mainnet]: 'mainnet',
    [Chains.goerli]: 'goerli',
    // [Chains.kovan]: 'kovan',
  },
  [RPCProviders.alchemy]: {
    //[Chains.mainnet]: 'eth-mainnet',
    [Chains.goerli]: 'eth-goerli',
    // [Chains.kovan]: 'eth-kovan',
  },
}

const getInfuraRPCUrl = (chainId: ChainsValues) =>
  `https://${providerChains[RPCProviders.infura][chainId]}.infura.io/v3/${
    process.env.NEXT_PUBLIC_INFURA_TOKEN
  }`

const getAlchemyRPCUrl = (chainId: ChainsValues) =>
  `https://${providerChains[RPCProviders.alchemy][chainId]}.g.alchemy.com/v2/${
    process.env.NEXT_PUBLIC_ALCHEMY_TOKEN
  }`

export const getProviderUrl = (
  chainId: ChainsValues,
  provider?: ObjectValues<typeof RPCProviders>,
) => {
  if (!RPCProvidersENV[RPCProviders.infura] && !RPCProvidersENV[RPCProviders.alchemy]) {
    throw new Error(`You must set infura/alchemy token provider in environment variable`)
  }

  //Manual provider
  if (provider === RPCProviders.infura && RPCProvidersENV[RPCProviders.infura])
    return getInfuraRPCUrl(chainId)

  if (provider === RPCProviders.alchemy && RPCProvidersENV[RPCProviders.alchemy])
    return getAlchemyRPCUrl(chainId)

  // Automagic provider
  if (RPCProvidersENV[RPCProviders.infura]) return getInfuraRPCUrl(chainId)
  if (RPCProvidersENV[RPCProviders.alchemy]) return getAlchemyRPCUrl(chainId)

  throw Error('Token provider could not be found')
}
