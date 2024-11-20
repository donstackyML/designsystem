import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  Self,
  Optional,
  HostBinding
} from '@angular/core';
import { DxToastComponent } from 'devextreme-angular';
import { dxToastOptions } from 'devextreme/ui/toast';

type ToastSize = 'small' | 'large';
type ToastType = 'info' | 'warning' | 'success' | 'error';

@Directive({
  selector: '[meToast]',
  exportAs: 'meToastControl'
})
export class MeToastDirective implements OnChanges {
  @Input() size: ToastSize = 'small';
  @Input() type: ToastType = 'info';

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

  @HostBinding('class.me-toast-info')
  get isInfo(): boolean {
    return this.type === 'info';
  }

  @HostBinding('class.me-toast-warning')
  get isWarning(): boolean {
    return this.type === 'warning';
  }

  @HostBinding('class.me-toast-success')
  get isSuccess(): boolean {
    return this.type === 'success';
  }

  @HostBinding('class.me-toast-error')
  get isError(): boolean {
    return this.type === 'error';
  }

  private readonly sizeConfig = {
    small: {
      minWidth: 344,
      maxWidth: 568,
      width: '80vw'
    },
    large: {
      minWidth: 400,
      maxWidth: 600,
      width: '90vw'
    }
  };

  constructor(@Self() @Optional() private dxToastComponent: DxToastComponent) {
    if (this.dxToastComponent?.instance) {
      const options: Partial<dxToastOptions> = {
        type: undefined,
        message: '',
        contentTemplate: 'content'
      };

      this.dxToastComponent.instance.option(options);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.dxToastComponent?.instance) return;

    const instance = this.dxToastComponent.instance;

    if (changes['size']) {
      const sizeOptions = this.sizeConfig[this.size];
      const options: Partial<dxToastOptions> = {
        width: sizeOptions.width,
        minWidth: sizeOptions.minWidth,
        maxWidth: sizeOptions.maxWidth
      };

      instance.option(options);
    }
  }

  public showToast() {
    this.dxToastComponent?.instance?.show();
  }

  public hideToast() {
    this.dxToastComponent?.instance?.hide();
  }
}
