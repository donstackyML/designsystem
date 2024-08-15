import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeTextAreaDirective } from './text-area.directive';

@NgModule({
  declarations: [MeTextAreaDirective],
  imports: [CommonModule],
  exports: [MeTextAreaDirective],
})
export class MeTextAreaModule {}
