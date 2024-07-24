import { Directive } from '@angular/core';

@Directive({
  selector: '[mePopover]',
  host: {
    '[class.me-popover]': 'true',
  },
})
export class MePopoverDirective {}
