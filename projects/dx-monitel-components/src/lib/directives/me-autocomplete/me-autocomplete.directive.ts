import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DxAutocompleteComponent } from 'devextreme-angular';
import { MeSize, MeScrollbarShowType } from '../../types/types';

@Directive({
  selector: '[meAutocomplete]',
  host: {
    '[class.me-autocomplete]': 'true',
    '[class.me-autocomplete-small]': 'isSizeSmall',
    '[class.me-autocomplete-medium]': 'isSizeMedium',
    '[class.me-autocomplete-large]': 'isSizeLarge',
  },
})
export class MeAutocompleteDirective implements OnInit {
  @Input() size: MeSize = 'medium';
  @Input() showScrollbar: MeScrollbarShowType = 'always';

  constructor(
    private element: ElementRef,
    private component: DxAutocompleteComponent,
    private renderer: Renderer2
  ) {}

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }

  ngOnInit(): void {
    this.setDropDownOptions();
  }

  private setDropDownOptions(): void {
    const popupWrapperClasses = `me-scroll-view me-autocomplete-${this.size} ${
      this.showScrollbar === 'always' ? 'me-scrollbar-visible' : ''
    }`;

    this.component.dropDownOptions = {
      ...this.component.dropDownOptions,
      wrapperAttr: {
        ...this.component.dropDownOptions?.wrapperAttr,
        class: popupWrapperClasses,
      },
    };
  }
}
