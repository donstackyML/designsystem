import { CdkDrag, CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Inject,
  Input,
  NgZone,
  OnChanges,
  Output,
  PLATFORM_ID,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import DevExpress from 'devextreme';
import {
  DxButtonModule,
  DxContextMenuModule,
  DxScrollViewModule,
  DxTreeViewModule,
} from 'devextreme-angular';
import {
  DxContextMenuComponent,
  DxContextMenuTypes,
} from 'devextreme-angular/ui/context-menu';
import PositionConfig = DevExpress.PositionConfig;

import { MeContextMenuModule } from '../../directives/me-context-menu/me-context-menu.module';
import { MeScrollViewModule } from '../../directives/me-scroll-view/me-scroll-view.module';
import { ComponentFocusService } from '../../service/component-focus.service';

import { meIconSet } from '@monitel/me-icons';
import { MeIconsModule, MeIconsRegistry } from '@monitel/me-icons-registry';
import {
  MeMenuLeftItem,
  MeMenuLeftItemComponent,
} from './me-menu-left-item.component';

interface TreeNode {
  parent?: TreeNode;
  children: TreeNode[];
  item: MeMenuLeftItem;
  active: boolean;
}

@Component({
  selector: 'me-menu-left',
  standalone: true,
  imports: [
    CommonModule,
    DxTreeViewModule,
    DxButtonModule,
    CdkDrag,
    MeMenuLeftItemComponent,
    DxContextMenuModule,
    MeContextMenuModule,
    DxScrollViewModule,
    MeScrollViewModule,
    MeIconsModule,
  ],
  templateUrl: './me-menu-left.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeMenuLeftComponent implements AfterViewInit, OnChanges {
  private meIconRegistry = inject(MeIconsRegistry);

  @ViewChild('menuLeftHeader') menuLeftHeaderElement!: ElementRef;
  @ViewChild('menuLeftBottom') menuLeftBottomElement!: ElementRef;
  @ViewChild('dragHandleRight') dragHandleRight!: ElementRef;
  @ViewChild('subMenu') subMenuComponent!: DxContextMenuComponent;
  @ViewChild('menuLeft') menuLeftElement!: ElementRef;

  @Input() title: string = '';
  @Input() collapsed: boolean = false;
  @Input() floatMode: boolean = false;
  @Input() resizeHandleVisible: boolean = true;
  @Input() withHeader: boolean = true;
  @Input() toggleIcon: string = 'chevron_left_x24';
  @Input() expandedIcon: string = 'expand_less_x20';
  @Input() collapsedIcon: string = 'keyboard_arrow_down_x20';
  @Input() collapsedWidth: number = 86;
  @Input() expandedWidth: number = 336;
  @Input() maxWidth?: string;

  actualMaxWidth: number | 'inherit' = window.innerWidth;

  private _items: MeMenuLeftItem[] = [];

  @Input()
  get items(): MeMenuLeftItem[] {
    return this._items;
  }
  set items(value: MeMenuLeftItem[]) {
    this._items = value || [];
    this.nodes = [];
    if (this._items.length) {
      this.initNodes(this.nodes, this._items);
    }
  }

  private _bottomItems: MeMenuLeftItem[] = [];
  @Input()
  get bottomItems(): MeMenuLeftItem[] {
    return this._bottomItems;
  }
  set bottomItems(value: MeMenuLeftItem[]) {
    this._bottomItems = value || [];
    this.bottomNodes = [];
    if (this._bottomItems.length) {
      this.initNodes(this.bottomNodes, this._bottomItems);
    }
  }

  private _width = 336;
  @Input()
  get width(): number {
    return this._width;
  }
  set width(value: number) {
    this._width = value;
  }

  @Output() collapsedChange = new EventEmitter<boolean>();
  @Output() itemSelected = new EventEmitter<MeMenuLeftItem>();

  nodes: TreeNode[] = [];
  bottomNodes: TreeNode[] = [];
  nodeFlatList: TreeNode[] = [];
  activeIndex = 0;
  toggleBtnPressed = false;

  public menuDatasource: any[] = [];

  private _withStarted = 0;
  private _transition = '';
  private focusService: ComponentFocusService;
  private overlay?: HTMLDivElement;
  private resizeObserver?: ResizeObserver;
  private contextMenuListener: (() => void) | null = null;

  constructor(
    private element: ElementRef,
    private ngZone: NgZone,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.focusService = new ComponentFocusService(this.element, this.renderer);

    this.meIconRegistry.registerIcons(meIconSet);
    // this.focusService.addKeyUpEventHandle('Tab', (evt) =>
    //   this.keyTabHandle(evt)
    // );
    // this.focusService.addKeyUpEventHandle('ArrowDown', (evt) =>
    //   this.keyDownHandle(evt)
    // );
    // this.focusService.addKeyUpEventHandle('ArrowUp', (evt) =>
    //   this.keyUpHandle(evt)
    // );
    // this.focusService.addKeyUpEventHandle('Enter', (evt) =>
    //   this.keyEnterHandle(evt)
    // );
    // this.focusService.addFocusOutHandle((evt) => this.focusOutHandle(evt));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['collapsed']) {
      this.stateUpdate();
    }

    if (changes['floatMode'] && this.dragHandleRight) {
      queueMicrotask(() => this.setAllHandleTransform());
    }
    if (changes['collapsed']) {
      this.stateUpdate();
    }
  }

  ngAfterViewInit(): void {
    this.stateUpdate();

    if (isPlatformBrowser(this.platformId)) {
      this.resizeObserver = new ResizeObserver(() => this.handleWindowResize());
      this.resizeObserver.observe(document.body);
    }

    this.contextMenuListener = this.renderer.listen(
      this.element.nativeElement,
      'contextmenu',
      (event: Event) => {
        event.preventDefault();
      }
    );
  }

  ngOnInit(): void {
    this.actualMaxWidth = this.calculateMaxWidth();

    if (this.floatMode) {
      this.createShading();
    }
  }

  ngOnDestroy(): void {
    this.contextMenuListener?.();
  }

  private stateUpdate(): void {
    if (this.collapsed) {
      this.width = this.collapsedWidth;
      this.updateItemExpanded(this._items, false);
    } else {
      this.width = this.expandedWidth;
    }
    setTimeout(() => this.updateDragHandler(), 250);
  }

  updateDragHandler(): void {
    if (!this.collapsed) {
      this.renderer.setStyle(
        this.dragHandleRight.nativeElement,
        'opacity',
        `1`
      );

      this.setAllHandleTransform();
    }
  }

  get resizeBoxElement(): HTMLElement {
    return this.element.nativeElement;
  }

  get containerElement(): HTMLElement {
    return this.menuLeftElement.nativeElement;
  }

  get dragHandleRightElement(): HTMLElement {
    return this.dragHandleRight.nativeElement;
  }

  setHandleTransform(dragHandle: HTMLElement, targetRect: DOMRect): void {
    const dragRect = dragHandle.getBoundingClientRect();
    const translateX = targetRect.width - dragRect.width / 2;

    this.renderer.setStyle(
      dragHandle,
      'transform',
      `translate(${translateX}px, 0)`
    );
  }

  toggleMenuLeft(): void {
    this.collapsed = !this.collapsed;
    this.stateUpdate();
    this.collapsedChange.emit(this.collapsed);
  }

  getHeight(): string {
    return `${this.element.nativeElement.offsetHeight}px`;
  }

  getCurrentWidth(): number {
    return this.collapsed ? this.collapsedWidth : this._width;
  }

  started(event: CdkDragStart): void {
    this._withStarted = this._width;
    this._transition = this.containerElement.style.transition;

    this.renderer.setStyle(this.containerElement, 'transition', 'none');
  }

  ended(event: CdkDragEnd): void {
    this._withStarted = 0;
    this.renderer.setStyle(
      this.containerElement,
      'transition',
      this._transition
    );
  }

  dragMove(event: any): void {
    this.ngZone.runOutsideAngular(() => {
      const dragRect = this.dragHandleRightElement.getBoundingClientRect();
      const targetRect = this.resizeBoxElement.getBoundingClientRect();

      const newWidth = this.floatMode
        ? event.event.clientX - (targetRect.left - dragRect.width / 2)
        : dragRect.left - (targetRect.left - dragRect.width / 2);

      if (newWidth <= this.collapsedWidth) {
        this.toggleMenuLeft();
      } else if (
        typeof this.actualMaxWidth === 'number' &&
        newWidth > this.actualMaxWidth
      ) {
        this.width = this.actualMaxWidth;
      } else if (this.actualMaxWidth === 'inherit') {
        this.width = newWidth;
      } else {
        this.width = newWidth;
      }

      this.setAllHandleTransform();
    });
  }

  setAllHandleTransform(): void {
    const rect = this.resizeBoxElement.getBoundingClientRect();

    this.setHandleTransform(this.dragHandleRightElement, rect);
  }

  selectItem(event: MouseEvent, node: TreeNode): void {
    const item = node.item;
    if (item.items && item.items.length > 0) {
      item.expanded = !item.expanded;
      this.updateFlatList();
    }
    if (this.collapsed && item.items && item.items.length > 0) {
      const targetEl = (event.target as HTMLElement).closest(
        '.me-menu-left_item'
      );
      if (targetEl) {
        this.showPopup(targetEl, item);
      }
    } else if (!item.items || item.items.length === 0) {
      this.itemSelect(item);
    }
  }

  showPopup(target: Element, item: MeMenuLeftItem): void {
    const position: PositionConfig = { at: 'right top' };
    this.subMenuComponent.instance.option({
      cssClass: 'me-menu-left-popup',
      target: target,
      position,
      dataSource: item.items || [],
      visible: true,
    });
  }

  private itemSelect(item: MeMenuLeftItem): void {
    this.clearItemSelected(this._items);
    this.clearItemSelected(this._bottomItems);
    item.selected = true;
    this.itemSelected.emit(item);
    if (item.action) {
      item.action();
    }
  }

  private initNodes(
    nodes: TreeNode[],
    items: MeMenuLeftItem[],
    parent?: TreeNode
  ): void {
    items.forEach((item) => {
      const treeNode: TreeNode = {
        item,
        children: [],
        parent,
        active: false,
      };
      nodes.push(treeNode);
      if (item.items && item.items.length) {
        this.initNodes(treeNode.children, item.items, treeNode);
      }
    });
  }

  getMargin(node: TreeNode): number {
    let margin = 0;
    let current = node.parent;
    while (current) {
      margin += 16;
      current = current.parent;
    }
    return margin;
  }

  private updateItemExpanded(items: MeMenuLeftItem[], expanded: boolean): void {
    items.forEach((item) => {
      item.expanded = expanded;
      if (item.items) {
        this.updateItemExpanded(item.items, expanded);
      }
    });
  }

  private clearItemSelected(items: MeMenuLeftItem[]): void {
    items.forEach((item) => {
      item.selected = false;
      if (item.items) {
        this.clearItemSelected(item.items);
      }
    });
  }

  getItemsMinHeight(): number {
    const mainHeight = this.calculateItemsMinHeight(this._items);
    const bottomHeight = this.calculateItemsMinHeight(this._bottomItems);
    return 24 + mainHeight + bottomHeight;
  }

  calculateItemsMinHeight(items: MeMenuLeftItem[]): number {
    let totalHeight = 0;
    items.forEach((item) => {
      totalHeight += 24;
      if (!this.collapsed && item.expanded && item.items) {
        totalHeight += this.calculateItemsMinHeight(item.items);
      }
    });
    return totalHeight;
  }

  updateFlatList(): void {
    this.nodeFlatList = [];
    this.activeIndex = 0;
    this.addNodesToFlatList(this.nodeFlatList, this.nodes);
    this.addNodesToFlatList(this.nodeFlatList, this.bottomNodes);
  }

  private addNodesToFlatList(list: TreeNode[], nodes: TreeNode[]): void {
    nodes.forEach((node) => {
      list.push(node);
      if (node.children && node.item.expanded) {
        this.addNodesToFlatList(list, node.children);
      }
    });
  }

  private keyTabHandle(evt: KeyboardEvent): void {
    evt.preventDefault();
    this.updateFlatList();
    this.activeIndex = 0;
    if (this.nodeFlatList.length) {
      this.nodeFlatList[this.activeIndex].active = true;
    }
  }

  private keyDownHandle(evt: KeyboardEvent): void {
    if (this.nodeFlatList.length) {
      this.nodeFlatList[this.activeIndex].active = false;
      if (this.activeIndex < this.nodeFlatList.length - 1) {
        this.activeIndex++;
        this.nodeFlatList[this.activeIndex].active = true;
      }
    }
  }

  private keyUpHandle(evt: KeyboardEvent): void {
    if (this.nodeFlatList.length) {
      this.nodeFlatList[this.activeIndex].active = false;
      if (this.activeIndex > 0) {
        this.activeIndex--;
        this.nodeFlatList[this.activeIndex].active = true;
      }
    }
  }

  private keyEnterHandle(evt: KeyboardEvent): void {
    if (
      this.nodeFlatList.length &&
      this.activeIndex < this.nodeFlatList.length
    ) {
      const node = this.nodeFlatList[this.activeIndex];
      if (this.collapsed) {
        const activeElement = this.element.nativeElement.querySelector(
          '.me-menu-left_item-active'
        );
        if (activeElement) {
          this.showPopup(activeElement, node.item);
        }
      } else {
        if (node.item.items) {
          node.item.expanded = !node.item.expanded;
          const savedIndex = this.activeIndex;
          this.updateFlatList();
          this.activeIndex = savedIndex;
        } else {
          this.itemSelect(node.item);
          node.active = false;
          this.focusService.clearKeyboardFocus();
        }
      }
    }
  }

  private focusOutHandle(evt: FocusEvent): void {
    if (this.nodeFlatList[this.activeIndex]) {
      this.nodeFlatList[this.activeIndex].active = false;
    }
    this.nodeFlatList = [];
    this.activeIndex = 0;
  }

  private calculateMaxWidth(): number | 'inherit' {
    if (!this.maxWidth) return window.innerWidth;

    const value = this.maxWidth.trim().toLowerCase();

    if (value === 'inherit') return 'inherit';

    if (value.endsWith('%')) {
      const percent = parseFloat(value) / 100;
      return window.innerWidth * percent;
    }

    if (value.endsWith('vw')) {
      const vw = parseFloat(value);
      return (window.innerWidth * vw) / 100;
    }

    if (value.endsWith('px')) {
      return parseFloat(value);
    }

    if (!isNaN(parseFloat(value))) {
      return parseFloat(value);
    }

    return window.innerWidth;
  }

  private handleWindowResize() {
    if (typeof this.actualMaxWidth === 'number') {
      this.actualMaxWidth = this.calculateMaxWidth();
    }
    this.cdr.markForCheck();
  }

  pressedNode($event: MouseEvent, node: TreeNode) {
    this.focusService.clearKeyboardFocus();
    node.active = true;
  }

  pressedEndNode(event: MouseEvent, node: TreeNode): void {
    node.active = false;
  }

  selectSubmenuItem({ itemData }: DxContextMenuTypes.ItemClickEvent) {
    if (itemData && !itemData.items) {
      this.itemSelect(itemData as MeMenuLeftItem);
    }
  }

  getHeaderMaxWidth(): string {
    return `${this.width - (32 + 55)}px`;
  }

  togglePressed(): void {
    this.toggleBtnPressed = true;
  }

  togglePressedUp(): void {
    this.toggleBtnPressed = false;
  }

  createShading(): void {
    this.overlay = this.renderer.createElement('div');
    this.renderer.addClass(this.overlay, 'me-overlay');
    this.renderer.setStyle(this.overlay, 'z-index', 99);
    this.renderer.setStyle(this.overlay, 'position', 'fixed');
    this.renderer.setStyle(this.overlay, 'display', 'block');
    this.renderer.appendChild(document.body, this.overlay);
  }
}
