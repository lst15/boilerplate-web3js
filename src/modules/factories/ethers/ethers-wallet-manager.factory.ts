import EthersWalletManagerModule from "../../repository/ethers/ethers-wallet-manager.module";

class EthersWalletManagerFactory {
  /**
   * Cria uma instância do módulo EthersWalletManagerModule.
   * @returns {EthersWalletManagerModule} - A instância criada do módulo.
   */
  static create(): EthersWalletManagerModule {
    // Cria e retorna uma nova instância do módulo EthersWalletManagerModule.
    return new EthersWalletManagerModule();
  }
}

export default EthersWalletManagerFactory;
