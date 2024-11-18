// me-sidebar-menu.component.ts
import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTreeViewModule, DxButtonModule } from 'devextreme-angular';
import { MeIconComponent } from '../me-icon/me-icon.component';

export interface MeSidebarMenuItem {
  id: string;
  text: string;
  icon?: string;
  expanded?: boolean;
  items?: MeSidebarMenuItem[];
  badge?: number;
  onClick?: () => void;
  selected?: boolean;
}

@Component({
  selector: 'me-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    DxTreeViewModule,
    DxButtonModule,
    MeIconComponent
  ],
  template: `
    <div
      class="me-sidebar"
      [class.me-sidebar--collapsed]="isCollapsed"
      [style.width]="isCollapsed ? '64px' : '280px'"
    >
      <div class="me-sidebar__header">
        <div class="me-sidebar__header-content">
          <span *ngIf="!isCollapsed" class="me-sidebar__title">{{ title }}</span>
          <ng-content select="[header]"></ng-content>
        </div>
        <me-icon
          [icon]="toggleIcon"
          size="medium"
          color="#666666"
          class="me-sidebar__toggle"
          (click)="toggleSidebar()"
        ></me-icon>
      </div>

      <ng-content select="[search]"></ng-content>

      <dx-tree-view
        #treeView
        [items]="items"
        [width]="'100%'"
        [selectByClick]="true"
        [expandedExpr]="'expanded'"
        [displayExpr]="'text'"
        [searchEnabled]="false"
        [focusStateEnabled]="false"
        [hoverStateEnabled]="true"
        [selectNodesRecursive]="false"
        [showCheckBoxesMode]="'none'"
        [selectionMode]="'single'"
        [expandEvent]="'click'"
        itemTemplate="itemTemplate"
        (onItemClick)="onItemClick($event)"
      >
        <div *dxTemplate="let item of 'itemTemplate'">
          <div
            class="me-sidebar__item"
            [class.me-sidebar__item--selected]="item.selected"
            [class.me-sidebar__item--with-children]="item.items?.length"
          >
            <div class="me-sidebar__item-content">
              <me-icon
                *ngIf="item.icon"
                [icon]="item.icon"
                [size]="'medium'"
                [color]="'#666666'"
                class="me-sidebar__item-icon"
              ></me-icon>
              <span
                *ngIf="!isCollapsed"
                class="me-sidebar__item-text"
              >{{ item.text }}</span>
            </div>
            <div class="me-sidebar__item-right">
              <div
                *ngIf="item.badge && !isCollapsed"
                class="me-sidebar__item-badge"
              >
                {{ item.badge }}
              </div>
              <me-icon
                *ngIf="item.items?.length && !isCollapsed"
                [icon]="item.expanded ? expandedIcon : collapsedIcon"
                size="medium"
                [color]="'#666666'"
                class="me-sidebar__item-expand"
              ></me-icon>
            </div>
          </div>
        </div>
      </dx-tree-view>
    </div>
  `
})
export class MeSidebarMenuComponent {
  @ViewChild('treeView') treeView!: any;
  @Input() items: MeSidebarMenuItem[] = [];
  @Input() title = 'Меню';
  @Input() isCollapsed = false;

  // Иконки для настройки внешнего вида
  @Input() toggleIcon = 'chevron_left';  // Иконка кнопки сворачивания
  @Input() expandedIcon = 'expand_less'; // Иконка развернутого пункта
  @Input() collapsedIcon = 'expand_more'; // Иконка свернутого пункта

  @Output() collapsedChange = new EventEmitter<boolean>();
  @Output() itemSelected = new EventEmitter<MeSidebarMenuItem>();

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.toggleIcon = this.isCollapsed ? 'chevron_right' : 'chevron_left';

    if (this.isCollapsed && this.treeView) {
      // Свернуть все элементы при закрытии сайдбара
      this.treeView.instance.collapseAll();
    }

    this.collapsedChange.emit(this.isCollapsed);
  }

  onItemClick(e: any) {
    const item = e.itemData as MeSidebarMenuItem;

    if (this.isCollapsed) {
      this.isCollapsed = false;
      this.toggleIcon = 'chevron_left';
      this.collapsedChange.emit(this.isCollapsed);

      setTimeout(() => {
        if (this.treeView && item.items?.length) {
          this.treeView.instance.expandItem(item);
        }
      }, 300);
    }

    if (item.onClick) {
      item.onClick();
    }
    this.itemSelected.emit(item);
  }
}
