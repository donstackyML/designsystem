import { Directive, Input } from '@angular/core';
import { MeSize } from '../types/types';
import { MeOverlayDirective } from './overlay.directive';

@Directive({
  selector: '[mePopover]',
})
export class MePopoverDirective extends MeOverlayDirective {
  @Input() size: MeSize = 'medium';

  ngOnInit(): void {
    this.initMeModal(this.size);
  }
}
