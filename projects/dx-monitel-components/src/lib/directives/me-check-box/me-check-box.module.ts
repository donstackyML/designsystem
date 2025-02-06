import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeCheckBoxDirective } from './me-check-box.directive';

@NgModule({
  declarations: [MeCheckBoxDirective],
  imports: [CommonModule],
  exports: [MeCheckBoxDirective],
})
export class MeCheckBoxModule { }
