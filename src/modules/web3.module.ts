import Web3 from "web3";
import { Endpoint } from "../types";

// Classe que encapsula uma instância do provedor Web3
interface Web3ModuleRequest {
  endpoint: Endpoint; // Endpoint para se conectar ao nó do Ethereum
}

class Web3Module {
  private _provider: Web3;

  // Construtor que recebe um objeto de solicitação contendo o endpoint do provedor Web3
  constructor({ endpoint }: Web3ModuleRequest) {
    this._provider = new Web3(endpoint); // Cria uma instância do provedor Web3 usando o endpoint fornecido
  }

  // Getter para acessar o provedor Web3
  public get provider(): Web3 {
    return this._provider;
  }
}

export default Web3Module;
