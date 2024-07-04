import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeMenuDirective } from '../me-menu/menu.directive';

@NgModule({
  declarations: [MeMenuDirective],
  imports: [CommonModule],
  exports: [MeMenuDirective],
})
export class MeMenuModule {}
