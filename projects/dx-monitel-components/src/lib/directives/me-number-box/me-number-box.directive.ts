import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import { DxNumberBoxComponent } from 'devextreme-angular';

import { MeSize } from '../../types/types';
import { MeFocusableDirective } from '../me-focusable/me-focusable.directive';

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
})
export class MeNumberBoxDirective
  extends MeFocusableDirective
  implements OnInit
{
  @Input() size: MeSize = 'medium';

  constructor(
    public override element: ElementRef,
    private component: DxNumberBoxComponent,
    override renderer: Renderer2
  ) {
    super(element, renderer);
    this.component.labelMode = 'outside';
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
