import { Directive, Input } from '@angular/core';

type MeSize = 'small' | 'medium' | 'large';

@Directive({
  selector: '[meTextArea]',
  host: {
    '[class.me-text-area]': 'true',
    '[class.me-text-area-small]': 'isSizeSmall',
    '[class.me-text-area-medium]': 'isSizeMedium',
    '[class.me-text-area-large]': 'isSizeLarge',

    '[class.me-inputs]': 'true',
    '[class.me-inputs-small]': 'isSizeSmall',
    '[class.me-inputs-medium]': 'isSizeMedium',
    '[class.me-inputs-large]': 'isSizeLarge',
  },
})
export class MeTextAreaDirective {
  @Input() size: MeSize = 'medium';

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
