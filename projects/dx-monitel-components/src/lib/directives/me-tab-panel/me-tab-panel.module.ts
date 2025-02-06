import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeTabPanelDirective } from './me-tab-panel.directive';

@NgModule({
  declarations: [MeTabPanelDirective],
  imports: [CommonModule],
  exports: [MeTabPanelDirective],
})
export class MeTabPanelModule { }
