import {
  Directive,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  SimpleChanges,
  OnChanges,
  Renderer2,
  ElementRef,
  HostListener,
} from '@angular/core';
import { DxCalendarComponent } from 'devextreme-angular';
import {
  CalendarZoomLevel,
  WeekNumberRule,
  FirstDayOfWeek,
  ValueChangedEvent,
} from 'devextreme/ui/calendar';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[meCalendar]',
  host: {
    '[class.me-calendar]': 'true',
    '[class.me-calendar-show-weeks-numbers]': 'isShowWeekNumbers',
  },
})
export class MeCalendarDirective implements OnInit, OnChanges, OnDestroy {
  @Output() onDateValueChanged = new EventEmitter<ValueChangedEvent>();
  @Output() showWeekNumbersChange = new EventEmitter<boolean>();
  @Output() disabledChange = new EventEmitter<boolean>();
  @Output() firstDayOfWeekChange = new EventEmitter<FirstDayOfWeek>();
  @Output() zoomLevelChange = new EventEmitter<CalendarZoomLevel>();
  @Output() weekNumberRuleChange = new EventEmitter<WeekNumberRule>();

  private subscriptions: Subscription[] = [];

  private isShowWeekNumbers: boolean = true;

  constructor(
    private dxCalendarComponent: DxCalendarComponent,
    private renderer: Renderer2,
    private element: ElementRef,
  ) {}

  ngOnInit() {
    this.updateCalendarProperties();
    this.setupEventListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateCalendarProperties();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private updateCalendarProperties() {
    if (this.dxCalendarComponent && this.dxCalendarComponent.instance) {
      const instance = this.dxCalendarComponent.instance;
      instance.option('showWeekNumbers', true);
      instance.option('firstDayOfWeek', 1);
    }
  }

  private setupEventListeners() {
    if (this.dxCalendarComponent) {
      this.subscriptions.push(
        this.dxCalendarComponent.onValueChanged.subscribe((e) => {
          this.onDateValueChanged.emit(e);
        }),
      );

      this.subscriptions.push(
        this.dxCalendarComponent.onOptionChanged.subscribe((e) => {
          switch (e.name) {
            case 'showWeekNumbers':
              this.showWeekNumbersChange.emit(e.value);
              break;
            case 'disabled':
              this.disabledChange.emit(e.value);
              break;
            case 'firstDayOfWeek':
              this.firstDayOfWeekChange.emit(e.value);
              break;
            case 'zoomLevel':
              this.zoomLevelChange.emit(e.value);
              break;
            case 'weekNumberRule':
              this.weekNumberRuleChange.emit(e.value);
              break;
          }
        }),
      );
    }
  }

  @HostListener('onOptionChanged', ['$event'])
  onOptionChanged(e: any) {
    this.isShowWeekNumbers = e.value;
  }
}
