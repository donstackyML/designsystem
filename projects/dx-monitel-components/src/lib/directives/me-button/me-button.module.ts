import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeButtonDirective } from './button.directive';

@NgModule({
  declarations: [MeButtonDirective],
  imports: [CommonModule],
  exports: [MeButtonDirective],
})
export class MeButtonModule {}
