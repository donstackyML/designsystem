import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeTextBoxDirective } from './text-box.directive';

@NgModule({
  declarations: [MeTextBoxDirective],
  imports: [CommonModule],
  exports: [MeTextBoxDirective],
})
export class MeTextBoxModule {}
