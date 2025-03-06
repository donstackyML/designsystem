import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';

import type DevExpress from 'devextreme';
import { DxDateBoxComponent } from 'devextreme-angular';
import type { OpenedEvent } from 'devextreme/ui/date_box';

import { ComponentFocusService } from '../../service/component-focus.service';
import { MeFormField } from '../me-form-item/me-form-field';

interface ExtendedDxDateBox extends DevExpress.ui.dxDateBox {
  _popup: {
    _$bottom: HTMLElement[];
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
  implements OnInit, OnDestroy {

  private focusService: ComponentFocusService;
  constructor(
    public element: ElementRef,
    protected override component: DxDateBoxComponent,
    protected renderer: Renderer2
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

  @HostListener('onOpened', ['$event'])
  onOpened(e: OpenedEvent) {

    const dateBox = e.component as ExtendedDxDateBox;

    const bottomContainer = dateBox._popup?._$bottom?.[0];

    if (!bottomContainer) {
      return;
    }

    const submitButton = bottomContainer.querySelector('.dx-button.dx-popup-done');
    const cancelButton = bottomContainer.querySelector('.dx-button.dx-popup-cancel');
    const todayButton = bottomContainer.querySelector('.dx-button.dx-button-today');

    if (submitButton) {
      this.renderer.addClass(submitButton, 'me-button');
      this.renderer.addClass(submitButton, 'me-button-medium');
      this.renderer.addClass(submitButton, 'dx-button-default');
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
}
