import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MePopoverDirective } from './me-popover.directive';

@NgModule({
  declarations: [MePopoverDirective],
  imports: [CommonModule],
  exports: [MePopoverDirective],
})
export class MePopoverModule {}
