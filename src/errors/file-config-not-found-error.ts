/**
 * Interface FileConfigNotFoundErrorRequest, define a estrutura do objeto de requisição para o erro de arquivo de configuração não encontrado.
 */
interface FileConfigNotFoundErrorRequest {
	reference: string;
}

/**
 * Classe FileConfigNotFoundError, lançada quando não é possível encontrar o arquivo de configurações.
 * Estende a classe nativa Error.
 */
export class FileConfigNotFoundError extends Error {	
	/**
	 * Construtor da classe FileConfigNotFoundError.
	 * Cria uma nova instância do erro de arquivo de configuração não encontrado com a referência do arquivo.
	 * @param reference A referência do arquivo de configurações que não foi encontrado.
	 */
	constructor({ reference }: FileConfigNotFoundErrorRequest) {
		// Chama o construtor da classe pai (Error) com a mensagem de erro personalizada
		super(`Não foi possível encontrar o arquivo de configurações (${reference})`);
	}
}
