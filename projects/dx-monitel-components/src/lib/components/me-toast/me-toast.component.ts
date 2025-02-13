import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DxButtonModule, DxToastComponent, DxToastModule } from 'devextreme-angular';
import { MeButtonModule } from '../../directives/me-button/me-button.module';
import { MeToastModule } from '../../directives/me-toast/me-toast.module';

import { CommonModule } from '@angular/common';
import { AnimationConfig } from 'devextreme/animation/fx';
import { PositionConfig } from 'devextreme/animation/position';
import { ToastType } from 'devextreme/ui/toast';
import { MeButtonStyle, MeButtonType, MeSize } from '../../types/types';
import { MeIconComponent } from '../me-icon/me-icon.component';

const ANIMATION_DURATION_MS = 400;

@Component({
  selector: 'me-toast',
  templateUrl: './me-toast.component.html',
  exportAs: "meToastControl",
  standalone: true,
  imports: [
    CommonModule,
    DxToastModule,
    MeButtonModule,
    DxButtonModule,
    MeIconComponent,
    MeToastModule
  ],
})
export class MeToastComponent {
  @ViewChild('dxToast') dxToast?: DxToastComponent;

  @Input() message: string = '';
  @Input() title: string = '';

  @Input() type: ToastType | 'info-inverted' = 'info';
  @Input() visible: boolean = false;
  @Input() displayTime: number = 4000;

  @Input() size: 'small' | 'large' = 'small';
  @Input() height: number | Function | string = '';
  @Input() maxHeight: number | Function | string = '';
  @Input() minHeight: number | Function | string = '';
  @Input() width: number | Function | string = '260px';
  @Input() maxWidth: number | Function | string = '';
  @Input() minWidth: number | Function | string = '';

  @Input() showIcon: boolean = true;
  @Input() showCloseButton: boolean = true;
  @Input() showActionButtons: boolean = false;

  @Input() position: PositionConfig | string = 'bottom right';
  @Input() animation: {
    hide?: AnimationConfig;
    show?: AnimationConfig;
  } = {
      show: { type: 'fade', duration: ANIMATION_DURATION_MS, from: 0, to: 1 },
      hide: { type: 'fade', duration: ANIMATION_DURATION_MS, from: 1, to: 0 },
    };

  @Input() closeOnClick: boolean = false;
  @Input() hideOnOutsideClick: boolean | ((event: Event) => boolean) = false;
  @Input() closeOnSwipe: boolean = false;
  @Input() hoverStateEnabled: boolean = true;

  @Input() template: any;

  @Output() onContentReady = new EventEmitter<any>();
  @Output() onDisposing = new EventEmitter<any>();
  @Output() onHidden = new EventEmitter<any>();
  @Output() onHiding = new EventEmitter<any>();
  @Output() onInitialized = new EventEmitter<any>();
  @Output() onOptionChanged = new EventEmitter<any>();
  @Output() onShowing = new EventEmitter<any>();
  @Output() onShown = new EventEmitter<any>();

  @Output() onAccept = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<any>();

  handleAccept() {
    this.onAccept.emit();
  }
  handleCancel() {
    this.onCancel.emit();
  }
  handleClose() {
    this.onClose.emit();
  }

  statusIcon(): string {
    switch (this.type) {
      case 'success':
        return ' check_circle';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'info-inverted':
      default:
        return 'info';
    }
  }

  actionButtonStyles(): {
    type: any,
    cancelButtonStylingMode: MeButtonStyle
    size: MeSize
  } {
    let size: MeSize = 'small'
    let type: MeButtonType = 'default'
    let cancelButtonStylingMode: MeButtonStyle = 'text'

    switch (this.size) {
      case 'large':
        size = 'medium'
        break;
      default:
        size = 'small'
        break;
    }

    switch (this.type) {
      case 'success':
        type = 'success';
        cancelButtonStylingMode = 'text'
        break
      case 'error':
        type = 'danger';
        cancelButtonStylingMode = 'text'
        break
      case 'warning':
        type = 'warning';
        cancelButtonStylingMode = 'text';
        break
      case 'info-inverted':
        type = 'normal';
        cancelButtonStylingMode = 'contained'
        break
      default:
        type = 'default';
        cancelButtonStylingMode = 'text'
        break
    }
    return {
      size,
      type,
      cancelButtonStylingMode
    }
  }
  setToastType(): any {
    return this.type
  }

  public showToast() {
    this.dxToast?.instance.show();
  }

  public hideToast() {
    this.dxToast?.instance.hide();
  }
}
