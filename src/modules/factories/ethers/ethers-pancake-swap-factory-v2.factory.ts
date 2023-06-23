// Classe responsável por criar instâncias do módulo EthersPancakeSwapRouterV2Module
// utilizando os parâmetros fornecidos
import { EthersPancakeSwapFactoryV2ModuleRequest } from "../../repository/ethers/ethers-pancake-swap-factory-v2.module";
import EthersPancakeSwapRouterV2Module from "../../repository/ethers/ethers-pancake-swap-router-v2.module";

class EthersPancakeSwapV2Factory {
  /**
   * Cria uma instância do módulo EthersPancakeSwapRouterV2Module com base nos parâmetros fornecidos.
   * @param {EthersPancakeSwapFactoryV2ModuleRequest} options - Os parâmetros de criação do módulo.
   * @returns {EthersPancakeSwapRouterV2Module} - A instância criada do módulo.
   */
  static create({ address, signerOrProvider }: EthersPancakeSwapFactoryV2ModuleRequest): EthersPancakeSwapRouterV2Module {
    // Cria e retorna uma nova instância do módulo EthersPancakeSwapRouterV2Module
    // com os parâmetros fornecidos
    return new EthersPancakeSwapRouterV2Module({ address, signerOrProvider });
  }
}

export default EthersPancakeSwapV2Factory;
