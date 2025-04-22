import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeLabelDirective } from './me-label.directive';

@NgModule({
  declarations: [MeLabelDirective],
  imports: [CommonModule],
  exports: [MeLabelDirective],
})
export class MeLabelModule {}
