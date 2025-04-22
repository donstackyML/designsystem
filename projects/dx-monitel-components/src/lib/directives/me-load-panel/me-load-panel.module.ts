import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeLoadPanelDirective } from './me-load-panel.directive';

@NgModule({
  declarations: [MeLoadPanelDirective],
  imports: [CommonModule],
  exports: [MeLoadPanelDirective],
})
export class MeLoadPanelModule {}
