import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeSwitchDirective } from './switch.directive';

@NgModule({
  declarations: [MeSwitchDirective],
  imports: [CommonModule],
  exports: [MeSwitchDirective],
})
export class MeSwitchModule {}
