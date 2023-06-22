import { NotBeNullRule } from "../../../rules/not-be-null.rule";
import { Address, signerOrProvider, FileName, AbiInterface, Contract, ByteCode, ByteCodeDescription } from "../../../types";
import { openFile } from "../../../utils/load-file.util";
import { Erc20Interface } from "../../interfaces/erc20.interface";
import ethers from "ethers";

/**
 * Interface para a requisição de criação de um contrato ERC20.
 */
export interface EthersErc20ModuleRequest {
  address: Address;
  signerOrProvider?:signerOrProvider;
}

/**
 * A classe `EthersErc20Module` representa o contrato ABI (Application Binary Interface) de um contrato ERC-20.
 * 
 * Ela lida com o carregamento e processamento do ABI, bem como com a decodificação do bytecode de transações relacionadas a esse contrato.
 */
class EthersErc20Module implements Erc20Interface{
  _abi: any;
  _AbiFileName: FileName;
  _interface: AbiInterface;
  _address: Address;
  _contract: Contract;

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


  public get interface(): AbiInterface {
    return this._interface;
  }

  /**
   * Decodifica o bytecode de uma transação relacionada ao contrato ERC-20.
   * @param bytecode O bytecode da transação.
   * @returns Uma descrição da transação decodificada.
   * @throws Um erro se o bytecode fornecido for nulo.
   */
  public decodeBytecode(bytecode: ByteCode): ByteCodeDescription {
    NotBeNullRule(bytecode, "EthersErc20Module:decodeBytecode");
    return this._interface.parseTransaction({ data: bytecode });
  }

  /**
   * Obtém o contrato ERC-20.
   * @returns O contrato ERC-20.
   */
  public get contract(): Contract {
    return this._contract;
  }

  /**
   * Obtém o endereço do contrato ERC-20.
   * @returns O endereço do contrato ERC-20.
   */
  public get address(): Address {
    return this._address;
  }
}

export default EthersErc20Module;
