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
import { moreHorizX20 } from '@monitel/me-icons';
import { MeIconsModule, MeIconsRegistry } from '@monitel/me-icons-registry';
import {
  DxButtonComponent,
  DxButtonModule,
  DxContextMenuComponent,
  DxContextMenuModule,
  DxDropDownBoxModule,
  DxDropDownButtonModule,
  DxMenuComponent,
  DxMenuModule,
} from 'devextreme-angular';
import { DxDropDownButtonTypes } from 'devextreme-angular/ui/drop-down-button';
import type { ItemClickEvent as ContextMenuItemClickEvent } from 'devextreme/ui/context_menu';
import {
  MeButtonModule,
  MeContextMenuModule,
  MeDropDownButtonModule,
  MeMenuModule,
} from '../../directives';
import { MeDropDownBoxModule } from '../../directives/me-drop-down-box/me-drop-down-box.module';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeSize } from '../../types/types';

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
    MeButtonModule,
    DxDropDownBoxModule,
    MeDropDownBoxModule,
    MeDropDownButtonModule,
    DxDropDownButtonModule,
    MeContextMenuModule,
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
  @Input() size: MeSize = 'small';
  @Input() showDivider: boolean = true;
  @Input() dropdownPosition: 'top' | 'bottom' = 'bottom';

  @Output() itemClick = new EventEmitter<BreadcrumbItem>();

  @ViewChild('breadcrumbsContainer', { static: true })
  breadcrumbsContainer!: ElementRef;
  @ViewChild('overflowMenu', { static: true })
  overflowMenu!: DxContextMenuComponent;
  @ViewChildren(DxMenuComponent) menuItems!: QueryList<DxMenuComponent>;
  @ViewChild('leftBtn', { static: true }) leftBtn?: DxButtonComponent;
  @ViewChild('rightBtn', { static: true }) rightBtn?: DxButtonComponent;
  @ViewChildren('breadcrumbItem', { read: ElementRef })
  breadcrumbItems!: QueryList<ElementRef>;
  @ViewChildren('dropDownButton')
  dropDownButtonElements?: QueryList<ElementRef>;

  normalizedItems: BreadcrumbItem[] = [];
  overflowItems: BreadcrumbItem[] = [];
  maxHeight = '290px';
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

  private overflowMenuOptions = {};

  private readonly offsetY = 4;

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

    this.overflowMenuOptions = {
      cssClass: `me-breadcrumbs-overflow-menu-popup me-breadcrumbs-overflow-menu-popup-${this.size}`,
    };

    this.maxHeight = this.getSubmenuMaxHeight();
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

    this.dropDownButtonElements?.forEach((el: any) => {
      const instance = el.instance;

      if (instance && this.dropdownPosition === 'top') {
        el.dropDownOptions = {
          wrapperAttr: {
            ...el.dropDownOptions.wrapperAttr,
            class: `me-breadcrumbs-popup me-breadcrumbs-popup-${this.size}`,
          },
          position: {
            my: 'bottom left',
            at: 'top left',
            offset: { y: -this.offsetY },
            collision: 'flip fit',
            of: el.element.nativeElement,
          },
          maxHeight: this.maxHeight,
        };
      } else {
        el.dropDownOptions = {
          wrapperAttr: {
            ...el.dropDownOptions.wrapperAttr,
            class: `me-breadcrumbs-popup me-breadcrumbs-popup-${this.size}`,
          },
          maxHeight: this.maxHeight,
        };
      }
    });
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

  onItemClick(item: BreadcrumbItem): void {
    this.itemClick.emit(this.getOriginalItem(item));
  }

  onSubmenuItemClick(e: DxDropDownButtonTypes.ItemClickEvent): void {
    this.itemClick.emit(this.getOriginalSubmenuItem({ ...e.itemData }));
  }

  private getOriginalItem(item: any) {
    return this.findItemInHierarchy(this.items, item);
  }

  private getOriginalSubmenuItem(item: any) {
    return this.findItemInHierarchy(this.items, item);
  }

  private findItemInHierarchy(items: any[], searchItem: any): any {
    for (const item of items) {
      if (
        item[this.displayExpr] === searchItem?.text &&
        item[this.urlExpr] === searchItem?.url &&
        item[this.iconExpr] === searchItem?.icon
      ) {
        return item;
      }

      if (item[this.itemsExpr]) {
        const foundInChildren = this.findItemInHierarchy(
          item[this.itemsExpr],
          searchItem
        );
        if (foundInChildren) return foundInChildren;
      }
    }
    return null;
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
      const invertSides = {
        left: 'right',
        right: 'left',
        top: 'bottom',
        bottom: 'top',
      };

      const myPosition = `${invertSides[this.dropdownPosition]} ${
        invertSides[position]
      }`;

      const atPosition = `${this.dropdownPosition} ${invertSides[position]}`;

      const offsetY = this.dropdownPosition === 'top' ? -10 : this.offsetY;

      this.contextMenuPosition = {
        my: myPosition,
        at: atPosition,
        of: this.overflowMenuTarget,
        offset: { x: 0, y: offsetY },
      };

      this.overflowMenu.instance.option({
        position: this.contextMenuPosition,
        onShown: () => {
          queueMicrotask(() => {
            const popup = document.querySelector(
              '.me-breadcrumbs-overflow-menu-popup'
            ) as HTMLElement;

            if (popup) {
              const currentMaxHeight = popup.style.maxHeight;
              const currentValue = parseInt(currentMaxHeight);
              popup.style.maxHeight = `${currentValue + 6}px`;
            }
          });
        },
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
    const containerWidth = containerEl.clientWidth;

    this.breadcrumbItems.forEach((itemRef) => {
      this.renderer.removeClass(itemRef.nativeElement, 'hidden-breadcrumb');
      this.renderer.removeClass(itemRef.nativeElement, 'hide-chevron');
    });

    this.overflowItems = [];
    this.overflowLeft = false;
    this.overflowRight = false;

    const visibleItems = this.breadcrumbItems.toArray();

    const totalWidth = visibleItems.reduce(
      (sum, item) => sum + item.nativeElement.offsetWidth,
      0
    );

    if (totalWidth <= containerWidth) {
      this.cdr.markForCheck();
      return;
    }

    const buttonsWidth = this.getOverflowButtonsWidth();
    const availableWidth = containerWidth - buttonsWidth;

    const { visibleCount } = visibleItems.reduce(
      (result, item) => {
        if (result.shouldContinue) {
          const itemWidth = item.nativeElement.offsetWidth;
          if (result.accumulatedWidth + itemWidth <= availableWidth) {
            return {
              visibleCount: result.visibleCount + 1,
              accumulatedWidth: result.accumulatedWidth + itemWidth,
              shouldContinue: true,
            };
          }
          return { ...result, shouldContinue: false };
        }
        return result;
      },
      { visibleCount: 0, accumulatedWidth: 0, shouldContinue: true }
    );

    if (this.truncateFrom === 'right') {
      for (let i = visibleCount; i < visibleItems.length; i++) {
        this.renderer.addClass(
          visibleItems[i].nativeElement,
          'hidden-breadcrumb'
        );
        if (this.normalizedItems[i]) {
          this.overflowItems.push(this.normalizedItems[i]);
        }
      }
      this.overflowRight = this.overflowItems.length > 0;
    } else {
      const startIndex = visibleItems.length - visibleCount;
      for (let i = 0; i < startIndex; i++) {
        this.renderer.addClass(
          visibleItems[i].nativeElement,
          'hidden-breadcrumb'
        );
        if (this.normalizedItems[i]) {
          this.overflowItems.push(this.normalizedItems[i]);
        }
      }
      this.overflowLeft = this.overflowItems.length > 0;
    }

    if (visibleCount > 0) {
      const lastVisibleIndex =
        this.truncateFrom === 'right' ? visibleCount - 1 : visibleCount;

      const lastVisibleItem =
        this.breadcrumbItems.get(lastVisibleIndex)?.nativeElement;
      const lastVisibleData = this.normalizedItems[lastVisibleIndex];

      if (
        lastVisibleItem &&
        lastVisibleData &&
        !lastVisibleData.items?.length
      ) {
        this.renderer.addClass(lastVisibleItem, 'hide-chevron');
      }
    }

    this.cdr.markForCheck();
  }

  private getOverflowButtonsWidth(): number {
    let width = 0;

    if (this.leftBtn?.instance) {
      const leftBtnElement = this.leftBtn.instance.element();
      if (leftBtnElement) {
        width += leftBtnElement.offsetWidth;
      }
    }

    if (this.rightBtn?.instance) {
      const rightBtnElement = this.rightBtn.instance.element();
      if (rightBtnElement) {
        width += rightBtnElement.offsetWidth;
      }
    }

    return width;
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

  private getSubmenuMaxHeight() {
    const largeMaxItemsHeight = 400;
    const mediumMaxItemsHeight = 320;
    const smallMaxItemsHeight = 280;
    const padding = 4;

    if (this.size === 'large') {
      return `${largeMaxItemsHeight + padding * 2}px`;
    } else if (this.size === 'medium') {
      return `${mediumMaxItemsHeight + padding * 2}px`;
    }

    return `${smallMaxItemsHeight + padding * 2}px`;
  }

  protected readonly moreHorizX20 = moreHorizX20;
}
