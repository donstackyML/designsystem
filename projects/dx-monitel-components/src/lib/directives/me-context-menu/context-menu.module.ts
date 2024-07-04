import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeContextMenuDirective } from './context-menu.directive';

@NgModule({
  declarations: [MeContextMenuDirective],
  imports: [CommonModule],
  exports: [MeContextMenuDirective],
})
export class MeContextMenuModule {}
