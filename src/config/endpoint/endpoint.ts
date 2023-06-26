import { InvalidFileConfigError } from "../../errors/invalid-file-config-error";
import { InvalidDataConfigError } from "../../errors/invalid-data-config-error";
import { LoadConfig } from "../../utils/load-config.util";

/**
 * Representa uma conexão configurada a partir de um arquivo JSON.
 */
export interface IEndpoint {
  list: {
    default: { ws: string, http: string };
    [key: string]: { ws: string, http: string };
  };
}

class Endpoint {
  private _endpoint_configs: IEndpoint;
  private _reference: string;
  private _fileConfig: string;
  private _configName: string;

  /**
   * Cria uma instância da classe Endpoint.
   * Carrega a configuração de conexão a partir de um arquivo JSON e valida as informações.
   * @throws {InvalidFileConfigError} Quando a configuração do arquivo é inválida ou ausente.
   * @throws {InvalidDataConfigError} Quando os URLs especificados na configuração são inválidos.
   */
  constructor() {
    this._configName = `endpoint_configs`;
    this._fileConfig = "endpoint";
    this._reference = `${this._fileConfig}:${this._configName}`;

    // Carrega a configuração a partir de um arquivo JSON
    const config: IEndpoint = LoadConfig<IEndpoint>({
      file: `${__dirname}/${this._fileConfig}.config.json`,
      config_name: this._configName,
      reference: this._reference,
    });

    // Verifica a existência da propriedade 'list' na configuração
    if (!config.list) {
      throw new InvalidFileConfigError({ reference: `${this._reference}:list` });
    }

    // // Verifica a existência da propriedade 'default' na configuração
    // if (config.list.default === undefined) {
    //   throw new InvalidFileConfigError({ reference: `${this._reference}:list:default` });
    // }

    const wsRegex = /^(wss?):\/\/[^\s/$.?#].[^\s]*$/;
    const httpRegex = /^(https?):\/\/[^\s/$.?#].[^\s]*$/;

    // Valida os URLs especificados na configuração
    for (const key in config.list) {
      const value = config.list[key];

      // Verifica a existência das propriedades 'http' e 'ws'
      if (value.http === undefined) {
        throw new InvalidFileConfigError({ reference: `${this._reference}:list:${key}:http` });
      }

      if (value.ws === undefined) {
        throw new InvalidFileConfigError({ reference: `${this._reference}:list:${key}:ws` });
      }

      // Valida os URLs com expressões regulares
      if (!wsRegex.test(value.ws)) {
        throw new InvalidDataConfigError({ reference: `${this._reference}:list:${key}:ws` });
      }

      if (!httpRegex.test(value.http)) {
        throw new InvalidDataConfigError({ reference: `${this._reference}:list:${key}:http` });
      }
    }

    this._endpoint_configs = config;
  }

  /**
   * Obtém a configuração de conexão carregada do arquivo JSON.
   * @returns A configuração de conexão.
   */
  public get config(): IEndpoint {
    return this._endpoint_configs;
  }
}

export default Endpoint;
