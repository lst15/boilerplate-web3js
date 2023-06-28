import DataRuleError from "../errors/data-rule.error";
import { AddressType, CallerType } from "../types";

/**
 * Verifica se o endereço fornecido é um endereço ERC20 válido.
 * @param {Address} address - O endereço a ser verificado.
 * @param {Caller} caller - O nome do chamador da função.
 * @returns {boolean} - Retorna um valor booleano indicando se o argumento de endereço é um endereço ERC20 válido.
 * @throws {DataRuleError} - Lança uma exceção DataRuleError se o argumento de endereço não corresponder ao padrão esperado.
 */
export function NeedBeErc20AddressRule
(
  address:AddressType,
  caller:CallerType
): boolean{
  const _reference = `NeedBeErc20AddressRule:${caller}: value is ${address}`
  const _regex = /^(?:0x)[0-9a-fA-F]{40}$/;
  
  if(!_regex.test(address)) {
    throw new DataRuleError({reference:_reference})
  } else {
    return true;
  }
  
}