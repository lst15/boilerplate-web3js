import DataRuleError from "../errors/data-rule.error";
import { Caller, TransactionHash } from "../types";

/**
 * Verifica se a transação fornecida é um hash de transação válido.
 * @param {TransactionHash} transactionHash - O hash de transação a ser verificado.
 * @param {Caller} caller - O nome do chamador da função.
 * @returns {boolean} - Retorna um valor booleano indicando se o argumento de transação é um hash de transação válido.
 * @throws {DataRuleError} - Lança uma exceção DataRuleError se o argumento de transação não corresponder ao padrão esperado.
 */
export function NeedBeATransactionHashRule
(
  transactionHash:TransactionHash,
  caller:Caller
): boolean{
  const _reference = `NeedBeATransactionHashRule:${caller}: value is ${transactionHash}`
  const _regex = /^0x([A-Fa-f0-9]{64})$/;

  if(!_regex.test(transactionHash))
    throw new DataRuleError({reference:_reference})

  return true;

}