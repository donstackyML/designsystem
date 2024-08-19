import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeProgressBarDirective } from './progress-bar.directive';

@NgModule({
  declarations: [MeProgressBarDirective],
  imports: [CommonModule],
  exports: [MeProgressBarDirective],
})
export class MeProgressBarModule {}
