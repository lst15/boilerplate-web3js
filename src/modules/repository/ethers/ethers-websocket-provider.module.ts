
import { EndpointType, TransactionType } from "../../../types";
import {  ethers } from "ethers";
import { EthersConnectionError } from "../../../errors/ethers-connection.error";
import { NeedBeATransactionHashRule } from "../../../rules/need-be-a-transaction-hash.rule";
import { WebsocketProvider } from "../websocket-provider.interface";
import TransactionModel from "../../../models/transaction.model";

export interface EthersWebsocketModuleRequest {
  endpoint: EndpointType;
}

class EthersWebsocketProviderModule implements WebsocketProvider {
  _provider: any;
  private _getTransactionsRound:number
  /**
   * Cria uma instância do módulo EthersWebsocketModule para se conectar a um nó Ethereum por meio de uma conexão websocket.
   * @param {EthersWebsocketModuleRequest} options - As opções de configuração do módulo.
   */
  constructor({ endpoint }: EthersWebsocketModuleRequest) {
    this._provider = new ethers.providers.WebSocketProvider(endpoint);
    this._getTransactionsRound = 10;

    // Lidar com erros de conexão websocket
    this._provider._websocket.on("error", () => {
      throw new EthersConnectionError();
    });
  }

  /**
   * Obtém o provedor de conexão websocket para interagir com o nó Ethereum.
   * @returns {WebSocketProvider} - O provedor de conexão websocket.
   */
  public getProvider<T>(): T {
    return this._provider;
  }

  public async getTransactionByHash(hash: string): Promise<TransactionType> {
    NeedBeATransactionHashRule(hash,"getTransactionByHash");
    let transaction:TransactionModel;
    let rounds = 0;    

    while(rounds < this._getTransactionsRound){      
      transaction = await this._provider.getTransaction(hash);
      
      if(transaction == null) rounds = rounds + 1;
      else break;
    }

    return this._provider.getTransaction(hash);
  }
  
}

export default EthersWebsocketProviderModule;