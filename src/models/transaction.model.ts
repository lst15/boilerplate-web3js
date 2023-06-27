import { BigNumber } from "ethers";
import { TransactionType } from "../types";
import { TransactionReceipt } from "@ethersproject/abstract-provider";
import { AccessList } from "ethers/lib/utils";

class TransactionModel implements TransactionType {
  hash: string;
  blockNumber?: number | undefined;
  blockHash?: string | undefined;
  timestamp?: number | undefined;
  confirmations: number;
  from: string;
  raw?: string | undefined;
  wait: (confirmations?: number | undefined) => Promise<TransactionReceipt>;
  to?: string | undefined;
  nonce: number;
  gasLimit: BigNumber;
  gasPrice?: BigNumber | undefined;
  data: string;
  value: BigNumber;
  chainId: number;
  r?: string | undefined;
  s?: string | undefined;
  v?: number | undefined;
  type?: number | null | undefined;
  accessList?: AccessList | undefined;
  maxPriorityFeePerGas?: BigNumber | undefined;
  maxFeePerGas?: BigNumber | undefined;

  constructor(data: TransactionType) {
    this.hash = data.hash;
    this.blockNumber = data.blockNumber;
    this.blockHash = data.blockHash;
    this.timestamp = data.timestamp;
    this.confirmations = data.confirmations;
    this.from = data.from;
    this.raw = data.raw;
    this.wait = data.wait;
    this.to = data.to;
    this.nonce = data.nonce;
    this.gasLimit = data.gasLimit;
    this.gasPrice = data.gasPrice;
    this.data = data.data;
    this.value = data.value;
    this.chainId = data.chainId;
    this.r = data.r;
    this.s = data.s;
    this.v = data.v;
    this.type = data.type;
    this.accessList = data.accessList;
    this.maxPriorityFeePerGas = data.maxPriorityFeePerGas;
    this.maxFeePerGas = data.maxFeePerGas;
  }
}


export default TransactionModel;