import DataRuleError from "../errors/data-rule.error";
import { CallerType, ValueType } from "../types";

/**
 * Verifica se o valor fornecido é um número positivo.
 * @param {Value} value - O valor a ser verificado.
 * @param {string} caller - O nome do chamador da função.
 * @returns {boolean} - Retorna um valor booleano indicando se o argumento de valor é um número positivo.
 * @throws {DataRuleError} - Lança uma exceção DataRuleError se o argumento de valor for negativo.
 */
export function NeedBeAPositiveNumberRule
(
  value:ValueType,
  caller:CallerType
): boolean{
  const _reference = `NeedBeAPositiveNumberRule:${caller}: value is ${value}`;

  if(value < 0) {
    throw new DataRuleError({reference:_reference});
  } else {
    return true;
  }
  
}