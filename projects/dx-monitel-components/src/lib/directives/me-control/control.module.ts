import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeControlDirective } from './control.directive';

@NgModule({
  declarations: [MeControlDirective],
  imports: [CommonModule],
  exports: [MeControlDirective],
})
export class MeControlModule {}
