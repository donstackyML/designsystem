import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeDataGridDirective } from './me-data-grid.directive';

@NgModule({
  declarations: [MeDataGridDirective],
  imports: [CommonModule],
  exports: [MeDataGridDirective],
})
export class MeDataGridModule {}
