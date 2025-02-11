import { Component } from '@angular/core';
import { meMenuLeftBottomItems, meMenuLeftDefaultItems } from './me-menu-left-demo-mock-data';

import { MeSize } from 'src/app/types/types';

@Component({
  selector: 'me-menu-left-demo',
  templateUrl: './me-menu-left-demo.component.html',
  styleUrls: ['./me-menu-left-demo.component.scss']
})
export class MeMenuLeftDemoComponent {
  items = meMenuLeftDefaultItems;
  bottomItems = meMenuLeftBottomItems;
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
