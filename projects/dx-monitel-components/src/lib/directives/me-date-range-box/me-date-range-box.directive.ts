import {
  ApplicationRef,
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
import { DxDateRangeBoxComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeFormField } from '../me-form-item/me-form-field';
import { MeTimeControlsComponent } from '../../components/me-time-controls/me-time-controls.component';
import type { ValueChangedEvent } from 'devextreme/ui/date_box';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
    private destroyRef: DestroyRef
  ) {
    super(dateRangeBox);
    this.dateRangeBox.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
    this.focusService.addKeyUpEventHandle('Enter', (evt) =>
      this.enterHandle(evt)
    );
  }
  ngOnInit(): void {
    this.dateRangeBox.instance.option('dropDownOptions', {
      wrapperAttr: {
        class: `me-date-range-box-overlay`,
      },
    });
  }

  @Input() type?: 'date' | 'datetime' = 'date';

  @HostListener('onValueChanged', ['$event'])
  onValueChanged(e: ValueChangedEvent) {
    if (this.type === 'datetime') {
      const values = [...e.value];
      const changedValueIndex = e.value
        .map((val: unknown, i: number) => val !== e.previousValue[i])
        .findIndex((el: boolean) => el);

      values[changedValueIndex] = new Date(
        new Date(values[changedValueIndex]).getTime() +
          this.getTime(changedValueIndex)
      );

      this.dateRangeBox.value = values;
      this.dateRangeBox.instance.repaint();

      this.time = 0;
    }
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

  private time = 0;
  private startTime = 0;
  private endTime = 0;

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
