import { useContractCall } from '@/src/hooks/useContractCall'
import { useContractInstance } from '@/src/hooks/useContractInstance'
import { ERC20, ERC20__factory } from '@/types/typechain'

export const useContractCallExample = () => {
  const erc20 = useContractInstance(ERC20__factory, 'DAI')
  const someAddress = '0x70b144972C5Ef6CB941A5379240B74239c418CD4'

  // Calling just 1 contract method
  const calls = [erc20.balanceOf] as const
  const [{ data: singleCall }] = useContractCall<ERC20, typeof calls>(calls, [[someAddress]])

  // Calling multiple methods of the same contract
  const calls2 = [erc20.balanceOf, erc20.decimals] as const
  const [{ data: multiCall }] = useContractCall<ERC20, typeof calls2>(calls2, [[someAddress], []])

  console.log({ singleCall })
  console.log({ multiCall })
}
