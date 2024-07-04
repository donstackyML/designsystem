import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeSelectBoxDirective } from './select-box.directive';

@NgModule({
  declarations: [MeSelectBoxDirective],
  imports: [CommonModule],
  exports: [MeSelectBoxDirective],
})
export class MeSelectBoxModule {}
