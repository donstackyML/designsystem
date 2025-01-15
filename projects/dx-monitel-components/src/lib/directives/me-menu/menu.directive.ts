import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { MeOrientation, MeSize } from '../../types/types';
import { DxMenuComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { SubmenuShowingEvent } from 'devextreme/ui/menu';

@Directive({
  selector: '[meMenu]',
})
export class MeMenuDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() cssClass?: string = '';
  @Input() size: MeSize = 'large';
  @Input() orientation: MeOrientation = 'horizontal';

  private focusService: ComponentFocusService;
  constructor(
    private element: ElementRef,
    private component: DxMenuComponent,
    renderer: Renderer2
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
}
