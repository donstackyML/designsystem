import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeIconDirective } from './icon.directive';

@NgModule({
  declarations: [MeIconDirective],
  imports: [CommonModule],
  exports: [MeIconDirective],
})
export class MeIconModule {}
