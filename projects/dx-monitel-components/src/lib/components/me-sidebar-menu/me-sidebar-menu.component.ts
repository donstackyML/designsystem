// me-sidebar-menu.component.ts
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  NgZone,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxTreeViewModule,
  DxButtonModule,
  DxContextMenuModule,
  DxScrollViewModule,
} from 'devextreme-angular';
import { MeIconComponent } from '../me-icon/me-icon.component';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragEnd,
  CdkDragMove,
  CdkDragStart,
} from '@angular/cdk/drag-drop';
import { MeSidebarMenuItemComponent } from './me-sidebar-menu-item.component';
import { MeSize } from '../../types/types';
import { MeContextMenuModule } from '../../directives/me-context-menu/context-menu.module';
import { DxContextMenuComponent } from 'devextreme-angular/ui/context-menu';
import DevExpress from 'devextreme';
import PositionConfig = DevExpress.PositionConfig;
import { MeScrollViewModule } from '../../directives/me-scroll-view/scroll-view.module';
import { ComponentFocusService } from '../../service/component-focus.service';

export interface MeSidebarMenuItem {
  id: string;
  text: string;
  icon?: string;
  expanded?: boolean;
  items?: MeSidebarMenuItem[];
  badge?: number;
  action?: () => {};
  selected?: boolean;
  pressed?: boolean;
}

interface TreeNode {
  parent?: TreeNode;
  children: TreeNode[];
  item: MeSidebarMenuItem;
  active: boolean;
}

