/**
 * Interface FileNotFoundErrorRequest, define a estrutura do objeto de requisição para o erro de arquivo não encontrado.
 */
interface FileNotFoundErrorRequest {
	reference: string;
}

/**
 * Classe FileNotFoundError, lançada quando um arquivo não é encontrado.
 * Estende a classe nativa Error.
 */
class FileNotFoundError extends Error {
	/**
	 * Construtor da classe FileNotFoundError.
	 * Cria uma nova instância do erro de arquivo não encontrado com a referência do arquivo.
	 * @param reference A referência do arquivo que não foi encontrado.
	 */
	constructor({ reference }: FileNotFoundErrorRequest) {
		// Chama o construtor da classe pai (Error) com a mensagem de erro personalizada
		super(`O arquivo não foi encontrado: (${reference})`);
		this.name = 'FileNotFoundError';
	}
}

export default FileNotFoundError;
