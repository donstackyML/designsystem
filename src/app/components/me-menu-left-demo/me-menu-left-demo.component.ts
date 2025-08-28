import { Component, inject } from '@angular/core';
import { meMenuLeftBottomItems, meMenuLeftDefaultItems } from './me-menu-left-demo-mock-data';

import { MeSize } from 'src/app/types/types';
import { MeIconsRegistry} from "@monitel/me-icons-registry";
import { chevronLeftX24, folderOpenX24, keyboardArrowDownX20, keyboardArrowUpX20, downloadX24, settingsX24, assignmentX24 } from "../../../../@monitel/me-icons";

@Component({
  selector: 'me-menu-left-demo',
  templateUrl: './me-menu-left-demo.component.html',
  styleUrls: ['./me-menu-left-demo.component.scss'],
})
export class MeMenuLeftDemoComponent {
  private meIconRegistry = inject(MeIconsRegistry);

  items = meMenuLeftDefaultItems;
  bottomItems = meMenuLeftBottomItems;
  title = 'Меню';
  collapsed = false;
  floatMode = false;
  size: MeSize = 'medium';
  toggleIcon = 'chevron_left_x24';
  expandedIcon = 'keyboard_arrow_up_x20';
  collapsedIcon = 'keyboard_arrow_down_x20';
  collapsedWidth = 86;
  expandedWidth = 336;
  width = 336;

  constructor() {
    this.meIconRegistry.registerIcons([
      chevronLeftX24,
      keyboardArrowDownX20,
      keyboardArrowUpX20,
      folderOpenX24,
      downloadX24,
      settingsX24,
      assignmentX24
    ]);
  }

  onItemSelected = (item: any) => console.log('onItemSelected', item);
  onCollapsedChange = (collapsed: boolean) => console.log('onCollapsedChange', collapsed);
}
