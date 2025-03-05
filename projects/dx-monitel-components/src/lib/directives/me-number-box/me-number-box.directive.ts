import {
  Directive,
  ElementRef,
  Input,
  Renderer2
} from '@angular/core';
import { DxNumberBoxComponent } from 'devextreme-angular';

import { ComponentFocusService } from '../../service/component-focus.service';
import { MeSize } from '../../types/types';
import { MeFormField } from '../me-form-item/me-form-field';

@Directive({
  selector: '[meNumberBox]',
  host: {
    '[class.me-number-box]': 'true',
    '[class.me-number-box-small]': 'isSizeSmall',
    '[class.me-number-box-medium]': 'isSizeMedium',
    '[class.me-number-box-large]': 'isSizeLarge',

    '[class.me-inputs]': 'true',
    '[class.me-inputs-large]': 'isSizeLarge',
    '[class.me-inputs-medium]': 'isSizeMedium',
    '[class.me-inputs-small]': 'isSizeSmall',
  },
  providers: [{ provide: MeFormField, useExisting: MeNumberBoxDirective }],
})
export class MeNumberBoxDirective extends MeFormField {
  @Input() size: MeSize = 'medium';

  private focusService: ComponentFocusService;
  constructor(
    public element: ElementRef,
    protected override component: DxNumberBoxComponent,
    protected renderer: Renderer2
  ) {
    super(component);
    this.component.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
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
