import { DxDateBoxComponent } from 'devextreme-angular';

import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

import { MeSize } from '../../types/types';

@Directive({
  selector: '[meDateBox]',
  host: {
    '[class.me-date-box]': 'true',
    '[class.me-date-box-large]': 'isSizeLarge',
    '[class.me-date-box-medium]': 'isSizeMedium',
    '[class.me-date-box-small]': 'isSizeSmall',

    '[class.me-editor]': 'true',
    '[class.me-editor-large]': 'isSizeLarge',
    '[class.me-editor-medium]': 'isSizeMedium',
    '[class.me-editor-small]': 'isSizeSmall',
  },
})
export class MeDateBoxDirective implements OnInit, AfterViewInit {
  @Input() size: MeSize = 'medium';
  @Input() description: string = ''; // Новое свойство description

  constructor(public element: ElementRef) {}

  private renderer = inject(Renderer2);
  private component = inject(DxDateBoxComponent);

  ngOnInit(): void {
    this.component.instance.option('stylingMode', 'filled');
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

    //Меняем текст кнопки 'Сегодня'
    todayButton.querySelector('.dx-button-text').innerHTML = 'Сегодня';
  }

  ngAfterViewInit(): void {
    this.createLockIcon();
  }

  createLockIcon() {
    const parentSpan = this.renderer.createElement('span');
    this.renderer.addClass(parentSpan, 'dx-lock-button-area');
    if (!this.element.nativeElement.classList.contains('dx-state-readonly')) {
      this.renderer.addClass(parentSpan, 'dx-state-invisible');
    }

    const childSpan = this.renderer.createElement('span');
    this.renderer.addClass(childSpan, 'dx-icon');
    this.renderer.addClass(childSpan, 'dx-icon-key');
    this.renderer.appendChild(parentSpan, childSpan);

    this.renderer.appendChild(
      this.element.nativeElement.querySelector(
        '.dx-texteditor-buttons-container'
      ),
      parentSpan
    );
  }

  addLockIcon() {
    this.renderer.removeClass(
      this.element.nativeElement.querySelector('.dx-lock-button-area'),
      'dx-state-invisible'
    );
  }

  removeLockIcon() {
    this.renderer.addClass(
      this.element.nativeElement.querySelector('.dx-lock-button-area'),
      'dx-state-invisible'
    );
  }

  @HostListener('onOptionChanged', ['$event']) onOptionChanged(e: any) {
    if (e.name === 'readOnly' && e.value === true) {
      this.addLockIcon();
    }
    if (e.name === 'readOnly' && e.value === false) {
      this.removeLockIcon();
    }
  }
}
