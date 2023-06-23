import EthersMnemonicModule, { EthersMnemonicModuleRequest } from "../../repository/ethers/ethers-mnemonic.module";

class EthersMnemonicFactory{
  static create({mnemonic}:EthersMnemonicModuleRequest){
    return new EthersMnemonicModule({mnemonic})
  }
}

export default EthersMnemonicFactory;