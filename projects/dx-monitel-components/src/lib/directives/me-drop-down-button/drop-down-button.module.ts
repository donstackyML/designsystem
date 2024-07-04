import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeDropDownButtonDirective } from './drop-down-button.directive';

@NgModule({
  declarations: [MeDropDownButtonDirective],
  imports: [CommonModule],
  exports: [MeDropDownButtonDirective],
})
export class MeDropDownButtonModule {}
