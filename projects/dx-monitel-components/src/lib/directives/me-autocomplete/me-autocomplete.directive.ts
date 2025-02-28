import { Directive, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DxAutocompleteComponent } from 'devextreme-angular';

import type { MeSize } from '../../types/types';
import { ComponentFocusService } from '../../service/component-focus.service';
import { DropDownOptionsService } from '../../service/drop-down-options.service';

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
  @Input() dropDownListMaxHeight: string | number = '300px';

  private focusService: ComponentFocusService;
  constructor(
    private component: DxAutocompleteComponent,
    private element: ElementRef,
    private renderer: Renderer2,
    private dropDownOptionsService: DropDownOptionsService,
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
    this.dropDownOptionsService.configureDropDownOptions(
      this.component,
      this.element,
      this.renderer,
      this.size,
      this.dropDownListMaxHeight
    );
  }
}
