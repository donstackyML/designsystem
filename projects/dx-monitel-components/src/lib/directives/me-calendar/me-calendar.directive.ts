import {
  AfterViewInit,
  ApplicationRef,
  createComponent,
  Directive,
  EmbeddedViewRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import type DevExpress from 'devextreme';
import { DxCalendarComponent } from 'devextreme-angular';
import type { ValueChangedEvent } from 'devextreme/ui/calendar';
import {
  CalendarZoomLevel,
  FirstDayOfWeek,
  WeekNumberRule,
} from 'devextreme/ui/calendar';
import { Subscription } from 'rxjs';
import { MeTimeControlsComponent } from '../../components/me-time-controls/me-time-controls.component';
import { DateTimeService } from '../../service/get-current-time-in-ms.service';

interface ExtendedDxCalendarComponent extends DevExpress.ui.dxCalendar {
  _$element: HTMLElement[];
}

@Directive({
  selector: '[meCalendar]',
  host: {
    '[class.me-calendar]': 'true',
    '[class.me-calendar-show-weeks-numbers]': 'showWeekNumbers',
    '[class.me-calendar--small]': 'size === "small"',
    '[class.me-calendar--medium]': 'size === "medium"',
    '[class.me-calendar--large]': 'size === "large"',
  },
})
export class MeCalendarDirective
  implements OnInit, AfterViewInit, OnChanges, OnDestroy
{
  @Input() showWeekNumbers: boolean = true;
  @Input() firstDayOfWeek: FirstDayOfWeek = 1;
  @Input() type: 'date' | 'datetime' = 'date';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Output() onDateValueChanged = new EventEmitter<any>();
  @Output() showWeekNumbersChange = new EventEmitter<boolean>();
  @Output() firstDayOfWeekChange = new EventEmitter<FirstDayOfWeek>();
  @Output() zoomLevelChange = new EventEmitter<CalendarZoomLevel>();
  @Output() weekNumberRuleChange = new EventEmitter<WeekNumberRule>();

  private subscriptions: Subscription[] = [];
  private time = 0;

  constructor(
    private dxCalendarComponent: DxCalendarComponent,
    private appRef: ApplicationRef,
    private dateTimeService: DateTimeService
  ) {}

  ngOnInit() {
    this.time = this.dateTimeService.getCurrentTimeInMs();

    this.updateCalendarOptions();
    this.setupEventListeners();
  }

  ngAfterViewInit() {
    if (
      this.type === 'datetime' &&
      this.dxCalendarComponent.selectionMode === 'single'
    ) {
      const calendarElement = (
        this.dxCalendarComponent.instance as ExtendedDxCalendarComponent
      )._$element[0];
      this.insertTimeControls(calendarElement);
    }
  }

  @HostListener('onValueChanged', ['$event'])
  onValueChanged(e: ValueChangedEvent) {
    const MS_IN_DAY = 1000 * 60 * 60 * 24;
    const dateChanged = e.previousValue
      ? Math.abs(
          new Date(e.value).getTime() - new Date(e.previousValue).getTime()
        ) > MS_IN_DAY
      : true;
    if (this.type === 'datetime' && dateChanged) {
      setTimeout(() => {
        this.addTimeToDateValue(new Date(e.value));
      }, 1);
    }
  }

  private addTimeToDateValue(value: Date) {
    const newDate = new Date(value);
    newDate.setHours(0);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    this.dxCalendarComponent.value = new Date(newDate.getTime() + this.time);
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

  private insertTimeControls(root: Element) {
    const targetNode = root;

    const hasBeenInserted = !!targetNode.querySelector('me-time-controls');
    if (hasBeenInserted) return;

    const calendarGridElement = root.querySelector(
      '.dx-calendar-views-wrapper table'
    );
    const calendarWidth =
      calendarGridElement?.getBoundingClientRect().width ?? 0;

    const insert = () => {
      const componentRef = createComponent(MeTimeControlsComponent, {
        environmentInjector: this.appRef.injector,
      });
      componentRef.setInput('time', this.time);
      componentRef.instance.onChange.subscribe((value) => {
        this.time = value;
        if (this.dxCalendarComponent.value) {
          this.addTimeToDateValue(
            new Date(this.dxCalendarComponent.value as string | number | Date)
          );
        }
      });
      this.appRef.attachView(componentRef.hostView);

      const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      domElem.style.width = `${calendarWidth}px`;
      domElem.style.marginInline = 'auto';

      domElem.addEventListener('mousedown', (e) => {
        if ((e.target as HTMLElement)['tagName'] === 'INPUT') {
          e.stopPropagation();
        }
      });

      targetNode.appendChild(domElem);
    };

    targetNode.classList.add('me-calendar-with-time-controls');
    insert();
  }
}
