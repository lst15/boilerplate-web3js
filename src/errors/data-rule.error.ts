/**
 * Interface que define a estrutura do objeto de requisição para o erro DataRuleError.
 */
interface DataRuleErrorRequest {
  reference: string;
}

/**
 * Classe de erro DataRuleError, lançada quando o valor do argumento não respeita uma regra específica.
 * Estende a classe nativa Error.
 */
class DataRuleError extends Error {
  /**
   * Construtor da classe DataRuleError.
   * @param {DataRuleErrorRequest} request - Objeto contendo a referência da regra violada.
   */
  constructor({ reference }: DataRuleErrorRequest) {
    // Chama o construtor da classe pai (Error) com a mensagem de erro personalizada
    super(`O valor do argumento não respeita uma regra: (${reference})`);

    // Define o nome da classe de erro
    this.name = 'DataRuleError';
  }
}

export default DataRuleError;
