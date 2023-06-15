/**
 * Módulo EthersWebsocketModule que lida com a conexão por websocket com um nó Ethereum.
 */
import { ethers } from 'ethers';
import { EthersConnectionError } from '../../errors/ethers-connection.error';
import { Endpoint, EthersWebSocketProvider, Transaction } from '../../types';
import { NeedBeATransactionHashRule } from '../../rules/need-be-a-transaction-hash.rule';

interface EthersWebsocketModuleRequest {
  endpoint: Endpoint;
}

class EthersWebsocketModule {
  private _socketProvider: EthersWebSocketProvider;

  /**
   * Cria uma instância do módulo EthersWebsocketModule para se conectar a um nó Ethereum por meio de uma conexão websocket.
   * @param {EthersWebsocketModuleRequest} options - As opções de configuração do módulo.
   */
  constructor({ endpoint }: EthersWebsocketModuleRequest) {
    this._socketProvider = new ethers.providers.WebSocketProvider(endpoint);

    // Lidar com erros de conexão websocket
    this._socketProvider._websocket.on("error", () => {
      throw new EthersConnectionError();
    });
  }

  /**
   * Obtém o provedor de conexão websocket para interagir com o nó Ethereum.
   * @returns {WebSocketProvider} - O provedor de conexão websocket.
   */
  public get provider(): EthersWebSocketProvider {
    return this._socketProvider;
  }

  public async getTransactionByHash(hash: string): Promise<Transaction> {
    NeedBeATransactionHashRule(hash,"getTransactionByHash");
    return this._socketProvider.getTransaction(hash);
  }
  

}

export default EthersWebsocketModule;
