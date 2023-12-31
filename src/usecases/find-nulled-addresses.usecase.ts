import TransactionModel from "../models/transaction.model";
import { WebsocketProviderModuleRepository } from "../modules/repositories/websocket-provider.module.repository";
import { AddressType, EthersWebSocketProviderType, TransactionHashType } from "../types";

export class FindNulledAddressesUseCase{
  constructor(
    private websocketProviderRepository:WebsocketProviderModuleRepository
  ){ /* Dependency injection*/ }
  
  private checkPrefix(address:AddressType){
    return address.startsWith("0x000000000")
  }

  execute(){
    const provider = this.websocketProviderRepository.getProvider<EthersWebSocketProviderType>();  

    provider.on("pending", async (transactionHash:TransactionHashType) => {
      const transaction:TransactionModel = await this.websocketProviderRepository.getTransactionByHash(transactionHash);

      if(!transaction){
        return false;
      } 
      
      if(this.checkPrefix(transaction.to as string)){
        console.log(transactionHash)
      }

    })

  }

}