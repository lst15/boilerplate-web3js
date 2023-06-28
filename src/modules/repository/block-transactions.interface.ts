import { BlockNumberType, TransactionHashListType } from "../../types";
import FileSystemCacheModule from "./file-system-cache/file-system-cache.module";

export interface BlockTransactionsInterface {
  _pendingBlock: BlockNumberType;
  _pendingTransactions: TransactionHashListType;
  _lastMiningDuration: number;
  _fileSystemCache: FileSystemCacheModule;

  /**
 * Inicializa a captura recorrente de transações utilizando um provedor de conexão websocket.
 * @param {T} provider - O provedor de conexão websocket.
 */
  InitializeRecurrentTransactionsCapture<T>(provider: T): void;

  /**
   * Inicializa a captura recorrente de blocos utilizando um provedor de conexão websocket.
   * @param {T} provider - O provedor de conexão websocket.
   */
  InitializeRecurrentBlockCapture<T>(provider: T,cache_ttl:number):void; 

  /**
   * Obtém a duração da última mineração em segundos.
   * @returns {number} - A duração da última mineração em segundos.
   */
  get LastMiningDuration(): number;

  /**
   * Obtém o número do bloco atual.
   * @returns {BlockNumber} O número do bloco atual.
   */  
  get CurrentBlock(): BlockNumberType

  /**
   * Obtém a lista de hashes de transações do bloco anterior.
   * @param {BlockNumber} block - O número do bloco anterior.
   * @returns {Promise<TransactionHashList>} A lista de hashes de transações do bloco anterior.
   */  
  getLastBlock(block: BlockNumberType): Promise<TransactionHashListType>

}