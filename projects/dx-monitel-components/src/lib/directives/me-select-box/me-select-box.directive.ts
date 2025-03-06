import { DxSelectBoxComponent } from 'devextreme-angular';

import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

import { ComponentFocusService } from '../../service/component-focus.service';
import { DropDownOptionsService } from '../../service/drop-down-options.service';
import type { MeCommonType, MeScrollbarShowType } from '../../types/types';
import { MeFormField } from '../me-form-item/me-form-field';

@Directive({
  selector: '[meSelectBox]',
  host: {
    '[class.me-selectbox]': 'true',

    '[class.me-selectbox-label-mode-hidden]': 'isHidden',
    '[class.me-selectbox-label-mode-floating]': 'isFloating',
    '[class.me-selectbox-label-mode-outside]': 'isOutside',
    '[class.me-selectbox-label-mode-static]': 'isStatic',
  },
  providers: [{ provide: MeFormField, useExisting: MeSelectBoxDirective }],
})
export class MeSelectBoxDirective
  extends MeFormField
  implements OnInit {
  @Input() showScrollbar: MeScrollbarShowType = 'always';
  @Input() wrapperAttr: MeCommonType = {};
  @Input() dropDownListMaxHeight?: string | number;

  focusService: ComponentFocusService;
  constructor(
    public element: ElementRef,
    protected override component: DxSelectBoxComponent,
    private renderer: Renderer2,
    private dropDownOptionsService: DropDownOptionsService,
  ) {
    super(component);
    this.component.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit(): void {
    const popupWrapperClasses = `${this.wrapperAttr['class'] || ''
      } ${this.showScrollbar === 'always' ? `me-scrollbar-visible` : ``
      }`;

    this.dropDownOptionsService.configureDropDownOptions(
      this.component,
      this.element,
      this.renderer,
      this.size,
      this.dropDownListMaxHeight,
      popupWrapperClasses,
    );

    this.component.wrapItemText = true;
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
