import { Directive } from '@angular/core';

@Directive({
  selector: '[meDateRangeBox]',
  host: {
    '[class.me-date-range-box]': 'true',
  },
})
export class MeDateRangeBoxDirective {}
