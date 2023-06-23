import EthersBlockTransactionsModule from "../../repository/ethers/ethers-block-transactions.module";
import FileSystemCacheModule from "../../repository/file-system-cache/file-system-cache.module";
import { SystemCache } from "../../repository/system-cache.interface";

class EthersBlockTransactionsFactory {
  /**
   * Cria uma instância do módulo EthersBlockTransactionsModule com base no FileSystemCacheModule fornecido.
   * @param {SystemCache} systemCache - O módulo de cache do sistema de arquivos.
   * @returns {EthersBlockTransactionsModule} - A instância criada do módulo.
   */
  static create(systemCache: SystemCache): EthersBlockTransactionsModule {
    // Cria e retorna uma nova instância do módulo EthersBlockTransactionsModule
    // com o FileSystemCacheModule fornecido como argumento.
    return new EthersBlockTransactionsModule({ systemCache });
  }
}

export default EthersBlockTransactionsFactory;
