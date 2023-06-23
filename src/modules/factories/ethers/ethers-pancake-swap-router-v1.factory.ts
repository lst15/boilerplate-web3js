import { EthersPancakeSwapFactoryV2ModuleRequest } from "../../repository/ethers/ethers-pancake-swap-factory-v2.module";
import EthersPancakeSwapRouterV1Module, { EthersPancakeSwapRouterV1ModuleRequest } from "../../repository/ethers/ethers-pancake-swap-router-v1.module";

class EthersPancakeSwapV1Factory {
  /**
   * Cria uma instância do módulo EthersPancakeSwapRouterV1Module com base nos parâmetros fornecidos.
   * @param {EthersPancakeSwapRouterV1ModuleRequest} options - Os parâmetros de criação do módulo.
   * @returns {EthersPancakeSwapRouterV1Module} - A instância criada do módulo.
   */
  static create({ address, signerOrProvider }: EthersPancakeSwapRouterV1ModuleRequest): EthersPancakeSwapRouterV1Module {
    // Cria e retorna uma nova instância do módulo EthersPancakeSwapRouterV1Module
    // com o address e signerOrProvider fornecidos.
    return new EthersPancakeSwapRouterV1Module({ address, signerOrProvider });
  }
}

export default EthersPancakeSwapV1Factory;
