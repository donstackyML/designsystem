import {
  ApplicationRef,
  ChangeDetectorRef,
  createComponent,
  DestroyRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Injector,
  Input,
  NgZone,
  OnInit,
  Renderer2,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DxDateRangeBoxComponent } from 'devextreme-angular';
import type { ValueChangedEvent } from 'devextreme/ui/date_box';
import { MeTimeControlsComponent } from '../../components/me-time-controls/me-time-controls.component';
import { ComponentFocusService } from '../../service/component-focus.service';
import { DateTimeService } from '../../service/get-current-time-in-ms.service';
import { MeFormField } from '../me-form-item/me-form-field';

@Directive({
  selector: '[meDateRangeBox]',
  host: {
    '[class.me-date-range-box]': 'true',
  },
  providers: [{ provide: MeFormField, useExisting: MeDateRangeBoxDirective }],
})
export class MeDateRangeBoxDirective extends MeFormField implements OnInit {
  private focusService: ComponentFocusService;

  constructor(
    public element: ElementRef,
    private dateRangeBox: DxDateRangeBoxComponent,
    private renderer: Renderer2,
    private appRef: ApplicationRef,
    private injector: Injector,
    private ngZone: NgZone,
    private destroyRef: DestroyRef,
    private dateTimeService: DateTimeService,
    private cdr: ChangeDetectorRef
  ) {
    super(dateRangeBox);
    this.dateRangeBox.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
    this.focusService.addKeyUpEventHandle('Enter', (evt) =>
      this.enterHandle(evt)
    );
  }
  ngOnInit(): void {
    const calendarSize = () => {
      if (this.isSizeLarge) {
        return 'me-date-range-box-overlay-large';
      } else if (this.isSizeMedium) {
        return 'me-date-range-box-overlay-medium';
      } else {
        return 'me-date-range-box-overlay-small';
      }
    };

    this.dateRangeBox.instance.option('dropDownOptions', {
      wrapperAttr: {
        class: `me-date-range-box-overlay ${calendarSize()}`,
      },
    });

    this.component.instance.option('calendarOptions', {
      firstDayOfWeek: 1,
      elementAttr: {
        class: `me-calendar me-calendar--${this.size}`,
      },
    });
  }

  @Input() type?: 'date' | 'datetime' = 'date';

  private time = 0;
  private startTime = 0;
  private endTime = 0;

  @HostListener('onValueChanged', ['$event'])
  onValueChanged(e: ValueChangedEvent) {
    if (this.type === 'datetime') {
      if (
        Array.isArray(e.value) &&
        e.value[0] === null &&
        e.value[1] === null
      ) {
        this.dateRangeBox.value = [null as any, null];
        return;
      }

      const values = [...e.value];
      const changedValueIndex = e.value
        .map((val: unknown, i: number) => val !== e.previousValue[i])
        .findIndex((el: boolean) => el);

      values[changedValueIndex] = new Date(
        new Date(values[changedValueIndex]).getTime() +
          this.getTime(changedValueIndex)
      );

      this.dateRangeBox.value = [...values];
      this.dateRangeBox.instance.repaint();

      this.time = 0;
    }
  }

  @HostListener('onClosed', ['$event'])
  onClosed(_: any) {
    if (this.type !== 'datetime') {
      return;
    }

    const val = this.dateRangeBox.value as [Date | null, Date | null];

    const setTime = (date: Date | null, ms: number) => {
      if (!date) {
        return date;
      }

      const base = new Date(date);
      base.setHours(0, 0, 0, 0);

      return new Date(base.getTime() + ms);
    };

    let next: [Date | null, Date | null];

    if (this.dateRangeBox.multiView) {
      next = [
        setTime(val?.[0] ?? null, this.startTime),
        setTime(val?.[1] ?? null, this.endTime),
      ];
    } else {
      next = [
        setTime(val?.[0] ?? null, this.time),
        setTime(val?.[1] ?? null, this.time),
      ];
    }

    this.dateRangeBox.instance.option('value', next as any);
    this.dateRangeBox.instance.repaint();
  }

  @HostListener('onOpened', ['$event']) onOpened(e: any) {
    const calendarElement = this.dateRangeBox.instance
      .content()
      .parentElement?.querySelector('.dx-calendar');

    if (calendarElement && this.type === 'datetime') {
      this.insertTimeControls(calendarElement);
    }

    if (this.dateRangeBox.instance.option('applyValueMode') == 'useButtons') {
      const overlay: HTMLElement | null =
        this.dateRangeBox.instance.content().parentElement;

      // Переменные кнопок
      const submitButton = overlay?.querySelector('.dx-button.dx-popup-done');
      const cancelButton = overlay?.querySelector('.dx-button.dx-popup-cancel');
      const todayButton = overlay?.querySelector('.dx-button.dx-button-today');

      //Стилизуем классами кнопки
      //'Выбрать'
      this.renderer.addClass(submitButton, 'me-button');
      this.renderer.addClass(submitButton, `me-button-medium`);
      this.renderer.addClass(submitButton, 'dx-button-default');

      //'Отмена'
      this.renderer.addClass(cancelButton, 'me-button');
      this.renderer.addClass(cancelButton, `me-button-medium`);
      this.renderer.addClass(cancelButton, 'dx-button-mode-text');
      this.renderer.addClass(cancelButton, 'dx-button-default');

      //'Сегодня'
      this.renderer.addClass(todayButton, 'me-button');
      this.renderer.addClass(todayButton, `me-button-medium`);
      this.renderer.addClass(todayButton, 'dx-button-mode-text');
      this.renderer.addClass(todayButton, 'dx-button-default');
    }
  }

  private enterHandle(evt: KeyboardEvent) {
    this.dateRangeBox.instance.open();
  }

  private getTime(valueIndex: 0 | 1) {
    if (!this.dateRangeBox.multiView) {
      return this.time;
    }
    return valueIndex === 0 ? this.startTime : this.endTime;
  }

  private insertTimeControls(root: Element) {
    const targetNode = root;

    this.dateRangeBox.displayFormat = 'dd.MM.yyyy, HH:mm:ss';

    const hasBeenInserted = !!targetNode.querySelector('me-time-controls');
    if (hasBeenInserted) return;

    const calendarGridElement = root.querySelector(
      '.dx-calendar-views-wrapper table'
    );
    const calendarWidth =
      calendarGridElement?.getBoundingClientRect().width ?? 0;

    const insert = (name = 'time', target = targetNode) => {
      const componentRef = createComponent(MeTimeControlsComponent, {
        environmentInjector: this.appRef.injector,
      });
      // @ts-ignore
      componentRef.setInput('time', this[name]);

      if (this.isSizeLarge) {
        componentRef.setInput('size', 'large');
      } else if (this.isSizeMedium) {
        componentRef.setInput('size', 'medium');
      } else {
        componentRef.setInput('size', 'small');
      }

      componentRef.instance.onChange
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((value) => {
          // @ts-ignore
          this[name] = value;
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

      target.appendChild(domElem);
    };

    targetNode.classList.add('me-calendar-with-time-controls');
    if (this.dateRangeBox.multiView) {
      const wrap = document.createElement('div');
      wrap.style.display = 'flex';
      targetNode.appendChild(wrap);
      insert('startTime', wrap);
      insert('endTime', wrap);
    } else {
      insert();
    }
  }
}
