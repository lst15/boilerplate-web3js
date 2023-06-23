import EthersWebsocketProviderModule, { EthersWebsocketModuleRequest } from "../../repository/ethers/ethers-websocket-provider.module";

class EthersWebsocketProviderFactory {
  /**
   * Cria uma instância do módulo EthersWebsocketProviderModule.
   * @param {EthersWebsocketModuleRequest} options - Opções para a criação do módulo.
   * @returns {EthersWebsocketProviderModule} - A instância criada do módulo.
   */
  static create({ endpoint }: EthersWebsocketModuleRequest): EthersWebsocketProviderModule {
    // Cria e retorna uma nova instância do módulo EthersWebsocketProviderModule com as opções fornecidas.
    return new EthersWebsocketProviderModule({ endpoint });
  }
}

export default EthersWebsocketProviderFactory;
