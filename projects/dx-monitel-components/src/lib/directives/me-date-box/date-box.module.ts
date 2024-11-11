import { NgModule } from '@angular/core';
import { MeDateBoxDirective } from './date-box.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MeDateBoxDirective],
  imports: [CommonModule],
  exports: [MeDateBoxDirective],
})
export class MeDateBoxModule {}
