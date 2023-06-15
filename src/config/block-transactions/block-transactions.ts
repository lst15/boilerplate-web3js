/**
 * A classe `BlockTransactions` é responsável por lidar com a configuração e o acesso aos dados de transações de bloco.
 * Ela carrega a configuração das transações de bloco e fornece métodos para acessar essa configuração.
 * Lança erros específicos se a configuração não for válida.
 */
import { InvalidDataConfigError } from "../../errors/invalid-data-config-error";
import { InvalidFileConfigError } from "../../errors/invalid-file-config-error";
import { LoadConfig } from "../../utils/load-config.util";

/**
 * A interface `IBlockTransactions` define a estrutura da configuração das transações de bloco.
 * Ela inclui um campo `cache_ttl` que especifica o tempo de vida em cache das transações.
 */
export interface IBlockTransactions {
  cache_ttl: number;
}

class BlockTransactions {
  private _block_transactions_config: IBlockTransactions;
  private _reference: string;
  private _fileConfig: string;
  private _configName: string;

  /**
   * Cria uma instância da classe `BlockTransactions` e carrega a configuração das transações de bloco.
   * @throws {InvalidFileConfigError} Se a configuração do arquivo não for válida ou não contiver o campo `cache_ttl`.
   * @throws {InvalidDataConfigError} Se o campo `cache_ttl` na configuração não for um número.
   */
  constructor() {
    this._configName = "block_transactions_config";
    this._fileConfig = "block-transactions";
    this._reference = `${this._fileConfig}:${this._configName}`;

    const config: IBlockTransactions = LoadConfig<IBlockTransactions>({
      file: `${__dirname}/${this._fileConfig}.config.json`,
      config_name: this._configName,
      reference: this._reference,
    });

    // Verifica se o campo 'cache_ttl' existe na configuração
    if (!config.cache_ttl)
      throw new InvalidFileConfigError({ reference: `${this._reference}:cache_ttl` });

    // Verifica se o campo 'cache_ttl' é um número
    if (typeof config.cache_ttl !== "number")
      throw new InvalidDataConfigError({ reference: `${this._reference}:cache_ttl` });

    this._block_transactions_config = config;
  }

  /**
   * Obtém a configuração das transações de bloco.
   * @returns {IBlockTransactions} A configuração das transações de bloco.
   */
  public get config(): IBlockTransactions {
    return this._block_transactions_config;
  }
}

export default BlockTransactions;
