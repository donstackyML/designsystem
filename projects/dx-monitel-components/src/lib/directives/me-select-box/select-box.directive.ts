import { DxSelectBoxComponent } from 'devextreme-angular';

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
})
export class MeSelectBoxDirective implements OnInit {
  @Input() showScrollbar: MeScrollbarShowType = 'always';
  @Input() wrapperAttr: MeCommonType = {};
  @Input() size: MeSize = 'medium';

  private component = inject(DxSelectBoxComponent);

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
