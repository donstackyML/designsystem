import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeFocusableDirective } from './me-focusable.directive';

@NgModule({
  declarations: [MeFocusableDirective],
  imports: [CommonModule],
  exports: [MeFocusableDirective],
})
export class MeFocusableModule {}
