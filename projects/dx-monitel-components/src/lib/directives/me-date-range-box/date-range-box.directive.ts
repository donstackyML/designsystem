import {
  Directive,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  inject,
  ElementRef,
} from '@angular/core';
import { DxDateRangeBoxComponent } from 'devextreme-angular';
import { MeSize } from '../../types/types';
import { ComponentFocusService } from '../../service/component-focus.service';

@Directive({
  selector: '[meDateRangeBox]',
  host: {
    '[class.me-date-range-box]': 'true',
    '[class.me-date-range-box-large]': 'isSizeLarge',
    '[class.me-date-range-box-medium]': 'isSizeMedium',
    '[class.me-date-range-box-small]': 'isSizeSmall',

    '[class.me-inputs]': 'true',
    '[class.me-inputs-large]': 'isSizeLarge',
    '[class.me-inputs-medium]': 'isSizeMedium',
    '[class.me-inputs-small]': 'isSizeSmall',
  },
})
export class MeDateRangeBoxDirective implements OnInit {
  @Input() size: MeSize = 'medium';

  private focusService: ComponentFocusService;
  constructor(
    public element: ElementRef,
    protected component: DxDateRangeBoxComponent,
    protected renderer: Renderer2
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
  }
  ngOnInit(): void {
    this.component.instance.option('dropDownOptions', {
      wrapperAttr: {
        class: `me-date-range-box-overlay`,
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
    }
  }
}
