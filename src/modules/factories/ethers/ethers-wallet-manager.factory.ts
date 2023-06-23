import EthersWalletManagerModule from "../../repository/ethers/ethers-wallet-manager.module";

class EthersWalletManagerFactory{
  static create(){
    return new EthersWalletManagerModule()
  }
}

export default EthersWalletManagerFactory;