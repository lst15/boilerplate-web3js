import Endpoint from "../config/endpoint/endpoint";
import WebsocketProviderModuleImplementationEthers from "../modules/implementations/ethers/websocket-provider.module.implementation.ethers";
import { FindNulledAddressesUseCase } from "../usecases/find-nulled-addresses.usecase";

export function FindNulledAddressesFactory(){
  const endpointConfig = new Endpoint();
  const endpoint = endpointConfig.config.list.chainstack.ws;

  const websocketProviderModule = new WebsocketProviderModuleImplementationEthers({
    endpoint:endpoint
  })  

  const usecase = new FindNulledAddressesUseCase(websocketProviderModule)
  return usecase;
}