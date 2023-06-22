/**
 * Módulo BlockTransactionsModule que lida com a captura de transações e blocos em tempo real.
 */

import { IBlockTransactions } from "../../../config/block-transactions/block-transactions";
import { NeedBeAPositiveNumberRule } from "../../../rules/need-be-a-positive-number.rule";
import { NeedBeATransactionHashRule } from "../../../rules/need-be-a-transaction-hash.rule";
import { BlockNumber, TransactionHashList, EthersWebSocketProvider } from "../../../types";
import { BlockTransactionsInterface } from "../../interfaces/block-transactions.interface";
import { SystemCache } from "../../interfaces/system-cache.interface";

export interface EthersBlockTransactionsModuleRequest {
  fileSystemCache: SystemCache;
}

class EthersBlockTransactionsModule implements BlockTransactionsInterface {
  _pendingBlock: BlockNumber;
  _pendingTransactions: TransactionHashList;
  _lastMiningDuration: number;
  _fileSystemCache: SystemCache;  

  /**
   * Cria uma instância do módulo BlockTransactionsModule para capturar transações e blocos em tempo real.
   * @param {BlockTransactionsModuleRequest} options - As opções de configuração do módulo.
   */
  constructor({ fileSystemCache }: EthersBlockTransactionsModuleRequest) {
    this._pendingBlock = 0;
    this._pendingTransactions = [];
    this._lastMiningDuration = 0;
    this._fileSystemCache = fileSystemCache;    
  }

  /**
   * Inicializa a captura recorrente de transações utilizando um provedor de conexão websocket.
   * @param {T} provider - O provedor de conexão websocket.
   */
  public InitializeRecurrentTransactionsCapture<T>(provider: T):void {
    (provider as EthersWebSocketProvider).on("pending", (pending: string) => {
      NeedBeATransactionHashRule(pending, "InitializeRecurrentTransactionsCapture");
      this._pendingTransactions.push(pending);
    });
  }

  /**
   * Inicializa a captura recorrente de blocos utilizando um provedor de conexão websocket.
   * @param {T} provider - O provedor de conexão websocket.
   */
  public InitializeRecurrentBlockCapture<T>(provider: T,cache_ttl:number) {
    let _lastMiningTime = Date.now();

    (provider as EthersWebSocketProvider).on("block", (block: BlockNumber) => {
      NeedBeAPositiveNumberRule(block, "InitializeRecurrentBlockCapture");
      this._pendingBlock = block + 1

      const _minedTime = Date.now();
      this._lastMiningDuration = (_minedTime - _lastMiningTime) / 1000;
      NeedBeAPositiveNumberRule(this._lastMiningDuration, "InitializeRecurrentBlockCapture");

      this._fileSystemCache.setCache(
        this._pendingBlock.toString(),
        this._pendingTransactions,
        cache_ttl
      )

      this._pendingTransactions = [];
      _lastMiningTime = _minedTime;
    });
  }

  /**
   * Obtém a duração da última mineração em segundos.
   * @returns {number} - A duração da última mineração em segundos.
   */
  public get LastMiningDuration(): number {
    return this._lastMiningDuration;
  }

  /**
   * Obtém o número do bloco atual.
   * @returns {BlockNumber} O número do bloco atual.
   */
  public get CurrentBlock(): BlockNumber {
    return this._pendingBlock;
  }

  /**
   * Obtém a lista de hashes de transações do bloco anterior.
   * @param {BlockNumber} block - O número do bloco anterior.
   * @returns {Promise<TransactionHashList>} A lista de hashes de transações do bloco anterior.
   */
  public async getLastBlock(block: BlockNumber): Promise<TransactionHashList> {
    const _transactions = await this._fileSystemCache.getCache(block.toString());
    // Se o valor retornado for indefinido, retorna uma lista vazia
    return _transactions === undefined ? [] : _transactions;
  }

}

export default EthersBlockTransactionsModule;
