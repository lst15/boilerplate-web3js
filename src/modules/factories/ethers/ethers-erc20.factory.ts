import EthersErc20Module, { EthersErc20ModuleRequest } from "../../repository/ethers/ethers-erc20.module";

class EthersErc20Factory {
  /**
   * Cria uma instância do módulo EthersErc20Module com base nos parâmetros fornecidos.
   * @param {EthersErc20ModuleRequest} options - Os parâmetros de criação do módulo.
   * @returns {EthersErc20Module} - A instância criada do módulo.
   */
  static create({ address, signerOrProvider }: EthersErc20ModuleRequest): EthersErc20Module {
    // Cria e retorna uma nova instância do módulo EthersErc20Module
    // com os parâmetros fornecidos
    return new EthersErc20Module({ address, signerOrProvider });
  }
}

export default EthersErc20Factory;
