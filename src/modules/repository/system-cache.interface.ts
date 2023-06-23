export interface SystemCache{
  systemCache: any;

  /**
   * Obtém o valor armazenado em cache com base na chave fornecida.
   * @param {string} key - A chave para recuperar o valor do cache.
   * @returns {Promise<any>} O valor armazenado em cache.
   * @throws {NotBeNullRule} Se a chave fornecida for nula ou indefinida.
   */  
  getCache(key: string): Promise<any> 

  /**
   * Armazena um valor em cache com base na chave fornecida.
   * @param {string} key - A chave para armazenar o valor em cache.
   * @param {any} value - O valor a ser armazenado em cache.
   * @param {number} ttl - O tempo de vida em cache em segundos.
   * @throws {NotBeNullRule} Se a chave, o valor ou o TTL forem nulos ou indefinidos.
   */  
  setCache(key: string, value: any, ttl: number): Promise<void> 

}