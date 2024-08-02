import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { MeCommonType, MeScrollbarShowType } from '../types/types';
import { MeTextEditorDirective } from './text-editor.directive';

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
    } me-scroll-view me-dropdownlist-${this.size} me-select-box ${
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
