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

    '[class.me-selectbox-label-mode-hidden]': 'isHidden',
    '[class.me-selectbox-label-mode-floating]': 'isFloating',
    '[class.me-selectbox-label-mode-outside]': 'isOutside',
    '[class.me-selectbox-label-mode-static]': 'isStatic',
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

    this.component.wrapItemText = true;

    // let dropDownOptions = {
    //   maxWidth: 200,
    //   position: {
    //     offset: { x: 0, y: 40 }
    //   }
    // };

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

  get isFloating() {
    let optionLabelMode = this.component.instance.option('labelMode');
    return !optionLabelMode || optionLabelMode == 'floating';
  }
  get isOutside() {
    let optionLabelMode = this.component.instance.option('labelMode');
    return optionLabelMode && optionLabelMode == 'outside';
  }
  get isStatic() {
    let optionLabelMode = this.component.instance.option('labelMode');
    return optionLabelMode && optionLabelMode == 'static';
  }
  get isHidden() {
    let optionLabelMode = this.component.instance.option('labelMode');
    return optionLabelMode && optionLabelMode == 'hidden';
  }
}
