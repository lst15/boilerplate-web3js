/**
 * Módulo BlockTransactionsModule que lida com a captura de transações e blocos em tempo real.
 */
import FileSystemCacheModule from "../file-system-cache.module";
import { NeedBeAPositiveNumberRule } from "../../rules/need-be-a-positive-number.rule";
import { NeedBeATransactionHashRule } from "../../rules/need-be-a-transaction-hash.rule";
import { BlockNumber, TransactionHashList, EthersWebSocketProvider } from "../../types";
import BlockTransactions from "../../config/block-transactions/block-transactions";

interface EthersBlockTransactionsModuleRequest {
  fileSystemCache: FileSystemCacheModule;
  block_transactions_config: BlockTransactions;
}

class EthersBlockTransactionsModule {
  private _pendingBlock: BlockNumber;
  private _pendingTransactions: TransactionHashList;
  private _lastMiningDuration: number;
  private _fileSystemCache: FileSystemCacheModule;
  private _block_transactions_config: BlockTransactions;

  /**
   * Cria uma instância do módulo BlockTransactionsModule para capturar transações e blocos em tempo real.
   * @param {BlockTransactionsModuleRequest} options - As opções de configuração do módulo.
   */
  constructor({ fileSystemCache, block_transactions_config }: EthersBlockTransactionsModuleRequest) {
    this._pendingBlock = 0;
    this._pendingTransactions = [];
    this._lastMiningDuration = 0;
    this._fileSystemCache = fileSystemCache;
    this, this._block_transactions_config = block_transactions_config;
  }

  /**
   * Inicializa a captura recorrente de transações utilizando um provedor de conexão websocket.
   * @param {EthersWebSocketProvider} provider - O provedor de conexão websocket.
   */
  public InitializeRecurrentTransactionsCapture(provider: EthersWebSocketProvider) {
    provider.on("pending", (pending) => {
      NeedBeATransactionHashRule(pending, "InitializeRecurrentTransactionsCapture");
      this._pendingTransactions.push(pending);
    });
  }

  /**
   * Inicializa a captura recorrente de blocos utilizando um provedor de conexão websocket.
   * @param {EthersWebSocketProvider} provider - O provedor de conexão websocket.
   */
  public InitializeRecurrentBlockCapture(provider: EthersWebSocketProvider) {
    let _lastMiningTime = Date.now();

    provider.on("block", (block) => {
      NeedBeAPositiveNumberRule(block, "InitializeRecurrentBlockCapture");
      this._pendingBlock = block + 1

      const _minedTime = Date.now();
      this._lastMiningDuration = (_minedTime - _lastMiningTime) / 1000;
      NeedBeAPositiveNumberRule(this._lastMiningDuration, "InitializeRecurrentBlockCapture");

      this._fileSystemCache.setCache(
        this._pendingBlock.toString(),
        this._pendingTransactions,
        this._block_transactions_config.config.cache_ttl
      )

      this._pendingTransactions = [];
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
