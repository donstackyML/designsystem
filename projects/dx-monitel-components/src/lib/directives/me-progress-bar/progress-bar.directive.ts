import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[meProgressBar]',
  host: {
    '[class.me-progress-bar]': 'true',
    '[class.me-progress-bar-small]': 'isSizeSmall',
    '[class.me-progress-bar-medium]': 'isSizeMedium',
  },
})
export class MeProgressBarDirective {
  @Input() size: 'medium' | 'small' = 'medium';

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }
}
