import { EthersPancakeSwapFactoryV2ModuleRequest } from "../../repository/ethers/ethers-pancake-swap-factory-v2.module";
import EthersPancakeSwapRouterV2Module from "../../repository/ethers/ethers-pancake-swap-router-v2.module";

class EthersPancakeSwapV2Factory{
  static create({address,signerOrProvider}:EthersPancakeSwapFactoryV2ModuleRequest){
    return new EthersPancakeSwapRouterV2Module({address,signerOrProvider})
  }
}

export default EthersPancakeSwapV2Factory;