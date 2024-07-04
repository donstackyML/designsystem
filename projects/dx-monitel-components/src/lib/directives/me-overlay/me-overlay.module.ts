import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeOverlayDirective } from './overlay.directive';

@NgModule({
  declarations: [MeOverlayDirective],
  imports: [CommonModule],
  exports: [MeOverlayDirective],
})
export class MeOverlayModule {}
