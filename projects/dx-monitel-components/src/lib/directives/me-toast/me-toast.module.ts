import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeToastDirective } from './me-toast.directive';

@NgModule({
  declarations: [MeToastDirective],
  imports: [CommonModule],
  exports: [MeToastDirective],
})
export class MeToastModule {}
