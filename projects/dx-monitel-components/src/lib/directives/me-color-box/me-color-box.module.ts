import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeColorBoxDirective} from "./me-color-box.directive";

@NgModule({
  declarations: [MeColorBoxDirective],
  imports: [CommonModule],
  exports: [MeColorBoxDirective],
})
export class MeColorBoxModule {}
