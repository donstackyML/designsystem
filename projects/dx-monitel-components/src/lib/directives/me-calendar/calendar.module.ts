import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeCalendarDirective } from './calendar.directive';

@NgModule({
  declarations: [MeCalendarDirective],
  imports: [CommonModule],
  exports: [MeCalendarDirective],
})
export class MeCalendarModule {}
