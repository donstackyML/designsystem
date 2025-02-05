import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DxAutocompleteComponent } from 'devextreme-angular';
import { MeSize } from '../../types/types';
import { ComponentFocusService } from '../../service/component-focus.service';

@Directive({
  selector: '[meAutocomplete]',
  host: {
    '[class.me-autocomplete]': 'true',
    '[class.me-autocomplete-small]': 'isSizeSmall',
    '[class.me-autocomplete-medium]': 'isSizeMedium',
    '[class.me-autocomplete-large]': 'isSizeLarge',
    '[class.me-inputs]': 'true',
    '[class.me-inputs-small]': 'isSizeSmall',
    '[class.me-inputs-medium]': 'isSizeMedium',
    '[class.me-inputs-large]': 'isSizeLarge',
  },
})
export class MeAutocompleteDirective implements OnInit {
  @Input() size: MeSize = 'medium';
  @Input() minSearchLength: number = 1;
  @Input() dataSource: any[] = [];
  @Input() label?: string;
  @Input() labelMode?: 'static' | 'floating' | 'hidden' | 'outside';

  private focusService: ComponentFocusService;
  constructor(
    private component: DxAutocompleteComponent,
    element: ElementRef,
    renderer: Renderer2
  ) {
    this.component.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
  }

  get isSizeSmall(): boolean {
    return this.size === 'small';
  }

  get isSizeMedium(): boolean {
    return this.size === 'medium';
  }

  get isSizeLarge(): boolean {
    return this.size === 'large';
  }

  ngOnInit(): void {
    this.setDropDownOptions();
    this.component.instance.option('dropDownOptions', {
      wrapperAttr: {
        class: `me-dropdownlist me-dropdownlist-${this.size}`,
      },
    });
  }

  private setDropDownOptions(): void {
    const popupWrapperClasses = `me-scroll-view me-autocomplete-${this.size}`;

    this.component.dropDownOptions = {
      ...this.component.dropDownOptions,
      wrapperAttr: {
        ...this.component.dropDownOptions?.wrapperAttr,
        class: popupWrapperClasses,
      },
      maxHeight: 300,
    };

    this.component.dataSource = this.dataSource;
  }
}
