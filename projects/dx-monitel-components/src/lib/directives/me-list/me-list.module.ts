import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeListDirective } from './me-list.directive';

@NgModule({
  declarations: [MeListDirective],
  imports: [CommonModule],
  exports: [MeListDirective],
})
export class MeListModule { }
