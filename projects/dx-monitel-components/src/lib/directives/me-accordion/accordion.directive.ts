import { Directive, Input } from '@angular/core';
import { MeSize } from '../../types/types';

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
