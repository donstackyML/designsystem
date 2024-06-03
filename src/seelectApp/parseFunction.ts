import cdu_prl1 from './initial data/Clients_ci-tw3-cdu-prl1.oiktest.local.json';
import cdu_prl2 from './initial data/Clients_ci-tw3-cdu-prl2.oiktest.local.json';
import kusenkov from './initial data/Clients_kuzenkovaay.monitel.local.json';
import matsevet from './initial data/Clients_matsevetskiylk.monitel.local.json';
import prosvet from './initial data/Clients_prosvetovdp.monitel.local.json';
import cdu_op1 from './initial data/Clients_qa-tw3-cdu-op1.oiktest.local.json';
import cdu_op2 from './initial data/Clients_qa-tw3-cdu-op2.oiktest.local.json';
import cdu_web1 from './initial data/Clients_qa-tw3-cdu-web1.oiktest.local.json';
import cdu_web2 from './initial data/Clients_qa-tw3-cdu-web2.oiktest.local.json';
import host_groups from './initial data/HostGroups_Platform.Win1.json';

const allApps = [
  cdu_prl1,
  cdu_prl2,
  cdu_op1,
  cdu_op2,
  cdu_web1,
  cdu_web2,
  kusenkov,
  matsevet,
  prosvet,
] as AwsType[];

interface HostType {
  Host: string;
  CompanyName: null;
  Domain: string;
  Port: number;
  DomainKey: string;
  HostKey: string;
}

interface LocalResourcesType {
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

interface ClientsType {
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

interface TermServicesSessionType {
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
}

interface AwsType {
  Host: HostType;
  isConnected: boolean;
  LocalResources: LocalResourcesType[];
  Clients: ClientsType[];
  TermServicesSession: TermServicesSessionType[];
  ModulesVersionState: number;
}

interface Aws {
  text: string;
  items?: AwsUser[];
  id: string;
}

interface AwsUser {
  text: string;
  itemStr: string[];
  items?: { id: string; text: string }[];
  id?: string;
}

function parseFunction(arrApp: AwsType[]) {
  return arrApp.reduce((result: any[], awsJSON: AwsType, index) => {
    const aws: Aws = {
      text: awsJSON.Host.Host,
      items: [],
      id: `4_${index + 1}`,
    };

    const systemUsers: string[] = awsJSON.LocalResources.map((user) => {
      return user.Name;
    });

    aws.items?.push({
      text: 'System',
      itemStr: systemUsers,
      // id: `4_${index + 1}_0`,
    });

    const userNameSet = new Set();

    awsJSON.Clients.forEach((client, index) => {
      const userName = client.Client.UserName;
      const appName = client.Client.AppName;

      aws.items?.forEach((awsUser) => {
        if (awsUser.text === userName) {
          awsUser.itemStr?.push(appName);
        } else if (!userNameSet.has(userName)) {
          userNameSet.add(userName);
          if (client.TerminalSessionId !== 0) {
            aws.items?.push({
              text: `${userName} (терминальный)`,
              itemStr: [appName],
              // id: `${aws.id}_${index + 1}`,
            });
          } else {
            aws.items?.push({
              text: userName,
              itemStr: [appName],
              // id: `${aws.id}_${index + 1}`,
            });
          }
        }
      });
    });

    return [...result, aws];
  }, []);
}

export const resultArray: Aws[] = parseFunction(allApps);

function groupResultArray(awsArr: Aws[]) {
  const dataSource: GroupType[] = [];

  host_groups.forEach((group, groupIndex) => {
    const groupName = group.Name;
    dataSource.push({ text: groupName, items: [] });
    const index = dataSource.length - 1;

    group.Hosts.forEach((host) => {
      dataSource[index].id = `${groupIndex + 1}`;

      awsArr.forEach((aws) => {
        if (host.Name === aws.text) {
          dataSource[index].items.push(aws);
        }
      });
    });
  });

  dataSource.push({ text: 'Без группы', items: awsArr, id: '4' });

  return dataSource;
}

export const groupedResultArray: GroupType[] = groupResultArray(resultArray);

function addAwsId(groupedResultArray: GroupType[]) {
  groupedResultArray[3].items.forEach((aws) => {
    aws.items?.forEach((user, index) => {
      user.id = `${aws.id}_${index + 1}`;

      user.items = user.itemStr?.map((app, index) => {
        const appObj = {
          id: `${user.id}_${index + 1}`,
          text: app,
        };

        return appObj;
      });
    });
  });
}

// addAwsId();
