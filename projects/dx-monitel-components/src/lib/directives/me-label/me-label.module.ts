import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeLabelDirective } from './label.directive';

@NgModule({
  declarations: [MeLabelDirective],
  imports: [CommonModule],
  exports: [MeLabelDirective],
})
export class MeLabelModule {}
