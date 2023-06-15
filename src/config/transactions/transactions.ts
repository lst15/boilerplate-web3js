import ConflictDataConfigError from "../../errors/conflict-data-config-error";
import { InvalidDataConfigError } from "../../errors/invalid-data-config-error";
import { InvalidFileConfigError } from "../../errors/invalid-file-config-error";
import { LoadConfig } from "../../utils/load-config.util";

/**
 * Representa a configuração de transações carregada de um arquivo JSON.
 */
export interface ITransactions {
  focus_list: {
    method_list: { [key: string]: string };
    from_addresses_list: { [key: string]: string };
    to_addresses_list: { [key: string]: string };
  };
  ignore_list: {
    method_list: { [key: string]: string };
    from_addresses_list: { [key: string]: string };
    to_addresses_list: { [key: string]: string };
  };
  focus_gas_gwei_range: {
    min: number;
    max: number;
  };
}

class Transactions {
  private _transactions_config: ITransactions;
  private _reference: string;
  private _fileConfig: string;
  private _configName: string;

  /**
   * Cria uma instância da classe Transactions.
   * Carrega a configuração de transações a partir de um arquivo JSON e valida as informações.
   * @throws {InvalidFileConfigError} Quando a configuração do arquivo é inválida ou ausente.
   * @throws {InvalidDataConfigError} Quando um endereço de transação ou um método especificado na configuração são inválidos.
   * @throws {ConflictDataConfigError} Quando há conflito de dados entre as listas de foco e de ignorar.
   */
  constructor() {
    this._configName = "transactions_config";
    this._fileConfig = "transactions";
    this._reference = `${this._fileConfig}:${this._configName}`;

    // Carrega a configuração de transações a partir de um arquivo JSON
    const config: ITransactions = LoadConfig<ITransactions>({
      file: `${__dirname}/${this._fileConfig}.config.json`,
      config_name: this._configName,
      reference: this._reference,
    });

    // Valida a existência das propriedades necessárias na configuração
    if (!config.focus_list)
      throw new InvalidFileConfigError({ reference: `${this._reference}:focus_list` });
    if (!config.focus_list.from_addresses_list)
      throw new InvalidFileConfigError({ reference: `${this._reference}:focus_list:from_addresses_list` });
    if (!config.focus_list.to_addresses_list)
      throw new InvalidFileConfigError({ reference: `${this._reference}:focus_list:to_addresses_list` });
    if (!config.focus_list.method_list)
      throw new InvalidFileConfigError({ reference: `${this._reference}:focus_list:method_list` });
    if (!config.focus_gas_gwei_range)
      throw new InvalidFileConfigError({ reference: `${this._reference}:focus_gas_gwei_range` });

    if (!config.ignore_list)
      throw new InvalidFileConfigError({ reference: `${this._reference}:ignore_list` });
    if (!config.ignore_list.from_addresses_list)
      throw new InvalidFileConfigError({ reference: `${this._reference}:ignore_list:from_addresses_list` });
    if (!config.ignore_list.to_addresses_list)
      throw new InvalidFileConfigError({ reference: `${this._reference}:ignore_list:to_addresses_list` });
    if (!config.ignore_list.method_list)
      throw new InvalidFileConfigError({ reference: `${this._reference}:ignore_list:method_list` });

    if (!config.focus_gas_gwei_range.min)
      throw new InvalidFileConfigError({ reference: `${this._reference}:focus_gas_gwei_range:min` });

    if (!config.focus_gas_gwei_range.max)
      throw new InvalidFileConfigError({ reference: `${this._reference}:focus_gas_gwei_range:max` });

    // Expressões regulares para validar endereços e métodos
    const methodRegex = /^0x[0-9a-fA-F]{8}$/;
    const addressRegex = /^(?:0x)[0-9a-fA-F]{40}$/;

    // Valida cada endereço de transação na lista de endereços de foco
    for (const key in config.focus_list.from_addresses_list) {
      const value = config.focus_list.from_addresses_list[key];

      if (!addressRegex.test(value))
        throw new InvalidDataConfigError({ reference: `${this._reference}:focus_list:from_addresses_list:${key}` });
    }

    // Valida cada endereço de transação na lista de endereços de destino de foco
    for (const key in config.focus_list.to_addresses_list) {
      const value = config.focus_list.to_addresses_list[key];

      if (!addressRegex.test(value))
        throw new InvalidDataConfigError({ reference: `${this._reference}:focus_list:to_addresses_list:${key}` });
    }

    // Valida cada método na lista de métodos de foco
    for (const key in config.focus_list.method_list) {
      const value = config.focus_list.method_list[key];

      if (!methodRegex.test(value))
        throw new InvalidDataConfigError({ reference: `${this._reference}:focus_list:method_list:${key}` });
    }

    // Valida o tipo das propriedades mínima e máxima na faixa de gwei de foco
    if (typeof config.focus_gas_gwei_range.min !== "number")
      throw new InvalidDataConfigError({ reference: `${this._reference}:focus_gas_gwei_range:min` });
    if (typeof config.focus_gas_gwei_range.max !== "number")
      throw new InvalidDataConfigError({ reference: `${this._reference}:focus_gas_gwei_range:max` });

    // Valida cada endereço de transação na lista de endereços de ignorar
    for (const key in config.ignore_list.from_addresses_list) {
      const value = config.focus_list.from_addresses_list[key];

      if (!addressRegex.test(value))
        throw new InvalidDataConfigError({ reference: `${this._reference}:ignore_list:from_addresses_list:${key}` });
    }

    // Valida cada endereço de transação na lista de endereços de destino de ignorar
    for (const key in config.ignore_list.to_addresses_list) {
      const value = config.focus_list.to_addresses_list[key];

      if (!addressRegex.test(value))
        throw new InvalidDataConfigError({ reference: `${this._reference}:ignore_list:to_addresses_list:${key}` });
    }

    // Valida cada método na lista de métodos de ignorar
    for (const key in config.ignore_list.method_list) {
      const value = config.ignore_list.method_list[key];

      if (!methodRegex.test(value))
        throw new InvalidDataConfigError({ reference: `${this._reference}:ignore_list:method_list:${key}` });
    }

    // Verifica se há conflito entre as listas de foco e ignorar
    const listOf_ignore_method = Object.keys(config.ignore_list.method_list);
    const listOf_ignore_from_addresses = Object.keys(config.ignore_list.from_addresses_list);
    const listOf_ignore_to_addresses = Object.keys(config.ignore_list.from_addresses_list);
    const listOf_focus_method = Object.keys(config.focus_list.method_list);
    const listOf_focus_from_addresses = Object.keys(config.focus_list.from_addresses_list);
    const listOf_focus_to_addresses = Object.keys(config.focus_list.from_addresses_list);

    if (
      listOf_ignore_method.length > 0 &&
      listOf_focus_method.length > 0
    )
      throw new ConflictDataConfigError({ reference: `${this._reference}:focus_list:method_list and ${this._reference}:ignore_list:method_list` });

    if (
      listOf_ignore_from_addresses.length > 0 &&
      listOf_focus_from_addresses.length > 0
    )
      throw new ConflictDataConfigError({ reference: `${this._reference}:focus_list:from_addresses and ${this._reference}:ignore_list:from_addresses` });

    if (
      listOf_ignore_to_addresses.length > 0 &&
      listOf_focus_to_addresses.length > 0
    )
      throw new ConflictDataConfigError({ reference: `${this._reference}:focus_list:to_addresses and ${this._reference}:ignore_list:to_addresses` });

    // Converte todos os endereços e métodos para minúsculas
    for (const key in config.focus_list.from_addresses_list) {
      const value = config.focus_list.from_addresses_list[key];
      config.focus_list.from_addresses_list[key] = value.toLowerCase();
    }

    for (const key in config.focus_list.to_addresses_list) {
      const value = config.focus_list.to_addresses_list[key];
      config.focus_list.to_addresses_list[key] = value.toLowerCase();
    }

    for (const key in config.focus_list.method_list) {
      const value = config.focus_list.method_list[key];
      config.focus_list.method_list[key] = value.toLowerCase();
    }

    for (const key in config.ignore_list.from_addresses_list) {
      const value = config.ignore_list.from_addresses_list[key];
      config.ignore_list.from_addresses_list[key] = value.toLowerCase();
    }

    for (const key in config.ignore_list.to_addresses_list) {
      const value = config.ignore_list.to_addresses_list[key];
      config.ignore_list.to_addresses_list[key] = value.toLowerCase();
    }

    for (const key in config.ignore_list.method_list) {
      const value = config.ignore_list.method_list[key];
      config.ignore_list.method_list[key] = value.toLowerCase();
    }

    this._transactions_config = config;
  }

  /**
   * Obtém a configuração de transações.
   * @returns A configuração de transações.
   */
  public get config(): ITransactions {
    return this._transactions_config;
  }
}

export default Transactions;
