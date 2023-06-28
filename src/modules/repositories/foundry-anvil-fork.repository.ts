import { SystemQueryType, SystemPortType, TypeMnemonicType, EndpointType, EthersJsonRpcProviderType, ProcessType } from "../../types";

export interface FoundryAnvilForkRepository{
  _systemQuery: SystemQueryType;
  _systemPort: SystemPortType;
  _mnemonic: TypeMnemonicType;
  _endpoint: EndpointType;
  _provider: EthersJsonRpcProviderType;
  _process: ProcessType;

  /**
   * Retorna o provedor Ethers utilizado para interagir com a rede forked.
   * @returns {T} - O provedor Ethers.
   */  
  Provider<T>(): T 

  /**
   * Desconecta o processo Anvil e encerra a conexão com a rede forked.
   */  
  Disconnect():void;

}