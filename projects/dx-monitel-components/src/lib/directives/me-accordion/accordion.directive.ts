import {Directive, ElementRef, Input} from '@angular/core';
import { MeSize } from '../../types/types';
import {FocusManagerService} from "../../service/keyboard-navigation.service";

@Directive({
  selector: '[meAccordion]',
  host: {
    '[class.me-accordion-small]': 'isSizeSmall',
    '[class.me-accordion-medium]': 'isSizeMedium',
    '[class.me-accordion-large]': 'isSizeLarge',
    '[class.customClass]': 'customClass',
  },
})

export class MeAccordionDirective {
  @Input() size: MeSize = 'medium';
  @Input() customClass: string = '';

  constructor(private elementRef: ElementRef,
              private focusManager: FocusManagerService) {
    this.focusManager.monitorFocus(this.elementRef)
      .subscribe();
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
}
