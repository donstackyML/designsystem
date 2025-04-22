import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeMenuDirective } from './me-menu.directive';

@NgModule({
  declarations: [MeMenuDirective],
  imports: [CommonModule],
  exports: [MeMenuDirective],
})
export class MeMenuModule {}
