/**
 * Classe EthersDetectNetworkError, lançada quando não é possível detectar a conexão de rede.
 * Estende a classe nativa Error.
 */
export class EthersDetectNetworkError extends Error {	
	/**
	 * Construtor da classe EthersDetectNetworkError.
	 * Cria uma nova instância do erro de detecção de conexão de rede.
	 */
	constructor() {
		// Chama o construtor da classe pai (Error) com a mensagem de erro personalizada
		super("Não foi possível detectar a conexão");
	}
}
