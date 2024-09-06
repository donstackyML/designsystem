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

@Directive({
  selector: '[meTagBox]',
  host: {
    '[class.me-tag-box]': 'true',
    '[class.me-tag-box-small]': 'isSizeSmall',
    '[class.me-tag-box-medium]': 'isSizeMedium',
    '[class.me-tag-box-large]': 'isSizeLarge',
  },
})
export class MeTagBoxDirective {
  @Input() size: MeSize = 'medium';

  private element = inject(ElementRef);
  private component = inject(DxTagBoxComponent);
  private renderer = inject(Renderer2);

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }

  // @HostListener('onOptionChanged', ['$event']) onOptionChanged(e: any) {
  //   // if (e.name === 'opened' && e.value === true) {
  //   //   this.renderer.addClass(
  //   //     this.element.nativeElement.querySelector('.dx-overlay-content'),
  //   //     'me-tag-box'
  //   //   );
  //     // console.log(
  //     //   this.element.nativeElement.querySelector('.dx-overlay-content')
  //     // );
  //   }
  // }

  @HostListener('onContentReady', ['$event']) onContentReady(e: any) {
    console.log('Content Ready:', e);
    // if (e.name === 'opened' && e.value === true) {
    //   this.renderer.addClass(
    //     this.element.nativeElement.querySelector('.dx-overlay-content'),
    //     'me-tag-box'
    //   );
    //   console.log(
    //     this.element.nativeElement.querySelector('.dx-overlay-content')
    //   );
    // }
  }

  // @HostListener('onOpened', ['$event']) onOpened(e: any) {
  //   if (e) {
  //     // console.log(
  //     //   this.element.nativeElement.querySelector('.dx-overlay-content')
  //     // );
  //     // console.log(e);
  //     console.log(
  //       this.element.nativeElement.querySelector('.dx-overlay-content')
  //     );
  //     this.renderer.addClass(
  //       this.element.nativeElement.querySelector('.dx-overlay-content'),
  //       'me-tag-box'
  //     );
  //   }
  // }
}
