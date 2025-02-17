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
  OnInit,
  Renderer2,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxMenuModule,
  DxButtonModule,
  DxContextMenuModule,
  DxContextMenuComponent,
  DxButtonComponent,
  DxMenuComponent,
} from 'devextreme-angular';
import { MeIconComponent } from '../me-icon/me-icon.component';
import { ComponentFocusService } from '../../service/component-focus.service';

interface BreadcrumbItem {
  text?: string;
  url?: string;
  icon?: string;
  items?: BreadcrumbItem[];
}

@Component({
  selector: 'me-breadcrumbs',
  templateUrl: './me-breadcrumbs.component.html',
  standalone: true,
  imports: [
    CommonModule,
    DxMenuModule,
    DxButtonModule,
    DxContextMenuModule,
    MeIconComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeBreadcrumbsComponent
  implements AfterViewInit, OnChanges, OnDestroy, OnInit
{
  @Input() items: BreadcrumbItem[] = [];
  @Input() truncateFrom: 'left' | 'right' = 'right';
  @Input() size: 'small' | 'large' = 'small';
  @Input() showDivider = true;
  @Output() itemClick = new EventEmitter<BreadcrumbItem>();

  @ViewChild('breadcrumbsContainer', { static: true })
  breadcrumbsContainer!: ElementRef;
  @ViewChild('overflowMenu', { static: true })
  overflowMenu!: DxContextMenuComponent;
  @ViewChildren(DxMenuComponent)
  menuItems!: QueryList<DxMenuComponent>;
  @ViewChild('leftBtn', { static: true })
  leftBtn?: DxButtonComponent;
  @ViewChild('rightBtn', { static: true })
  rightBtn?: DxButtonComponent;

  visibleItems: BreadcrumbItem[] = [];
  overflowItems: BreadcrumbItem[] = [];
  overflowLeft = false;
  overflowRight = false;
  overflowMenuTarget: HTMLElement | null = null;
  private resizeObserver!: ResizeObserver;
  private breadcrumbWidths: number[] = [];
  private focusService: ComponentFocusService;

  private keyNavigationIdx = -1;
  private keyItemNavigationIdx = -1;
  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.focusService = new ComponentFocusService(elementRef, renderer);
    this.focusService.addKeyUpEventHandle('Tab', (evt) => this.tabHandle(evt));
    this.focusService.addKeyUpEventHandle('ArrowLeft', (evt) =>
      this.leftHandle(evt)
    );
    this.focusService.addKeyUpEventHandle('ArrowRight', (evt) =>
      this.rightHandle(evt)
    );
    this.focusService.addFocusOutHandle((evt) => this.outFocusHandle(evt));
  }

  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'me-breadcrumbs');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items'] || changes['truncateFrom'] || changes['size']) {
      this.updateItems();
    }
  }

  ngAfterViewInit() {
    this.setupResizeObserver();
    this.updateItems();

    this.overflowMenu.instance.option('cssClass', 'breadcrumbs-overflow-menu');
    this.overflowMenu.instance.option(
      'items',
      this.overflowItems.map((item) => ({
        ...item,
        template: (itemData: any, itemIndex: number, itemElement: any) => {
          const content = document.createElement('span');
          content.textContent = itemData.text;
          itemElement.appendChild(content);
        },
      }))
    );
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
          ${item.text ? `<span class="dx-menu-item-text">${item.text}</span>`: ''}
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

  onSubmenuShowing(e: any) {
    const submenuContainer = e.submenuContainer;

    if (submenuContainer) {
      submenuContainer.classList.add('me-custom-submenu-class');
    }
  }

  contextMenuPosition: any = {
    my: 'top left',
    at: 'bottom left',
    offset: { x: 0, y: 5 },
  };

  private overflowMenuOptions = {
    wrapperAttr: {
      class: 'me-overflow-menu-popup',
    },
  };

  showOverflowMenu(position: 'left' | 'right', event: any) {
    this.overflowMenuTarget = event.element as HTMLElement;
    if (this.overflowMenuTarget) {
      this.contextMenuPosition = {
        my: position === 'left' ? 'top left' : 'top right',
        at: position === 'left' ? 'bottom left' : 'bottom right',
        of: this.overflowMenuTarget,
        offset: { x: 0, y: 5 },
      };

      this.overflowMenu.instance.option({
        position: this.contextMenuPosition,
        ...this.overflowMenuOptions,
      });

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
    this.focusService.ngOnDestroy();
  }

  private tabHandle(evt: KeyboardEvent) {
    let container = this.breadcrumbsContainer.nativeElement;

    let btnLeft = container.querySelector('.breadcrumbs__left-btn');
    let btnRight = container.querySelector('.breadcrumbs__right-btn');

    let items: any = [];
    if (btnLeft) {
      items.push(btnLeft);
    }
    this.menuItems.forEach((cmp) => items.push(cmp.instance.element()));
    if (btnRight) {
      items.push(btnRight);
    }
    if (this.keyNavigationIdx < 0) {
      this.keyNavigationIdx = 0;
    } else {
      this.keyNavigationIdx += 1;
      if (this.keyNavigationIdx >= items.length) {
        this.keyNavigationIdx = -1;
        return;
      }
    }

    if (btnLeft) {
      if (this.keyItemNavigationIdx < this.menuItems.length) {
        this.keyItemNavigationIdx = this.keyNavigationIdx - 1;
      } else {
        this.keyItemNavigationIdx = -1;
      }
    } else {
      if (this.keyNavigationIdx < this.menuItems.length) {
        this.keyItemNavigationIdx = this.keyNavigationIdx;
      } else {
        this.keyItemNavigationIdx = -1;
      }
    }

    items.forEach((elm: { tabIndex: number }) => (elm.tabIndex = 0));
    let elm = items[this.keyNavigationIdx];
    elm.tabIndex = 0;
    elm.focus();
    evt.preventDefault();
    this.focusService.holdKeyboardFocus();
  }

  private leftHandle(evt: KeyboardEvent) {
    let items: any = [];
    this.menuItems.forEach((cmp) => items.push(cmp.instance.element()));
    if (this.keyItemNavigationIdx < 0) {
      this.keyItemNavigationIdx = this.items.length - 1;
    } else if (this.keyItemNavigationIdx - 1 > -1) {
      this.keyItemNavigationIdx -= 1;
    } else {
      this.keyItemNavigationIdx = this.items.length - 1;
    }
    let elm = items[this.keyItemNavigationIdx];
    elm.tabIndex = 0;
    elm.focus();
    evt.preventDefault();
    this.focusService.holdKeyboardFocus();
  }

  private rightHandle(evt: KeyboardEvent) {
    let items: any = [];
    this.menuItems.forEach((cmp) => items.push(cmp.instance.element()));
    if (this.keyItemNavigationIdx < 0) {
      this.keyItemNavigationIdx = 0;
    } else if (this.keyItemNavigationIdx + 1 < this.items.length) {
      this.keyItemNavigationIdx += 1;
    } else {
      this.keyItemNavigationIdx = 0;
    }
    let elm = items[this.keyItemNavigationIdx];
    elm.tabIndex = 0;
    elm.focus();
    evt.preventDefault();
    this.focusService.holdKeyboardFocus();
  }

  private outFocusHandle(evt: FocusEvent) {}
}
