import nconf from "nconf";
import { InvalidFileConfigError } from "../errors/invalid-file-config-error";

/**
 * Interface para a requisição de carregamento de configuração.
 */
interface LoadConfigRequest {
  file: string;
  config_name: string;
  reference: string;
}

/**
 * Função para carregar uma configuração a partir de um arquivo.
 * @param file O caminho do arquivo de configuração.
 * @param config_name O nome da configuração a ser carregada.
 * @param reference A referência da configuração para fins de identificação.
 * @returns A configuração carregada.
 * @throws InvalidFileConfigError se a configuração não for válida.
 */
export function LoadConfig<T>({ file, config_name, reference }: LoadConfigRequest): T {
  // Carrega o arquivo de configuração usando o nome fornecido
  nconf.file(config_name, {
    file: file
  });

  // Obtém a configuração a partir do nome fornecido
  const config: T = nconf.get(config_name);

  // Verifica se a configuração foi encontrada
  if (!config) {
    throw new InvalidFileConfigError({
      reference: `${reference}:${config_name}`,
    });
  }

  return config;
}
