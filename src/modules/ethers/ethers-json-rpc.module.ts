/**
 * Módulo EthersJsonRpcModule para fornecer uma instância do provedor JSON-RPC do ethers.
 */
import { ethers } from 'ethers';
import { EthersDetectNetworkError } from '../../errors/ethers-detect-network.error';
import { Endpoint, EthersJsonRpcProvider } from '../../types';

/**
 * Interface para a solicitação de criação do módulo EthersJsonRpcModule.
 */
interface EthersJsonRpcModuleRequest {
  endpoint: Endpoint;
}

class EthersJsonRpcModule {
  private _jsonRpcProvider: EthersJsonRpcProvider;

  /**
   * Cria uma instância do módulo EthersJsonRpcModule.
   * @param {EthersJsonRpcModuleRequest} options - Opções para a criação do módulo.
   */
  constructor({ endpoint }: EthersJsonRpcModuleRequest) {
    this._jsonRpcProvider = new ethers.providers.JsonRpcProvider(endpoint);

    this._jsonRpcProvider.detectNetwork().then().catch((err) => {
      throw new EthersDetectNetworkError();
    });
  }

  /**
   * Retorna o provedor JSON-RPC do ethers.
   * @returns {JsonRpcProvider} - O provedor JSON-RPC.
   */
  public get provider(): EthersJsonRpcProvider {
    return this._jsonRpcProvider;
  }
}

export default EthersJsonRpcModule;
