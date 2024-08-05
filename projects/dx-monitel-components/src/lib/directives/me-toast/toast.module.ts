import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeToastDirective} from "./toast.directive";

@NgModule({
  declarations: [MeToastDirective],
  imports: [CommonModule],
  exports: [MeToastDirective],
})
export class MeToastModule {}
