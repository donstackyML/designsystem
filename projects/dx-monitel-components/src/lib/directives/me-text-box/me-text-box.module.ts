import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeTextBoxDirective } from './me-text-box.directive';

@NgModule({
  declarations: [MeTextBoxDirective],
  imports: [CommonModule],
  exports: [MeTextBoxDirective],
})
export class MeTextBoxModule { }
