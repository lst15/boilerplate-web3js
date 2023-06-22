import EthersWebsocketProviderModule, { EthersWebsocketModuleRequest } from "../../modules/ethers/ethers-websocket-provider.module";

class EthersWebsocketProviderFactory{
  static create({endpoint}:EthersWebsocketModuleRequest){
    return new EthersWebsocketProviderModule({endpoint})
  }
}

export default EthersWebsocketProviderFactory;