import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { MeSize } from '../../types/types';
import { ComponentFocusService } from '../../service/component-focus.service';

@Directive({
  selector: '[meAccordion]',
  host: {
    '[class.me-accordion-small]': 'isSizeSmall',
    '[class.me-accordion-medium]': 'isSizeMedium',
    '[class.me-accordion-large]': 'isSizeLarge',
    '[class.customClass]': 'customClass',
  },
})
export class MeAccordionDirective {
  @Input() size: MeSize = 'medium';
  @Input() customClass: string = '';

  private focusService: ComponentFocusService;
  constructor(elementRef: ElementRef, renderer: Renderer2) {
    this.focusService = new ComponentFocusService(elementRef, renderer);
  }

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }
}
