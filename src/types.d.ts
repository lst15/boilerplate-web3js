import { exec, ChildProcess, execSync, spawn } from "child_process";
import ethers from "ethers";

// types.ts

/**
 * Representa um hash de transação.
 * Um hash de transação é uma string que identifica exclusivamente uma transação na blockchain.
 */
export type TransactionHash = string;

/**
 * Representa um chamador.
 * Um chamador é uma string que identifica a entidade que está realizando uma ação ou chamada.
 */
export type Caller = string;

/**
 * Representa um endereço ERC20.
 * Um endereço ERC20 é uma string que identifica exclusivamente um token ERC20 na blockchain.
 */
export type Address = string;

/**
 * Representa um número genérico.
 * Um número genérico é um valor numérico que pode ser utilizado em diferentes contextos.
 */
export type Value = number;

/**
 * Representa um valor em Gwei.
 * Gwei é uma unidade de medida utilizada na blockchain Ethereum para representar o preço das transações e a taxa de gas.
 */
export type Gwei = string;

/**
 * Representa um Method ID de um contrato ERC20.
 * O Method ID é uma string que identifica um método específico em um contrato ERC20.
 */
export type MethodId = string;

/**
 * Representa os decimais de um token ERC20.
 * Os decimais de um token ERC20 definem a precisão e a escala dos valores do token.
 */
export type Decimals = number;

/**
 * Representa um contrato ERC20 usando a biblioteca ethers.
 * Um contrato ERC20 é uma instância de contrato inteligente que segue o padrão ERC20 na blockchain Ethereum.
 */
export type Contract = ethers.Contract;

/**
 * Representa o Application Binary Interface (ABI) de um contrato ERC20.
 * O ABI define a interface de um contrato inteligente, especificando os métodos, eventos e estruturas de dados disponíveis.
 */
export type Abi = any;

/**
 * O tipo `signerOrProvider` é um alias para `ethers.Signer`, `ethers.providers.Provider` ou `undefined`.
 * Pode ser utilizado para especificar o parâmetro de uma função que aceita qualquer um desses tipos ou `undefined`.
 */
export type signerOrProvider = ethers.Signer | ethers.providers.Provider | undefined;

/**
 * Representa o valor de uma porta do sistema operacional.
 * Uma porta é um número que identifica um ponto final de comunicação em um sistema computacional.
 */
export type SystemPort = number;

/**
 * Representa o valor de um comando do sistema operacional.
 * Um comando do sistema operacional é uma string que especifica uma ação ou operação a ser executada.
 */
export type SystemQuery = string;

/**
 * Representa chaves mnemônicas.
 * Chaves mnemônicas são uma sequência de palavras que podem ser usadas para derivar uma carteira (wallet) ou chaves privadas.
 */
export type TypeMnemonic = string;

/**
 * Representa um endpoint.
 * Um endpoint é um ponto de acesso ou uma URL que permite a comunicação com um serviço ou recurso.
 */
export type Endpoint = string;

/**
 * Representa um processo filho do sistema operacional.
 * Um processo filho é um processo secundário que é criado e executado em paralelo com o processo pai.
 */
export type Process = ChildProcess;

/**
 * Representa um provedor da biblioteca ethers para conexão HTTP.
 * Um provedor de conexão HTTP permite interagir com a blockchain Ethereum por meio de solicitações HTTP.
 */
export type EthersJsonRpcProvider = ethers.providers.JsonRpcProvider;

/**
 * Representa um provedor da biblioteca ethers para conexão WebSocket.
 * Um provedor de conexão WebSocket permite interagir com a blockchain Ethereum por meio de uma conexão WebSocket.
 */
export type EthersWebSocketProvider = ethers.providers.WebSocketProvider;

/**
 * Representa um objeto HDNode da biblioteca ethers.
 * Um objeto HDNode é usado para trabalhar com hierarquia determinística (HD) de chaves, como BIP32.
 */
export type HDNode = ethers.utils.HDNode;

/**
 * Representa uma carteira (wallet) da biblioteca ethers.
 * Uma carteira é usada para gerenciar chaves criptográficas, assinar transações e interagir com a blockchain Ethereum.
 */
export type Wallet = ethers.Wallet;

/**
 * Representa o valor de um bloco de transação.
 * Um bloco de transação é um conjunto de transações agrupadas na blockchain Ethereum.
 */
export type BlockNumber = number;

/**
 * Representa uma lista de hashes de transações.
 * Uma lista de hashes de transações é uma matriz que contém vários hashes de transações.
 */
export type TransactionHashList = Array<string>;

/**
 * Representa o valor do nome do espaço de trabalho de caches.
 * O nome do espaço de trabalho de caches é uma string que identifica um determinado espaço de trabalho de armazenamento em cache.
 */
export type CacheNameSpace = string;

/**
 * O tipo `Transaction` representa uma resposta de transação fornecida pela biblioteca `ethers`.
 * Pode conter informações como o hash da transação, o bloco em que foi incluída, o remetente, o destinatário, etc.
 */
export type Transaction = ethers.providers.TransactionResponse;

/**
 * O tipo `AbiInterface` representa uma interface gerada a partir de um Abi (Application Binary Interface) de um contrato Ethereum.
 * É usado para interagir com contratos inteligentes, permitindo a codificação e decodificação de chamadas e eventos.
 */
export type AbiInterface = ethers.utils.Interface;

/**
 * O tipo `FileName` representa o nome de um arquivo.
 * É comumente usado para especificar o nome de um arquivo contendo o Abi de um contrato Ethereum.
 */
export type FileName = string;

/**
 * O tipo `ByteCodeDescription` representa a descrição de um bytecode de transação fornecida pela biblioteca `ethers`.
 * Contém informações sobre a função chamada, os parâmetros fornecidos, o contrato alvo, etc.
 */
export type ByteCodeDescription = ethers.utils.TransactionDescription;

/**
 * O tipo `ByteCode` representa um bytecode de transação em formato de string.
 * É uma representação hexadecimal da sequência de instruções que compõem a transação.
 */
export type ByteCode = string;
