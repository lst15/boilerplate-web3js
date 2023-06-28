import { FileNameType, AbiInterfaceType, AddressType, ContractType, ByteCodeType, ByteCodeDescriptionType } from "../../types";

/**
 * A classe `EthersErc20Module` representa o contrato ABI (Application Binary Interface) de um contrato ERC-20.
 * 
 * Ela lida com o carregamento e processamento do ABI, bem como com a decodificação do bytecode de transações relacionadas a esse contrato.
 */
export interface Erc20ModuleRepository{
  _abi: any;
  _AbiFileName: FileNameType;
  _interface: AbiInterfaceType;
  _address: AddressType;
  _contract: ContractType;  

  /**
   * Retorna o ABI do contrato ERC-20.
   * @returns O ABI do contrato.
   */  
  get abi(): any 
  
  /**
   * Retorna a interface ethers.utils.Interface do contrato ERC-20.
   * @returns A interface ethers.utils.Interface do contrato.
   */  
  get interface(): AbiInterfaceType

  /**
   * Decodifica o bytecode de uma transação relacionada ao contrato ERC-20.
   * @param bytecode O bytecode da transação.
   * @returns Uma descrição da transação decodificada.
   * @throws Um erro se o bytecode fornecido for nulo.
   */  
  decodeBytecode(bytecode: ByteCodeType): ByteCodeDescriptionType

  /**
   * Obtém o contrato ERC-20.
   * @returns O contrato ERC-20.
   */  
  get contract(): ContractType

  /**
   * Obtém o endereço do contrato ERC-20.
   * @returns O endereço do contrato ERC-20.
   */  
  get address(): AddressType

}