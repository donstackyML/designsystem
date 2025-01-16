import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MeFormField } from '../me-form-item/me-form-field';
import { DxTextAreaComponent } from 'devextreme-angular';
import { FocusManagerService } from '../../service/keyboard-navigation.service';
import { ComponentFocusService } from '../../service/component-focus.service';

type MeSize = 'small' | 'medium' | 'large';

@Directive({
  selector: '[meTextArea]',
  host: {
    '[class.me-text-area]': 'true',
    '[class.me-text-area-small]': 'isSizeSmall',
    '[class.me-text-area-medium]': 'isSizeMedium',
    '[class.me-text-area-large]': 'isSizeLarge',

    '[class.me-inputs]': 'true',
    '[class.me-inputs-small]': 'isSizeSmall',
    '[class.me-inputs-medium]': 'isSizeMedium',
    '[class.me-inputs-large]': 'isSizeLarge',
  },
  providers: [{ provide: MeFormField, useExisting: MeTextAreaDirective }],
})
export class MeTextAreaDirective extends MeFormField implements OnInit {
  @Input() size: MeSize = 'medium';
  private focusService: ComponentFocusService;
  constructor(
    public element: ElementRef,
    protected override component: DxTextAreaComponent,
    protected renderer: Renderer2
  ) {
    super(component);
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit(): void {}

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
