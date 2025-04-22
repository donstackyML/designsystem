import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeRadioGroupDirective } from './me-radio-group.directive';

@NgModule({
  declarations: [MeRadioGroupDirective],
  imports: [CommonModule],
  exports: [MeRadioGroupDirective],
})
export class MeRadioGroupModule {}
