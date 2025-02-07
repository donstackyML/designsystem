import { Component } from '@angular/core';
import { meSidebarMenuBottomItems, meSidebarMenuDefaultItems } from './me-sidebar-menu-mock-data';

import { MeSize } from 'src/app/types/types';

@Component({
  selector: 'me-sidebar-demo',
  templateUrl: './me-sidebar-demo.component.html',
  styleUrls: ['./me-sidebar-demo.component.scss']
})
export class MeSidebarDemoComponent {
  items = meSidebarMenuDefaultItems;
  bottomItems = meSidebarMenuBottomItems;
  title = 'Меню';
  collapsed = false;
  floatMode = false;
  size: MeSize = 'medium';
  toggleIcon = 'chevron_left';
  expandedIcon = 'expand_less';
  collapsedIcon = 'expand_more';
  collapsedWidth = 86;
  expandedWidth = 336;
  width = 336;

  onItemSelected = (item: any) => console.log('onItemSelected', item);
  onCollapsedChange = (collapsed: boolean) => console.log('onCollapsedChange', collapsed);
}
