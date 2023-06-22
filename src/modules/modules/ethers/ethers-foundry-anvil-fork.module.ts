/**
 * Módulo EthersFoundryAnvilForkModule para iniciar e gerenciar um processo Anvil para fork de rede Ethereum.
 */
import { ethers } from "ethers";
import { exec, execSync } from "child_process";
import { FoundryAnvilForkInterface } from "../../interfaces/foundry-anvil-fork.interface";
import { Endpoint, EthersJsonRpcProvider, Process, SystemPort, SystemQuery, TypeMnemonic } from "../../../types";
import AnvilNotFound from "../../../errors/anvil-not-found.error";

/**
 * Interface para a solicitação de criação do módulo EthersFoundryAnvilForkModule.
 */
export interface EthersFoundryAnvilForkModuleRequest {
  port: SystemPort;
  mnemonic: TypeMnemonic;
  endpoint: Endpoint;
}

class EthersFoundryAnvilForkModule implements FoundryAnvilForkInterface {
  _systemQuery: SystemQuery;
  _systemPort: SystemPort;
  _mnemonic: TypeMnemonic;
  _endpoint: Endpoint;
  _provider: EthersJsonRpcProvider;
  _process: Process;

  /**
   * Cria uma instância do módulo EthersFoundryAnvilForkModule.
   * @param {EthersFoundryAnvilForkModuleRequest} options - Opções para a criação do módulo.
   */
  constructor({ port, mnemonic, endpoint }: EthersFoundryAnvilForkModuleRequest) {
    this._systemPort = port;
    this._mnemonic = mnemonic;
    this._endpoint = endpoint;

    this._systemQuery = `anvil --fork-url ${this._endpoint} --port ${this._systemPort} --silent --mnemonic "${this._mnemonic}" --no-mining  --order fifo`;
    this._process = exec(this._systemQuery);

    this._process.stderr?.on("data", (error) => {
      if (error == "/bin/sh: 1: anvil: not found\n") throw new AnvilNotFound({ reference: error });
    });

    this._provider = new ethers.providers.JsonRpcProvider(`http://localhost:${this._systemPort}`);
  }

  /**
   * Retorna o provedor Ethers utilizado para interagir com a rede forked.
   * @returns {EthersJsonRpcProvider} - O provedor Ethers.
   */
  public Provider<T>(): T {
    return this._provider as T;
  }

  /**
   * Desconecta o processo Anvil e encerra a conexão com a rede forked.
   */
  public Disconnect() {
    let findProcess = execSync(
      `ps aux | grep "anvil --fork-url ${this._endpoint}--port ${this._systemPort} --silent" | egrep -v "(/bin/sh -c|grep anvil)"`
    ).toString().replace(/  +/g, ' ');

    const regex = new RegExp('root (.*?) ', 'g');
    const child_pid = (regex.exec(findProcess) as Array<any>)[1];

    exec(`kill -9 ${child_pid}`);
    exec(`kill -9 ${this._process.pid}`);
  }
}

export default EthersFoundryAnvilForkModule;
