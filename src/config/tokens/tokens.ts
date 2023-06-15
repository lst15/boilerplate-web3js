import { InvalidDataConfigError } from "../../errors/invalid-data-config-error";
import { InvalidFileConfigError } from "../../errors/invalid-file-config-error";
import { LoadConfig } from "../../utils/load-config.util";

/**
 * Representa a configuração de tokens carregada de um arquivo JSON.
 */
export interface ITokens {
  list: {
    default: { address: string; decimals: number };
    [key: string]: { address: string; decimals: number };
  };
}

class Tokens {
  private _tokens: ITokens;
  private _reference: string;
  private _fileConfig: string;
  private _configName: string;

  /**
   * Cria uma instância da classe Tokens.
   * Carrega a configuração de tokens a partir de um arquivo JSON e valida as informações.
   * @throws {InvalidFileConfigError} Quando a configuração do arquivo é inválida ou ausente.
   * @throws {InvalidDataConfigError} Quando um endereço de token ou o número de casas decimais especificados na configuração são inválidos.
   */
  constructor() {
    this._configName = "tokens_config";
    this._fileConfig = "tokens";
    this._reference = `${this._fileConfig}:${this._configName}`;

    // Carrega a configuração de tokens a partir de um arquivo JSON
    const config: ITokens = LoadConfig<ITokens>({
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

    const addressRegex = /^(?:0x)[0-9a-fA-F]{40}$/;

    // Valida os endereços e casas decimais dos tokens especificados na configuração
    for (const key in config.list) {
      const value = config.list[key];

      // Verifica se o endereço do token e o número de casas decimais estão definidos
      if (value.address === undefined) {
        throw new InvalidFileConfigError({ reference: `${this._reference}:list:${key}:address` });
      }
      if (value.decimals === undefined) {
        throw new InvalidFileConfigError({ reference: `${this._reference}:list:${key}:decimals` });
      }

      // Verifica se o número de casas decimais é um valor numérico
      if (typeof value.decimals !== "number") {
        throw new InvalidDataConfigError({ reference: `${this._reference}:list:${key}:decimals` });
      }

      // Valida o endereço do token com uma expressão regular
      if (!addressRegex.test(value.address)) {
        throw new InvalidDataConfigError({ reference: `${this._reference}:list:${key}` });
      }
    }

    this._tokens = config;
  }

  /**
   * Obtém a configuração de tokens carregada do arquivo JSON.
   * @returns A configuração de tokens.
   */
  public get config(): ITokens {
    return this._tokens;
  }
}

export default Tokens;
