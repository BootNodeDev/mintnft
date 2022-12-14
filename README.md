# BootNode Frontend Starter Kit

An opinionated web3 starter for building dApps.

This stack covers some basic use cases of any DApp like connecting with wallets, support for different chains, Smart contract interaction, BigNumbers helpers, notifications when a transaction is submitted, etc.

## Core Technologies

[Nextjs](https://nextjs.org/) <br>
[Styled components](https://styled-components.com/) <br>
[etherjs](https://docs.ethers.io/) <br>
[web3-onboard](https://www.blocknative.com/onboard) <br>
[SWR](https://swr.vercel.app/) <br>
[Typechain](https://github.com/dethcrypto/TypeChain) <br>

## Features

⚡ Next.js <br>
🔥 TypeScript <br>
💅 Styled-Components<br>
📏 ESLint already configured<br>
💖 Code Formatted with Prettier<br>
🦊 Husky for Git Hooks<br>
🚫 Lint-staged for running linters on Git staged files<br>
🚓 Commitlint to keep main branch organized<br>
⚙️ Bundler Analyzer<br>
👝 Wallet connectivity already implemented<br>
⛓️ Support for multiple ChainIds<br>
⚙️ Add contracts by network backed by Typescript<br>
📄 Auto generated contract types with Typechain<br>
🪝 Contracts methods using typed Hooks (We also support typed multi-calls 😎)<br>
🔢 Bignumber input<br>
👁️ Tx notifications persisted on local-storage<br>
⏳ React Suspense ready with loading fallback<br>
💡 Absolute Imports using @ prefix<br>
🌈 Include basic UI layout<br>
🌓 Light / Dark UI Theme<br>
🇺🇸 I18n support<br>

## To start using it you can

a. You can fork this repo using Github templates. Follow the [instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).

b. Or you can duplicate and then initialize it locally.

```shell
# Create and use dir
~ mkdir myDapp; cd myDapp

# Clone the repo
## Flag `--node=git` is necessary for private repos
~ npx degit git@github.com:bootnodedev/frontend-starter-kit --mode=git

# install dependencies
~ yarn install

# setup environment variables
## Copy `.env.example` and complete missing variables
~ cp .env.example .env.local

# run the app
~ yarn dev
```

## Provider configuration

You need to configure RPC providers: [Alchemy](https://www.alchemy.com/) or [infura](https://infura.io/)
In `.env.local` file put your RPC provider API key as a value of `NEXT_PUBLIC_INFURA_TOKEN` or `NEXT_PUBLIC_ALCHEMY_TOKEN`

## Chain configuration

The best and most secure way to add a new chain is:

1. Go to `src/constants/config/types.ts` and add the new chain value to `const Chains = {} as const` constant.
2. Run `yarn tsc`, it will break in all the places that need to add support for the new chain.

# Contract configuration

1. Put your contracts ABI files in `src/abis` as `.json` file.
2. Go to `src/constants/config/contracts.ts`.
3. Provide a key name for your contract in `const contracts = {...}`.
4. Provide a contract address for all the chains you have configured.
5. Import your contract ABI file and add it to the contract key created in step 3.

Example for USDC contract:

```js
import ERC_20_abi from '@/src/abis/ERC20.json'

export const contracts = constantContracts({
  // Other contracts
  USDC: {
    address: {
      [Chains.mainnet]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      [Chains.goerli]: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
    },
    abi: ERC_20_abi,
  },
})
```

## Generate contracts types

After adding a new ABI, run `yarn typechain` to generate the types for the contract.
More info can be found at [TypeChain](https://github.com/dethcrypto/TypeChain).

## Subgraph integration

To interact with a subgraph you should follow these steps:

1. Go to `src/constants/config/subgraph.ts` and a new entry to `enum subgraphName`.
2. Go to `src/constants/config/subgraph-endpoints.json` and complete the object following the structure `{ chain: [name: endpoint] }`.

```json
{
  "5": {
    "rentals": "subgraph endpoint"
  }
}
```

3. Create subgraph queries in the folder `src/queries`.
4. run `yarn subgraph-codegen`. This step has to be done every time you add or modify a query.
5. now you will have all the queries typed and available to be called.

```ts
import { SubgraphName, getSubgraphSdkByNetwork } from '@/src/constants/config/subgraph'

const { appChainId } = useWeb3Connection()

const gql = getSubgraphSdkByNetwork(appChainId, SubgraphName.Rentals)
const res = gql.useSubgraphErrors()
console.log({ res: res.data?._meta }) // res is typed 😎
```

## Examples

There are many web3 utilities this starter has implemented, we are adding examples of them progressively.
You can take a look at `/examples` page.

## Keep an eye on the bundle size

This tool shows you the percentage each library is using when the final bundle is generated.

```bash
yarn analyze
```
