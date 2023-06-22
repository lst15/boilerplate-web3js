import EthersErc20Module, { EthersErc20ModuleRequest } from "../../modules/ethers/ethers-erc20.module";

class EthersErc20Factory{
  static create({address,signerOrProvider}:EthersErc20ModuleRequest){
    return new EthersErc20Module({address,signerOrProvider});
  }
}

export default EthersErc20Factory;