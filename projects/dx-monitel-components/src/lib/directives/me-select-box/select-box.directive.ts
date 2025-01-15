import { DxSelectBoxComponent, DxTextBoxComponent } from 'devextreme-angular';

import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

import { MeCommonType, MeScrollbarShowType, MeSize } from '../../types/types';
import { MeTextEditorDirective } from '../me-text-editor/text-editor.directive';
import { MeFormField } from '../me-form-item/me-form-field';
import { FocusManagerService } from '../../service/keyboard-navigation.service';
import { ComponentFocusService } from '../../service/component-focus.service';

@Directive({
  selector: '[meSelectBox]',
  host: {
    '[class.me-selectbox]': 'true',
    '[class.me-selectbox-small]': 'isSizeSmall',
    '[class.me-selectbox-medium]': 'isSizeMedium',
    '[class.me-selectbox-large]': 'isSizeLarge',

    '[class.me-inputs]': 'true',
    '[class.me-inputs-small]': 'isSizeSmall',
    '[class.me-inputs-medium]': 'isSizeMedium',
    '[class.me-inputs-large]': 'isSizeLarge',
  },
  providers: [{ provide: MeFormField, useExisting: MeSelectBoxDirective }],
})
export class MeSelectBoxDirective extends MeFormField implements OnInit {
  @Input() showScrollbar: MeScrollbarShowType = 'always';
  @Input() wrapperAttr: MeCommonType = {};
  @Input() size: MeSize = 'medium';

  focusService: ComponentFocusService;
  constructor(
    public element: ElementRef,
    protected override component: DxSelectBoxComponent,
    renderer: Renderer2
  ) {
    super(component);
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit(): void {
    const popupWrapperClasses = `${
      this.wrapperAttr['class'] || ''
    } me-scroll-view me-dropdownlist me-dropdownlist-${this.size} ${
      this.showScrollbar === 'always' ? `me-scrollbar-visible` : ``
    }`;

    this.component.dropDownOptions = {
      wrapperAttr: {
        ...this.wrapperAttr,
        class: popupWrapperClasses,
      },
    };
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
}
