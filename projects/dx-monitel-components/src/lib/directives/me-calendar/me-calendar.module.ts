import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeCalendarDirective } from './me-calendar.directive';

@NgModule({
  declarations: [MeCalendarDirective],
  imports: [CommonModule],
  exports: [MeCalendarDirective],
})
export class MeCalendarModule { }
