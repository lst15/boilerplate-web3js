import { JsonRpcProvider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { HDNode } from "ethers/lib/utils";
import { EthersJsonRpcProviderType,WalletType } from "../../../types";
import { WalletManagerModuleRepository } from "../../repositories/wallet-manager.module.repository";

class WalletManagerModuleImplementationEthers implements WalletManagerModuleRepository {
  /**
   * Obtém uma instância de carteira Ethereum com base no HDNode fornecido.
   * @param {HDNode} hdNode - O HDNode usado para criar a carteira.
   * @returns {Wallet} - A instância de carteira Ethereum gerada.
   */
  public getWallet(hdNode: HDNode): WalletType {
    const _wallet = new ethers.Wallet(hdNode);
    return _wallet;
  }

  /**
   * Obtém várias instâncias de carteira Ethereum com base em uma lista de HDNodes.
   * @param {HDNode[]} hdNodeMulti - A lista de HDNodes usada para criar as carteiras.
   * @returns {Wallet[]} - As instâncias de carteira Ethereum geradas.
   */
  public getWalletMulti(hdNodeMulti: HDNode[]): WalletType[] {
    const _walletMulti: WalletType[] = [];

    hdNodeMulti.forEach((hdNode) => {
      _walletMulti.push(new ethers.Wallet(hdNode));
    });

    return _walletMulti;
  }

  /**
   * Conecta uma carteira Ethereum a um provedor JSON-RPC.
   * @param {Wallet} wallet - A carteira a ser conectada.
   * @param {JsonRpcProvider} provider - O provedor JSON-RPC a ser usado para a conexão.
   * @returns {Wallet} - A carteira Ethereum conectada.
   */
  public getWalletConnection(wallet: WalletType, provider: EthersJsonRpcProviderType): WalletType {
    const _connection = wallet.connect(provider);
    return _connection;
  }

  /**
   * Conecta várias carteiras Ethereum a um provedor JSON-RPC.
   * @param {Wallet[]} walletMulti - A lista de carteiras a serem conectadas.
   * @param {JsonRpcProvider} provider - O provedor JSON-RPC a ser usado para a conexão.
   * @returns {Wallet[]} - As carteiras Ethereum conectadas.
   */
  public getWalletConnectionMulti(walletMulti: WalletType[], provider: EthersJsonRpcProviderType): WalletType[] {
    const _connectionMulti: WalletType[] = [];

    walletMulti.forEach((wallet) => {
      _connectionMulti.push(wallet.connect(provider));
    });

    return _connectionMulti;
  }

}

export default WalletManagerModuleImplementationEthers;