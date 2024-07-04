import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MePopoverDirective } from './popover.directive';

@NgModule({
  declarations: [MePopoverDirective],
  imports: [CommonModule],
  exports: [MePopoverDirective],
})
export class MePopoverModule {}
