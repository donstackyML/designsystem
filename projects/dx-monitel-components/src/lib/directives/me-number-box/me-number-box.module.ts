import { NgModule } from '@angular/core';
import { MeNumberBoxDirective } from './me-number-box.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MeNumberBoxDirective],
  imports: [CommonModule],
  exports: [MeNumberBoxDirective],
})
export class MeNumberBoxModule {}
