import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeTabPanelDirective } from "./tab-panel.directive";

@NgModule({
  declarations: [MeTabPanelDirective],
  imports: [CommonModule],
  exports: [MeTabPanelDirective],
})
export class MeTabPanelModule {}
