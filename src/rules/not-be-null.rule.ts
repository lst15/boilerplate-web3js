import DataRuleError from "../errors/data-rule.error";
import { Caller } from "../types";

/**
 * Verifica se o valor fornecido não é nulo.
 * @param {any} value - O valor a ser verificado.
 * @param {Caller} caller - O nome do chamador da função.
 * @returns {boolean} - Retorna um valor booleano indicando se o argumento de valor não é nulo.
 * @throws {DataRuleError} - Lança uma exceção DataRuleError se o argumento de valor for undefined ou uma string vazia.
 */
export function NotBeNullRule
(
  value:any,
  caller:Caller
): boolean{
  const _reference = `NotBeNullRule:${caller}: value is ${value}`;

  if(value === undefined || value === "")
    throw new DataRuleError({reference:_reference});
  
    return true;
}