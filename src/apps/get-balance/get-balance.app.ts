import ethers from "ethers";
import ethersJsonRpcModule from "../../modules/ethers-json-rpc.module";

interface GetBalanceAppRequest{
  ethersJsonRpc:ethersJsonRpcModule;
}

class GetBalanceApp{
  private _ethersJsonRpc:ethersJsonRpcModule;

  constructor({ethersJsonRpc}:GetBalanceAppRequest){
    this._ethersJsonRpc = ethersJsonRpc;
  }

  async Start(){
    const executed = await this._ethersJsonRpc.provider.getBalance("0x32a94cdcb20f2af9d9535d3390c6f20653a34b9c");
    console.log(executed)
    return executed;
  }

}

export default GetBalanceApp; 