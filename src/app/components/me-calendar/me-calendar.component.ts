import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirstDayOfWeek, ValueChangedEvent } from 'devextreme/ui/calendar';
import { DxCalendarTypes } from 'devextreme-angular/ui/calendar';
import { DxCalendarComponent } from 'devextreme-angular';
import { MeCalendarDirective } from '../../directives/calendar.directive';

@Component({
  selector: 'me-calendar',
  templateUrl: './me-calendar.component.html',
  styleUrls: ['./me-calendar.component.css'],
})
export class MeCalendarComponent implements OnInit {
  @ViewChild(MeCalendarDirective) meCalendar!: MeCalendarDirective;

  calendarForm: FormGroup;

  zoomLevels: DxCalendarTypes.CalendarZoomLevel[] = ['month', 'year', 'decade', 'century'];

  weekDays: { id: FirstDayOfWeek; text: string }[] = [
    { id: 0, text: 'Sunday' },
    { id: 1, text: 'Monday' },
    { id: 2, text: 'Tuesday' },
    { id: 3, text: 'Wednesday' },
    { id: 4, text: 'Thursday' },
    { id: 5, text: 'Friday' },
    { id: 6, text: 'Saturday' },
  ];

  weekNumberRules: DxCalendarTypes.WeekNumberRule[] = [
    'auto',
    'firstDay',
    'firstFourDays',
    'fullWeek',
  ];

  constructor(private fb: FormBuilder) {
    this.calendarForm = this.fb.group({
      currentValue: [new Date()],
      showWeekNumbers: [false],
      disabled: [false],
      firstDayOfWeek: [0],
      zoomLevel: ['month'],
      cellTemplate: ['cell'],
      weekNumberRule: ['auto'],
      useCustomTemplate: [false],
    });
  }

  ngOnInit() {
    this.calendarForm.get('useCustomTemplate')?.valueChanges.subscribe((value) => {
      this.useCellTemplate(value);
    });
  }

  onDateValueChanged(e: ValueChangedEvent) {
    this.calendarForm.get('currentValue')?.setValue(e.value, { emitEvent: false });
  }

  useCellTemplate(value: boolean) {
    this.calendarForm.patchValue({
      cellTemplate: value ? 'custom' : 'cell',
    });
  }

  getCellCssClass(cell: any): string {
    let cssClass = '';
    if (cell.view === 'month') {
      if (!cell.date) {
        cssClass = 'week-number';
      } else {
        if (this.isWeekend(cell.date)) {
          cssClass = 'weekend';
        }
        if (this.isHoliday(cell.date)) {
          cssClass = 'holiday';
        }
      }
    }
    return cssClass;
  }

  private isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 0 || day === 6;
  }

  private isHoliday(date: Date): boolean {
    const holidays = [
      [1, 0],
      [4, 6],
      [25, 11],
    ];
    return holidays.some(([day, month]) => date.getDate() === day && date.getMonth() === month);
  }
}
