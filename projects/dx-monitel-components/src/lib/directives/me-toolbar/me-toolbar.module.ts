import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeToolbarDirective } from './me-toolbar.directive';

@NgModule({
  declarations: [MeToolbarDirective],
  imports: [CommonModule],
  exports: [MeToolbarDirective],
})
export class MeToolbarModule {}
