import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meContextMenu]',
  host: {
    '[class.me-context-menu]': 'true',
  },
})
export class MeContextMenuDirective {
  @Input() size: MeSize = 'medium';
  @Input() subMenuMaxHeight?: string = '';

  private focusService: ComponentFocusService;
  constructor(element: ElementRef, private renderer: Renderer2) {
    this.focusService = new ComponentFocusService(element, renderer);
  }

  @HostListener('onItemRendered', ['$event'])
  onItemRendered(event: any) {
    const contextMenuElement =
      event.itemElement.parentElement.parentElement.parentElement;
    this.renderer.addClass(contextMenuElement, 'me-context-menu-submenu');

    if (this.subMenuMaxHeight) {
      contextMenuElement.style.maxHeight = this.subMenuMaxHeight;
    }

    const menuItemElement = event.itemElement.closest('.dx-menu-item-wrapper .dx-item.dx-menu-item');

    if (menuItemElement && event.itemData?.disabled && event.itemData?.beginGroup) {
      this.renderer.addClass(menuItemElement, 'me-menu-item-title');
    }
  }
}
