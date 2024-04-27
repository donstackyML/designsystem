import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DxPopupComponent } from 'devextreme-angular';
import { MeOverlayDirective } from './overlay.directive';
import { MeSize } from '../types/types';

const POPUP_WIDTH_MEDIUM = '360';
const POPUP_MINHEIGHT_MEDIUM = '280';
const POPUP_WIDTH_LARGE = '400';
const POPUP_MINHEIGHT_LARGE = '320';
const POPUP_MAXHEIGHT = '80vh';
const POPUP_HEIGHT = 'auto';

@Directive({
  selector: '[mePopup]',
})
export class MePopupDirective extends MeOverlayDirective {
  @Input() minHeight: string = POPUP_MINHEIGHT_MEDIUM;
  @Input() maxHeight: string = POPUP_MAXHEIGHT;
  @Input() height: string = POPUP_HEIGHT;
  @Input() width: string = POPUP_WIDTH_MEDIUM;
  @Input() size: Exclude<MeSize, 'small'> = 'medium';
  @Input() resizeEnabled: boolean = true;

  constructor(
    element: ElementRef,
    component: DxPopupComponent,
    renderer: Renderer2
  ) {
    super(element, component, renderer);
  }

  @ViewChild(DxPopupComponent) popup?: DxPopupComponent;

  ngOnInit(): void {
    this.initMeOverlay(this.size);
    const popup = this.component as DxPopupComponent;

    // this.renderer.addClass(this.element.nativeElement, 'me-popup');
    // this.renderer.addClass(this.element.nativeElement, 'me-popup-medium');
    // this.renderer.addClass(this.element.nativeElement, 'me-scrollbar-visible');
    // this.renderer.addClass(this.element.nativeElement, 'me-scroll-view');

    popup.resizeEnabled = this.resizeEnabled;

    popup.maxHeight = this.maxHeight;
    popup.height = this.height;

    if (this.size === 'medium') {
      popup.minHeight = this.minHeight;
      popup.width = this.width;
    } else if (this.size === 'large') {
      popup.minHeight = POPUP_MINHEIGHT_LARGE;
      popup.width = POPUP_WIDTH_LARGE;
    }
  }

  showPopup() {
    console.log(this);

    if (this.popup) {
      this.popup.instance.show();
    }
  }

  hidePopup() {
    console.log(this);

    if (this.popup) {
      this.popup.instance.hide();
    }
  }
}
