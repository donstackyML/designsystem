import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ElementRef,
  ViewChild,
  NgZone,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxMenuModule,
  DxButtonModule,
  DxContextMenuModule,
  DxContextMenuComponent,
} from 'devextreme-angular';
import { MeIconComponent } from '../me-icon/me-icon.component';

interface BreadcrumbItem {
  text: string;
  url?: string;
  icon?: string;
  items?: BreadcrumbItem[];
}

@Component({
  selector: 'me-breadcrumbs',
  standalone: true,
  imports: [CommonModule, DxMenuModule, DxButtonModule, DxContextMenuModule, MeIconComponent],
  template: `
    <nav class="breadcrumbs" [ngClass]="size" aria-label="Breadcrumbs" #breadcrumbsContainer>
      <dx-button
        *ngIf="overflowLeft"
        stylingMode="text"
        (onClick)="showOverflowMenu('left', $event)"
      >
        <me-icon icon="more_horiz" [size]="size"></me-icon>
      </dx-button>

      <ng-container *ngFor="let item of visibleItems; let isLast = last">
        <dx-menu
          [dataSource]="[item]"
          [showFirstSubmenuMode]="{
            name: 'onClick',
            delay: { show: 0, hide: 300 }
          }"
          orientation="horizontal"
          [hideSubmenuOnMouseLeave]="false"
          (onItemClick)="onItemClick($event)"
          class="breadcrumb-menu"
          [ngClass]="size"
        >
          <div *dxTemplate="let data of 'item'" class="menu-item" [ngClass]="size">
            <me-icon
              *ngIf="data.icon"
              [icon]="data.icon"
              [size]="size"
              color="inherit"
            ></me-icon>
            <span class="dx-menu-item-text">{{ data.text }}</span>
            <i *ngIf="data.items?.length" class="dx-icon-spindown"></i>
          </div>
        </dx-menu>
        <span *ngIf="!isLast" class="separator"></span>
      </ng-container>

      <dx-button
        *ngIf="overflowRight"
        stylingMode="text"
        (onClick)="showOverflowMenu('right', $event)"
      >
        <me-icon icon="more_horiz" [size]="size"></me-icon>
      </dx-button>
    </nav>
    <dx-context-menu
      class="context-menu"
      #overflowMenu
      [dataSource]="overflowItems"
      [width]="200"
      [position]="contextMenuPosition"
      (onPositioning)="onContextMenuPositioning($event)"
      (onItemClick)="onOverflowItemClick($event)"
    >
      <div *dxTemplate="let data of 'item'" class="context-menu-item" [ngClass]="size">
        <me-icon
          *ngIf="data.icon"
          [icon]="data.icon"
          [size]="size"
          color="inherit"
        ></me-icon>
        <span>{{ data.text }}</span>
        <i *ngIf="data.items?.length" class="dx-icon-spindown"></i>
      </div>
    </dx-context-menu>

  `,
  styles: [`
    .dx-button {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      &.dx-state-hover {
        background-color: rgba(216, 218, 234, 1) !important;
      }

      &.dx-state-active {
        background-color: rgba(191, 193, 208, 1) !important;
      }

      &.dx-state-disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      &:hover {
        background-color: #f0f0f0;
      }

      &:active {
        background-color: #e0e0e0;
      }
    }

    .breadcrumbs {
      display: flex;
      align-items: center;
      overflow: hidden;

      .dx-button .dx-button-content {
        padding: 0;
      }

      .dx-menu-item-content .dx-menu-item-text {
        padding: 3px 10px 5px 10px;
      }

      &.small {
        .dx-menu-item-content {
          i {
            font-size: 20px;
          }
        }

        .dx-menu-item-text {
          font-size: 13px;
        }

        .dx-button-has-icon .dx-icon {
          font-size: 20px !important;
        }

        .dx-button-has-icon .dx-button-content {
          padding: 5px;
        }

        .dx-icon-spindown {
          font-size: 20px;
        }
      }

      &.large {
        .dx-menu-item-content {
          i {
            font-size: 24px;
          }
        }

        .dx-menu-item-text {
          font-size: 14px;
        }

        .dx-button-has-icon .dx-icon {
          font-size: 24px !important;
        }

        .dx-icon-spindown {
          font-size: 24px;
        }
      }
    }

    .breadcrumb-menu {
      display: inline-block;

      .dx-menu-item-content {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 0 5px;
      }

      .dx-menu-item {
        &.dx-state-hover {
          background-color: rgba(216, 218, 234, 1);
        }

        &.dx-state-active {
          background-color: rgba(191, 193, 208, 1);
        }

        &.dx-state-disabled {
          opacity: 0.5;
          pointer-events: none;
        }
      }

      .dx-menu-item.dx-menu-item-expanded,
      .dx-context-menu-container-border {
        background-color: transparent;
        border: none !important;
        box-shadow: none;
      }
    }

    .separator {
      position: relative;
      width: 20px;
      height: 20px;
      margin: 0 4px;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1px;
        height: 20px;
        border-right: 1px solid rgba(213, 214, 223, 1);
      }
    }

    .context-menu-item {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 5px 10px; /* Отступы по умолчанию */

      i {
        font-size: 20px !important; /* Размер иконок по умолчанию */
      }

      span {
        font-size: 13px; /* Размер текста по умолчанию */
      }
    }

    .menu-item {
      display: flex;
      align-items: center;
      gap: 5px;
      i {
        font-size: 20px !important; /* Размер иконок по умолчанию */
      }

      span {
        font-size: 13px; /* Размер текста по умолчанию */
      }
    }

    .context-menu-item.small {
      padding: 5px 10px;

      i {
        font-size: 20px;
      }

      span {
        font-size: 13px;
      }
    }

    .menu-item.small {

      i {
        font-size: 20px;
      }

      span {
        font-size: 13px;
      }
    }


    .context-menu-item.large {
      padding: 10px 15px;

      i {
        font-size: 24px;
      }

      span {
        font-size: 14px;
      }
    }

    .menu-item.large {

      i {
        font-size: 24px;
      }

      span {
        font-size: 14px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeBreadcrumbsComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() items: BreadcrumbItem[] = [];
  @Input() truncateFrom: 'left' | 'right' = 'right';
  @Input() size: 'small' | 'large' = 'small';
  @Output() itemClick = new EventEmitter<BreadcrumbItem>();

  @ViewChild('breadcrumbsContainer', { static: true })
  breadcrumbsContainer!: ElementRef;
  @ViewChild('overflowMenu', { static: true })
  overflowMenu!: DxContextMenuComponent;

  visibleItems: BreadcrumbItem[] = [];
  overflowItems: BreadcrumbItem[] = [];
  overflowLeft = false;
  overflowRight = false;
  overflowMenuTarget: HTMLElement | null = null;
  private resizeObserver!: ResizeObserver;
  private breadcrumbWidths: number[] = [];

  constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items'] || changes['truncateFrom'] || changes['size']) {
      this.updateItems();
    }
  }

  ngAfterViewInit() {
    this.setupResizeObserver();
    this.updateItems();

    this.overflowMenu.instance.option('cssClass', 'breadcrumbs-overflow-menu');
    this.overflowMenu.instance.option('items', this.overflowItems.map(item => ({
      ...item,
      template: (itemData: any, itemIndex: number, itemElement: any) => {
        const content = document.createElement('span');
        content.textContent = itemData.text;
        itemElement.appendChild(content);
      }
    })));
  }

  private setupResizeObserver() {
    this.resizeObserver = new ResizeObserver(() => {
      this.zone.run(() => {
        this.updateVisibleItems();
      });
    });
    this.resizeObserver.observe(this.breadcrumbsContainer.nativeElement);
  }

  private updateItems() {
    this.visibleItems = [...this.items];
    this.calculateBreadcrumbWidths();
    this.updateVisibleItems();
  }

  private calculateBreadcrumbWidths() {
    this.breadcrumbWidths = [];
    const tempContainer = document.createElement('div');
    tempContainer.style.visibility = 'hidden';
    tempContainer.style.position = 'absolute';
    tempContainer.style.whiteSpace = 'nowrap';
    tempContainer.style.fontSize = getComputedStyle(
      this.breadcrumbsContainer.nativeElement
    ).fontSize;
    document.body.appendChild(tempContainer);

    this.items.forEach((item) => {
      tempContainer.innerHTML = `
        <div class="breadcrumb-item">
          ${item.icon ? `<i class="dx-icon-${item.icon}"></i>` : ''}
          <span class="dx-menu-item-text">${item.text}</span>
          ${item.items?.length ? '<i class="dx-icon-chevron-down"></i>' : ''}
        </div>
      `;
      const width = tempContainer.offsetWidth;
      this.breadcrumbWidths.push(width * 2);
    });

    document.body.removeChild(tempContainer);
  }

  private updateVisibleItems() {
    const containerWidth = this.breadcrumbsContainer.nativeElement.offsetWidth;
    const overflowButtonWidth = this.size === 'small' ? 24 : 32;
    let availableWidth = containerWidth - overflowButtonWidth;

    const totalItems = this.items.length;
    let start = 0;
    let end = totalItems;
    let visibleWidths = [];

    if (this.truncateFrom === 'left') {
      for (let i = totalItems - 1; i >= 0; i--) {
        const width = this.breadcrumbWidths[i];
        if (availableWidth - width >= 0) {
          availableWidth -= width;
          start = i;
          visibleWidths.unshift(width);
        } else {
          break;
        }
      }
      this.visibleItems = this.items.slice(start, end);
      this.overflowItems = this.items.slice(0, start);
      this.overflowLeft = this.overflowItems.length > 0;
      this.overflowRight = false;
    } else {
      for (let i = 0; i < totalItems; i++) {
        const width = this.breadcrumbWidths[i];
        if (availableWidth - width >= 0) {
          availableWidth -= width;
          end = i + 1;
          visibleWidths.push(width);
        } else {
          break;
        }
      }
      this.visibleItems = this.items.slice(0, end);
      this.overflowItems = this.items.slice(end, totalItems);
      this.overflowLeft = false;
      this.overflowRight = this.overflowItems.length > 0;
    }

    this.cdr.markForCheck();
  }

  onItemClick(e: any): void {
    const clickedItem = e.itemData as BreadcrumbItem;
    if (clickedItem.url) {
      this.itemClick.emit(clickedItem);
    }
  }

  onContextMenuPositioning(e: any) {
    const menuRect = e.element.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;

    if (menuRect.right > viewportWidth) {
      e.position.offset.x = viewportWidth - menuRect.right - 10;
    }

    const viewportHeight = document.documentElement.clientHeight;
    if (menuRect.bottom > viewportHeight) {
      e.position.my = e.position.my.replace('top', 'bottom');
      e.position.at = e.position.at.replace('bottom', 'top');
      e.position.offset.y = -5;
    }
  }

  contextMenuPosition: any = {
    my: 'top left',
    at: 'bottom left',
    offset: { x: 0, y: 5 }
  };

  showOverflowMenu(position: 'left' | 'right', event: any) {
    this.overflowMenuTarget = event.element as HTMLElement;
    if (this.overflowMenuTarget) {
      this.contextMenuPosition = {
        my: position === 'left' ? 'top left' : 'top right',
        at: position === 'left' ? 'bottom left' : 'bottom right',
        of: this.overflowMenuTarget,
        offset: { x: 0, y: 5 }
      };
      this.overflowMenu.instance.option('position', this.contextMenuPosition);
      this.overflowMenu.instance.show();
    }
  }

  onOverflowItemClick(e: any): void {
    const clickedItem = e.itemData as BreadcrumbItem;
    if (clickedItem.url) {
      this.itemClick.emit(clickedItem);
    }
    this.overflowMenu.instance.hide().then();
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
