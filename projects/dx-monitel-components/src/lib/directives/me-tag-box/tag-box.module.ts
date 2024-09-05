import { NgModule } from '@angular/core';
import { MeTagBoxDirective } from './tag-box.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MeTagBoxDirective],
  imports: [CommonModule],
  exports: [MeTagBoxDirective],
})
export class MeTagBoxModule {}
