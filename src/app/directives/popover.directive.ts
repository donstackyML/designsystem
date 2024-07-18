import { Directive, Input, OnInit } from '@angular/core';
import { MeSize } from '../types/types';
import { MeOverlayDirective } from './overlay.directive';

@Directive({
  selector: '[mePopover]',
})
export class MePopoverDirective extends MeOverlayDirective implements OnInit {
  @Input() size: MeSize = 'medium';

  ngOnInit(): void {
    this.initMeModal(this.size);
  }
}
