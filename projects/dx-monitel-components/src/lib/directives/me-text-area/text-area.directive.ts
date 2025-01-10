import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { MeFormField } from '../me-form-item/me-form-field';
import { DxTextAreaComponent } from 'devextreme-angular';
import { FocusManagerService } from '../../service/keyboard-navigation.service';

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

  constructor(
    public element: ElementRef,
    protected override component: DxTextAreaComponent,
    private focusManager: FocusManagerService
  ) {
    super(component);
  }

  ngOnInit(): void {
    this.focusManager.monitorFocus(this.element, true).subscribe();
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
