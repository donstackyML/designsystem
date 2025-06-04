import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DxMenuComponent } from 'devextreme-angular';
import { DxMenuTypes } from 'devextreme-angular/ui/menu';
import { SubmenuShowingEvent } from 'devextreme/ui/menu';
import { ComponentFocusService } from '../../service/component-focus.service';
import { ListItemDividerService } from '../../service/list-item-divider.service';
import { MeOrientation, MeSize } from '../../types/types';

@Directive({
  selector: '[meMenu]',
})
export class MeMenuDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() cssClass?: string = '';
  @Input() size: Omit<MeSize, 'medium'> = 'large';
  @Input() orientation: MeOrientation = 'horizontal';
  @Input() subMenuMaxHeight?: string | number = '';
  @Input() dividersVisibility: 'none' | 'all' | 'auto' = 'auto';

  private focusService: ComponentFocusService;
  constructor(
    private element: ElementRef,
    private component: DxMenuComponent,
    private renderer: Renderer2,
    private dividerService: ListItemDividerService
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.focusService.ngOnDestroy();
  }

  ngOnInit(): void {
    const menuClasses = [
      this.cssClass,
      'me-menu',
      `me-menu-${this.size}`,
      'me-context-menu',
      `me-menu-submenu-${this.size}`,
    ].filter(Boolean);

    if (this.orientation === 'horizontal')
      menuClasses.push('me-menu-horizontal');
    if (this.orientation === 'vertical') menuClasses.push('me-menu-vertical');

    this.component.cssClass = menuClasses.join(' ');

    this.component.onSubmenuShowing.subscribe((element) => {
      this.setOpenClass(element, true);
    });
    this.component.onSubmenuHidden.subscribe((element) => {
      this.setOpenClass(element, false);
    });
  }

  private getParentSubmenu(
    currentElement?: HTMLElement | null,
    rootItem?: HTMLElement
  ): HTMLElement | null {
    if (!currentElement || currentElement === rootItem) {
      return null;
    }

    return currentElement.classList.contains('dx-submenu')
      ? currentElement
      : this.getParentSubmenu(currentElement.parentElement, rootItem);
  }

  private setOpenClass(element: SubmenuShowingEvent, force: boolean) {
    const parentSubmenu = this.getParentSubmenu(
      element.submenuContainer?.parentElement,
      element.rootItem
    );

    if (parentSubmenu) {
      parentSubmenu.classList.toggle('me-menu-child-submenu-open', force);
    }
  }

  @HostListener('onSubmenuShowing', ['$event'])
  onSubmenuShowing({
    submenuContainer,
    itemData,
  }: DxMenuTypes.SubmenuShowingEvent) {
    if (submenuContainer && this.subMenuMaxHeight) {
      submenuContainer.style.maxHeight =
        typeof this.subMenuMaxHeight === 'number'
          ? `${this.subMenuMaxHeight}px`
          : this.subMenuMaxHeight;
    }

    if (submenuContainer && itemData?.items) {
      const currentHeight = parseFloat(submenuContainer.style.height);
      if (!isNaN(currentHeight)) {
        submenuContainer.style.height = `${currentHeight + 8}px`;
      }

      this.dividerService.addDividers({
        contentElement: submenuContainer,
        selector: '.dx-menu-item-wrapper',
        dividersVisibility: this.dividersVisibility,
        items: itemData.items,
      });
    }
  }

  @HostListener('onItemRendered', ['$event'])
  onItemRendered(event: any) {
    const menuItemElement = event.itemElement.closest(
      '.dx-menu-item-wrapper .dx-item.dx-menu-item'
    );

    if (
      menuItemElement &&
      event.itemData?.disabled &&
      event.itemData?.beginGroup
    ) {
      this.renderer.addClass(menuItemElement, 'me-menu-item-title');
    }
  }
}
