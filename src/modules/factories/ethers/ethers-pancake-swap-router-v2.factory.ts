import EthersPancakeSwapRouterV2Module, { EthersPancakeSwapRouterV2ModuleRequest } from "../../repository/ethers/ethers-pancake-swap-router-v2.module";

class EthersPancakeSwapRouterV2{
  static create({address,signerOrProvider}:EthersPancakeSwapRouterV2ModuleRequest){
    return new EthersPancakeSwapRouterV2Module({address,signerOrProvider})
  }
}

export default EthersPancakeSwapRouterV2;