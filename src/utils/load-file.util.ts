import fs from "fs";
import FileNotFoundError from "../errors/file-not-found-error";

/**
 * Interface para o erro de carregamento de arquivo.
 */
interface LoadFileError {
  code: string;
}

/**
 * Função para abrir um arquivo e retornar seu conteúdo.
 * @param path O caminho do arquivo a ser aberto.
 * @returns O conteúdo do arquivo.
 * @throws FileNotFoundError se o arquivo não for encontrado.
 */
export function openFile<T>(path: string): any {
  try {
    // Lê o arquivo de forma síncrona usando o caminho fornecido
    const file = fs.readFileSync(path, 'utf-8');
    return file;
  } catch (error) {
    // Verifica se o erro possui o código "ENOENT" indicando que o arquivo não foi encontrado
    if ((error as LoadFileError).code === "ENOENT") {
      // Lança uma exceção FileNotFoundError informando o caminho do arquivo
      throw new FileNotFoundError({ reference: path });
    }
  }
}
