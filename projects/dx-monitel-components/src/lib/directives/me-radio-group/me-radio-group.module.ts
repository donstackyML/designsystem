import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeRadioGroupDirective } from './radio-group.directive';

@NgModule({
  declarations: [MeRadioGroupDirective],
  imports: [CommonModule],
  exports: [MeRadioGroupDirective],
})
export class MeRadioGroupModule {}
