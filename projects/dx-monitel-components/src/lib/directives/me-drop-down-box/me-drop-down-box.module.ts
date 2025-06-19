import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeDropDownBoxDirective } from './me-drop-down-box.directive';

@NgModule({
  declarations: [MeDropDownBoxDirective],
  imports: [CommonModule],
  exports: [MeDropDownBoxDirective],
})
export class MeDropDownBoxModule {}
