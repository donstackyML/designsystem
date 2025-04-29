import {
  ApplicationRef,
  createComponent,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Injector,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

import type DevExpress from 'devextreme';
import { DxDateBoxComponent } from 'devextreme-angular';
import type {
  ClosedEvent,
  OpenedEvent,
  ValueChangedEvent,
} from 'devextreme/ui/date_box';

import { ComponentFocusService } from '../../service/component-focus.service';
import { MeFormField } from '../me-form-item/me-form-field';
import { MeTimeControlsComponent } from '../../components/me-time-controls/me-time-controls.component';

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
  constructor(
    public element: ElementRef,
    protected override component: DxDateBoxComponent,
    protected renderer: Renderer2,
    private appRef: ApplicationRef
  ) {
    super(component);
    this.component.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
    this.focusService.addKeyUpEventHandle('Enter', (evt) =>
      this.keyEnterHandle(evt)
    );
  }

  ngOnDestroy(): void {
    this.focusService.ngOnDestroy();
  }

  private showTime = false;

  ngOnInit(): void {
    this.component.instance.option('dropDownOptions', {
      wrapperAttr: {
        class: `me-date-box-overlay`,
      },
    });

    this.component.instance.option('calendarOptions', {
      showWeekNumbers: true,
      firstDayOfWeek: 1,
      bindingOptions: {
        class: 'me-calendar-show-weeks-numbers',
      },
    });
  }

  isUpdating = false;
  timeHasBeenChanged = false;

  private addTimeToDateValue(value: Date) {
    this.isUpdating = true;
    const newDate = new Date(value);
    newDate.setHours(0);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
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
      this.insertTimeControls(dateTimeRootElement);
    }

    const bottomContainer = dateBox._popup?._$bottom?.[0];

    if (!bottomContainer) {
      return;
    }

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
        submitButton.addEventListener('click', () => {
          this.onSubmit();
        });
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
    }
  }

  private keyEnterHandle(evt: KeyboardEvent) {
    if (this.component.pickerType != 'native') {
      this.component.instance.open();
    }
  }

  private time = 0;
  private insertTimeControls(root: Element) {
    const targetNode = root;

    const hasBeenInserted = !!targetNode.querySelector('me-time-controls');
    if (hasBeenInserted) return;

    const content = this.component.instance.content();

    const defaultTimeFields = content.querySelector(
      '.dx-timeview-field'
    ) as HTMLElement;
    defaultTimeFields.style.display = 'none';

    const clockElement = content.querySelector('.dx-timeview-clock');
    const calendar = content.querySelector('.dx-calendar-views-wrapper table');

    const targetWidth =
      (clockElement ?? calendar)?.getBoundingClientRect().width ?? 0;

    const insert = () => {
      const componentRef = createComponent(MeTimeControlsComponent, {
        environmentInjector: this.appRef.injector,
      });
      componentRef.setInput('time', this.time);
      componentRef.instance.onChange.subscribe((value) => {
        this.time = value;
        this.timeHasBeenChanged = true;
      });
      this.appRef.attachView(componentRef.hostView);

      const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      domElem.style.display = `block`;
      domElem.style.width = `${targetWidth}px`;
      domElem.style.paddingBottom = `2px`;
      domElem.style.marginInline = 'auto';

      domElem.addEventListener('mousedown', (e) => {
        if ((e.target as HTMLElement)['tagName'] === 'INPUT') {
          e.stopPropagation();
        }
      });

      targetNode.appendChild(domElem);
    };

    insert();
  }
}
