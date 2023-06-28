import { InvalidDataConfigError } from "../../errors/invalid-data-config-error";
import { InvalidFileConfigError } from "../../errors/invalid-file-config-error";
import { LoadConfig } from "../../utils/load-config.util";

/**
 * Representa a configuração de mnemônicos carregada de um arquivo JSON.
 */
export interface IMnemonic {
  list: {
    default: string;
    [key: string]: string;
  };
}

class Mnemonic {
  private _mnemonic_config: IMnemonic;
  private _reference: string;
  private _fileConfig: string;
  private _configName: string;

  /**
   * Cria uma instância da classe Mnemonic.
   * Carrega a configuração de mnemônicos a partir de um arquivo JSON e valida as informações.
   * @throws {InvalidFileConfigError} Quando a configuração do arquivo é inválida ou ausente.
   * @throws {InvalidDataConfigError} Quando um mnemônico especificado na configuração é inválido.
   */
  constructor() {
    this._configName = "mnemonic_config";
    this._fileConfig = "mnemonic";
    this._reference = `${this._fileConfig}:${this._configName}`;

    // Carrega a configuração de mnemônicos a partir de um arquivo JSON
    const config: IMnemonic = LoadConfig<IMnemonic>({
      file: `${__dirname}/${this._fileConfig}.config.json`,
      config_name: this._configName,
      reference: this._reference,
    });

    // Verifica a existência da propriedade 'list' na configuração
    if (!config.list) {
      throw new InvalidFileConfigError({ reference: `${this._reference}:list` });
    }

    const mnemonicRegex = /^([a-zA-Z]+\s){11}[a-zA-Z]+$/;

    // Valida os mnemônicos especificados na configuração
    for (const key in config.list) {
      const value = config.list[key];

      // Valida o mnemônico com uma expressão regular
      if (!mnemonicRegex.test(value)) {
        throw new InvalidDataConfigError({ reference: `${this._reference}:list:${key}` });
      }
    }

    this._mnemonic_config = config;
  }

  /**
   * Obtém a configuração de mnemônicos carregada do arquivo JSON.
   * @returns A configuração de mnemônicos.
   */
  public get config(): IMnemonic {
    return this._mnemonic_config;
  }
}

export default Mnemonic;
