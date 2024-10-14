import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  HostBinding,
} from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { MeScrollbarShowType, MeCommonType } from '../../types/types';
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
    } me-scroll-view me-dropdownlist-${this.size} ${
      this.showScrollbar === 'always' ? `me-scrollbar-visible` : ``
    }`;

    (<DxSelectBoxComponent>this.component).dropDownOptions = {
      wrapperAttr: {
        ...this.wrapperAttr,
        class: popupWrapperClasses,
      },
    };

    // Set default styling mode and label mode
    (<DxSelectBoxComponent>this.component).instance.option(
      'stylingMode',
      'outlined'
    );
    (<DxSelectBoxComponent>this.component).instance.option(
      'labelMode',
      'hidden'
    );
  }

  @HostBinding('class.me-selectbox-small')
  get isSizeSmall() {
    return this.size === 'small';
  }

  @HostBinding('class.me-selectbox-medium')
  get isSizeMedium() {
    return this.size === 'medium';
  }

  @HostBinding('class.me-selectbox-large')
  get isSizeLarge() {
    return this.size === 'large';
  }
}
