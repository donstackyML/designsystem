import { Component } from '@angular/core';
import { AnimationConfig } from 'devextreme/animation/fx';
import notify from 'devextreme/ui/notify';
import { ToastType } from 'devextreme/ui/toast';

@Component({
  selector: 'me-toast-demo',
  templateUrl: './me-toast-demo.component.html',
  styleUrls: ['./me-toast-demo.component.css'],
})
export class MeToastDemoComponent {
  message: string = 'This is a toast notification!';
  displayTime: number = 3000;
  position: any = 'bottom right';
  toastType: ToastType = 'info';
  animation: { hide: AnimationConfig; show: AnimationConfig } = {
    show: { type: 'fade', duration: 400, from: 0, to: 1 },
    hide: { type: 'fade', duration: 400, from: 1, to: 0 },
  };
  visible: boolean = false;
  icon: string = 'dx-icon-info';

  positions = [
    'top left',
    'top center',
    'top right',
    'bottom left',
    'bottom center',
    'bottom right',
    'center',
  ];
  toastTypes = [
    'info',
    'info-inverted',
    'success',
    'warning',
    'error',
  ];

  icons = [
    { text: 'Info', icon: 'dx-icon-info' },
    { text: 'Success', icon: 'dx-icon-check' },
    { text: 'Warning', icon: 'dx-icon-warning' },
  ];

  showNotification() {
    notify({
      displayTime: this.displayTime,
      message: this.message,
      type: this.toastType,
      position: this.position,
      width: '260px',
    })
  }
  showToast(toastDirective: any) {
    toastDirective.showToast();
  }

  showToastComponent(toastDirective: any) {
    toastDirective.showToast();
  }

  hideToast(toastDirective: any) {
    toastDirective.hideToast();
  }
}
