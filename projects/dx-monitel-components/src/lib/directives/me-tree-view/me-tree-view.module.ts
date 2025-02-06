import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeTreeViewDirective } from './me-tree-view.directive';

@NgModule({
  declarations: [MeTreeViewDirective],
  imports: [CommonModule],
  exports: [MeTreeViewDirective],
})
export class MeTreeViewModule { }
