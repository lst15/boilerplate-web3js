import Endpoint from "../config/endpoint/endpoint";
import EthersWebsocketProviderModule from "../modules/implementations/ethers/ethers-websocket-provider.module";
import { FindNulledAddressesUseCase } from "../usecases/find-nulled-addresses.usecase";

export function FindNulledAddressesFactory(){
  const endpointConfig = new Endpoint();
  const endpoint = endpointConfig.config.list.chainstack.ws;

  const websocketProviderModule = new EthersWebsocketProviderModule({
    endpoint:endpoint
  })  

  const usecase = new FindNulledAddressesUseCase(websocketProviderModule)
  return usecase;
}