import { Directive, Input, OnInit } from '@angular/core';
import { DxMenuComponent } from 'devextreme-angular';
import { SubmenuShowingEvent } from 'devextreme/ui/menu';
import { MeOrientation, MeSize } from '../../types/types';

@Directive({
  selector: '[meMenu]',
})
export class MeMenuDirective implements OnInit {
  @Input() cssClass?: string = '';
  @Input() size: MeSize = 'large';
  @Input() orientation: MeOrientation = 'horizontal';

  constructor(private component: DxMenuComponent) {}

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
