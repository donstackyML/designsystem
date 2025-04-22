import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DxAutocompleteComponent } from 'devextreme-angular';

import { ComponentFocusService } from '../../service/component-focus.service';
import { DropDownOptionsService } from '../../service/drop-down-options.service';
import { MeFormField } from '../me-form-item/me-form-field';

@Directive({
  selector: '[meAutocomplete]',
  host: {
    '[class.me-autocomplete]': 'true',
  },
  providers: [{ provide: MeFormField, useExisting: MeAutocompleteDirective }],
})
export class MeAutocompleteDirective extends MeFormField implements OnInit {
  @Input() minSearchLength: number = 1;
  @Input() dataSource: any[] = [];
  @Input() dropDownListMaxHeight: string | number = '300px';

  private focusService: ComponentFocusService;
  constructor(
    private element: ElementRef,
    private autocomplete: DxAutocompleteComponent,
    private renderer: Renderer2,
    private dropDownOptionsService: DropDownOptionsService
  ) {
    super(autocomplete);
    this.autocomplete.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit(): void {
    this.dropDownOptionsService.configureDropDownOptions(
      this.autocomplete,
      this.element,
      this.renderer,
      this.size,
      this.dropDownListMaxHeight
    );
  }
}
