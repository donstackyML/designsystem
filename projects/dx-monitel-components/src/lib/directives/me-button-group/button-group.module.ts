import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeButtonGroupDirective } from './button-group.directive';

@NgModule({
  declarations: [MeButtonGroupDirective],
  imports: [CommonModule],
  exports: [MeButtonGroupDirective],
})
export class MeButtonGroupModule {}
