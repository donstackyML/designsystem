import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeScrollViewDirective } from './me-scroll-view.directive';

@NgModule({
  declarations: [MeScrollViewDirective],
  imports: [CommonModule],
  exports: [MeScrollViewDirective],
})
export class MeScrollViewModule {}
