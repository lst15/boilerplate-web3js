/**
 * Módulo EthersTransactionsModule que lida com operações relacionadas a configurações de transações.
 */
import { ITransactions } from "../../config/transactions/transactions";
import { NeedBeErc20AddressRule } from "../../rules/need-be-erc20-address.rule";
import { NeedBeErc20GweiRule } from "../../rules/need-be-erc20-gwei.rule";
import { NeedBeErc20MethodIdRule } from "../../rules/need-be-erc20-method-id.rule";
import { Address, Gwei, MethodId } from "../../types";

/**
 * Interface para a solicitação de criação do módulo EthersTransactionsModule.
 */
interface EthersTransactionsModuleRequest {
  transactionsConfig: ITransactions;
}

class EthersTransactionsModule {
  private _transactionsConfig: ITransactions;

  /**
   * Cria uma instância do módulo EthersTransactionsModule com base na configuração de transações fornecida.
   * @param {EthersTransactionsModuleRequest} options - Opções para a criação do módulo.
   */
  constructor({ transactionsConfig }: EthersTransactionsModuleRequest) {
    this._transactionsConfig = transactionsConfig;
  }

  /**
   * Verifica se o endereço de origem está sendo focado nas transações.
   * @param {Address} address - O endereço de origem a ser verificado.
   * @returns {boolean} - Retorna true se o endereço estiver sendo focado, caso contrário, retorna false.
   */
  public IsFocusingFromAddress(address: Address): boolean {
    NeedBeErc20AddressRule(address, "IsFocusingFromAddress");

    for (const key in this._transactionsConfig.focus_list.from_addresses_list) {
      const value = this._transactionsConfig.focus_list.from_addresses_list[key];

      if (value == address) return true;
    }

    return false;
  }

  /**
   * Verifica se o endereço de origem está sendo ignorado nas transações.
   * @param {Address} address - O endereço de origem a ser verificado.
   * @returns {boolean} - Retorna true se o endereço estiver sendo ignorado, caso contrário, retorna false.
   */
  public IsIgnoringFromAddress(address: Address): boolean {
    NeedBeErc20AddressRule(address, "IsIgnoringFromAddress");

    for (const key in this._transactionsConfig.ignore_list.from_addresses_list) {
      const value = this._transactionsConfig.ignore_list.from_addresses_list[key];

      if (value == address) return true;
    }

    return false;
  }

  /**
   * Verifica se o endereço de destino está sendo focado nas transações.
   * @param {Address} address - O endereço de destino a ser verificado.
   * @returns {boolean} - Retorna true se o endereço estiver sendo focado, caso contrário, retorna false.
   */
  public IsFocusingToAddress(address: Address): boolean {
    NeedBeErc20AddressRule(address, "IsFocusingToAddress");

    for (const key in this._transactionsConfig.focus_list.to_addresses_list) {
      const value = this._transactionsConfig.focus_list.to_addresses_list[key];

      if (value == address) return true;
    }

    return false;
  }

  /**
   * Verifica se o endereço de destino está sendo ignorado nas transações.
   * @param {Address} address - O endereço de destino a ser verificado.
   * @returns {boolean} - Retorna true se o endereço estiver sendo ignorado, caso contrário, retorna false.
   */
  public IsIgnoringToAddress(address: Address): boolean {
    NeedBeErc20AddressRule(address, "IsIgnoringToAddress");

    for (const key in this._transactionsConfig.ignore_list.to_addresses_list) {
      const value = this._transactionsConfig.ignore_list.to_addresses_list[key];

      if (value == address) return true;
    }

    return false;
  }

  /**
   * Verifica se o método de ID está sendo focado nas transações.
   * @param {MethodId} methodId - O ID do método a ser verificado.
   * @returns {boolean} - Retorna true se o método estiver sendo focado, caso contrário, retorna false.
   */
  public IsFocusingMethodId(methodId: MethodId): boolean {
    NeedBeErc20MethodIdRule(methodId, "IsFocusingMethodId");

    for (const key in this._transactionsConfig.focus_list.method_list) {
      const value = this._transactionsConfig.focus_list.method_list[key];

      if (value == methodId) return true;
    }

    return false;
  }

  /**
   * Verifica se o método de ID está sendo ignorado nas transações.
   * @param {MethodId} methodId - O ID do método a ser verificado.
   * @returns {boolean} - Retorna true se o método estiver sendo ignorado, caso contrário, retorna false.
   */
  public IsIgnoringMethodId(methodId: MethodId): boolean {
    NeedBeErc20MethodIdRule(methodId, "IsIgnoringMethodId");

    for (const key in this._transactionsConfig.ignore_list.method_list) {
      const value = this._transactionsConfig.ignore_list.method_list[key];

      if (value == methodId) return true;
    }

    return false;
  }

  /**
   * Verifica se o valor de gas em Gwei está dentro do intervalo definido nas configurações de transações focadas.
   * @param {Gwei} gwei - O valor de gas em Gwei a ser verificado.
   * @returns {boolean} - Retorna true se o valor estiver dentro do intervalo, caso contrário, retorna false.
   */
  public IsGasGweiRange(gwei: Gwei): boolean {
    NeedBeErc20GweiRule(gwei, "IsGasGweiRange");
    const castGwei = Number(gwei);

    if (castGwei < this._transactionsConfig.focus_gas_gwei_range.min) return false;

    if (castGwei > this._transactionsConfig.focus_gas_gwei_range.max) return false;

    return true;
  }
}

export default EthersTransactionsModule;
