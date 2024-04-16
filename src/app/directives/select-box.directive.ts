import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { MeScrollbarShowType, MeCommonType } from '../types/types';
import { MeFieldDirective } from './field.directive';

@Directive({
  selector: '[meSelectBox]',
})
export class MeSelectBoxDirective extends MeFieldDirective implements OnInit {
  @Input() showScrollbar: MeScrollbarShowType = 'always';
  @Input() wrapperAttr: MeCommonType = {};

  constructor(
    element: ElementRef,
    component: DxSelectBoxComponent,
    renderer: Renderer2
  ) {
    super(element, component, renderer);
    this.component;
  }

  ngOnInit(): void {
    this.initMeField();

    const popupWrapperClasses = `${
      this.wrapperAttr['class'] || ''
    } me-scroll-view me-dropdownlist-${this.size} ${
      this.showScrollbar === 'always' ? `me-scrollbar-visible` : ``
    }`;

    (this.component as DxSelectBoxComponent).dropDownOptions = {
      wrapperAttr: {
        ...this.wrapperAttr,
        class: popupWrapperClasses,
      },
    };
  }
}
