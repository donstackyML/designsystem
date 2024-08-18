import { Directive, Input } from '@angular/core';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meScrollView]',
  host: {
    '[class.me-scroll-view]': 'true',
    '[class.me-scroll-view-small]': 'isSizeSmall',
    '[class.me-scroll-view-medium]': 'isSizeMedium',
    '[class.me-scroll-view-large]': 'isSizeLarge',
  },
})
export class MeScrollViewDirective {
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
