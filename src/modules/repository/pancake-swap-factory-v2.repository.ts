import { FileNameType, AbiInterfaceType, AddressType,ContractType, ByteCodeDescriptionType, ByteCodeType } from "../../types";

export interface PancakeSwapFactoryV2Repository{
  _abi: any;
  _AbiFileName: FileNameType;
  _interface: AbiInterfaceType;
  _address: AddressType;
  _contract: ContractType; 
  
  /**
   * Obtém o ABI do contrato PancakeSwap Factory V2.
   * @returns O ABI do contrato.
   */  
  get abi(): any

  /**
   * Obtém a interface ethers do contrato PancakeSwap Factory V2.
   * @returns A interface ethers do contrato.
   */  
  get interface(): AbiInterfaceType

  /**
   * Decodifica o bytecode de uma transação PancakeSwap Factory V2 e retorna sua descrição.
   * @param bytecode O bytecode da transação a ser decodificado.
   * @returns A descrição da transação decodificada.
   * @throws Um erro se o bytecode fornecido for nulo ou indefinido.
   */  
  decodeBytecode(bytecode: ByteCodeType): ByteCodeDescriptionType;

  /**
   * Obtém o contrato PancakeSwap Factory V2.
   * @returns O contrato PancakeSwap Factory V2.
   */
  get contract(): ContractType

  /**
   * Obtém o endereço do contrato PancakeSwap Factory V2.
   * @returns O endereço do contrato PancakeSwap Factory V2.
   */  
  get address(): AddressType

}