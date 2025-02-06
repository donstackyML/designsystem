import {
  Directive,
  HostListener,
  Renderer2,
  inject,
  ElementRef,
  Input,
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
  private focusService: ComponentFocusService;
  @Input() size: MeSize = 'medium';
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
