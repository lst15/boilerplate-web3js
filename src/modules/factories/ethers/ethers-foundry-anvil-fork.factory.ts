import EthersFoundryAnvilForkModule, { EthersFoundryAnvilForkModuleRequest } from "../../repository/ethers/ethers-foundry-anvil-fork.module";

class EthersFoundryAnvilForkFactory {
  /**
   * Cria uma instância do módulo EthersFoundryAnvilForkModule com base nos parâmetros fornecidos.
   * @param {EthersFoundryAnvilForkModuleRequest} options - Os parâmetros de criação do módulo.
   * @returns {EthersFoundryAnvilForkModule} - A instância criada do módulo.
   */
  static create({ port, mnemonic, endpoint }: EthersFoundryAnvilForkModuleRequest): EthersFoundryAnvilForkModule {
    // Cria e retorna uma nova instância do módulo EthersFoundryAnvilForkModule
    // com os parâmetros fornecidos
    return new EthersFoundryAnvilForkModule({ port, mnemonic, endpoint });
  }
}

export default EthersFoundryAnvilForkFactory;
