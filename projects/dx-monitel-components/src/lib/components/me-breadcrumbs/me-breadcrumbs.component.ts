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
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxMenuModule,
  DxButtonModule,
  DxContextMenuModule,
  DxContextMenuComponent
} from 'devextreme-angular';

interface BreadcrumbItem {
  text: string;
  url?: string;
  icon?: string;
  items?: BreadcrumbItem[];
}

@Component({
  selector: 'me-breadcrumbs',
  standalone: true,
  imports: [CommonModule, DxMenuModule, DxButtonModule, DxContextMenuModule],
  template: `
    <nav class="breadcrumbs" aria-label="Breadcrumbs" #breadcrumbsContainer>
      <dx-button
        *ngIf="overflowLeft"
        icon="overflow"
        stylingMode="text"
        (onClick)="showOverflowMenu('left', $event)"
      ></dx-button>

      <ng-container *ngFor="let item of visibleItems; let isLast = last">
        <dx-menu
          [dataSource]="[item]"
          [showFirstSubmenuMode]="{ name: 'onClick', delay: { show: 0, hide: 300 } }"
          orientation="horizontal"
          [hideSubmenuOnMouseLeave]="false"
          (onItemClick)="onItemClick($event)"
          class="breadcrumb-menu"
        >
          <div *dxTemplate="let data of 'item'">
            <i *ngIf="data.icon" class="dx-icon-{{ data.icon }}"></i>
            <span class="dx-menu-item-text">{{ data.text }}</span>
            <i *ngIf="data.items?.length" class="dx-icon-chevrondown"></i>
          </div>
        </dx-menu>
        <span *ngIf="!isLast" class="separator">|</span>
      </ng-container>
      <dx-button
        *ngIf="overflowRight"
        icon="overflow"
        stylingMode="text"
        (onClick)="showOverflowMenu('right', $event)"
      ></dx-button>
    </nav>
    <dx-context-menu
      #overflowMenu
      [dataSource]="overflowItems"
      [width]="200"
      [target]="overflowMenuTarget || undefined"
      (onItemClick)="onOverflowItemClick($event)"

    ></dx-context-menu>
  `,
  styles: [`
    .breadcrumbs {
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    .breadcrumb-menu {
      display: inline-block;
    }
    .separator {
      margin: 0 8px;
      color: #6c757d;
      user-select: none;
    }
    .dx-button {
      padding: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeBreadcrumbsComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() items: BreadcrumbItem[] = [];
  @Input() truncateFrom: 'left' | 'right' = 'right';
  @Output() itemClick = new EventEmitter<BreadcrumbItem>();

  @ViewChild('breadcrumbsContainer', { static: true }) breadcrumbsContainer!: ElementRef;
  @ViewChild('overflowMenu', { static: true }) overflowMenu!: DxContextMenuComponent;
  @ViewChild('leftOverflowButton', { static: true }) leftOverflowButton?: ElementRef;
  @ViewChild('rightOverflowButton', { static: true }) rightOverflowButton?: ElementRef;

  visibleItems: BreadcrumbItem[] = [];
  overflowItems: BreadcrumbItem[] = [];
  overflowLeft = false;
  overflowRight = false;
  overflowMenuTarget: HTMLElement | null = null;
  private resizeObserver!: ResizeObserver;
  private breadcrumbWidths: number[] = [];

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items'] || changes['truncateFrom']) {
      this.updateItems();
    }
  }

  ngAfterViewInit() {
    this.setupResizeObserver();
    this.updateItems();
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
    // Очищаем предыдущие данные
    this.breadcrumbWidths = [];

    // Создаем временный контейнер для вычисления ширины
    const tempContainer = document.createElement('div');
    tempContainer.style.visibility = 'hidden';
    tempContainer.style.position = 'absolute';
    tempContainer.style.whiteSpace = 'nowrap';
    tempContainer.style.fontSize = getComputedStyle(this.breadcrumbsContainer.nativeElement).fontSize;
    document.body.appendChild(tempContainer);

    // Вычисляем ширину каждого элемента
    this.items.forEach(item => {
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

    const overflowButtonWidth = 40; // Уменьшаем ширину кнопки переполнения
    let availableWidth = containerWidth;

    // Учитываем ширину кнопок переполнения
    if (this.items.length > 0) {
      availableWidth -= overflowButtonWidth;
    }

    const totalItems = this.items.length;
    let start = 0;
    let end = totalItems;
    let visibleWidths = [];

    if (this.truncateFrom === 'left') {
      // Идем с конца
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
      // Идем с начала
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

  showOverflowMenu(position: 'left' | 'right', event: any) {
    this.overflowMenuTarget = event.element as HTMLElement; // Используем целевой элемент из события

    if (this.overflowMenuTarget) {
      this.overflowMenu.instance.option('target', this.overflowMenuTarget); // Устанавливаем целевой элемент для контекстного меню
      this.overflowMenu.instance.show().then();
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
