import { Keypair, VersionedTransactionResponse } from "@solana/web3.js";

export type CreateTokenMetadata = {
  name: string;
  symbol: string;
  description: string;
  file: Blob;
  twitter?: string;
  telegram?: string;
  website?: string;
};
export type PriorityFee = {
  unitLimit: number;
  unitPrice: number;
};

export type TransactionResult = {
  signature?: string;
  error?: unknown;
  results?: VersionedTransactionResponse;
  success: boolean;
};

export type PumpOptions = {
  jitoUrl?: string;
  authKeypair?: Keypair;
  providerRegion?: Region;
  shouldKeepAlive?: boolean;
  astraKey?: string;
  slotKey?: string;
  nextBlockKey?: string;
  nodeOneKey?: string;
};

export type JitoResult = {
  bundleId?: string;
  error?: unknown;
  success: boolean;
};
export type HostKey = "slot" | "node" | "nextBlock" | "astra";

export enum Region {
  Frankfurt = "fra",
  NY = "ny",
  Tokyo = "tokyo",
  Amsterdam = "ams",
  LosAngeles = "la",
}
