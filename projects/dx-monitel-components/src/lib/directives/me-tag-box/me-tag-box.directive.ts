import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { DxTagBoxComponent } from 'devextreme-angular';

import { type MeSize } from '../../types/types';
import { ComponentFocusService } from '../../service/component-focus.service';
import { DropDownOptionsService } from '../../service/drop-down-options.service';

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
    '[class.me-tag-box-tag-empty]': 'isNoTags',
  },
})
export class MeTagBoxDirective implements OnInit, OnDestroy {
  @Input() size: MeSize = 'medium';
  @Input() description: string = '';
  @Input() dropDownListMaxHeight?: string | number;

  private focusService: ComponentFocusService;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private component: DxTagBoxComponent,
    private dropDownOptionsService: DropDownOptionsService,
  ) {
    this.component.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
    this.focusService.addFocusInHandle((evt: FocusEvent) => this.onFocusIn());
    this.focusService.addFocusOutHandle((evt: FocusEvent) => this.onFocusOut());
  }

  ngOnDestroy(): void {
    this.focusService.ngOnDestroy();
  }

  ngOnInit(): void {
    this.dropDownOptionsService.configureDropDownOptions(
      this.component,
      this.element,
      this.renderer,
      this.size,
      this.dropDownListMaxHeight,
      'me-tag-box'
    );
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

  isNoTags(): boolean {
    let length = this.component.itemsChildren.length;
    debugger;
    console.log('Tags count: %o', length);
    return length == 0;
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

  onFocusIn() {
    const labelElement = this.element.nativeElement.querySelector(
      '.dx-texteditor-label'
    );
    if (labelElement) {
      this.renderer.setStyle(labelElement, 'color', '#3257DC');
    }
  }

  onFocusOut() {
    const labelElement = this.element.nativeElement.querySelector(
      '.dx-texteditor-label'
    );
    if (labelElement) {
      this.renderer.removeStyle(labelElement, 'color');
    }
  }
}
