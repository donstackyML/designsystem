import { DxSelectBoxComponent } from 'devextreme-angular';

import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { MeCommonType, MeScrollbarShowType } from '../../types/types';
import { MeTextEditorDirective } from '../me-text-editor/text-editor.directive';

@Directive({
  selector: '[meSelectBox]',
  host: {
    '[class.me-selectbox]': 'true',
    '[class.me-selectbox-small]': 'isSizeSmall',
    '[class.me-selectbox-medium]': 'isSizeMedium',
    '[class.me-selectbox-large]': 'isSizeLarge',
  },
})
export class MeSelectBoxDirective
  extends MeTextEditorDirective
  implements OnInit
{
  @Input() showScrollbar: MeScrollbarShowType = 'always';
  @Input() wrapperAttr: MeCommonType = {};

  constructor(
    element: ElementRef,
    component: DxSelectBoxComponent,
    renderer: Renderer2
  ) {
    super(element, component, renderer);
  }

  ngOnInit(): void {
    this.initMeField();

    const popupWrapperClasses = `${
      this.wrapperAttr['class'] || ''
    } me-scroll-view me-dropdownlist me-dropdownlist-${this.size} ${
      this.showScrollbar === 'always' ? `me-scrollbar-visible` : ``
    }`;

    (<DxSelectBoxComponent>this.component).dropDownOptions = {
      wrapperAttr: {
        ...this.wrapperAttr,
        class: popupWrapperClasses,
      },
    };

    // Set default styling mode and label mode
    // (<DxSelectBoxComponent>this.component).instance.option(
    //   'stylingMode',
    //   'outlined'
    // );
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
