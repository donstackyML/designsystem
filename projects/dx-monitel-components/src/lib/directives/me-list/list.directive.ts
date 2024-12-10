import { Directive } from '@angular/core';
import { MeFocusableDirective } from '../me-focusable/me-focusable.directive';

@Directive({
  selector: '[meList]',
  host: {
    '[class.me-list]': 'true',
    '[class.me-list-small]': 'isSizeSmall',
    '[class.me-list-medium]': 'isSizeMedium',
    '[class.me-list-large]': 'isSizeLarge',
  },
})
export class MeListDirective extends MeFocusableDirective {}
