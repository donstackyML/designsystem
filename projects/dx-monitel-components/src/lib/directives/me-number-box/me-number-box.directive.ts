import {
  Directive,
  ElementRef,
  Renderer2
} from '@angular/core';
import { DxNumberBoxComponent } from 'devextreme-angular';

import { ComponentFocusService } from '../../service/component-focus.service';
import { MeFormField } from '../me-form-item/me-form-field';

@Directive({
  selector: '[meNumberBox]',
  host: {
    '[class.me-number-box]': 'true',
  },
  providers: [{ provide: MeFormField, useExisting: MeNumberBoxDirective }],
})
export class MeNumberBoxDirective
  extends MeFormField {
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
}
