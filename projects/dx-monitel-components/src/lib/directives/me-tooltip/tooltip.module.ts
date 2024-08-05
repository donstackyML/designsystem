import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeTooltipDirective } from "./tooltip.directive";

@NgModule({
  declarations: [MeTooltipDirective],
  imports: [CommonModule],
  exports: [MeTooltipDirective],
})
export class MeTooltipModule {}
