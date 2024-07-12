import { DxTabsComponent } from 'devextreme-angular';

import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'me-tabs',
  templateUrl: './me-tabs.component.html',
  styleUrls: ['./me-tabs.component.css'],
})
export class MeTabsComponent {
  @ViewChild('withText') withText!: DxTabsComponent;
  @ViewChild('withIconAndText') withIconAndText!: DxTabsComponent;
  @ViewChild('withIcon') withIcon!: DxTabsComponent;

  tabsWithText: any[] = [
    { text: 'User' },
    { text: 'Analytics' },
    { text: 'Clients' },
    { text: 'Orders' },
    { text: 'Favorites' },
    { text: 'Search' },
  ];

  tabsWithIcon: any[] = [
    { icon: 'user' },
    { icon: 'chart' },
    { icon: 'bookmark' },
    { icon: 'search' },
  ];

  tabsWithIconAndText: any[] = [
    { text: 'User', icon: 'user' },
    { text: 'Analytics', icon: 'chart' },
    { text: 'Favorites', icon: 'bookmark' },
    { text: 'Search', icon: 'search' },
  ];

  scrollByContent: any = false;
  rtlEnabled: any = false;
  width = 'auto';
  positions: ['top', 'bottom'] = ['top', 'bottom'];
  position: 'top' | 'bottom' = this.positions[0];
  focusStateEnabled: any = false;

  onFullWidthChanged(e: any) {
    this.width = e.value ? '100%' : 'auto';
  }

  onPositionChanged(e: any) {
    this.position = e.value;
  }
}
