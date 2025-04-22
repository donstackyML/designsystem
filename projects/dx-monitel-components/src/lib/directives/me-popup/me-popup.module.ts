import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MePopupDirective } from './me-popup.directive';

@NgModule({
  declarations: [MePopupDirective],
  imports: [CommonModule],
  exports: [MePopupDirective],
})
export class MePopupModule {}
