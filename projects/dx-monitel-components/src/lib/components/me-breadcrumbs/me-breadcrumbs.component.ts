import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild, Renderer2, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxMenuModule } from 'devextreme-angular/ui/menu';

interface BreadcrumbItem {
  text: string;
  url?: string;
  icon?: string;
  items?: BreadcrumbItem[];
}

@Component({
  selector: 'me-breadcrumbs',
  standalone: true,
  imports: [CommonModule, DxMenuModule],
  template: `
    <nav class="breadcrumbs" aria-label="Breadcrumbs" #breadcrumbsContainer>
      <ng-container *ngFor="let item of items; let last = last; let i = index">
        <div class="breadcrumb-item" #breadcrumbItem>
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
        </div>
        <span *ngIf="!last" class="separator">|</span>
      </ng-container>
      <dx-menu
        *ngIf="hiddenItemsCount > 0"
        #overflowMenu
        [dataSource]="[{icon: 'more'}]"
        [showFirstSubmenuMode]="{ name: 'onClick', delay: { show: 0, hide: 300 } }"
        orientation="horizontal"
        [hideSubmenuOnMouseLeave]="false"
        (onItemClick)="showHiddenItems()"
      >
        <div *dxTemplate="let data of 'item'">
          <i class="dx-icon-{{data.icon}}"></i>
        </div>
      </dx-menu>
    </nav>
  `,
  styles: [`
    .breadcrumbs {
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    .breadcrumb-item {
      display: inline-flex;
      align-items: center;
    }
    .separator {
      margin: 0 8px;
      color: #6c757d;
    }
    ::ng-deep .dx-menu-base {
      display: inline-block;
    }
    ::ng-deep .dx-menu-horizontal > .dx-menu-item-wrapper {
      display: inline-block;
    }
    ::ng-deep .dx-menu-item-content {
      display: flex;
      align-items: center;
    }
    ::ng-deep .dx-icon {
      margin-right: 5px;
    }
    .dx-menu-item-text {
      margin: 0 5px;
    }
  `]
})
export class MeBreadcrumbsComponent implements AfterViewInit {
  @Input() items: BreadcrumbItem[] = [];
  @Output() itemClick = new EventEmitter<BreadcrumbItem>();

  @ViewChild('breadcrumbsContainer') breadcrumbsContainer!: ElementRef;

  private observer!: IntersectionObserver;
  private visibleItems: Set<number> = new Set();
  hiddenItemsCount = 0;

  constructor(private renderer: Renderer2, private zone: NgZone) {}

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const options = {
      root: this.breadcrumbsContainer.nativeElement,
      threshold: 1
    };

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          if (entry.isIntersecting) {
            this.visibleItems.add(index);
          } else {
            this.visibleItems.delete(index);
          }
        });

        this.zone.run(() => {
          this.hiddenItemsCount = this.items.length - this.visibleItems.size;
        });
      }, options);

      this.breadcrumbsContainer.nativeElement.querySelectorAll('.breadcrumb-item').forEach((item: Element, index: number) => {
        this.renderer.setAttribute(item, 'data-index', index.toString());
        this.observer.observe(item);
      });
    });
  }

  onItemClick(e: any): void {
    const clickedItem = e.itemData as BreadcrumbItem;
    if (clickedItem.url) {
      this.itemClick.emit(clickedItem);
    }
  }

  showHiddenItems() {
    // Реализация показа скрытых элементов
    console.log('Показать скрытые элементы');
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
