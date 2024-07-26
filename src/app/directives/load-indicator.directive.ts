import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[meLoadIndicator]',
  host: {
    '[class.me-load-indicator-small]': 'isSizeSmall',
    '[class.me-load-indicator-medium]': 'isSizeMedium',
    '[class.me-load-indicator-large]': 'isSizeLarge',
    '[class.me-load-indicator-color-default]': 'isColorDefault',
    '[class.me-load-indicator-color-accent]': 'isColorAccent',
    '[class.me-load-indicator-color-normal]': 'isColorNormal',
  },
})
export class MeLoadIndicatorDirective {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() color: 'normal' | 'default' | 'accent' = 'default';

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }

  get isColorDefault() {
    return this.color === 'default';
  }

  get isColorAccent() {
    return this.color === 'accent';
  }

  get isColorNormal() {
    return this.color === 'normal';
  }
}
