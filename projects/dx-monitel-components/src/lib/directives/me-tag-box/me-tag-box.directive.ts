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

import { ComponentFocusService } from '../../service/component-focus.service';
import { DropDownOptionsService } from '../../service/drop-down-options.service';
import { MeFormField } from '../me-form-item/me-form-field';

@Directive({
  selector: '[meTagBox]',
  host: {
    '[class.me-tag-box]': 'true'
  },
  providers: [{ provide: MeFormField, useExisting: MeTagBoxDirective }],
})
export class MeTagBoxDirective
  extends MeFormField
  implements OnInit, OnDestroy {

  @Input() description: string = '';
  @Input() dropDownListMaxHeight?: string | number;

  private focusService: ComponentFocusService;

  constructor(
    public element: ElementRef,
    protected tagBox: DxTagBoxComponent,
    private renderer: Renderer2,
    private dropDownOptionsService: DropDownOptionsService,
  ) {
    super(tagBox);
    this.tagBox.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
    this.focusService.addFocusInHandle((evt: FocusEvent) => this.onFocusIn());
    this.focusService.addFocusOutHandle((evt: FocusEvent) => this.onFocusOut());
  }

  ngOnDestroy(): void {
    this.focusService.ngOnDestroy();
  }

  ngOnInit(): void {
    this.dropDownOptionsService.configureDropDownOptions(
      this.tagBox,
      this.element,
      this.renderer,
      this.size,
      this.dropDownListMaxHeight,
      'me-tag-box'
    );
  }

  isNoTags(): boolean {
    let length = this.tagBox.itemsChildren.length;
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
