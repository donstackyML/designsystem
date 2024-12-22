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
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxTreeViewModule,
  DxButtonModule,
  DxTreeViewComponent,
} from 'devextreme-angular';
import { MeIconComponent } from '../me-icon/me-icon.component';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragEnd,
  CdkDragMove,
  CdkDragStart,
} from '@angular/cdk/drag-drop';

export interface MeSidebarMenuItem {
  id: string;
  text: string;
  icon?: string;
  expanded?: boolean;
  items?: MeSidebarMenuItem[];
  badge?: number;
  onClick?: () => void;
  selected?: boolean;
  pressed?: boolean;
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
  ],
  templateUrl: 'me-sidebar-menu.component.html',
  styleUrls: ['me-sidebar-menu.component.scss'],
})
export class MeSidebarMenuComponent implements AfterViewInit {
  @ViewChild('dragHandleRight') dragHandleRight!: ElementRef;
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('treeView') treeView!: DxTreeViewComponent;
  @Input() items: MeSidebarMenuItem[] = [];
  @Input() bottomItems: MeSidebarMenuItem[] = [];
  @Input() title = 'Меню';
  @Input() isCollapsed = false;

  // Иконки для настройки внешнего вида
  @Input() toggleIcon = 'drag'; // Иконка кнопки сворачивания
  @Input() expandedIcon = 'expand_less'; // Иконка развернутого пункта
  @Input() collapsedIcon = 'expand_more'; // Иконка свернутого пункта

  @Output() collapsedChange = new EventEmitter<boolean>();
  @Output() itemSelected = new EventEmitter<MeSidebarMenuItem>();

  @Input() collapsedWidth = 64;

  private _width = 280;
  private _withStarted = 0;
  private _transition = '';

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  constructor(private element: ElementRef, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.updateDragHandler();
    const parentRec =
      this.resizeBoxElement.parentElement?.getBoundingClientRect();
    if (parentRec) {
      // this.resizeBoxElement.parentElement!.style.height = "100%"
      // console.log("Parent rec: %o", parentRec)
      // console.log("Parent: %o", this.resizeBoxElement.parentElement)
    }
  }

  updateDragHandler() {
    const dragRect = this.dragHandleRightElement.getBoundingClientRect();
    const targetRect = this.resizeBoxElement.getBoundingClientRect();
    const translateX = targetRect.x + targetRect.width;
    const translateY = -1 * targetRect.height;
    this.dragHandleRightElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
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
    this.isCollapsed = !this.isCollapsed;
    this.toggleIcon = this.isCollapsed ? 'chevron_right' : 'chevron_left';

    if (this.isCollapsed && this.treeView) {
      // Свернуть все элементы при закрытии сайдбара
      this.treeView.instance.collapseAll();
    }

    this.collapsedChange.emit(this.isCollapsed);
    setTimeout(() => {
      this.updateDragHandler();
    }, 350);
  }

  bottomItemClick(item: MeSidebarMenuItem) {
    this.treeView.items.forEach((itm) => {
      itm.selected = false;
    });
    this.bottomItems.forEach((itm) => {
      itm.selected = false;
      itm.pressed = false;
    });
    console.log('bottomItemClick: %o', item);
    item.pressed = true;
    setTimeout(() => {
      item.pressed = false;
      item.selected = true;
      console.log('bottomItemClick pressed false: %o', item);
    }, 300);

    if (item.onClick) {
      item.onClick();
    }
    this.itemSelected.emit(item);
  }
  onItemClick(e: any) {
    this.bottomItems.forEach((itm) => {
      itm.selected = false;
      itm.pressed = false;
    });
    const item = e.itemData as MeSidebarMenuItem;
    // .me-sidebar__item--pressed
    if (this.isCollapsed) {
      this.isCollapsed = false;
      this.toggleIcon = 'chevron_left';
      this.collapsedChange.emit(this.isCollapsed);

      setTimeout(() => {
        if (this.treeView && item.items?.length) {
          this.treeView.instance.expandItem(item);
        }
      }, 300);
    }

    if (item.onClick) {
      item.onClick();
    }
    this.itemSelected.emit(item);
  }

  getHeight(): string {
    return this.element.nativeElement.offsetHeight + 'px';
  }

  getCurrentWidth(): number {
    if (this.isCollapsed) {
      return this.collapsedWidth;
    } else {
      return this._width;
    }
  }
  started($event: CdkDragStart) {
    this._withStarted = this._width;
    console.log('Start: transition: %o', this.resizeBoxElement);
    this._transition = this.containerElement.style.transition;
    this.containerElement.style.transition = 'none';
    console.log(
      'Start: transition: %o, %o',
      this.containerElement.style.transition,
      this.containerElement
    );
  }

  ended($event: CdkDragEnd) {
    this._withStarted = 0;
    this.containerElement.style.transition = this._transition;
    console.log('End: transition: %o', this.containerElement.style.transition);
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

    //    console.log("Bounds: %o, %o", dragRect, targetRect)

    this.width = dragRect.left - (targetRect.left - dragRect.width / 2);
    //    const height = dragRect.top - targetRect.top + dragRect.height;

    //    target.style.width = width + 'px';
    //    target.style.height = height + 'px';
  }
}
