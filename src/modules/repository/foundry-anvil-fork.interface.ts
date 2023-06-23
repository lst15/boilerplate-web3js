import { SystemQuery, SystemPort, TypeMnemonic, Endpoint, EthersJsonRpcProvider, Process } from "../../types";

export interface FoundryAnvilForkInterface{
  _systemQuery: SystemQuery;
  _systemPort: SystemPort;
  _mnemonic: TypeMnemonic;
  _endpoint: Endpoint;
  _provider: EthersJsonRpcProvider;
  _process: Process;

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