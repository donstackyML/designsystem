import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeListDirective } from '../me-list/list.directive';

@NgModule({
  declarations: [MeListDirective],
  imports: [CommonModule],
  exports: [MeListDirective],
})
export class MeListModule {}
