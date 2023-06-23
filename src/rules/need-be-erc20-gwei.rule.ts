import DataRuleError from "../errors/data-rule.error";
import { CallerType, GweiType } from "../types";

/**
 * Verifica se o valor fornecido é um valor ERC20 válido em Gwei.
 * @param {Gwei} gwei - O valor Gwei a ser verificado.
 * @param {Caller} caller - O nome do chamador da função.
 * @returns {boolean} - Retorna um valor booleano indicando se o argumento de gwei é um valor ERC20 válido em Gwei.
 * @throws {DataRuleError} - Lança uma exceção DataRuleError se o argumento de gwei não corresponder ao padrão esperado.
 */
export function NeedBeErc20GweiRule
(
  gwei:GweiType,
  caller:CallerType
): boolean{
  const _reference = `NeedBeErc20GweiRule:${caller}: value is ${gwei}`
  const _regex = /^\d+$/
  
  if(!_regex.test(gwei))
    throw new DataRuleError({reference:_reference})

  return true;  
}