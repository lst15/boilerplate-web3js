/**
 * Interface InvalidFileConfigErrorRequest, define a estrutura do objeto de requisição para o erro de arquivo de configuração inválido.
 */
interface InvalidFileConfigErrorRequest {
	reference: string;
}

/**
 * Classe InvalidFileConfigError, lançada quando ocorre um erro de arquivo de configuração inválido.
 * Estende a classe nativa Error.
 */
export class InvalidFileConfigError extends Error {
	/**
	 * Construtor da classe InvalidFileConfigError.
	 * Cria uma nova instância do erro de arquivo de configuração inválido com a referência do erro.
	 * @param reference A referência do erro de arquivo de configuração inválido.
	 */
	constructor({ reference }: InvalidFileConfigErrorRequest) {
		// Chama o construtor da classe pai (Error) com a mensagem de erro personalizada
		super(`Arquivo de configuração inválido: (${reference})`);
	}
}
