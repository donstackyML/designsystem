import {
  Directive,
  HostListener,
  Input,
  Renderer2,
  inject,
} from '@angular/core';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meMenu]',
  host: {
    '[class.me-menu]': 'true',
    '[class.me-menu-small]': 'isSizeSmall()',
    '[class.me-menu-large]': 'isSizeLarge()',
  },
})
export class MeMenuDirective {
  @Input() size: MeSize = 'large';

  private renderer = inject(Renderer2);

  isSizeSmall() {
    return this.size === 'small';
  }

  isSizeLarge() {
    return this.size === 'large';
  }

  @HostListener('onSubmenuShown', ['$event']) onSubmenuShown(e: any) {
    this.applySubmenuStyles(e);
    console.log(e.submenu.$contentDelimiter[0]);
  }

  private applySubmenuStyles(e: any) {
    this.renderer.addClass(e.submenuContainer, 'me-menu-submenu');
    this.renderer.setAttribute(
      e.submenu.$contentDelimiter[0],
      'style',
      'display: none;'
    );
    this.submenuSize(e);
  }

  private submenuSize(e: any) {
    this.renderer.removeClass(e.submenuContainer, 'me-menu-submenu-small');
    this.renderer.removeClass(e.submenuContainer, 'me-menu-submenu-large');
    this.renderer.addClass(e.submenuContainer, 'me-menu-submenu-' + this.size);
  }
}
