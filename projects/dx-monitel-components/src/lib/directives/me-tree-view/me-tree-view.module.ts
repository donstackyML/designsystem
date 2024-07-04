import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeTreeViewDirective } from './tree-view.directive';

@NgModule({
  declarations: [MeTreeViewDirective],
  imports: [CommonModule],
  exports: [MeTreeViewDirective],
})
export class MeTreeViewModule {}
