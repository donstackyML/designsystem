import { Directive, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import { MeCommonType, MeOverlayComponents } from '../../types/types';
import { DxPopoverComponent, DxPopupComponent } from 'devextreme-angular';

@Directive({
  selector: '[meOverlay]',
})
export class MeOverlayDirective {
  @Input() wrapperAttr: MeCommonType = {};

  scrollClasses = 'me-scrollbar-visible me-scroll-view';

  wrapperClasses: string =
    this.component instanceof DxPopoverComponent
      ? 'me-popover'
      : this.component instanceof DxPopupComponent
      ? 'me-popup'
      : '';

  constructor(
    protected element: ElementRef,
    @Inject(DxPopoverComponent)
    protected component: MeOverlayComponents,
    protected renderer: Renderer2
  ) {}

  initMeModal(size: string) {
    const sizeClass = size ? `${this.wrapperClasses}-${size}` : '';

    this.component.wrapperAttr = {
      ...this.wrapperAttr,
      class: `${this.wrapperAttr['class'] || ''} ${
        this.wrapperClasses
      } ${sizeClass} ${this.scrollClasses}`,
    };
  }
}
