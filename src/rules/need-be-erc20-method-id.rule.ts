import DataRuleError from "../errors/data-rule.error";
import { Caller, MethodId } from "../types";

/**
 * Verifica se o ID do método fornecido é um ID de método ERC20 válido.
 * @param {MethodId} methodId - O ID do método a ser verificado.
 * @param {Caller} caller - O nome do chamador da função.
 * @returns {boolean} - Retorna um valor booleano indicando se o argumento de methodId é um ID de método ERC20 válido.
 * @throws {DataRuleError} - Lança uma exceção DataRuleError se o argumento de methodId não corresponder ao padrão esperado.
 */
export function NeedBeErc20MethodIdRule
(
  methodId:MethodId,
  caller:Caller
): boolean{
  const _reference = `NeedBeErc20MethodIdRule:${caller}: value is ${methodId}`
  const _regex = /^0x[0-9a-fA-F]{8}$/
  
  if(!_regex.test(methodId))
    throw new DataRuleError({reference:_reference})

  return true;
}