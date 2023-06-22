import { FileName, AbiInterface, Address, ByteCode, ByteCodeDescription,Contract } from "../../types";

export interface PancakeSwapRouterV1Interface {
  _abi: any;
  _AbiFileName: FileName;
  _interface: AbiInterface;
  _address: Address
  _contract: Contract; 
  
  /**
   * Obtém o ABI do contrato PancakeSwap Factory V2.
   * @returns O ABI do contrato.
   */  
  get abi(): any

  /**
   * Obtém a interface ethers do contrato PancakeSwap Factory V2.
   * @returns A interface ethers do contrato.
   */  
  get interface(): AbiInterface

  /**
   * Decodifica o bytecode de uma transação PancakeSwap Factory V2 e retorna sua descrição.
   * @param bytecode O bytecode da transação a ser decodificado.
   * @returns A descrição da transação decodificada.
   * @throws Um erro se o bytecode fornecido for nulo ou indefinido.
   */  
  decodeBytecode(bytecode: ByteCode): ByteCodeDescription;

  /**
   * Obtém o contrato PancakeSwap Factory V2.
   * @returns O contrato PancakeSwap Factory V2.
   */
  get contract(): Contract

  /**
   * Obtém o endereço do contrato PancakeSwap Factory V2.
   * @returns O endereço do contrato PancakeSwap Factory V2.
   */  
  get address(): Address

}