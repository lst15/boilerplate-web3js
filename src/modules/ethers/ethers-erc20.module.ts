import { Contract, ethers } from "ethers";
import { openFile } from "../../utils/load-file.util";
import { NotBeNullRule } from "../../rules/not-be-null.rule";
import { AbiInterface, Address, ByteCode, ByteCodeDescription, FileName, signerOrProvider } from "../../types";

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
class EthersErc20Module {
  private _abi: any;
  private _AbiFileName: FileName;
  private _interface: AbiInterface;
  private _address: Address;
  private _contract: Contract;

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

  /**
   * Retorna a interface ethers.utils.Interface do contrato ERC-20.
   * @returns A interface ethers.utils.Interface do contrato.
   */
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
