import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeCheckBoxDirective } from './check-box.directive';

@NgModule({
  declarations: [MeCheckBoxDirective],
  imports: [CommonModule],
  exports: [MeCheckBoxDirective],
})
export class MeCheckBoxModule {}
