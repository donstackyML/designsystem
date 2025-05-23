import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MeIconsModule, MeIconsRegistry } from '@monitel/me-icons-registry';
import { moreHorizX20 } from '@monitel/me-icons';
import {
  DxButtonComponent,
  DxButtonModule,
  DxContextMenuComponent,
  DxContextMenuModule,
  DxMenuComponent,
  DxMenuModule,
} from 'devextreme-angular';
import type { ItemClickEvent as ContextMenuItemClickEvent } from 'devextreme/ui/context_menu';
import type { ItemClickEvent as MenuItemClickEvent } from 'devextreme/ui/menu';
import { MeMenuModule } from '../../directives/me-menu/me-menu.module';
import { ComponentFocusService } from '../../service/component-focus.service';

export interface BreadcrumbItem {
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
    MeIconsModule,
    DxMenuModule,
    MeMenuModule,
    DxButtonModule,
    DxContextMenuModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeBreadcrumbsComponent
  implements AfterViewInit, OnChanges, OnDestroy, OnInit
{
  @Input() items: any[] = [];
  @Input() displayExpr: string = 'text';
  @Input() iconExpr: string = 'icon';
  @Input() itemsExpr: string = 'items';
  @Input() urlExpr: string = 'url';
  @Input() truncateFrom: 'left' | 'right' = 'right';
  @Input() size: 'small' | 'large' = 'small';
  @Input() showDivider: boolean = true;

  @Output() itemClick = new EventEmitter<BreadcrumbItem>();

  @ViewChild('breadcrumbsContainer', { static: true })
  breadcrumbsContainer!: ElementRef;
  @ViewChild('overflowMenu', { static: true })
  overflowMenu!: DxContextMenuComponent;
  @ViewChildren(DxMenuComponent) menuItems!: QueryList<DxMenuComponent>;
  @ViewChild('leftBtn', { static: true }) leftBtn?: DxButtonComponent;
  @ViewChild('rightBtn', { static: true }) rightBtn?: DxButtonComponent;
  @ViewChildren('breadcrumbItem') breadcrumbItems!: QueryList<ElementRef>;

  normalizedItems: BreadcrumbItem[] = [];
  overflowItems: BreadcrumbItem[] = [];
  overflowLeft = false;
  overflowRight = false;
  overflowMenuTarget: HTMLElement | null = null;

  contextMenuPosition: any = {
    my: 'top left',
    at: 'bottom left',
    offset: { x: 0, y: 5 },
  };

  private resizeObserver!: ResizeObserver;
  private focusService: ComponentFocusService;
  private isOpenedSubmenu = false;
  private keyNavigationIdx = -1;
  private keyItemNavigationIdx = -1;
  private previousItemsLength = 0;
  private updateVisibleItemsScheduled = false;

  private overflowMenuOptions = {
    wrapperAttr: {
      class: 'me-overflow-menu-popup',
    },
  };

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private meIconRegistry: MeIconsRegistry
  ) {
    this.focusService = new ComponentFocusService(elementRef, renderer);
    this.focusService.addKeyUpEventHandle('Tab', (evt) => this.tabHandle(evt));
    this.focusService.addKeyUpEventHandle('ArrowLeft', (evt) =>
      this.leftHandle(evt)
    );
    this.focusService.addKeyUpEventHandle('ArrowRight', (evt) =>
      this.rightHandle(evt)
    );

    meIconRegistry.registerIcons([moreHorizX20]);
  }

  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'me-breadcrumbs');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items'] || changes['truncateFrom'] || changes['size']) {
      this.updateItems();
      this.previousItemsLength = this.items.length;
    }
  }

  ngDoCheck() {
    if (this.items && this.items.length !== this.previousItemsLength) {
      this.previousItemsLength = this.items.length;
      this.updateItems();
      this.updateVisibleItems();
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

    this.renderer.listen(
      this.elementRef.nativeElement,
      'contextmenu',
      (e: MouseEvent) => {
        e.stopPropagation();
      }
    );
  }

  onContextMenuItemMouseDown(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    this.renderer.addClass(target, 'me-state-active');
  }

  onContextMenuItemMouseUp(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    this.renderer.removeClass(target, 'me-state-active');
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver.unobserve(
        this.elementRef.nativeElement.parentElement
      );
    }
    this.focusService.ngOnDestroy();
  }

  onItemClick(e: MenuItemClickEvent): void {
    const clickedItem = e.itemData;
    this.itemClick.emit(this.getOriginalItem(clickedItem));
  }

  private getOriginalItem(item: any) {
    return this.items.find(
      (el) =>
        el[this.displayExpr] === item?.text &&
        el[this.urlExpr] === item?.url &&
        el[this.iconExpr] === item?.icon
    );
  }

  onOverflowItemClick(e: ContextMenuItemClickEvent): void {
    const clickedItem = e.itemData as BreadcrumbItem;
    this.itemClick.emit(this.getOriginalItem(clickedItem));

    // Получаем элемент, на который кликнули
    const targetElement = e.event?.target as HTMLElement;
    // Добавляем класс 'dx-state-active'
    this.renderer.addClass(targetElement, 'dx-state-active');

    // Если нужно, можно убрать класс через небольшой интервал времени
    setTimeout(() => {
      this.renderer.removeClass(targetElement, 'dx-state-active');
    }, 300);

    this.overflowMenu.instance.hide().then();
  }

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
      submenuContainer.classList.add('me-custom-submenu');
    }
    this.focusService.clearKeyboardFocus();
    this.isOpenedSubmenu = true;
  }

  onSubmenuHiding(e: any) {
    if (
      (e.submenu?._shownSubmenus?.length === 0 ||
        typeof e.submenu?._shownSubmenus === 'undefined') &&
      e.submenu._isHidden
    ) {
      this.isOpenedSubmenu = false;
    }
  }

  setIconSize(): number {
    return this.size === 'small' ? 20 : 24;
  }

  private setupResizeObserver() {
    this.resizeObserver = new ResizeObserver(() => {
      this.zone.run(() => {
        this.updateVisibleItems();
      });
    });

    if (this.elementRef.nativeElement?.parentElement) {
      this.resizeObserver.observe(this.elementRef.nativeElement?.parentElement);
    }
  }

  private scheduleUpdateVisibleItems() {
    if (this.updateVisibleItemsScheduled) return;
    this.updateVisibleItemsScheduled = true;
    requestAnimationFrame(() => {
      this.updateVisibleItems();
      this.updateVisibleItemsScheduled = false;
    });
  }

  private updateItems() {
    const newNormalizedItems = this.normalizeItems(this.items);
    const isDifferentLength =
      newNormalizedItems.length !== this.normalizedItems.length;
    const isDifferentContent =
      JSON.stringify(newNormalizedItems) !==
      JSON.stringify(this.normalizedItems);

    if (isDifferentLength || isDifferentContent) {
      this.normalizedItems = newNormalizedItems;
      this.scheduleUpdateVisibleItems();
    }
  }

  private normalizeItems(items: any[]): BreadcrumbItem[] {
    return items.map((item: any) => {
      const normalized: BreadcrumbItem = {
        text: item[this.displayExpr],
        url: item[this.urlExpr],
        icon: item[this.iconExpr],
      };
      if (item[this.itemsExpr] && Array.isArray(item[this.itemsExpr])) {
        normalized.items = this.normalizeItems(item[this.itemsExpr]);
      }
      return normalized;
    });
  }

  private updateVisibleItems(): void {
    const containerEl = this.breadcrumbsContainer.nativeElement as HTMLElement;
    this.breadcrumbItems.forEach((itemRef) => {
      this.renderer.removeClass(itemRef.nativeElement, 'hidden-breadcrumb');
    });

    this.overflowItems = [];
    this.overflowLeft = false;
    this.overflowRight = false;

    const isOverflown = (element: HTMLElement): boolean =>
      element.scrollWidth > element.clientWidth;

    if (isOverflown(containerEl)) {
      if (this.truncateFrom === 'right') {
        const itemsArr = this.breadcrumbItems.toArray();
        while (isOverflown(containerEl) && itemsArr.length > 1) {
          const removedEl = itemsArr.pop();
          if (removedEl) {
            this.renderer.addClass(
              removedEl.nativeElement,
              'hidden-breadcrumb'
            );
            const index = itemsArr.length;
            if (this.normalizedItems[index]) {
              this.overflowItems.unshift(this.normalizedItems[index]);
            }
          }
        }
        this.overflowRight = this.overflowItems.length > 0;
      } else {
        const itemsArr = this.breadcrumbItems.toArray();
        while (isOverflown(containerEl) && itemsArr.length > 1) {
          const removedEl = itemsArr.shift();
          if (removedEl) {
            this.renderer.addClass(
              removedEl.nativeElement,
              'hidden-breadcrumb'
            );
            if (this.normalizedItems.length > 0) {
              this.overflowItems.push(this.normalizedItems[0]);
            }
          }
        }
        this.overflowLeft = this.overflowItems.length > 0;
      }
    }
    this.cdr.markForCheck();
  }

  private tabHandle(evt: KeyboardEvent) {
    if (this.isOpenedSubmenu) return;
    let container = this.breadcrumbsContainer.nativeElement;
    let btnLeft = container.querySelector('.breadcrumbs__left-btn');
    let btnRight = container.querySelector('.breadcrumbs__right-btn');
    let items: any = [];
    if (btnLeft) items.push(btnLeft);
    this.menuItems.forEach((cmp) => items.push(cmp.instance.element()));
    if (btnRight) items.push(btnRight);

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
      this.keyItemNavigationIdx =
        this.keyNavigationIdx < this.menuItems.length + 1
          ? this.keyNavigationIdx - 1
          : -1;
    } else {
      this.keyItemNavigationIdx =
        this.keyNavigationIdx < this.menuItems.length
          ? this.keyNavigationIdx
          : -1;
    }

    items.forEach((elm: { tabIndex: number }) => (elm.tabIndex = 0));
    let elm = items[this.keyNavigationIdx];
    elm.tabIndex = 0;
    elm.focus();
    evt.preventDefault();
    this.focusService.holdKeyboardFocus();
  }

  private leftHandle(evt: KeyboardEvent) {
    if (this.isOpenedSubmenu) return;
    let items: any = [];
    this.menuItems.forEach((cmp) => items.push(cmp.instance.element()));
    if (this.keyItemNavigationIdx < 0) {
      this.keyItemNavigationIdx = this.normalizedItems.length - 1;
    } else if (this.keyItemNavigationIdx - 1 > -1) {
      this.keyItemNavigationIdx -= 1;
    } else {
      this.keyItemNavigationIdx = this.normalizedItems.length - 1;
    }
    let elm = items[this.keyItemNavigationIdx];
    elm.tabIndex = 0;
    elm.focus();
    evt.preventDefault();
    this.focusService.holdKeyboardFocus();
  }

  private rightHandle(evt: KeyboardEvent) {
    if (this.isOpenedSubmenu) return;
    let items: any = [];
    this.menuItems.forEach((cmp) => items.push(cmp.instance.element()));
    if (this.keyItemNavigationIdx < 0) {
      this.keyItemNavigationIdx = 0;
    } else if (this.keyItemNavigationIdx + 1 < this.normalizedItems.length) {
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

  protected readonly moreHorizX20 = moreHorizX20;
}
