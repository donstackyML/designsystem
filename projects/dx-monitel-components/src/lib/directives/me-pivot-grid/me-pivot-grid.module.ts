import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MePivotGridDirective } from './me-pivot-grid.directive';

@NgModule({
  declarations: [MePivotGridDirective],
  imports: [CommonModule],
  exports: [MePivotGridModule],
})
export class MePivotGridModule {}
