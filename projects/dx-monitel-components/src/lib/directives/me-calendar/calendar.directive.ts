import { DxCalendarComponent } from 'devextreme-angular';
import { Subscription } from 'rxjs';
import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  CalendarZoomLevel,
  FirstDayOfWeek,
  WeekNumberRule,
} from 'devextreme/ui/calendar';

@Directive({
  selector: '[meCalendar]',
  host: {
    '[class.me-calendar]': 'true',
    '[class.me-calendar-show-weeks-numbers]': 'showWeekNumbers',
  },
})
export class MeCalendarDirective implements OnInit, OnChanges, OnDestroy {
  @Input() showWeekNumbers: boolean = true;
  @Input() firstDayOfWeek: FirstDayOfWeek = 1;

  @Output() onDateValueChanged = new EventEmitter<any>();
  @Output() showWeekNumbersChange = new EventEmitter<boolean>();
  @Output() firstDayOfWeekChange = new EventEmitter<FirstDayOfWeek>();
  @Output() zoomLevelChange = new EventEmitter<CalendarZoomLevel>();
  @Output() weekNumberRuleChange = new EventEmitter<WeekNumberRule>();

  private subscriptions: Subscription[] = [];

  constructor(private dxCalendarComponent: DxCalendarComponent) {}

  ngOnInit() {
    this.updateCalendarOptions();
    this.setupEventListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateCalendarOptions();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }


  private updateCalendarOptions() {
    const instance = this.dxCalendarComponent?.instance;
    if (instance) {
      instance.option('showWeekNumbers', this.showWeekNumbers);
      instance.option('firstDayOfWeek', this.firstDayOfWeek); // Используем FirstDayOfWeek
    }
  }

  private setupEventListeners() {
    const instance = this.dxCalendarComponent?.instance;
    if (instance) {
      this.subscriptions.push(
        this.dxCalendarComponent.onValueChanged.subscribe((e) => {
          this.handleOptionChanged(e);
        })
      );
    }
  }

  private handleOptionChanged(e: any) {
    switch (e.name) {
      case 'showWeekNumbers':
        this.showWeekNumbers = e.value;
        this.showWeekNumbersChange.emit(e.value);
        break;
      case 'firstDayOfWeek':
        this.firstDayOfWeek = e.value;
        this.firstDayOfWeekChange.emit(e.value);
        break;
      case 'zoomLevel':
        this.zoomLevelChange.emit(e.value);
        break;
      case 'weekNumberRule':
        this.weekNumberRuleChange.emit(e.value);
        break;
    }
  }
}
