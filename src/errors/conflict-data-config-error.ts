/**
 * Interface que define a estrutura do objeto de requisição para o erro ConflictDataConfigError.
 */
interface ConflictDataConfigErrorRequest {
  reference: string;
}

/**
 * Classe de erro ConflictDataConfigError, lançada quando há conflito nas configurações de dados.
 * Estende a classe nativa Error.
 */
class ConflictDataConfigError extends Error {
  /**
   * Construtor da classe ConflictDataConfigError.
   * @param {ConflictDataConfigErrorRequest} request - Objeto contendo a referência do conflito nas configurações de dados.
   */
  constructor({ reference }: ConflictDataConfigErrorRequest) {
    // Chama o construtor da classe pai (Error) com a mensagem de erro personalizada
    super(`Configurações estão conflitando: (${reference})`);

    // Define o nome da classe de erro
    this.name = 'ConflictDataConfigError';
  }
}

export default ConflictDataConfigError;
