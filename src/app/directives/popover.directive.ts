import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { DxPopoverComponent } from 'devextreme-angular';
import { MeCommonType, MeSize } from '../types/types';
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
