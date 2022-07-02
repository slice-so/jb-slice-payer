/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TerminalDirectoryInterface extends utils.Interface {
  contractName: "TerminalDirectory";
  functions: {
    "addressesOf(uint256)": FunctionFragment;
    "beneficiaryOf(address)": FunctionFragment;
    "deployAddress(uint256,string)": FunctionFragment;
    "operatorStore()": FunctionFragment;
    "projects()": FunctionFragment;
    "setPayerPreferences(address,bool)": FunctionFragment;
    "setTerminal(uint256,address)": FunctionFragment;
    "terminalOf(uint256)": FunctionFragment;
    "unstakedTicketsPreferenceOf(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addressesOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "beneficiaryOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deployAddress",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "operatorStore",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "projects", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setPayerPreferences",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setTerminal",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "terminalOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakedTicketsPreferenceOf",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressesOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beneficiaryOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPayerPreferences",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTerminal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "terminalOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unstakedTicketsPreferenceOf",
    data: BytesLike
  ): Result;

  events: {
    "DeployAddress(uint256,string,address)": EventFragment;
    "SetPayerPreferences(address,address,bool)": EventFragment;
    "SetTerminal(uint256,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPayerPreferences"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTerminal"): EventFragment;
}

export type DeployAddressEvent = TypedEvent<
  [BigNumber, string, string],
  { projectId: BigNumber; memo: string; caller: string }
>;

export type DeployAddressEventFilter = TypedEventFilter<DeployAddressEvent>;

export type SetPayerPreferencesEvent = TypedEvent<
  [string, string, boolean],
  { account: string; beneficiary: string; preferUnstakedTickets: boolean }
>;

export type SetPayerPreferencesEventFilter =
  TypedEventFilter<SetPayerPreferencesEvent>;

export type SetTerminalEvent = TypedEvent<
  [BigNumber, string, string],
  { projectId: BigNumber; terminal: string; caller: string }
>;

export type SetTerminalEventFilter = TypedEventFilter<SetTerminalEvent>;

export interface TerminalDirectory extends BaseContract {
  contractName: "TerminalDirectory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TerminalDirectoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addressesOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    beneficiaryOf(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    deployAddress(
      _projectId: BigNumberish,
      _memo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    operatorStore(overrides?: CallOverrides): Promise<[string]>;

    projects(overrides?: CallOverrides): Promise<[string]>;

    setPayerPreferences(
      _beneficiary: string,
      _preferUnstakedTickets: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTerminal(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    terminalOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    unstakedTicketsPreferenceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addressesOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  beneficiaryOf(arg0: string, overrides?: CallOverrides): Promise<string>;

  deployAddress(
    _projectId: BigNumberish,
    _memo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  operatorStore(overrides?: CallOverrides): Promise<string>;

  projects(overrides?: CallOverrides): Promise<string>;

  setPayerPreferences(
    _beneficiary: string,
    _preferUnstakedTickets: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTerminal(
    _projectId: BigNumberish,
    _terminal: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  terminalOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  unstakedTicketsPreferenceOf(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addressesOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    beneficiaryOf(arg0: string, overrides?: CallOverrides): Promise<string>;

    deployAddress(
      _projectId: BigNumberish,
      _memo: string,
      overrides?: CallOverrides
    ): Promise<void>;

    operatorStore(overrides?: CallOverrides): Promise<string>;

    projects(overrides?: CallOverrides): Promise<string>;

    setPayerPreferences(
      _beneficiary: string,
      _preferUnstakedTickets: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setTerminal(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<void>;

    terminalOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    unstakedTicketsPreferenceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "DeployAddress(uint256,string,address)"(
      projectId?: BigNumberish | null,
      memo?: null,
      caller?: string | null
    ): DeployAddressEventFilter;
    DeployAddress(
      projectId?: BigNumberish | null,
      memo?: null,
      caller?: string | null
    ): DeployAddressEventFilter;

    "SetPayerPreferences(address,address,bool)"(
      account?: string | null,
      beneficiary?: null,
      preferUnstakedTickets?: null
    ): SetPayerPreferencesEventFilter;
    SetPayerPreferences(
      account?: string | null,
      beneficiary?: null,
      preferUnstakedTickets?: null
    ): SetPayerPreferencesEventFilter;

    "SetTerminal(uint256,address,address)"(
      projectId?: BigNumberish | null,
      terminal?: string | null,
      caller?: null
    ): SetTerminalEventFilter;
    SetTerminal(
      projectId?: BigNumberish | null,
      terminal?: string | null,
      caller?: null
    ): SetTerminalEventFilter;
  };

  estimateGas: {
    addressesOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    beneficiaryOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    deployAddress(
      _projectId: BigNumberish,
      _memo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    operatorStore(overrides?: CallOverrides): Promise<BigNumber>;

    projects(overrides?: CallOverrides): Promise<BigNumber>;

    setPayerPreferences(
      _beneficiary: string,
      _preferUnstakedTickets: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTerminal(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    terminalOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstakedTicketsPreferenceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addressesOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beneficiaryOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployAddress(
      _projectId: BigNumberish,
      _memo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    operatorStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projects(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPayerPreferences(
      _beneficiary: string,
      _preferUnstakedTickets: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTerminal(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    terminalOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unstakedTicketsPreferenceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}