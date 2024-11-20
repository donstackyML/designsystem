import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { MeSize } from '../../types/types';
import { DxDateRangeBoxComponent } from 'devextreme-angular';

@Directive({
  selector: '[meDateRangeBox]',
  host: {
    '[class.me-date-range-box]': 'true',
    '[class.me-date-range-box-large]': 'isSizeLarge',
    '[class.me-date-range-box-medium]': 'isSizeMedium',
    '[class.me-date-range-box-small]': 'isSizeSmall',

    '[class.me-editor]': 'true',
    '[class.me-editor-large]': 'isSizeLarge',
    '[class.me-editor-medium]': 'isSizeMedium',
    '[class.me-editor-small]': 'isSizeSmall',
  },
})
export class MeDateRangeBoxDirective implements OnInit, AfterViewInit {
  @Input() size: MeSize = 'medium';
  private component = inject(DxDateRangeBoxComponent);
  private renderer = inject(Renderer2);
  private element = inject(ElementRef);

  ngOnInit(): void {
    this.component.instance.option('stylingMode', 'filled');
  }

  ngAfterViewInit(): void {
    this.createLockIcon();
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

  createLockIcon() {
    const parentSpan = this.renderer.createElement('span');
    this.renderer.addClass(parentSpan, 'dx-lock-button-area');
    const childSpan = this.renderer.createElement('span');
    this.renderer.addClass(childSpan, 'dx-icon');
    this.renderer.addClass(childSpan, 'dx-icon-key');

    if (!this.element.nativeElement.classList.contains('dx-state-readonly')) {
      this.renderer.addClass(parentSpan, 'dx-state-invisible');
    }

    if (
      this.element.nativeElement.lastChild.classList.contains(
        'dx-texteditor-buttons-container'
      )
    ) {
      this.renderer.appendChild(parentSpan, childSpan);

      this.renderer.appendChild(
        this.element.nativeElement.lastChild,
        parentSpan
      );
    }
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

  @HostListener('onOptionChanged', ['$event'])
  onOptionChanged(e: any) {
    if (e.name === 'readOnly' && e.value === true) {
      this.addLockIcon();
    }
    if (e.name === 'readOnly' && e.value === false) {
      this.removeLockIcon();
    }
  }

  @HostListener('onOpened', ['$event']) onOpened(e: any) {
    if (this.component.instance.option('applyValueMode') == 'useButtons') {
      const overlay: HTMLElement | null =
        this.component.instance.content().parentElement;

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

      //Меняем текст кнопки 'Сегодня'
      const todayText = todayButton?.querySelector('.dx-button-text');
      if (todayText) {
        todayText.innerHTML = 'Сегодня';
      }
    }
  }
}
