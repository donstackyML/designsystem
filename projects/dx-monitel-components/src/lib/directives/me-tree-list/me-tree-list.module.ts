import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeTreeListDirective } from './me-tree-list.directive';

@NgModule({
  exports: [MeTreeListDirective],
  imports: [CommonModule],
  declarations: [MeTreeListDirective],
})
export class MeTreeListModule {}
