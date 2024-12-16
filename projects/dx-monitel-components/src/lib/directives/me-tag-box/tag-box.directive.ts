import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DxTagBoxComponent } from 'devextreme-angular';

import { MeSize } from '../../types/types';
import { MeFocusableDirective } from '../me-focusable/me-focusable.directive';

@Directive({
  selector: '[meTagBox]',
  host: {
    '[class.me-tag-box]': 'true',
    '[class.me-tag-box-small]': 'isSizeSmall',
    '[class.me-tag-box-medium]': 'isSizeMedium',
    '[class.me-tag-box-large]': 'isSizeLarge',
    '[class.me-inputs]': 'true',
    '[class.me-inputs-small]': 'isSizeSmall',
    '[class.me-inputs-medium]': 'isSizeMedium',
    '[class.me-inputs-large]': 'isSizeLarge',
  },
})
export class MeTagBoxDirective
  extends MeFocusableDirective
  implements OnInit
{
  @Input() size: MeSize = 'medium';
	@Input() description: string = ''; // Новое свойство description
	

  constructor(
    element: ElementRef,
    renderer: Renderer2,
    private component: DxTagBoxComponent
  ) {
    super(element, renderer);
  }

  ngOnInit(): void {
    this.component.instance.option('dropDownOptions', {
      wrapperAttr: {
        class: `me-dropdownlist me-dropdownlist-${this.size} me-tag-box`,
      },
    });
  }

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }

  @HostListener('onOpened', ['$event'])
  onOpened(e: any) {
    if (!e.component?._list?.element()) {
      return;
    }

    const listElement = e.component._list.element();
    const popupContainer = listElement.parentElement?.parentElement;

    if (!popupContainer) {
      return;
    }

    const submitButton = popupContainer.querySelector(
      '.dx-button.dx-popup-done'
    );
    const cancelButton = popupContainer.querySelector(
      '.dx-button.dx-popup-cancel'
    );

    if (submitButton) {
      this.renderer.addClass(submitButton, 'me-button');
      this.renderer.addClass(submitButton, 'dx-button-default');
      this.renderer.addClass(submitButton, `me-button-${this.size}`);

      const submitText = submitButton.querySelector('.dx-button-text');
      if (submitText) {
        submitText.innerHTML = 'Выбрать';
      }
    }

    if (cancelButton) {
      this.renderer.addClass(cancelButton, 'me-button');
      this.renderer.addClass(cancelButton, `me-button-${this.size}`);
      this.renderer.addClass(cancelButton, 'dx-button-normal');

      const cancelText = cancelButton.querySelector('.dx-button-text');
      if (cancelText) {
        cancelText.innerHTML = 'Отмена';
      }
    }
  }

  // Установка цвета при фокусе
  @HostListener('focusin')
  onFocusIn() {
    const labelElement = this.element.nativeElement.querySelector(
      '.dx-texteditor-label'
    );
    if (labelElement) {
      this.renderer.setStyle(labelElement, 'color', '#3257DC'); // Установите нужный цвет
    }
  }

  // Снятие цвета при потере фокуса
  @HostListener('focusout')
  override onFocusOut() {
    const labelElement = this.element.nativeElement.querySelector(
      '.dx-texteditor-label'
    );
    if (labelElement) {
      this.renderer.removeStyle(labelElement, 'color');
    }
  }
}