@Component({
  selector: 'me-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    DxTreeViewModule,
    DxButtonModule,
    MeIconComponent,
    CdkDrag,
    MeSidebarMenuItemComponent,
    DxContextMenuModule,
    MeContextMenuModule,
    DxScrollViewModule,
    MeScrollViewModule,
  ],
  templateUrl: 'me-sidebar-menu.component.html',
  styleUrls: ['me-sidebar-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MeSidebarMenuComponent implements AfterViewInit, OnChanges {
  @ViewChild('dragHandleRight') dragHandleRight!: ElementRef;
  @ViewChild('subMenu') subMenu!: DxContextMenuComponent;
  @ViewChild('sidebar') sidebar!: ElementRef;

  @Input() private _bottomItems: MeSidebarMenuItem[] = [];
  @Input() title = 'Меню';
  @Input() collapsed = false;
  @Input() floatMode = false;
  @Input() size: MeSize = 'medium';

  // Иконки для настройки внешнего вида
  @Input() toggleIcon = 'drag'; // Иконка кнопки сворачивания
  @Input() expandedIcon = 'expand_less'; // Иконка развернутого пункта
  @Input() collapsedIcon = 'expand_more'; // Иконка свернутого пункта

  @Output() collapsedChange = new EventEmitter<boolean>();
  @Output() itemSelected = new EventEmitter<MeSidebarMenuItem>();

  @Input() collapsedWidth = 64;
  @Input() expandedWidth = 280;

  private _items: MeSidebarMenuItem[] = [];
  private _width = 280;
  private _withStarted = 0;
  private _transition = '';

  nodes: TreeNode[] = [];
  bottomNodes: TreeNode[] = [];
  menuDatasource: any[] = [];
  private focusService: ComponentFocusService;

  nodeFlatList?: TreeNode[];
  activeIndex = 0;
  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get items(): MeSidebarMenuItem[] {
    return this._items;
  }

  set items(value: MeSidebarMenuItem[]) {
    this._items = value;
    this.nodes = [];
    if (value) {
      this.initNodes(this.nodes, this._items);
    }
  }

  get bottomItems(): MeSidebarMenuItem[] {
    return this._bottomItems;
  }

  set bottomItems(value: MeSidebarMenuItem[]) {
    this._bottomItems = value;
    this.bottomNodes = [];
    if (value) {
      this.initNodes(this.bottomNodes, this._bottomItems);
    }
  }

  constructor(
    private element: ElementRef,
    private ngZone: NgZone,
    renderer: Renderer2
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
    this.focusService.addKeyUpEventHandle('Tab', (evt) =>
      this.keyTabHandle(evt)
    );
    this.focusService.addKeyUpEventHandle('ArrowDown', (evt) =>
      this.keyDownHandle(evt)
    );
    this.focusService.addKeyUpEventHandle('ArrowUp', (evt) =>
      this.keyUpHandle(evt)
    );
    this.focusService.addKeyUpEventHandle('Enter', (evt) =>
      this.keyEnterHandle(evt)
    );
    this.focusService.addFocusOutHandle((evt) => this.focusOutHandle(evt));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['collapsed']) {
    }
  }

  ngAfterViewInit(): void {
    this.stateUpdate();
  }

  updateDragHandler() {
    if (!this.collapsed) {
      const targetRect = this.resizeBoxElement.getBoundingClientRect();
      const translateX = targetRect.x + targetRect.width;
      const translateY = -1 * targetRect.height;
      this.dragHandleRightElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
  }

  get resizeBoxElement(): HTMLElement {
    return this.element.nativeElement;
  }

  get containerElement(): HTMLElement {
    return this.sidebar.nativeElement;
  }

  get dragHandleRightElement(): HTMLElement {
    return this.dragHandleRight.nativeElement;
  }

  setHandleTransform(
    dragHandle: HTMLElement,
    targetRect: ClientRect | DOMRect
  ) {
    const dragRect = dragHandle.getBoundingClientRect();
    const translateX = targetRect.width - dragRect.width;
    dragHandle.style.transform = `translate(${translateX}px, 0)`;
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.stateUpdate();
    this.collapsedChange.emit(this.collapsed);
  }
  getHeight(): string {
    return this.element.nativeElement.offsetHeight + 'px';
  }

  getCurrentWidth(): number {
    if (this.collapsed) {
      return this.collapsedWidth;
    } else {
      return this._width;
    }
  }

  started($event: CdkDragStart) {
    this._withStarted = this._width;
    this._transition = this.containerElement.style.transition;
    this.containerElement.style.transition = 'none';
  }

  ended($event: CdkDragEnd) {
    this._withStarted = 0;
    this.containerElement.style.transition = this._transition;
  }

  dragMove($event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(this.resizeBoxElement);
    });
  }

  setAllHandleTransform() {
    const rect = this.resizeBoxElement.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleRightElement, rect);
  }

  resize(target: HTMLElement) {
    const dragRect = this.dragHandleRightElement.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    this.width = dragRect.left - (targetRect.left - dragRect.width / 2);
    this.expandedWidth = this.width;
  }

  selectItem($event: MouseEvent, node: TreeNode) {
    let item = node.item;
    if (item.items && item.items.length > 0) {
      item.expanded = !item.expanded;
      this.updateFlatList();
    }
    if (!item.expanded) {
      item.selected = false;
    }
    if (this.collapsed && item.items && item.items.length > 0) {
      let element = $event.target as Element;
      element = element.parentElement as Element;
      let w = element.clientWidth;
      let h = element.clientHeight;
      let position: PositionConfig = { at: 'right top' };
      //this.subMenu.cssClass
      this.subMenu.target = element;
      this.subMenu.position = position;
      this.subMenu.dataSource = this.getDataSource(item);
      this.subMenu.visible = true;
    } else {
      this.itemSelect(item);
    }
  }

  private itemSelect(item: MeSidebarMenuItem) {
    this.clearItemSelected(this.items);
    this.clearItemSelected(this.bottomItems);
    item.selected = true;
    if (!item.items || item.items.length == 0) {
      this.itemSelected.emit(item);
      if (item.action) {
        item.action();
      }
    }
  }

  private initNodes(
    nodes: TreeNode[],
    items: MeSidebarMenuItem[],
    parent?: TreeNode
  ) {
    items.forEach((item) => {
      let treeNode: TreeNode = {
        item: item,
        children: [],
        parent: parent,
        active: false,
      };
      nodes.push(treeNode);
      if (item.items && item.items.length > 0) {
        this.initNodes(treeNode.children, item.items, treeNode);
      }
    });
  }

  getMargin(node: TreeNode): number {
    let parent = node.parent;
    let margin = 0;
    while (parent) {
      margin += 1;
      parent = parent.parent;
    }
    return margin * 16;
  }

  private updateItemExpanded(items: MeSidebarMenuItem[], expanded: boolean) {
    items.forEach((item) => {
      item.expanded = expanded;
      if (item.items) {
        this.updateItemExpanded(item.items, expanded);
      }
    });
  }

  private clearItemSelected(items: MeSidebarMenuItem[]) {
    items.forEach((item) => {
      item.selected = false;
      if (item.items) {
        this.clearItemSelected(item.items);
      }
    });
  }

  private stateUpdate() {
    this.toggleIcon = this.collapsed ? 'chevron_right' : 'chevron_left';
    if (this.collapsed) {
      this.width = this.collapsedWidth;
      this.updateItemExpanded(this._items, false);
    } else {
      this.width = this.expandedWidth;
    }
    setTimeout(() => {
      this.updateDragHandler();
    }, 250);
  }

  private getDataSource(item: MeSidebarMenuItem): any[] {
    if (item.items) {
      return item.items;
    } else {
      return [];
    }
  }

  selectSubmenuItem($event: Event) {
    console.log('select by submenu %o', $event);
  }

  pressedNode($event: MouseEvent, node: TreeNode) {
    this.focusService.clearKeyboardFocus();
    node.active = true;
  }

  pressedEndNode($event: MouseEvent, node: TreeNode) {
    node.active = false;
  }

  getItemsMinHeight(): number {
    let itemH = this.calculateItemsMinHeight(this._items);
    let botItemH = this.calculateItemsMinHeight(this._bottomItems);
    return 24 + itemH + botItemH;
  }
  calculateItemsMinHeight(items: MeSidebarMenuItem[]): number {
    let heightAll = 0;
    let count = 0;
    items.forEach((item) => {
      heightAll += 24;
      count += 1;
      if (!this.collapsed && item.expanded && item.items) {
        heightAll += this.calculateItemsMinHeight(item.items);
      }
    });
    return heightAll;
  }

  updateFlatListNodes(list: TreeNode[], nodes: TreeNode[]) {
    nodes.forEach((node) => {
      list.push(node);
      if (node.children && node.item.expanded) {
        this.updateFlatListNodes(list, node.children);
      }
    });
  }

  updateFlatList() {
    this.nodeFlatList = [];
    this.activeIndex = 0;
    this.updateFlatListNodes(this.nodeFlatList, this.nodes);
    this.updateFlatListNodes(this.nodeFlatList, this.bottomNodes);
    console.log('FlatList %o', this.nodeFlatList);
  }
  private keyTabHandle(evt: KeyboardEvent) {
    this.updateFlatList();
    this.activeIndex = 0;
    if (this.nodeFlatList) {
      this.nodeFlatList[this.activeIndex].active = true;
    }
  }

  private keyDownHandle(evt: KeyboardEvent) {
    if (this.nodeFlatList) {
      this.nodeFlatList[this.activeIndex].active = false;
      if (this.nodeFlatList.length > this.activeIndex + 1) {
        this.activeIndex += 1;
        this.nodeFlatList[this.activeIndex].active = true;
      }
    }
  }

  private keyUpHandle(evt: KeyboardEvent) {
    if (this.nodeFlatList) {
      this.nodeFlatList[this.activeIndex].active = false;
      if (this.activeIndex > 0) {
        this.activeIndex -= 1;
        this.nodeFlatList[this.activeIndex].active = true;
      }
    }
  }

  private keyEnterHandle(evt: KeyboardEvent) {
    if (this.nodeFlatList && this.activeIndex < this.nodeFlatList.length) {
      let node = this.nodeFlatList[this.activeIndex];
      if (node.item.items) {
        node.item.expanded = !node.item.expanded;
        let holderIdx = this.activeIndex;
        this.updateFlatList();
        this.activeIndex = holderIdx;
      } else {
        this.itemSelect(node.item);
      }
    }
  }

  private focusOutHandle(evt: FocusEvent) {
    if (this.nodeFlatList) {
      this.nodeFlatList[this.activeIndex].active = false;
      this.nodeFlatList = [];
      this.activeIndex = 0;
    }
  }
}
