import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeLoadIndicatorDirective } from './load-indicator.directive';

@NgModule({
  declarations: [MeLoadIndicatorDirective],
  imports: [CommonModule],
  exports: [MeLoadIndicatorDirective],
})
export class MeLoadIndicatorModule {}
