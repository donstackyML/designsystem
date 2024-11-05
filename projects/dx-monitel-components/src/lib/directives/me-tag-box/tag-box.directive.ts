import { DxTagBoxComponent } from 'devextreme-angular';

import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

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
export class MeTagBoxDirective extends MeFocusableDirective implements OnInit {
  @Input() size: MeSize = 'medium';

  constructor(
    element: ElementRef,
    renderer: Renderer2,
    private component: DxTagBoxComponent
  ) {
    super(element, renderer);
  }

  ngOnInit(): void {
    this.component.instance.option('stylingMode', 'filled');
    this.component.instance.option('dropDownOptions', {
      wrapperAttr: {
        class: `me-dropdownlist me-dropdownlist-${this.size} me-tag-box`,
      },
    });
    // console.log(this.element.nativeElement);
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

  @HostListener('onOpened', ['$event']) onOpened(e: any) {
    const submitButton = e.component._list
      .element()
      .parentElement.parentElement.querySelector('.dx-button.dx-popup-done');
    const cancelButton = e.component._list
      .element()
      .parentElement.parentElement.querySelector('.dx-button.dx-popup-cancel');

    this.renderer.addClass(submitButton, 'me-button');
    this.renderer.addClass(submitButton, 'dx-button-default');
    this.renderer.addClass(submitButton, `me-button-${this.size}`);
    submitButton.querySelector('.dx-button-text').innerHTML = 'Выбрать';
    cancelButton.querySelector('.dx-button-text').innerHTML = 'Отмена';

    this.renderer.addClass(cancelButton, 'me-button');
    this.renderer.addClass(cancelButton, `me-button-${this.size}`);
    this.renderer.addClass(cancelButton, 'dx-button-normal');
  }
}
