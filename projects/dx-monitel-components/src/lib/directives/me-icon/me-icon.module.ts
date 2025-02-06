import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeIconDirective } from './me-icon.directive';

@NgModule({
  declarations: [MeIconDirective],
  imports: [CommonModule],
  exports: [MeIconDirective],
})
export class MeIconModule { }
