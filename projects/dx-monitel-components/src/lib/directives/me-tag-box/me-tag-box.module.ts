import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeTagBoxDirective } from './me-tag-box.directive';

@NgModule({
  declarations: [MeTagBoxDirective],
  imports: [CommonModule],
  exports: [MeTagBoxDirective],
})
export class MeTagBoxModule {}
