/**
 * A classe `PancakeSwapFactoryV2Contract` é responsável por lidar com o contrato ABI (Application Binary Interface)
 * da fábrica PancakeSwap V2 e suas funções específicas.
 * 
 * Ela fornece métodos para acessar o ABI, a interface, decodificar o bytecode de transação e executar as funções do contrato.
 */
import { Contract, ethers } from "ethers";
import { FileName, AbiInterface, ByteCode, ByteCodeDescription, Address, signerOrProvider } from "../../types";
import { openFile } from "../../utils/load-file.util";
import { NotBeNullRule } from "../../rules/not-be-null.rule";

/**
 * Interface para a requisição de criação de um contrato PancakeSwap Factory V2.
 */
export interface EthersPancakeSwapFactoryV2ModuleRequest {
  address: Address;
  signerOrProvider?:signerOrProvider
}

class EthersPancakeSwapFactoryV2Module {
  private _abi: any;
  private _AbiFileName: FileName;
  private _interface: AbiInterface;
  private _address: Address
  private _contract: Contract;

  /**
   * Cria uma instância do objeto `PancakeSwapFactoryV2Contract`.
   * Carrega o arquivo ABI correspondente e cria uma interface ethers com base nesse ABI.
   * @param address O endereço do contrato PancakeSwap Factory V2.
   */
  constructor({ address,signerOrProvider }: EthersPancakeSwapFactoryV2ModuleRequest) {
    this._AbiFileName = "pancake-swap-factory-v2";
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
   * Obtém o ABI do contrato PancakeSwap Factory V2.
   * @returns O ABI do contrato.
   */
  public get abi(): any {
    return this._abi;
  }

  /**
   * Obtém a interface ethers do contrato PancakeSwap Factory V2.
   * @returns A interface ethers do contrato.
   */
  public get interface(): AbiInterface {
    return this._interface;
  }

  /**
   * Decodifica o bytecode de uma transação PancakeSwap Factory V2 e retorna sua descrição.
   * @param bytecode O bytecode da transação a ser decodificado.
   * @returns A descrição da transação decodificada.
   * @throws Um erro se o bytecode fornecido for nulo ou indefinido.
   */
  public decodeBytecode(bytecode: ByteCode): ByteCodeDescription {
    NotBeNullRule(bytecode, "PancakeSwapFactoryV2Module:decodeBytecode");
    return this._interface.parseTransaction({ data: bytecode });
  }

  /**
   * Obtém o contrato PancakeSwap Factory V2.
   * @returns O contrato PancakeSwap Factory V2.
   */
  public get contract(): Contract {    
    return this._contract;
  }

  /**
   * Obtém o endereço do contrato PancakeSwap Factory V2.
   * @returns O endereço do contrato PancakeSwap Factory V2.
   */
  public get address(): Address {
    return this._address;
  }

}

export default EthersPancakeSwapFactoryV2Module;