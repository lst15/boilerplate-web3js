import { BigNumber } from "ethers";

interface Block {
  hash: string;
  parentHash: string;
  number: number;
  timestamp: number;
  nonce: string;
  difficulty: number;
  gasLimit: BigNumber;
  gasUsed: BigNumber;
  miner: string;
  extraData: string;
  transactions: string[];
}

class BlockModel implements Block {
  hash: string;
  parentHash: string;
  number: number;
  timestamp: number;
  nonce: string;
  difficulty: number;
  gasLimit: BigNumber;
  gasUsed: BigNumber;
  miner: string;
  extraData: string;
  transactions: string[];

  constructor(block: Block) {
    this.hash = block.hash;
    this.parentHash = block.parentHash;
    this.number = block.number;
    this.timestamp = block.timestamp;
    this.nonce = block.nonce;
    this.difficulty = block.difficulty;
    this.gasLimit = block.gasLimit;
    this.gasUsed = block.gasUsed;
    this.miner = block.miner;
    this.extraData = block.extraData;
    this.transactions = block.transactions;
  }
}

export default BlockModel