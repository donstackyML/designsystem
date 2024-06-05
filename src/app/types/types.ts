import {
  DxCheckBoxComponent,
  DxPopoverComponent,
  DxPopupComponent,
  DxRadioGroupComponent,
  DxSelectBoxComponent,
  DxSwitchComponent,
  DxTextBoxComponent,
} from 'devextreme-angular';
import { dxButtonGroupItem } from 'devextreme/ui/button_group';

export type MeCommonType = {
  [key: string]: string;
};
export type MeSize = 'small' | 'medium' | 'large';
export type MeButtonType =
  | 'default'
  | 'normal'
  | 'success'
  | 'warning'
  | 'danger';
export type MeButtonStyle = 'contained' | 'outlined' | 'text';
export type MeFieldStyle = 'outlined' | 'underlined' | 'filled';
export type MeLabelPosition = 'top' | 'left';
export type MeLabelMode = 'static' | 'floating';
export type MeScrollbarShowType = 'always' | 'onHover';
export type MeEditorComponents =
  | DxTextBoxComponent
  | DxSelectBoxComponent
  | DxCheckBoxComponent
  | DxRadioGroupComponent
  | DxSwitchComponent;
export type MeTextEditorComponents = DxTextBoxComponent | DxSelectBoxComponent;
export type MeOverlayComponents = DxPopoverComponent | DxPopupComponent;
export type MePosition = 'left' | 'right';
export declare class MeTextBoxComponent {
  size: MeSize;
}
export interface MeButtonGroupItem extends Partial<dxButtonGroupItem> {
  leftIcon?: string;
  leftIconColor?: string;
  iconColor?: string;
  leftIconSize?: string;
  iconSize?: string;
  icon?: string;
  rightIcon?: string;
  rightIconColor?: string;
  rightIconSize?: string;
  warningType?: boolean;
}
export interface HostType {
  Host: string;
  CompanyName: null;
  Domain: string;
  Port: number;
  DomainKey: string;
  HostKey: string;
}
export interface LocalResourcesType {
  Type: number;
  Id: number;
  InstanceId: number;
  PackageId: number;
  PackageName: null;
  GroupId: number;
  Name: string;
  Amount: number;
  LastStateChanges: string;
  State: string;
  ConnectionString: null;
  ResourceUid: string;
  ResourceApiUid: null;
  UserType: null;
  Args: null;
  Author: null;
  Messages: null;
  IsControlledByInfoLift: boolean;
  StartGroupId: number;
}
export interface ClientsType {
  RID: number;
  TerminalSessionId: number;
  PID: number;
  Client: {
    UserName: string;
    HostName: string;
    AppName: string;
    UserData: [];
    ClientVersion: number;
  };
  ConnectedAt: string;
  isConnected: boolean;
  RequestedResources: [];
}
export interface TermServicesSessionType {
  ClientName: string;
  ConnectionState: number;
  ConnectTime: null;
  CurrentTime: string;
  DisconnectTime: null;
  LastInputTime: null;
  LoginTime: null;
  IdleTime: string;
  SessionId: number;
  UserName: string;
  DomainName: string;
  UserAccount: string;
  WindowStationName: string;
  ClientIPAddress: string;
  SessionIPAddress: string;
  Server: string;
  ClientBuildNumber: number;
  BitsPerPixel: number;
  HorizontalResolution: number;
  VerticalResolution: number;
  ClientDirectory: string;
  ClientHardwareId: number;
  ClientProductId: number;
  ClientProtocolType: number;
  WorkingDirectory: string;
  InitialProgram: string;
  RemoteEndPoint: string;
  ApplicationName: string;
  Local: boolean;
  IncomingStatisticsBytes: number;
  IncomingStatisticsFrames: number;
  IncomingStatisticsCompressedBytes: number;
  OutgoingStatisticsBytes: number;
  OutgoingStatisticsFrames: number;
  OutgoingStatisticsompressedBytes: number;
}
export interface GroupType {
  id?: string;
  text: string;
  items: Aws[];
  icon?: string;
}
export interface AwsType {
  Host: HostType;
  isConnected: boolean;
  LocalResources: LocalResourcesType[];
  Clients: ClientsType[];
  TermServicesSession: TermServicesSessionType[];
  ModulesVersionState: number;
}
export interface Aws {
  text: string;
  items?: AwsUser[];
  id: string;
  icon?: string;
}
export interface AwsUser {
  text: string;
  itemStr: string[];
  items?: { id: string; text: string }[];
  id?: string;
  icon?: string;
}
export interface HostGroup {
  Name: string;
  CKDomainName: string;
  AllowManualBlocking: boolean;
  LoadLevel: number;
  LoadLevelPeriod: number;
  MoveToDomainKind: number;
  Priority: number;
  QuantityPerMove: number;
  SleepModeActivationTimeout: number;
  SleepModeEnabled: boolean;
  SleepModeWarningTimeout: number;
  Hosts: Host[];
}
interface Host {
  Uid: string;
  Id: number;
  Name: string;
  Domain: string;
  DomainNB: string;
  DnsNames: [];
  HostGroups: null;
}
