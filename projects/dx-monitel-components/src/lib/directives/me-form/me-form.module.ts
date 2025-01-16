import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormOptions, MeFormDirective } from './me-form.directive';

@NgModule({
  declarations: [MeFormDirective],
  imports: [CommonModule],
  exports: [MeFormDirective],
})
export class MeFormModule {}
