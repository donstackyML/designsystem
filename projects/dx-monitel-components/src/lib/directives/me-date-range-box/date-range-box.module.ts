import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeDateRangeBoxDirective } from './date-range-box.directive';

@NgModule({
  declarations: [MeDateRangeBoxDirective],
  imports: [CommonModule],
  exports: [MeDateRangeBoxDirective],
})
export class MeDateRangeBoxModule {}
