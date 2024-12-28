import { DxToastComponent } from 'devextreme-angular';
import { dxToastOptions } from 'devextreme/ui/toast';

import {
  Directive,
  HostBinding,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';

type ToastSize = 'small' | 'large';
type ToastType = 'info' | 'warning' | 'success' | 'error';

@Directive({
  selector: '[meToast]',
  exportAs: 'meToastControl',
  host: {
    '[class.me-toast]': 'true',
    '[class.me-toast-small]': 'isSmall',
    '[class.me-toast-large]': 'isLarge',
  },
})
export class MeToastDirective implements OnInit {
  @Input() size: ToastSize = 'small';

  get isSmall(): boolean {
    return this.size === 'small';
  }

  get isLarge(): boolean {
    return this.size === 'large';
  }

  constructor(@Self() @Optional() private dxToastComponent: DxToastComponent) {
    if (this.dxToastComponent?.instance) {
      const options: Partial<dxToastOptions> = {
        type: undefined,
        message: '',
        contentTemplate: 'content',
      };
      this.dxToastComponent.instance.option(options);
    }
  }

  ngOnInit(): void {
    this.dxToastComponent.instance.option().wrapperAttr.class = `me-toast me-toast-${this.size}`;
  }

  public showToast() {
    this.dxToastComponent?.instance?.show();
  }

  public hideToast() {
    this.dxToastComponent?.instance?.hide();
  }
}
