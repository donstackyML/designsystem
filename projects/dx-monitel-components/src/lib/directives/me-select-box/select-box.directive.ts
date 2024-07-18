import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { MeScrollbarShowType, MeCommonType } from '../../types/types';
import { MeTextEditorDirective } from '../me-text-editor/text-editor.directive';

@Directive({
  selector: '[meSelectBox]',
})
export class MeSelectBoxDirective extends MeTextEditorDirective implements OnInit {
  @Input() showScrollbar: MeScrollbarShowType = 'always';
  @Input() wrapperAttr: MeCommonType = {};

  constructor(element: ElementRef, component: DxSelectBoxComponent, renderer: Renderer2) {
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
  }
}
