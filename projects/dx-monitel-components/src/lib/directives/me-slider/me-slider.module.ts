import { NgModule } from '@angular/core';
import { MeSliderDirective } from './me-slider.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MeSliderDirective],
  imports: [CommonModule],
  exports: [MeSliderDirective],
})
export class MeSliderModule {}
