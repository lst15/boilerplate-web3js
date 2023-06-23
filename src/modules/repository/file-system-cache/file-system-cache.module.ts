import { NotBeNullRule } from "../../../rules/not-be-null.rule";
import { CacheNameSpaceType } from "../../../types";
import { SystemCache } from "../interfaces/system-cache.interface";
import Cache, { FileSystemCache } from "file-system-cache";

/**
 * A interface `FileSystemCacheModuleRequest` define a estrutura da requisição para criar uma instância de `FileSystemCacheModule`.
 * Ela inclui um campo `namespace` que especifica o namespace do cache.
 */
export interface FileSystemCacheModuleRequest {
  namespace: CacheNameSpaceType;
}

class FileSystemCacheModule implements SystemCache {
  systemCache: any;

  /**
   * Cria uma instância da classe `FileSystemCacheModule` com base na requisição fornecida.
   * @param {FileSystemCacheModuleRequest} request - A requisição para criar uma instância de `FileSystemCacheModule`.
   * @throws {NotBeNullRule} Se o campo `namespace` na requisição for nulo ou indefinido.
   */
  constructor({ namespace }: FileSystemCacheModuleRequest) {
    // Verifica se o campo 'namespace' não é nulo ou indefinido
    NotBeNullRule(namespace, "FileSystemCacheModuleRequest");

    this.systemCache = Cache({
      basePath: `${__dirname}/../cache/.${namespace}`,
      ns: namespace
    });
  }

  /**
   * Obtém o valor armazenado em cache com base na chave fornecida.
   * @param {string} key - A chave para recuperar o valor do cache.
   * @returns {Promise<any>} O valor armazenado em cache.
   * @throws {NotBeNullRule} Se a chave fornecida for nula ou indefinida.
   */
  async getCache(key: string): Promise<any> {
    // Verifica se a chave não é nula ou indefinida
    NotBeNullRule(key, "getCache");

    const value = await this.systemCache.get(key);

    return value;
  }

  /**
   * Armazena um valor em cache com base na chave fornecida.
   * @param {string} key - A chave para armazenar o valor em cache.
   * @param {any} value - O valor a ser armazenado em cache.
   * @param {number} ttl - O tempo de vida em cache em segundos.
   * @throws {NotBeNullRule} Se a chave, o valor ou o TTL forem nulos ou indefinidos.
   */
  async setCache(key: string, value: any, ttl: number): Promise<void> {
    // Verifica se a chave, o valor e o TTL não são nulos ou indefinidos
    NotBeNullRule(key, "setCache");
    NotBeNullRule(value, "setCache");
    NotBeNullRule(ttl, "setCache");

    await this.systemCache.set(key, value, ttl);
  }
  
}

export default FileSystemCacheModule;