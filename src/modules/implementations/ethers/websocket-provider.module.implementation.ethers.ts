
import { EndpointType, TransactionType } from "../../../types";
import {  ethers } from "ethers";
import { EthersConnectionError } from "../../../errors/ethers-connection.error";
import { NeedBeATransactionHashRule } from "../../../rules/need-be-a-transaction-hash.rule";
import TransactionModel from "../../../models/transaction.model";
import { WebsocketProviderModuleRepository } from "../../repositories/websocket-provider.module.repository";

export interface WebsocketProviderModuleImplementationEthersRequest {
  endpoint: EndpointType;
}

class WebsocketProviderModuleImplementationEthers implements WebsocketProviderModuleRepository {
  _provider: any;
  private _getTransactionsRound:number
  /**
   * Cria uma instância do módulo EthersWebsocketModule para se conectar a um nó Ethereum por meio de uma conexão websocket.
   * @param {EthersWebsocketModuleRequest} options - As opções de configuração do módulo.
   */
  constructor({ endpoint }: WebsocketProviderModuleImplementationEthersRequest) {
    this._provider = new ethers.providers.WebSocketProvider(endpoint);
    this._getTransactionsRound = 10;

    // Lidar com erros de conexão websocket
    this._provider._websocket.on("error", () => {
      throw new EthersConnectionError();
    });
  }

  /**
   * Obtém o provedor de conexão websocket para interagir com o nó Ethereum.
   * @returns {T} - O provedor de conexão websocket.
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

export default WebsocketProviderModuleImplementationEthers;