import { Component } from '@angular/core';

@Component({
  selector: 'me-popup',
  templateUrl: './me-popup.component.html',
  styleUrls: ['./me-popup.component.css'],
})
export class MePopupComponent {
  isPopupVisible1: boolean;
  isPopupVisible2: boolean;
  isPopupVisible3: boolean;
  isPopupVisible4: boolean;
  isPopupVisible5: boolean;
  isPopupVisible6: boolean;
  isPopupVisible7: boolean;

  constructor() {
    this.isPopupVisible1 = false;
    this.isPopupVisible2 = false;
    this.isPopupVisible3 = false;
    this.isPopupVisible4 = false;
    this.isPopupVisible5 = false;
    this.isPopupVisible6 = false;
    this.isPopupVisible7 = false;
  }

  togglePopup = (popupNumber: number) => {
    const host = this as any;
    host[`isPopupVisible${popupNumber}`] =
      !host[`isPopupVisible${popupNumber}`];
  };
}
