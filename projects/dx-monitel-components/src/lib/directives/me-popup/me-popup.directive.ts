import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DxPopupComponent } from 'devextreme-angular';
import { MeSize } from '../../types/types';
import { MeOverlayDirective } from '../me-overlay/me-overlay.directive';

const POPUP_WIDTH_MEDIUM = '360';
const POPUP_WIDTH_LARGE = '400';
const POPUP_MINHEIGHT = 'auto';
const POPUP_MAXHEIGHT = '80vh';
const POPUP_HEIGHT = 'auto';

@Directive({
  selector: '[mePopup]',
})
export class MePopupDirective extends MeOverlayDirective {
  @Input() minHeight: string = POPUP_MINHEIGHT;
  @Input() maxHeight: string = POPUP_MAXHEIGHT;
  @Input() height: string = POPUP_HEIGHT;
  @Input() width: string = POPUP_WIDTH_MEDIUM;
  @Input() size: Exclude<MeSize, 'small'> = 'medium';
  @Input() resizeEnabled: boolean = true;
  @Input() disableRadius: boolean = false;

  constructor(
    element: ElementRef,
    component: DxPopupComponent,
    renderer: Renderer2
  ) {
    super(element, component, renderer);
  }

  @ViewChild(DxPopupComponent) popup?: DxPopupComponent;

  @HostBinding('class.popup-disable-radius')
  get radiusClass() {
    return this.disableRadius;
  }

  ngOnInit(): void {
    this.initMeModal(this.size);
    const popup = <DxPopupComponent>this.component;

    popup.resizeEnabled = this.resizeEnabled;
    popup.maxHeight = this.maxHeight;
    popup.height = this.height;

    if (this.size === 'medium') {
      popup.width = this.width;
    } else if (this.size === 'large') {
      popup.width = POPUP_WIDTH_LARGE;
    }
  }

  showPopup() {
    if (this.popup) {
      this.popup.instance.show();
    }
  }

  hidePopup() {
    if (this.popup) {
      this.popup.instance.hide();
    }
  }
}
