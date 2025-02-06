import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeOverlayDirective } from './me-overlay.directive';

@NgModule({
  declarations: [MeOverlayDirective],
  imports: [CommonModule],
  exports: [MeOverlayDirective],
})
export class MeOverlayModule { }
