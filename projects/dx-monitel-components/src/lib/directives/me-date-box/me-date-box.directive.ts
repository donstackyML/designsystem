import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  DestroyRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

import type DevExpress from 'devextreme';
import { DxDateBoxComponent } from 'devextreme-angular';
import type { OpenedEvent } from 'devextreme/ui/date_box';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MeTimeControlsComponent } from '../../components/me-time-controls/me-time-controls.component';
import { ComponentFocusService } from '../../service/component-focus.service';
import { DateTimeService } from '../../service/get-current-time-in-ms.service';
import { MeFormField } from '../me-form-item/me-form-field';

interface ExtendedDxDateBox extends DevExpress.ui.dxDateBox {
  _popup: {
    _$bottom: HTMLElement[];
    _$popupContent: HTMLElement[];
    content: () => HTMLElement;
  };
}

@Directive({
  selector: '[meDateBox]',
  host: {
    '[class.me-date-box]': 'true',
  },
  providers: [{ provide: MeFormField, useExisting: MeDateBoxDirective }],
})
export class MeDateBoxDirective
  extends MeFormField
  implements OnInit, OnDestroy
{
  private focusService: ComponentFocusService;
  private timeControlsRef: ComponentRef<MeTimeControlsComponent> | null = null;
  private showTime = false;
  private isUpdating = false;
  private timeHasBeenChanged = false;
  private time = 0;

  @Input() showWeekNumbers = false;

  constructor(
    public element: ElementRef,
    protected override component: DxDateBoxComponent,
    protected renderer: Renderer2,
    private appRef: ApplicationRef,
    private destroyRef: DestroyRef,
    private dateTimeService: DateTimeService
  ) {
    super(component);
    this.component.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
    this.focusService.addKeyUpEventHandle('Enter', (evt) =>
      this.keyEnterHandle(evt)
    );
  }

  ngOnInit(): void {
    const showAnalogClock = this.component.instance.option('showAnalogClock')
      ? 'me-date-range-box-show-analog-clock'
      : '';
    const showWeekNumbers = this.showWeekNumbers
      ? 'me-date-box-show-week-numbers'
      : '';

    this.component.instance.option('dropDownOptions', {
      wrapperAttr: {
        class: `me-date-box-overlay me-date-box-overlay-${this.size} ${showWeekNumbers} ${showAnalogClock}`,
      },
    });

    this.component.instance.option('calendarOptions', {
      showWeekNumbers: this.showWeekNumbers,
      firstDayOfWeek: 1,
      bindingOptions: {
        class: 'me-calendar-show-weeks-numbers',
      },
    });
  }

  ngOnDestroy(): void {
    this.focusService.ngOnDestroy();
  }

  private addTimeToDateValue(value: Date) {
    this.isUpdating = true;
    const newDate = new Date(value);
    newDate.setHours(0, 0, 0, 0);
    this.component.value = new Date(newDate.getTime() + this.time);
    this.isUpdating = false;
  }

  private onSubmit() {
    if (this.timeHasBeenChanged && this.component.value) {
      this.addTimeToDateValue(new Date(this.component.value));
    }
  }

  @HostListener('onOpened', ['$event'])
  onOpened(e: OpenedEvent) {
    this.showTime = this.component.type === 'datetime';
    if (this.showTime) {
      this.component.instance.option('displayFormat', 'dd.MM.yyyy, HH:mm:ss');
    }

    const dateBox = e.component as ExtendedDxDateBox;
    const dateTimeRootElement = this.component.instance
      .content()
      .parentElement?.querySelector('.dx-datebox-datetime-time-side');

    if (dateTimeRootElement && this.showTime) {
      this.initTime();
      this.insertTimeControls(dateTimeRootElement);
    }

    const bottomContainer = dateBox._popup?._$bottom?.[0];
    if (!bottomContainer) return;

    const submitButton = bottomContainer.querySelector(
      '.dx-button.dx-popup-done'
    );
    const cancelButton = bottomContainer.querySelector(
      '.dx-button.dx-popup-cancel'
    );
    const todayButton = bottomContainer.querySelector(
      '.dx-button.dx-button-today'
    );

    if (submitButton) {
      this.renderer.addClass(submitButton, 'me-button');
      this.renderer.addClass(submitButton, 'me-button-medium');
      this.renderer.addClass(submitButton, 'dx-button-default');

      if (this.showTime) {
        submitButton.addEventListener('click', () => this.onSubmit());
      }
    }

    if (cancelButton) {
      this.renderer.addClass(cancelButton, 'me-button');
      this.renderer.addClass(cancelButton, 'me-button-medium');
      this.renderer.addClass(cancelButton, 'dx-button-mode-text');
      this.renderer.addClass(cancelButton, 'dx-button-default');
    }

    if (todayButton) {
      this.renderer.addClass(todayButton, 'me-button');
      this.renderer.addClass(todayButton, 'me-button-medium');
      this.renderer.addClass(todayButton, 'dx-button-mode-text');
      this.renderer.addClass(todayButton, 'dx-button-default');

      todayButton.addEventListener('click', () => this.handleTodayClick());
    }
  }

  private keyEnterHandle(evt: KeyboardEvent) {
    if (this.component.pickerType != 'native') {
      this.component.instance.open();
    }
  }

  private insertTimeControls(root: Element) {
    const targetNode = root;
    if (!!targetNode.querySelector('me-time-controls')) return;

    const content = this.component.instance.content();
    const defaultTimeFields = content.querySelector(
      '.dx-timeview-field'
    ) as HTMLElement;
    defaultTimeFields.style.display = 'none';

    const clockElement = content.querySelector('.dx-timeview-clock');
    const calendar = content.querySelector('.dx-calendar-views-wrapper table');
    const targetWidth =
      (clockElement ?? calendar)?.getBoundingClientRect().width ?? 0;

    const componentRef = createComponent(MeTimeControlsComponent, {
      environmentInjector: this.appRef.injector,
    });

    this.timeControlsRef = componentRef;
    componentRef.setInput('time', this.time);

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
        this.time = value;
        this.timeHasBeenChanged = true;
      });

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    domElem.style.display = `block`;
    domElem.style.paddingBottom = `2px`;
    domElem.style.marginInline = 'auto';

    domElem.addEventListener('mousedown', (e) => {
      if ((e.target as HTMLElement)['tagName'] === 'INPUT') {
        e.stopPropagation();
      }
    });

    targetNode.appendChild(domElem);
  }

  private updateTimeControls(time: number) {
    if (this.timeControlsRef) {
      this.timeControlsRef.setInput('time', time);
    }
  }

  private readonly MS_IN_HOUR = 3600000;
  private readonly MS_IN_MINUTE = 60000;
  private readonly SECONDS_IN_HOUR = 3600;
  private readonly SECONDS_IN_MINUTE = 60;

  private initTime() {
    if (this.component.value) {
      const date = new Date(this.component.value);
      this.time =
        (date.getHours() * this.SECONDS_IN_HOUR +
          date.getMinutes() * this.SECONDS_IN_MINUTE) *
        1000;
    } else {
      this.time = this.dateTimeService.getCurrentTimeInMs();
    }
    this.timeHasBeenChanged = false;
    this.updateTimeControls(this.time);
  }

  private handleTodayClick() {
    const timeInMs = this.dateTimeService.getCurrentTimeInMs();
    this.time = timeInMs;
    this.timeHasBeenChanged = false;

    const today = new Date();
    today.setHours(
      Math.floor(timeInMs / this.MS_IN_HOUR),
      (timeInMs % this.MS_IN_HOUR) / this.MS_IN_MINUTE,
      0,
      0
    );

    this.isUpdating = true;
    this.component.value = today;
    this.isUpdating = false;

    this.updateTimeControls(this.time);
  }
}
