import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeAccordionDirective } from './me-accordion.directive';

@NgModule({
  declarations: [MeAccordionDirective],
  imports: [CommonModule],
  exports: [MeAccordionDirective],
})
export class MeAccordionModule {}
