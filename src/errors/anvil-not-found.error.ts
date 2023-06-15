/**
 * Interface que define a estrutura do objeto de requisição para o erro AnvilNotFound.
 */
interface AnvilNotFoundRequest {
  reference: string;
}

/**
 * Classe de erro AnvilNotFound, lançada quando não é possível acessar o recurso "anvil".
 * Estende a classe nativa Error.
 */
class AnvilNotFound extends Error {
  /**
   * Construtor da classe AnvilNotFound.
   * @param {AnvilNotFoundRequest} request - Objeto contendo a referência do recurso "anvil".
   */
  constructor({ reference }: AnvilNotFoundRequest) {
    // Chama o construtor da classe pai (Error) com a mensagem de erro personalizada
    super(`Não foi possível acessar o recurso anvil: (${reference})`);

    // Define o nome da classe de erro
    this.name = 'AnvilNotFound';
  }
}

export default AnvilNotFound;
