import { Injectable } from '@angular/core';
import { AwsType, Aws, GroupType, HostGroup } from '../types/types';
import { IconStoreService } from './icon-store.service';

@Injectable({
  providedIn: 'root',
})
export class ParseService {
  constructor(private iconStore: IconStoreService) {}

  parseFunction(arrApp: AwsType[]) {
    return arrApp.reduce((result: any[], awsJSON: AwsType, index) => {
      const aws: Aws = {
        text: awsJSON.Host.Host,
        items: [],
        id: `4_${index + 1}`,
        icon: this.iconStore.getIcon({ icon: 'keyboard' }),
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

      awsJSON.Clients.forEach((client) => {
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
              });
            } else {
              aws.items?.push({
                text: userName,
                itemStr: [appName],
              });
            }
          }
        });
      });

      return [...result, aws];
    }, []);
  }

  groupResultArray(awsArr: Aws[], host_groups: HostGroup[]) {
    const dataSource: GroupType[] = [];

    host_groups.forEach((group, groupIndex) => {
      const groupName = group.Name;
      dataSource.push({
        text: groupName,
        items: [],
        icon: this.iconStore.getIcon({ icon: 'database' }),
      });
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

    dataSource.push({
      text: 'Без группы',
      items: awsArr,
      id: '4',
      icon: this.iconStore.getIcon({ icon: 'database' }),
    });

    return dataSource;
  }

  addAwsId(groupedResultArray: GroupType[]) {
    groupedResultArray[3].items.forEach((aws) => {
      aws.items?.forEach((user, index) => {
        user.id = `${aws.id}_${index + 1}`;
        user.icon = this.iconStore.getIcon({ icon: 'folder' });

        user.items = user.itemStr?.map((app, index) => {
          const appObj = {
            id: `${user.id}_${index + 1}`,
            text: app,
            icon: this.iconStore.getIcon({ icon: 'draft' }),
          };

          return appObj;
        });
      });
    });
  }
}
