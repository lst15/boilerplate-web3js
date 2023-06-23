import EthersPancakeSwapRouterV2Module, { EthersPancakeSwapRouterV2ModuleRequest } from "../../repository/ethers/ethers-pancake-swap-router-v2.module";

class EthersPancakeSwapRouterV2 {
  /**
   * Cria uma instância do módulo EthersPancakeSwapRouterV2Module com base nos parâmetros fornecidos.
   * @param {EthersPancakeSwapRouterV2ModuleRequest} options - Os parâmetros de criação do módulo.
   * @returns {EthersPancakeSwapRouterV2Module} - A instância criada do módulo.
   */
  static create({ address, signerOrProvider }: EthersPancakeSwapRouterV2ModuleRequest): EthersPancakeSwapRouterV2Module {
    // Cria e retorna uma nova instância do módulo EthersPancakeSwapRouterV2Module
    // com o address e signerOrProvider fornecidos.
    return new EthersPancakeSwapRouterV2Module({ address, signerOrProvider });
  }
}

export default EthersPancakeSwapRouterV2;
