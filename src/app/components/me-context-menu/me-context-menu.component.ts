import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { dxContextMenuItem } from 'devextreme/ui/context_menu';
import { MeIconStoreService } from 'src/app/service/icon-store.service';

@Component({
  selector: 'context-menu',
  templateUrl: './me-context-menu.component.html',
  styleUrls: ['./me-context-menu.component.css'],
})
export class MeContextMenuComponent implements OnInit {
  itemThirdLevel = {
    text: 'Пункт',
    closeMenuOnClick: false,
    selected: true,
    icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  };
  itemSecondLevel = {
    text: 'Пункт',
    closeMenuOnClick: false,
    icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
    items: [this.itemThirdLevel, this.itemThirdLevel, this.itemThirdLevel],
  };
  itemFirstLevel = {
    text: 'Пункт',
    icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
    beginGroup: true,
    closeMenuOnClick: false,
    items: [
      this.itemSecondLevel,
      this.itemSecondLevel,
      this.itemSecondLevel,
      this.itemSecondLevel,
      this.itemSecondLevel,
    ],
  };
  contextMenuItems: dxContextMenuItem[] = [
    {
      text: 'Заголовок',
      icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
      template: 'menu-title',
      disabled: true,
    },
    this.itemFirstLevel,
    this.itemFirstLevel,
    this.itemFirstLevel,
    this.itemFirstLevel,
    this.itemFirstLevel,
  ];

  constructor(
    private iconService: MeIconStoreService,
    public domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}
}
