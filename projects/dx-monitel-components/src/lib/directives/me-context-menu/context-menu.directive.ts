import {
  Directive,
  HostListener,
  Renderer2,
  inject,
  ElementRef,
} from '@angular/core';
import { ComponentFocusService } from '../../service/component-focus.service';

@Directive({
  selector: '[meContextMenu]',
  host: {
    '[class.me-context-menu]': 'true',
  },
})
export class MeContextMenuDirective {
  private focusService: ComponentFocusService;
  constructor(element: ElementRef, private renderer: Renderer2) {
    this.focusService = new ComponentFocusService(element, renderer);
  }
  @HostListener('onItemRendered', ['$event'])
  onItemRendered(event: any) {
    this.renderer.addClass(
      event.itemElement.parentElement.parentElement.parentElement,
      'me-context-menu-submenu'
    );
  }
}
