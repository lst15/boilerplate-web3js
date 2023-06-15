/**
 * A classe `PancakeSwapRouterV2Module` é responsável por lidar com o contrato ABI (Application Binary Interface)
 * do roteador PancakeSwap V2.
 * 
 * Ela fornece métodos para acessar o ABI, a interface, decodificar o bytecode de transação e interagir com as funções do contrato.
 */
import { ethers } from "ethers";
import { FileName, AbiInterface, ByteCode, ByteCodeDescription, Address, Contract, signerOrProvider } from "../../types";
import { openFile } from "../../utils/load-file.util";
import { NotBeNullRule } from "../../rules/not-be-null.rule";

/**
 * Interface para a requisição de criação de um contrato PancakeSwap Router V2.
 */
export interface EthersPancakeSwapRouterV2ModuleRequest {
  address: Address;
  signerOrProvider?:signerOrProvider;
}

class EthersPancakeSwapRouterV2Module {
  private _abi: any;
  private _AbiFileName: FileName;
  private _interface: AbiInterface;
  private _address: Address;
  private _contract: Contract;
  
  /**
   * Cria uma instância do objeto `PancakeSwapRouterV2Module`.
   * Carrega o arquivo ABI correspondente e cria uma interface ethers com base nesse ABI.
   * @param address O endereço do contrato PancakeSwap Router V2.
   */
  constructor({ address,signerOrProvider }: EthersPancakeSwapRouterV2ModuleRequest) {
    this._AbiFileName = "pancake-swap-router-v2";
    this._abi = openFile(`${__dirname}/../../abi/${this._AbiFileName}.abi.json`);
    this._interface = new ethers.utils.Interface(this._abi);
    this._address = address;

    this._contract = new ethers.Contract(
      this._address,
      this._interface,
      signerOrProvider
    )
  }

  /**
   * Obtém o ABI do contrato PancakeSwap Router V2.
   * @returns O ABI do contrato.
   */
  public get abi(): any {
    return this._abi;
  }

  /**
   * Obtém a interface ethers do contrato PancakeSwap Router V2.
   * @returns A interface ethers do contrato.
   */
  public get interface(): AbiInterface {
    return this._interface;
  }

  /**
   * Decodifica o bytecode de uma transação PancakeSwap Router V2 e retorna sua descrição.
   * @param bytecode O bytecode da transação a ser decodificado.
   * @returns A descrição da transação decodificada.
   * @throws Um erro se o bytecode fornecido for nulo ou indefinido.
   */
  public decodeBytecode(bytecode: ByteCode): ByteCodeDescription {
    NotBeNullRule(bytecode, "PancakeSwapRouterV2Module:decodeBytecode");
    return this._interface.parseTransaction({ data: bytecode });
  }

  /**
   * Obtém o contrato PancakeSwap Router V2.
   * @returns O contrato PancakeSwap Router V2.
   */
  public get contract(): Contract {
    return this._contract;
  }

  /**
   * Obtém o endereço do contrato PancakeSwap Router V2.
   * @returns O endereço do contrato PancakeSwap Router V2.
   */
  public get address(): Address {
    return this._address;
  }

}

export default EthersPancakeSwapRouterV2Module;
