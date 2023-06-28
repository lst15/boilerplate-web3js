import { InvalidDataConfigError } from "../../errors/invalid-data-config-error";
import { InvalidFileConfigError } from "../../errors/invalid-file-config-error";
import { LoadConfig } from "../../utils/load-config.util";

/**
 * Representa a configuração de contratos carregada de um arquivo JSON.
 */
export interface IContracts {
  list: {
    default: string;
    [key: string]: string;
  };
}

class Contracts {
  private _contracts_config: IContracts;
  private _reference: string;
  private _fileConfig: string;
  private _configName: string;

  /**
   * Cria uma instância da classe Contracts.
   * Carrega a configuração de contratos a partir de um arquivo JSON e valida as informações.
   * @throws {InvalidFileConfigError} Quando a configuração do arquivo é inválida ou ausente.
   * @throws {InvalidDataConfigError} Quando um endereço de contrato especificado na configuração é inválido.
   */
  constructor() {
    this._configName = "contracts_config";
    this._fileConfig = "contracts";
    this._reference = `${this._fileConfig}:${this._configName}`;

    // Carrega a configuração de contratos a partir de um arquivo JSON
    const config: IContracts = LoadConfig<IContracts>({
      file: `${__dirname}/${this._fileConfig}.config.json`,
      config_name: this._configName,
      reference: this._reference,
    });

    // Verifica a existência da propriedade 'list' na configuração
    if (!config.list) {
      throw new InvalidFileConfigError({ reference: `${this._reference}:list` });
    }

    const addressRegex = /^(?:0x)[0-9a-fA-F]{40}$/;

    // Valida os endereços de contrato especificados na configuração
    for (const key in config.list) {
      const value = config.list[key];

      // Valida o endereço de contrato com uma expressão regular
      if (!addressRegex.test(value)) {
        throw new InvalidDataConfigError({ reference: `${this._reference}:list:${key}` });
      }
    }

    this._contracts_config = config;
  }

  /**
   * Obtém a configuração de contratos carregada do arquivo JSON.
   * @returns A configuração de contratos.
   */
  public get config(): IContracts {
    return this._contracts_config;
  }
}

export default Contracts;
