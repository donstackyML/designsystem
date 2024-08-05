import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeAccordionDirective} from "./accordion.directive";

@NgModule({
  declarations: [MeAccordionDirective],
  imports: [CommonModule],
  exports: [MeAccordionDirective],
})
export class MeAccordionModule {}
