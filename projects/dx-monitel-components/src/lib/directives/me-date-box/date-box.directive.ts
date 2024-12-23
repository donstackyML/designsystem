import { DxDateBoxComponent } from 'devextreme-angular';

import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

import { MeSize } from '../../types/types';

@Directive({
  selector: '[meDateBox]',
  host: {
    '[class.me-date-box]': 'true',
    '[class.me-date-box-large]': 'isSizeLarge',
    '[class.me-date-box-medium]': 'isSizeMedium',
    '[class.me-date-box-small]': 'isSizeSmall',

    '[class.me-inputs]': 'true',
    '[class.me-inputs-large]': 'isSizeLarge',
    '[class.me-inputs-medium]': 'isSizeMedium',
    '[class.me-inputs-small]': 'isSizeSmall',
  },
})
export class MeDateBoxDirective implements OnInit {
  @Input() size: MeSize = 'medium';
  @Input() description: string = ''; // Новое свойство description

  constructor(public element: ElementRef) {}

  private renderer = inject(Renderer2);
  private component = inject(DxDateBoxComponent);

  ngOnInit(): void {
    this.component.instance.option('dropDownOptions', {
      wrapperAttr: {
        class: `me-date-box-overlay`,
      },
    });

    this.component.instance.option('calendarOptions', {
      showWeekNumbers: true,
      bindingOptions: {
        class: 'me-calendar-show-weeks-numbers',
      },
    });
  }

  get isSizeLarge() {
    return this.size === 'large';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeSmall() {
    return this.size === 'small';
  }

  @HostListener('onOpened', ['$event']) onOpened(e: any) {
    // Переменные кнопок
    const submitButton = e.component._popup._$bottom[0].querySelector(
      '.dx-button.dx-popup-done'
    );
    const cancelButton = e.component._popup._$bottom[0].querySelector(
      '.dx-button.dx-popup-cancel'
    );
    const todayButton = e.component._popup._$bottom[0].querySelector(
      '.dx-button.dx-button-today'
    );

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
