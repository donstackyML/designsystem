import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild, Renderer2, NgZone, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxMenuModule, DxButtonModule, DxContextMenuModule } from 'devextreme-angular';

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
        #leftOverflowButton
        icon="more"
        [stylingMode]="'text'"
        (onClick)="showOverflowMenu('left', $event)"
      ></dx-button>
      <ng-container *ngFor="let item of visibleItems; let last = last;">
        <dx-menu
          [dataSource]="[item]"
          [showFirstSubmenuMode]="{ name: 'onClick', delay: { show: 0, hide: 300 } }"
          orientation="horizontal"
          [hideSubmenuOnMouseLeave]="false"
          (onItemClick)="onItemClick($event)"
        >
          <div *dxTemplate="let data of 'item'">
            <i *ngIf="data.icon" class="dx-icon-{{data.icon}}"></i>
            <span class="dx-menu-item-text">{{ data.text }}</span>
            <i *ngIf="data.items?.length" class="dx-icon-chevrondown"></i>
          </div>
        </dx-menu>
        <span *ngIf="!last" class="separator">|</span>
      </ng-container>
      <dx-button
        *ngIf="overflowRight"
        #rightOverflowButton
        icon="more"
        [stylingMode]="'text'"
        (onClick)="showOverflowMenu('right', $event)"
      ></dx-button>
    </nav>
    <dx-context-menu
      #overflowMenu
      [dataSource]="overflowItems"
      [width]="200"
      [target]="overflowMenuTarget"
      (onItemClick)="onOverflowItemClick($event)"
    >
    </dx-context-menu>
  `,
  styles: [`
    .breadcrumbs {
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    .separator {
      margin: 0 8px;
      color: #6c757d;
    }
    ::ng-deep .dx-menu-base {
      display: inline-block;
    }
  `]
})
export class MeBreadcrumbsComponent implements AfterViewInit, OnChanges {
  @Input() items: BreadcrumbItem[] = [];
  @Input() truncateFrom: 'left' | 'right' = 'right';
  @Output() itemClick = new EventEmitter<BreadcrumbItem>();

  @ViewChild('breadcrumbsContainer') breadcrumbsContainer!: ElementRef;
  @ViewChild('overflowMenu') overflowMenu!: any; // DxContextMenuComponent
  @ViewChild('leftOverflowButton') leftOverflowButton!: ElementRef;
  @ViewChild('rightOverflowButton') rightOverflowButton!: ElementRef;

  visibleItems: BreadcrumbItem[] = [];
  overflowItems: BreadcrumbItem[] = [];
  overflowLeft = false;
  overflowRight = false;
  overflowMenuTarget: string = '';
  private resizeObserver!: ResizeObserver;

  constructor(
    private renderer: Renderer2,
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
      console.log('dd')
      this.zone.run(() => {
        this.updateVisibleItems();
      });
    });
    this.resizeObserver.observe(this.breadcrumbsContainer.nativeElement);
  }

  private updateItems() {
    this.visibleItems = [...this.items];
    this.updateVisibleItems();
  }

  private updateVisibleItems() {
    const containerWidth = this.breadcrumbsContainer.nativeElement.offsetWidth;
    const itemElements = this.breadcrumbsContainer.nativeElement.querySelectorAll('dx-menu');
    let totalWidth = 0;
    let visibleCount = 0;


    const overflowButtonWidth = 40;

    for (let i = 0; i < itemElements.length; i++) {
      const itemWidth = itemElements[i].offsetWidth;
      if (totalWidth + itemWidth + overflowButtonWidth > containerWidth) {
        break;
      }
      totalWidth += itemWidth;
      visibleCount++;
    }

    if (this.truncateFrom === 'left') {
      this.visibleItems = this.items.slice(-visibleCount);
      this.overflowItems = this.items.slice(0, this.items.length - visibleCount);
      this.overflowLeft = visibleCount < this.items.length;
      this.overflowRight = false;
    } else {
      this.visibleItems = this.items.slice(0, visibleCount);
      this.overflowItems = this.items.slice(visibleCount);
      this.overflowLeft = false;
      this.overflowRight = visibleCount < this.items.length;
    }

    if (visibleCount < this.items.length) {
      let remainingWidth = containerWidth - totalWidth - overflowButtonWidth; // Оставшееся пространство

      if (this.truncateFrom === 'left') {
        while (this.overflowItems.length > 0 && remainingWidth > 0) {
          const nextItem = this.overflowItems.pop()!;
          const nextItemWidth = this.getItemWidth(nextItem); // метод для получения ширины элемента
          if (nextItemWidth + overflowButtonWidth <= remainingWidth) {
            this.visibleItems.unshift(nextItem);
            remainingWidth -= nextItemWidth;
          } else {
            this.overflowItems.push(nextItem); // возвращаем элемент обратно, если не помещается
            break;
          }
        }
      } else {
        // Добавляем элементы справа
        while (this.overflowItems.length > 0 && remainingWidth > 0) {
          const nextItem = this.overflowItems.shift()!;
          const nextItemWidth = this.getItemWidth(nextItem); // метод для получения ширины элемента
          if (nextItemWidth + overflowButtonWidth <= remainingWidth) {
            this.visibleItems.push(nextItem);
            remainingWidth -= nextItemWidth;
          } else {
            this.overflowItems.unshift(nextItem);
            break;
          }
        }
      }
    }

    this.overflowLeft = this.truncateFrom === 'left' && this.overflowItems.length > 0;
    this.overflowRight = this.truncateFrom === 'right' && this.overflowItems.length > 0;

    this.cdr.detectChanges();
  }

  private getItemWidth(item: BreadcrumbItem): number {
    // Создаем временный элемент
    const tempElement = this.renderer.createElement('div');
    tempElement.style.visibility = 'hidden';

    // Добавляем иконку, если она есть
    if (item.icon) {
      const iconElement = this.renderer.createElement('i');
      this.renderer.addClass(iconElement, `dx-icon-${item.icon}`);
      this.renderer.appendChild(tempElement, iconElement);
    }

    // Добавляем текст
    const textElement = this.renderer.createElement('span');
    const textNode = this.renderer.createText(item.text);
    this.renderer.appendChild(textElement, textNode);
    this.renderer.appendChild(tempElement, textElement);

    // Добавляем временный элемент в DOM для измерения
    this.renderer.appendChild(this.breadcrumbsContainer.nativeElement, tempElement);
    const width = tempElement.offsetWidth;

    // Удаляем временный элемент
    this.renderer.removeChild(this.breadcrumbsContainer.nativeElement, tempElement);

    // Округляем ширину до ближайшего целого числа
    return Math.round(width);
  }




  onItemClick(e: any): void {
    const clickedItem = e.itemData as BreadcrumbItem;
    if (clickedItem.url) {
      this.itemClick.emit(clickedItem);
    }
  }

  showOverflowMenu(position: 'left' | 'right', event: any) {
    this.overflowMenuTarget = position === 'left' ? this.leftOverflowButton.nativeElement : this.rightOverflowButton.nativeElement;
    this.overflowMenu.instance.option('target', event.target);
    this.overflowMenu.instance.show();
  }

  onOverflowItemClick(e: any): void {
    const clickedItem = e.itemData as BreadcrumbItem;
    if (clickedItem.url) {
      this.itemClick.emit(clickedItem);
    }
    this.overflowMenu.instance.hide();
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
