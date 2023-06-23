import EthersBlockTransactionsModule from "../../repository/ethers/ethers-block-transactions.module";
import FileSystemCacheModule from "../../repository/file-system-cache/file-system-cache.module";

class EthersBlockTransactionsFactory {
  /**
   * Cria uma instância do módulo EthersBlockTransactionsModule com base no FileSystemCacheModule fornecido.
   * @param {FileSystemCacheModule} fileSystemCache - O módulo de cache do sistema de arquivos.
   * @returns {EthersBlockTransactionsModule} - A instância criada do módulo.
   */
  static create(fileSystemCache: FileSystemCacheModule): EthersBlockTransactionsModule {
    // Cria e retorna uma nova instância do módulo EthersBlockTransactionsModule
    // com o FileSystemCacheModule fornecido como argumento.
    return new EthersBlockTransactionsModule({ fileSystemCache });
  }
}

export default EthersBlockTransactionsFactory;
