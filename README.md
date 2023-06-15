# forge-chain-apps

## Visão Geral

Este projeto é um conjunto de módulos que oferece um ambiente de desenvolvimento prático utilizando os conceitos de microfrontends. Ele permite que os aplicativos filhos atuem tanto como aplicativos pais quanto como aplicativos filhos, seguindo uma hierarquia modular.

## Arquitetura

A arquitetura do projeto é baseada em microfrontends, onde cada módulo é um componente independente que pode ser desenvolvido, testado e implantado de forma separada. Os aplicativos filhos herdam a hierarquia modular do aplicativo pai, permitindo uma organização modular eficiente.

### Estrutura de Diretórios

A estrutura de diretórios do projeto é a seguinte:

- `app-pai/`: Aplicativo pai principal.
  - `módulo1/`: Módulo 1 do aplicativo pai.
  - `módulo2/`: Módulo 2 do aplicativo pai.
  - `app-filho1/`: Aplicativo filho 1 do aplicativo pai.
    - `módulo3/`: Módulo 3 do aplicativo filho 1 do aplicativo pai.
    - `app-filho3/`: Aplicativo filho 3 do aplicativo filho 1 do aplicativo pai.
      - `módulo5/`: Módulo 5 do aplicativo filho 3 do aplicativo filho 1 do aplicativo pai.
  - `app-filho2/`: Aplicativo filho 2 do aplicativo pai.
    - `módulo4/`: Módulo 4 do aplicativo filho 2 do aplicativo pai.
    - `app-filho4/`: Aplicativo filho 4 do aplicativo filho 2 do aplicativo pai.
      - `módulo6/`: Módulo 6 do aplicativo filho 4 do aplicativo filho 2 do aplicativo pai.


Cada aplicativo pai e filho possui sua própria estrutura de diretórios, onde cada módulo é organizado de forma independente.

## Recursos

### Módulo EthersErc20Module

O módulo `EthersErc20Module` lida com o Abi (Application Binary Interface) de um contrato ERC-20. Ele permite carregar e processar o Abi, bem como decodificar o bytecode de transações relacionadas a esse contrato.

### Módulo EthersBlockTransactionsModule

O módulo `BlockTransactionsModule` que lida com a captura de transações e blocos em tempo real.

### Módulo EthersFoundryAnvilForkModule

O módulo `EthersFoundryAnvilForkModule` para iniciar e gerenciar um processo Anvil para fork de rede Ethereum.

### Módulo EthersJsonRpcModule

o módulo `EthersJsonRpcModule` para fornecer uma instância do provedor JSON-RPC do ethers.

### Módulo EthersMnemonicModule

O módulo `EthersMnemonicModule` que lida com operações relacionadas a mnemônicos (mnemonics) e HDNodes.

### Módulo PancakeSwapFactoryV2Module

O módulo `PancakeSwapFactoryV2Module` é responsável por lidar com o contrato ABI (Application Binary Interface) da fábrica PancakeSwap V2 e suas funções específicas.

### Módulo PancakeSwapRouterV1Module

O módulo `PancakeSwapRouterV1Module` é responsável por lidar com o contrato ABI (Application Binary Interface) e suas funções específicas.

### Módulo EthersPancakeSwapRouterV2Module

O módulo `EthersPancakeSwapRouterV2Module` é responsável por lidar com o contrato ABI (Application Binary Interface) e suas funções específicas.

### Módulo EthersTransactionsModule

O módulo `EthersTransactionsModule` que lida com operações relacionadas a configurações de transações.

### Módulo EthersWalletModule

O módulo `EthersWalletModule` que lida com a criação e conexão de carteiras Ethereum.

### Módulo EthersWebsocketModule

O módulo `EthersWebsocketModule` que lida com a conexão por websocket com um nó Ethereum.

### Módulo FileSystemCacheModule

O módulo `FileSystemCacheModule` é responsável por lidar com o cache em um sistema de arquivos.

### Módulo Web3Module

O módulo `Web3Module` que encapsula uma instância do provedor Web3

## Camadas de importância

### Camada de Regras

A camada de regras desempenha um papel crucial na aplicação. Ela é responsável por estabelecer e fazer cumprir as regras de negócio definidas para garantir que as operações realizadas sejam consistentes e seguras. As funções com o prefixo "need" na nomenclatura indicam que há uma regra específica a ser cumprida antes de executar determinada ação. Essas regras podem variar de validações de entrada de dados a permissões de acesso.

### Consistência de Dados

A consistência de dados é mantida por meio de validações e verificações em diferentes camadas da aplicação. Isso inclui validações de entrada de dados, validações de integridade, verificações de pré e pós-condições, entre outros. Essas validações são projetadas para garantir que os dados sejam consistentes e estejam em conformidade com as regras definidas.

### Persistência de Dados

A persistência de dados é garantida por meio de mecanismos de armazenamento adequados, como bancos de dados e sistemas de arquivos. A aplicação utiliza técnicas apropriadas de armazenamento para garantir que os dados sejam mantidos de forma segura e duradoura. Isso inclui o uso de transações para operações de gravação, backup regular de dados, técnicas de replicação para alta disponibilidade e recuperação em caso de falhas.

## Requisitos de Instalação

Antes de executar a aplicação, certifique-se de que você possui os seguintes requisitos instalados:

- Node.js versão v18.12.1
- NPM versão v8.19.2

## Como Executar

Siga as etapas abaixo para executar a aplicação:

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório raiz do projeto.
3. Execute o comando `npm install` ou `yarn install` para instalar as dependências.
4. Siga as instruções em cada módulo para executar e testar individualmente.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as diretrizes abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch com o nome descritivo da sua contribuição.
3. Faça as alterações e adições necessárias.
4. Envie um pull request para revisão.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
