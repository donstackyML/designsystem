import { Directive } from '@angular/core';

@Directive({
  selector: '[meList]',
  host: {
    '[class.me-list]': 'true',
  },
})
export class MeListDirective {}
