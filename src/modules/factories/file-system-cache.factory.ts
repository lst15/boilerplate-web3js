import FileSystemCacheModule, { FileSystemCacheModuleRequest } from "../modules/file-system-cache.module";

class FileSystemCacheFactory{
  static create({namespace}:FileSystemCacheModuleRequest){
    return new FileSystemCacheModule({namespace})
  }
}

export default FileSystemCacheFactory;