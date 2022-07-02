/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ITreasuryExtension,
  ITreasuryExtensionInterface,
} from "../ITreasuryExtension";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "ETHValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ITreasuryExtension__factory {
  static readonly abi = _abi;
  static createInterface(): ITreasuryExtensionInterface {
    return new utils.Interface(_abi) as ITreasuryExtensionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITreasuryExtension {
    return new Contract(address, _abi, signerOrProvider) as ITreasuryExtension;
  }
}