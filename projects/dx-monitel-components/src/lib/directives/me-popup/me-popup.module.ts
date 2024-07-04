import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MePopupDirective } from './popup.directive';

@NgModule({
  declarations: [MePopupDirective],
  imports: [CommonModule],
  exports: [MePopupDirective],
})
export class MePopupModule {}
