import Connection from "./src/config/connection/connection";
import Contracts from "./src/config/contracts/contracts";
import EthersErc20Module from "./src/modules/ethers/ethers-erc20.module";
import EthersWebsocketModule from "./src/modules/ethers/ethers-websocket.module";

const contracts = new Contracts();
const wEtherAddress = contracts.config.list.mainnet_wrapped_ether;

const connection = new Connection();
const endpointWSS = connection.config.list.default.ws;

const websocketProvider = new EthersWebsocketModule({
  endpoint:endpointWSS
})

const erc20wEther = new EthersErc20Module({
  address:wEtherAddress,
  signerOrProvider:websocketProvider.provider
})

erc20wEther.contract.functions.decimals().then(console.log)

