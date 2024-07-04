import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeToolbarDirective } from './toolbar.directive';

@NgModule({
  declarations: [MeToolbarDirective],
  imports: [CommonModule],
  exports: [MeToolbarDirective],
})
export class MeToolbarModule {}
