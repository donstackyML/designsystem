import { Component, OnInit } from '@angular/core';
import { AnimationConfig } from 'devextreme/animation/fx';

@Component({
  selector: 'me-toast',
  templateUrl: './me-toast.component.html',
  styleUrls: ['./me-toast.component.css'],
})
export class MeToastComponent {
  message: string = 'This is a toast notification!';
  displayTime: number = 3000;
  position: any = 'bottom right';
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

  icons = [
    { text: 'Info', icon: 'dx-icon-info' },
    { text: 'Success', icon: 'dx-icon-check' },
    { text: 'Warning', icon: 'dx-icon-warning' },
  ];

  showToast(toastDirective: any) {
    toastDirective.showToast();
  }

  hideToast(toastDirective: any) {
    toastDirective.hideToast();
  }
}
