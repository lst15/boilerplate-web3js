import EthersFoundryAnvilForkModule, { EthersFoundryAnvilForkModuleRequest } from "../../modules/ethers/ethers-foundry-anvil-fork.module";

class EthersFoundryAnvilForkFactory{
  static create({port,mnemonic,endpoint}:EthersFoundryAnvilForkModuleRequest){
    return new EthersFoundryAnvilForkModule({port,mnemonic,endpoint})
  }
}

export default EthersFoundryAnvilForkFactory;