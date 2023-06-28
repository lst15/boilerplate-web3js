import { TransactionType } from "../../types";

export interface WebsocketProviderRepository{
  _provider:any;

  /**
   * Retorna o provedor.
   * @returns {T} - O provedor.
   */
  getProvider<T>():T;

  getTransactionByHash(hash: string): Promise<TransactionType> 

}