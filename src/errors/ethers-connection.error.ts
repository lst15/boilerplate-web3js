/**
 * Classe EthersConnectionError, lançada quando ocorre um erro de conexão com o websocket.
 * Estende a classe nativa Error.
 */
export class EthersConnectionError extends Error {	
	/**
	 * Construtor da classe EthersConnectionError.
	 * Cria uma nova instância do erro de conexão com o websocket.
	 */
	constructor() {
		// Chama o construtor da classe pai (Error) com a mensagem de erro personalizada
		super("Houve um erro de conexão com o websocket");
	}
}
