import { Directive, Input } from '@angular/core';

type MeFormSize = 'small' | 'medium' | 'large';

@Directive({
  selector: '[meForm]',
  host: {
    '[class.me-form]': 'true',
    '[class.me-form-small]': 'isSmall',
    '[class.me-form-medium]': 'isMedium',
    '[class.me-form-large]': 'isLarge',
  },
})
export class MeFormDirective {
  @Input() size: MeFormSize = 'medium';

  get isSmall() {
    return this.size === 'small';
  }

  get isMedium() {
    return this.size === 'medium';
  }

  get isLarge() {
    return this.size === 'large';
  }
}
