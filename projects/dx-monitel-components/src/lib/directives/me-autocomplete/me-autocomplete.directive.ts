import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DxAutocompleteComponent } from 'devextreme-angular';
import { MeScrollbarShowType, MeSize } from '../../types/types';
import { MeFocusableDirective } from '../me-focusable/me-focusable.directive';

@Directive({
  selector: '[meAutocomplete]',
  host: {
    '[class.me-autocomplete]': 'true',
    '[class.me-autocomplete-small]': 'isSizeSmall',
    '[class.me-autocomplete-medium]': 'isSizeMedium',
    '[class.me-autocomplete-large]': 'isSizeLarge',
  },
})
export class MeAutocompleteDirective
  extends MeFocusableDirective
  implements OnInit
{
  @Input() size: MeSize = 'medium';
  @Input() showScrollbar: MeScrollbarShowType = 'always';
  @Input() minSearchLength: number = 1;
  @Input() dataSource: any[] = [];
  @Input() label?: string;
  @Input() labelMode?: 'static' | 'floating' | 'hidden' | 'outside';

  constructor(
    private component: DxAutocompleteComponent,
    element: ElementRef,
    renderer: Renderer2
  ) {
    super(element, renderer);
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
        class: `me-dropdownlist me-dropdownlist-${this.size} me-tag-box`,
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
      maxHeight: 300 // Устанавливаем maxHeight для активации скролла
    };

    this.component.dataSource = this.dataSource;
  }
}
