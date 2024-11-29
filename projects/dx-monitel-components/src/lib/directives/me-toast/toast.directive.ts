import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  Self,
  Optional,
  HostBinding,
} from '@angular/core';
import { DxToastComponent } from 'devextreme-angular';
import { dxToastOptions } from 'devextreme/ui/toast';

type ToastSize = 'small' | 'large';
type ToastType = 'info' | 'warning' | 'success' | 'error';

@Directive({
  selector: '[meToast]',
  exportAs: 'meToastControl',
})
export class MeToastDirective {
  @Input() size: ToastSize = 'small';

  @HostBinding('class.me-toast')
  baseClass = true;

  @HostBinding('class.me-toast-small')
  get isSmall(): boolean {
    return this.size === 'small';
  }

  @HostBinding('class.me-toast-large')
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

  public showToast() {
    this.dxToastComponent?.instance?.show();
  }

  public hideToast() {
    this.dxToastComponent?.instance?.hide();
  }
}
