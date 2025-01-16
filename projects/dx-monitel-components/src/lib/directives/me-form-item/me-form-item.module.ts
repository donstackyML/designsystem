import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeFormItemDirective } from './me-form-item.directive';

@NgModule({
  declarations: [MeFormItemDirective],
  imports: [CommonModule],
  exports: [MeFormItemDirective],
})
export class MeFormItemModule {}
