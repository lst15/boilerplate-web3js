import { HDNode, TypeMnemonic } from "../../types";

export interface MnemonicInterface {
  _hdNode: HDNode;

  /**
   * Retorna o HDNode associado ao módulo.
   * @returns {HDNode} - O HDNode.
   */  
  get hdNode(): HDNode;

  /**
   * Obtém um HDNode com base no índice fornecido.
   * @param {number} index - O índice para a derivação do HDNode.
   * @returns {HDNode} - O HDNode derivado.
   */  
  getHDNodeByIndex(index: number): HDNode 

  /**
   * Obtém um array de HDNodes derivados com base na quantidade fornecida.
   * @param {number} quantity - A quantidade de HDNodes a serem derivados.
   * @returns {HDNode[]} - O array de HDNodes derivados.
   */  
  getHDNodeMulti(quantity: number): HDNode[] 

  /**
   * Define um novo mnemônico para o módulo.
   * @param {TypeMnemonic} mnemonic - O novo mnemônico a ser definido.
   */  
  setMnemonic(mnemonic: TypeMnemonic):void

  /**
   * Cria um mnemônico aleatório usando a função createRandom() do Wallet da biblioteca ethers.
   * @returns {TypeMnemonic} - O mnemônico criado.
   */  
  createMnemonic(): TypeMnemonic   
}