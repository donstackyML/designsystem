import { Directive, HostListener, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[meContextMenu]',
  host: {
    '[class.me-context-menu]': 'true',
  },
})
export class MeContextMenuDirective {
  private renderer = inject(Renderer2);
  @HostListener('onItemRendered', ['$event'])
  ononItemRendered(event: any) {
    this.renderer.addClass(
      event.itemElement.parentElement.parentElement.parentElement,
      'me-context-menu-submenu'
    );
  }
}
