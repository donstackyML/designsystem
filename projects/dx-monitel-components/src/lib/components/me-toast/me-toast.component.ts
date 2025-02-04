import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DxButtonModule, DxToastModule } from 'devextreme-angular';
import { MeButtonModule } from '../../directives/me-button/me-button.module';
import { MeToastModule } from '../../directives/me-toast/toast.module';

import { MeButtonStyle, MeButtonType, MeSize } from '../../types/types';
import { MeIconComponent } from '../me-icon/me-icon.component';

const ANIMATION_DURATION_MS = 400;

@Component({
  selector: 'me-toast',
  templateUrl: './me-toast.component.html',
  styleUrls: ['./me-toast.component.css'],
  standalone: true,
  imports: [DxToastModule, MeButtonModule, DxButtonModule, MeIconComponent, MeToastModule],
})
export class MeToastComponent {
  @Input() message: string = ''
  @Input() title: string = ''
  @Input() type: 'info' | 'success' | 'error' | 'warning' | 'info-inverted' = 'success';
  @Input() size: 'small' | 'large' = 'small';
  @Input() position: string = 'bottom right';
  @Input() displayTime: number = 4000;
  @Input() animation: { hide: any; show: any } = {
    show: { type: 'fade', duration: ANIMATION_DURATION_MS, from: 0, to: 1 },
    hide: { type: 'fade', duration: ANIMATION_DURATION_MS, from: 1, to: 0 },
  };
  @Input() visible: boolean = false

  @Output() onAccept = new EventEmitter<string>();
  @Output() onCancel = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();

  handleAccept() {
    this.onAccept.emit();
  }
  handleCancel() {
    this.onCancel.emit();
  }
  handleClose() {
    this.onClose.emit();
  }

  @Input() positions = [
    'top left',
    'top center',
    'top right',
    'bottom left',
    'bottom center',
    'bottom right',
    'center',
  ];

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

  showToast(toastDirective: any) {
    toastDirective.showToast();
  }

  hideToast(toastDirective: any) {
    toastDirective.hideToast();
  }
}
