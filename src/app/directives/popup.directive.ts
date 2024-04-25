import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { DxPopupComponent } from 'devextreme-angular';
import { MeOverlayDirective } from './overlay.directive';
import { MeSize } from '../types/types';

const POPUP_WIDTH_MEDIUM = '360';
const POPUP_HEIGHT_MEDIUM = '280';

@Directive({
  selector: '[mePopup]',
})
export class MePopupDirective extends MeOverlayDirective {
  @Input() height: string = POPUP_HEIGHT_MEDIUM;
  @Input() width: string = POPUP_WIDTH_MEDIUM;
  @Input() size: MeSize = 'medium';

  constructor(
    element: ElementRef,
    component: DxPopupComponent,
    renderer: Renderer2
  ) {
    super(element, component, renderer);
  }

  ngOnInit(): void {
    this.initMeOverlay(this.size);

    // this.renderer.addClass(this.element.nativeElement, 'me-popup');
    // this.renderer.addClass(this.element.nativeElement, 'me-popup-medium');
    // this.renderer.addClass(this.element.nativeElement, 'me-scrollbar-visible');
    // this.renderer.addClass(this.element.nativeElement, 'me-scroll-view');
    this.component.height = this.height;
    this.component.width = this.width;
  }
}
