import ERC1155_abi from '@/src/abis/ERC1155.json'
import ERC721_abi from '@/src/abis/ERC721.json'
import { Chains } from '@/src/constants/config/types'

export const contracts = Object.freeze({
  ERC1155: {
    address: {
      // [Chains.mainnet]: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      [Chains.goerli]: '0x3934A00339490e1FdE31E4dD82f31451Dbbf4912',
    },
    abi: ERC1155_abi,
  },
  ERC721: {
    address: {
      // [Chains.mainnet]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      [Chains.goerli]: '0x71034D6dF95752c9bfE651Da762BAb7ec4c748Aa',
    },
    abi: ERC721_abi,
  },
})

export type ContractsKeys = keyof typeof contracts
