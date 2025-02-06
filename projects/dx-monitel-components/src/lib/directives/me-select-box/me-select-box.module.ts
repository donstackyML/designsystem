import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeSelectBoxDirective } from './me-select-box.directive';

@NgModule({
  declarations: [MeSelectBoxDirective],
  imports: [CommonModule],
  exports: [MeSelectBoxDirective],
})
export class MeSelectBoxModule { }
