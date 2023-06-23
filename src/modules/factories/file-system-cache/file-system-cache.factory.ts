import FileSystemCacheModule, { FileSystemCacheModuleRequest } from "../repository/file-system-cache/file-system-cache.module";

class FileSystemCacheFactory{
  static create({namespace}:FileSystemCacheModuleRequest){
    return new FileSystemCacheModule({namespace})
  }
}

export default FileSystemCacheFactory;