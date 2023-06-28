import { NotBeNullRule } from "../../../rules/not-be-null.rule";
import { AddressType, signerOrProviderType, FileNameType, AbiInterfaceType, ContractType, ByteCodeType, ByteCodeDescriptionType } from "../../../types";
import { openFile } from "../../../utils/load-file.util";
import ethers from "ethers";
import { Erc20Repository } from "../erc20.repository";

/**
 * Interface para a requisição de criação de um contrato ERC20.
 */
export interface EthersErc20ModuleRequest {
  address: AddressType;
  signerOrProvider?:signerOrProviderType;
}

/**
 * A classe `EthersErc20Module` representa o contrato ABI (Application Binary Interface) de um contrato ERC-20.
 * 
 * Ela lida com o carregamento e processamento do ABI, bem como com a decodificação do bytecode de transações relacionadas a esse contrato.
 */
class EthersErc20Module implements Erc20Repository{
  _abi: any;
  _AbiFileName: FileNameType;
  _interface: AbiInterfaceType;
  _address: AddressType;
  _contract: ContractType;

  /**
   * Cria uma nova instância da classe `EthersErc20Module`.
   * @param address O endereço do contrato ERC-20.
   */
  constructor({ address,signerOrProvider }: EthersErc20ModuleRequest) {
    this._AbiFileName = "erc20";
    this._abi = openFile(`${__dirname}/../../abi/${this._AbiFileName}.abi.json`);
    this._interface = new ethers.utils.Interface(this._abi);
    this._address = address;

    this._contract = new ethers.Contract(
      this._address,
      this._interface,
      signerOrProvider
    );
  }

  /**
   * Retorna o ABI do contrato ERC-20.
   * @returns O ABI do contrato.
   */
  public get abi(): any {
    return this._abi;
  }


  public get interface(): AbiInterfaceType {
    return this._interface;
  }

  /**
   * Decodifica o bytecode de uma transação relacionada ao contrato ERC-20.
   * @param bytecode O bytecode da transação.
   * @returns Uma descrição da transação decodificada.
   * @throws Um erro se o bytecode fornecido for nulo.
   */
  public decodeBytecode(bytecode: ByteCodeType): ByteCodeDescriptionType {
    NotBeNullRule(bytecode, "EthersErc20Module:decodeBytecode");
    return this._interface.parseTransaction({ data: bytecode });
  }

  /**
   * Obtém o contrato ERC-20.
   * @returns O contrato ERC-20.
   */
  public get contract(): ContractType {
    return this._contract;
  }

  /**
   * Obtém o endereço do contrato ERC-20.
   * @returns O endereço do contrato ERC-20.
   */
  public get address(): AddressType {
    return this._address;
  }
}

export default EthersErc20Module;
