import { Component, ViewChild } from '@angular/core';
import { List, DrawerService } from 'src/app/service/drawer.service';
import { DxDrawerComponent } from 'devextreme-angular';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent {
  @ViewChild(DxDrawerComponent, { static: false }) drawer = DxDrawerComponent;

  navigation: List[];

  showSubmenuModes: string[] = ['slide', 'expand'];

  positionModes: string[] = ['left', 'right'];

  showModes: string[] = ['push', 'shrink', 'overlap'];

  text: string;

  selectedOpenMode = 'shrink';

  selectedPosition = 'left';

  selectedRevealMode = 'slide';

  isDrawerOpen = true;

  constructor(service: DrawerService) {
    this.text = service.getContent();
    this.navigation = service.getNavigationList();
  }

  toolbarContent = [
    {
      widget: 'dxButton',
      location: 'before',
      options: {
        icon: 'menu',
        stylingMode: 'text',
        onClick: () => (this.isDrawerOpen = !this.isDrawerOpen),
      },
    },
  ];
}
