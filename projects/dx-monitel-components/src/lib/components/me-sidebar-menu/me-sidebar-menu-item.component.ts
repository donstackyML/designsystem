import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MeIconComponent } from '../me-icon/me-icon.component';
import { NgIf, NgStyle } from '@angular/common';
import { MeSidebarMenuItem } from './me-sidebar-menu.component';
import { MeSize } from '../../types/types';

@Component({
  selector: 'me-sidebar-item',
  standalone: true,
  imports: [MeIconComponent, NgIf, NgStyle],
  templateUrl: 'me-sidebar-menu-item.component.html',
  styleUrls: ['me-sidebar-menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MeSidebarMenuItemComponent implements OnInit, OnDestroy {
  @Input() item?: MeSidebarMenuItem;
  @Input() collapsed: boolean = false;
  @Input() expandedIcon = 'expand_less'; // Иконка развернутого пункта
  @Input() collapsedIcon = 'expand_more'; // Иконка свернутого пункта
  @Input() size: MeSize = 'medium';
  @Input() offset: number = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
