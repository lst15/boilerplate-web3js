import EthersBlockTransactionsModule from "../../repository/ethers/ethers-block-transactions.module";
import FileSystemCacheModule from "../../repository/file-system-cache/file-system-cache.module";

class EthersBlockTransactionsFactory{
  static create(fileSystemCache:FileSystemCacheModule){
    return new EthersBlockTransactionsModule({fileSystemCache})
  }
}

export default EthersBlockTransactionsFactory;