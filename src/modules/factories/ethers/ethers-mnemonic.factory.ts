import EthersMnemonicModule, { EthersMnemonicModuleRequest } from "../../repository/ethers/ethers-mnemonic.module";

class EthersMnemonicFactory {
  /**
   * Cria uma instância do módulo EthersMnemonicModule com base nos parâmetros fornecidos.
   * @param {EthersMnemonicModuleRequest} options - Os parâmetros de criação do módulo.
   * @returns {EthersMnemonicModule} - A instância criada do módulo.
   */
  static create({ mnemonic }: EthersMnemonicModuleRequest): EthersMnemonicModule {
    // Cria e retorna uma nova instância do módulo EthersMnemonicModule
    // com o mnemonic fornecido
    return new EthersMnemonicModule({ mnemonic });
  }
}

export default EthersMnemonicFactory;
