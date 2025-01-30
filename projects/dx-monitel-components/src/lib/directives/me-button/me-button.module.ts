import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeButtonDirective } from './me-button.directive';

@NgModule({
  declarations: [MeButtonDirective],
  imports: [CommonModule],
  exports: [MeButtonDirective],
})
export class MeButtonModule { }
