import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDropDownButtonModule, DxButtonModule } from 'devextreme-angular';
import { MeIconComponent } from '../../../public-api';

interface BreadcrumbItem {
  label: string;
  url: string;
  icon?: string;
}

@Component({
  selector: 'me-breadcrumbs',
  standalone: true,
  imports: [
    CommonModule,
    DxDropDownButtonModule,
    DxButtonModule,
    MeIconComponent,
  ],
  template: `
    <nav class="breadcrumbs" aria-label="Breadcrumbs">
      <ng-container
        *ngFor="let item of visibleItems; let last = last; let i = index"
      >
        <dx-button
          *ngIf="!last"
          [text]="item.label"
          [icon]="item.icon"
          stylingMode="text"
          (onClick)="onItemClick(item)"
        ></dx-button>
        <dx-button
          *ngIf="last"
          [text]="item.label"
          [icon]="item.icon"
          stylingMode="text"
          [disabled]="true"
        ></dx-button>
        <span *ngIf="!last" class="separator">|</span>
      </ng-container>
      <dx-drop-down-button
        #dropDownButton
        *ngIf="hiddenItems.length > 0"
        [items]="hiddenItems"
        (onItemClick)="onHiddenItemClick($event)"
        [dropDownOptions]="{ width: 'auto', minWidth: 250 }"
        stylingMode="text"
        icon="more_horiz"
        displayExpr="label"
        keyExpr="url"
        [useSelectMode]="false"
        class="breadcrumb-dropdown"
      >
        <div *dxTemplate="let item of 'item'">
          <me-icon *ngIf="item.icon" [icon]="item.icon" size="small"></me-icon>
          <span class="label">{{ item.label }}</span>
        </div>
      </dx-drop-down-button>
    </nav>
  `,
  styles: [
    `
      .breadcrumbs {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }

      .separator {
        margin: 0 8px;
        color: #6c757d;
      }

      ::ng-deep .dx-button-mode-text {
        padding: 0;
      }

      ::ng-deep .dx-button-mode-text .dx-icon {
        margin-right: 4px;
      }

      ::ng-deep .breadcrumb-dropdown .dx-dropdownbutton-action {
        padding: 0;
        min-width: auto;
        border: none;
        background: none;
      }

      ::ng-deep .breadcrumb-dropdown .dx-dropdownbutton-toggle {
        display: none;
      }

      ::ng-deep .breadcrumb-dropdown .dx-button-content {
        padding: 0;
      }

      ::ng-deep .breadcrumb-dropdown .dx-dropdownbutton {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      ::ng-deep .breadcrumb-dropdown .dx-button-mode-text.dx-dropdownbutton {
        padding: 8px;
      }

      ::ng-deep .breadcrumb-dropdown .dx-icon-more_horiz {
        font-size: 20px;
      }

      ::ng-deep
        .breadcrumb-dropdown
        .dx-dropdownbutton-popup-wrapper
        .dx-item-content {
        display: flex;
        align-items: center;
        padding: 8px;
      }

      ::ng-deep .breadcrumb-dropdown .dx-dropdownbutton-popup-wrapper {
        min-width: 150px;
        right: 0; /* Позиционирование выпадающего списка справа */
      }

      ::ng-deep
        .breadcrumb-dropdown
        .dx-overlay-content.dx-dropdownbutton-popup-content {
        transform-origin: right top; /* Выпадающий список выходит справа */
      }
    `,
  ],
})
export class MeBreadcrumbsComponent {
  @Input() items: BreadcrumbItem[] = [];
  @Input() maxVisibleItems: number = 3;
  @Output() itemClick = new EventEmitter<BreadcrumbItem>();

  get visibleItems(): BreadcrumbItem[] {
    return this.items.slice(-this.maxVisibleItems);
  }

  get hiddenItems(): BreadcrumbItem[] {
    return this.items.slice(0, -this.maxVisibleItems);
  }

  onItemClick(item: BreadcrumbItem): void {
    this.itemClick.emit(item);
  }

  onHiddenItemClick(e: any): void {
    this.itemClick.emit(e.itemData);
  }
}
