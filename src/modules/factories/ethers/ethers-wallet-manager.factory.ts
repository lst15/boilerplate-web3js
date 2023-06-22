import EthersWalletManagerModule from "../../modules/ethers/ethers-wallet-manager.module";

class EthersWalletManagerFactory{
  static create(){
    return new EthersWalletManagerModule()
  }
}

export default EthersWalletManagerFactory;