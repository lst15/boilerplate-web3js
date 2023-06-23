import FileSystemCacheModule from "../../file-system-cache.module";
import EthersBlockTransactionsModule from "../../repository/ethers/ethers-block-transactions.module";

class EthersBlockTransactionsFactory{
  static create(fileSystemCache:FileSystemCacheModule){
    return new EthersBlockTransactionsModule({fileSystemCache})
  }
}

export default EthersBlockTransactionsFactory;