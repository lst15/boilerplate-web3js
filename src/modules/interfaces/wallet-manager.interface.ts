import { EthersJsonRpcProvider, HDNode, Wallet } from "../../types";

export interface WalletManagerInterface {
  
  /**
   * Obtém uma instância de carteira Ethereum com base no HDNode fornecido.
   * @param {HDNode} hdNode - O HDNode usado para criar a carteira.
   * @returns {Wallet} - A instância de carteira Ethereum gerada.
   */  
  getWallet(hdNode: HDNode): Wallet

  /**
   * Obtém várias instâncias de carteira Ethereum com base em uma lista de HDNodes.
   * @param {HDNode[]} hdNodeMulti - A lista de HDNodes usada para criar as carteiras.
   * @returns {Wallet[]} - As instâncias de carteira Ethereum geradas.
   */  
  getWalletMulti(hdNodeMulti: HDNode[]): Wallet[] 

  /**
   * Conecta uma carteira Ethereum a um provedor JSON-RPC.
   * @param {Wallet} wallet - A carteira a ser conectada.
   * @param {JsonRpcProvider} provider - O provedor JSON-RPC a ser usado para a conexão.
   * @returns {Wallet} - A carteira Ethereum conectada.
   */
  getWalletConnection(wallet: Wallet, provider: EthersJsonRpcProvider): Wallet 

  /**
   * Conecta várias carteiras Ethereum a um provedor JSON-RPC.
   * @param {Wallet[]} walletMulti - A lista de carteiras a serem conectadas.
   * @param {JsonRpcProvider} provider - O provedor JSON-RPC a ser usado para a conexão.
   * @returns {Wallet[]} - As carteiras Ethereum conectadas.
   */  
  getWalletConnectionMulti(walletMulti: Wallet[], provider: EthersJsonRpcProvider): Wallet[] 

}