import { EthersPancakeSwapFactoryV2ModuleRequest } from "../../modules/ethers/ethers-pancake-swap-factory-v2.module";
import EthersPancakeSwapRouterV1Module, { EthersPancakeSwapRouterV1ModuleRequest } from "../../modules/ethers/ethers-pancake-swap-router-v1.module";

class EthersPancakeSwapV1Factory{
  static create({address,signerOrProvider}:EthersPancakeSwapRouterV1ModuleRequest){
    return new EthersPancakeSwapRouterV1Module({address,signerOrProvider})
  }
}

export default EthersPancakeSwapV1Factory;