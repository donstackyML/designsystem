import { Directive, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { DxCalendarComponent } from 'devextreme-angular';
import {CalendarZoomLevel, WeekNumberRule, FirstDayOfWeek, ValueChangedEvent} from 'devextreme/ui/calendar';
import {Subscription} from "rxjs";

@Directive({
  selector: '[meCalendar]'
})
export class MeCalendarDirective implements OnChanges, OnInit {
  @Input() value: Date = new Date();
  @Input() showWeekNumbers: boolean = false;
  @Input() disabled: boolean = false;
  @Input() firstDayOfWeek: FirstDayOfWeek = 0;
  @Input() zoomLevel: CalendarZoomLevel = 'month';
  @Input() cellTemplate: string = 'cell';
  @Input() weekNumberRule: WeekNumberRule = 'auto';
  @Input() min: Date | undefined;
  @Input() max: Date | undefined;

  @Output() onDateValueChanged = new EventEmitter<ValueChangedEvent>();
  @Output() showWeekNumbersChange = new EventEmitter<boolean>();
  @Output() disabledChange = new EventEmitter<boolean>();
  @Output() firstDayOfWeekChange = new EventEmitter<FirstDayOfWeek>();
  @Output() zoomLevelChange = new EventEmitter<CalendarZoomLevel>();
  @Output() weekNumberRuleChange = new EventEmitter<WeekNumberRule>();

  private subscriptions: Subscription[] = [];

  constructor(private dxCalendarComponent: DxCalendarComponent) {}

  ngOnInit() {
    this.updateCalendarProperties();
    this.setupEventListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateCalendarProperties();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private updateCalendarProperties() {
    if (this.dxCalendarComponent && this.dxCalendarComponent.instance) {
      const instance = this.dxCalendarComponent.instance;
      instance.option('value', this.value);
      instance.option('showWeekNumbers', this.showWeekNumbers);
      instance.option('disabled', this.disabled);
      instance.option('firstDayOfWeek', this.firstDayOfWeek);
      instance.option('zoomLevel', this.zoomLevel);
      instance.option('cellTemplate', this.cellTemplate);
      instance.option('weekNumberRule', this.weekNumberRule);
      instance.option('cellTemplate', this.cellTemplate);
      instance.option('min', this.min);
      instance.option('max', this.max);
    }
  }

  getCellCssClass(cell: any): string {
    let cssClass = '';
    if (cell.view === 'month') {
      if (!cell.date) {
        cssClass = 'week-number';
      } else {
        if (this.isWeekend(cell.date)) { cssClass = 'weekend'; }
        if (this.isHoliday(cell.date)) { cssClass = 'holiday'; }
      }
    }
    return cssClass;
  }

  private setupEventListeners() {
    if (this.dxCalendarComponent) {
      this.subscriptions.push(
        this.dxCalendarComponent.onValueChanged.subscribe(e => {
          this.onDateValueChanged.emit(e);
        })
      );

      this.subscriptions.push(
        this.dxCalendarComponent.onOptionChanged.subscribe(e => {
          if (e.name === 'showWeekNumbers') {
            this.showWeekNumbersChange.emit(e.value);
          }
        })
      );

      this.subscriptions.push(
        this.dxCalendarComponent.onOptionChanged.subscribe(e => {
          if (e.name === 'disabled') {
            this.disabledChange.emit(e.value);
          }
        })
      );

      this.subscriptions.push(
        this.dxCalendarComponent.onOptionChanged.subscribe(e => {
          if (e.name === 'firstDayOfWeek') {
            this.firstDayOfWeekChange.emit(e.value);
          }
        })
      );

      this.subscriptions.push(
        this.dxCalendarComponent.onOptionChanged.subscribe(e => {
          if (e.name === 'zoomLevel') {
            this.zoomLevelChange.emit(e.value);
          }
        })
      );

      this.subscriptions.push(
        this.dxCalendarComponent.onOptionChanged.subscribe(e => {
          if (e.name === 'weekNumberRule') {
            this.weekNumberRuleChange.emit(e.value);
          }
        })
      );
    }
  }



  private isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 0 || day === 6;
  }

  private isHoliday(date: Date): boolean {
    const holidays = [[1, 0], [4, 6], [25, 11]];
    return holidays.some(([day, month]) =>
      date.getDate() === day && date.getMonth() === month
    );
  }
}
