import FileSystemCacheModule, { FileSystemCacheModuleRequest } from "../../repository/file-system-cache/file-system-cache.module";

class FileSystemCacheFactory {
  /**
   * Cria uma instância do módulo FileSystemCacheModule.
   * @param {FileSystemCacheModuleRequest} options - Opções para a criação do módulo.
   * @returns {FileSystemCacheModule} - A instância criada do módulo.
   */
  static create({ namespace }: FileSystemCacheModuleRequest): FileSystemCacheModule {
    // Cria e retorna uma nova instância do módulo FileSystemCacheModule com o namespace fornecido.
    return new FileSystemCacheModule({ namespace });
  }
}

export default FileSystemCacheFactory;
