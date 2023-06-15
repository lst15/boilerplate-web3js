/**
 * Interface InvalidDataConfigErrorRequest, define a estrutura do objeto de requisição para o erro de configuração de dados inválida.
 */
interface InvalidDataConfigErrorRequest {
	reference: string;
}

/**
 * Classe InvalidDataConfigError, lançada quando ocorre um erro de configuração de dados inválida.
 * Estende a classe nativa Error.
 */
export class InvalidDataConfigError extends Error {
	/**
	 * Construtor da classe InvalidDataConfigError.
	 * Cria uma nova instância do erro de configuração de dados inválida com a referência do erro.
	 * @param reference A referência do erro de configuração de dados inválida.
	 */
	constructor({ reference }: InvalidDataConfigErrorRequest) {
		// Chama o construtor da classe pai (Error) com a mensagem de erro personalizada
		super(`Valor de parâmetro incorreto: (${reference})`);
	}
}
