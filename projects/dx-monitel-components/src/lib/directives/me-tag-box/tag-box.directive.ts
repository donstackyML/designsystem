import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  inject,
} from '@angular/core';
import { DxTagBoxComponent } from 'devextreme-angular';
import { MeSize } from '../../types/types';
import { MeFocusableDirective } from '../me-focusable/me-focusable.directive';

@Directive({
  selector: '[meTagBox]',
  host: {
    '[class.me-tag-box]': 'true',
    '[class.me-tag-box-small]': 'isSizeSmall',
    '[class.me-tag-box-medium]': 'isSizeMedium',
    '[class.me-tag-box-large]': 'isSizeLarge',
  },
})
export class MeTagBoxDirective extends MeFocusableDirective {
  @Input() size: MeSize = 'medium';

  private component = inject(DxTagBoxComponent);

  constructor(
    element: ElementRef,
    renderer: Renderer2
  ) {
    super(element, renderer);
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


  @HostListener('onContentReady', ['$event'])
  onContentReady(e: any) {
    console.log('Content Ready:', e);
  }
}
