import { Transaction } from "../../types";

export interface WebsocketProvider{
  _provider:any;

  /**
   * Retorna o provedor.
   * @returns {T} - O provedor.
   */
  getProvider<T>():T;

  getTransactionByHash(hash: string): Promise<Transaction> 

}