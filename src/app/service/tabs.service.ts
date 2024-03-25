import { Injectable } from '@angular/core';

export interface Tab {
  id: number;

  text?: string;

  icon?: string;

  disabled?: boolean;
}

const tabsWithText: Tab[] = [
  {
    id: 0,
    text: 'User',
  },
  {
    id: 1,
    text: 'Analytics',
  },
  {
    id: 2,
    text: 'Clients',
  },
  {
    id: 3,
    text: 'Orders',
  },
  {
    id: 4,
    text: 'Favorites',
  },
  {
    id: 5,
    text: 'Search',
    disabled: true,
  },
];

const tabsWithIconAndText: Tab[] = [
  {
    id: 0,
    text: 'User',
    icon: 'user',
  },
  {
    id: 1,
    text: 'Analytics',
    icon: 'chart',
  },
  {
    id: 2,
    text: 'Clients',
    icon: 'accountbox',
  },
  {
    id: 3,
    text: 'Orders',
    icon: 'ordersbox',
  },
  {
    id: 4,
    text: 'Favorites',
    icon: 'bookmark',
  },
  {
    id: 5,
    text: 'Search',
    icon: 'search',
    disabled: true,
  },
];

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  getTabsWithText(): Tab[] {
    return tabsWithText;
  }

  getTabsWithIconAndText(): Tab[] {
    return tabsWithIconAndText;
  }
}
