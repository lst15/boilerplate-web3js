import { HDNode } from "ethers/lib/utils";
import { MnemonicInterface } from "../../interfaces/mnemonic.interface";
import { ethers } from "ethers";
import { TypeMnemonicType } from "../../../types";


/**
 * Interface para a solicitação de criação do módulo EthersMnemonicModule.
 */
export interface EthersMnemonicModuleRequest {
  mnemonic: TypeMnemonicType;
}

class EthersMnemonicModule implements MnemonicInterface {
  _hdNode: HDNode;

  /**
   * Cria uma instância do módulo EthersMnemonicModule com base no mnemônico fornecido.
   * @param {EthersMnemonicModuleRequest} options - Opções para a criação do módulo.
   */
  constructor({ mnemonic }: EthersMnemonicModuleRequest) {
    this._hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic);
  }

  /**
   * Retorna o HDNode associado ao módulo.
   * @returns {HDNode} - O HDNode.
   */
  public get hdNode(): HDNode {
    return this._hdNode;
  }

  /**
   * Obtém um HDNode com base no índice fornecido.
   * @param {number} index - O índice para a derivação do HDNode.
   * @returns {HDNode} - O HDNode derivado.
   */
  public getHDNodeByIndex(index: number): HDNode {
    const _HDNode = this._hdNode.derivePath(`m/44'/60'/0'/0/${index}`);
    return _HDNode;
  }

  /**
   * Obtém um array de HDNodes derivados com base na quantidade fornecida.
   * @param {number} quantity - A quantidade de HDNodes a serem derivados.
   * @returns {HDNode[]} - O array de HDNodes derivados.
   */
  public getHDNodeMulti(quantity: number): HDNode[] {
    const _HDNodeMulti: HDNode[] = [];

    for (let i = 0; i < quantity; i++) {
      _HDNodeMulti.push(this._hdNode.derivePath(`m/44'/60'/0'/0/${i}`));
    }

    return _HDNodeMulti;
  }

  /**
   * Define um novo mnemônico para o módulo.
   * @param {TypeMnemonic} mnemonic - O novo mnemônico a ser definido.
   */
  public setMnemonic(mnemonic: TypeMnemonicType) {
    this._hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic);
  }
  
  /**
   * Cria um mnemônico aleatório usando a função createRandom() do Wallet da biblioteca ethers.
   * @returns {TypeMnemonic} - O mnemônico criado.
   */
  public createMnemonic(): TypeMnemonicType {
    const _mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    return _mnemonic;
  }
  
}

export default EthersMnemonicModule;