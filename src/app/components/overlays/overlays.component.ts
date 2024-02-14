import { Component } from '@angular/core';
import notify from "devextreme/ui/notify";

@Component({
  selector: 'app-overlays',
  templateUrl: './overlays.component.html',
  styleUrls: ['./overlays.component.css']
})
export class OverlaysComponent {
  isPopupVisible: boolean;
  isInfoVisible: boolean = false;
  isWarningVisible: boolean = false;
  isErrorVisible: boolean = false;
  isSuccessVisible: boolean = false;

  actionSheetData = [
    { text: "Reply", onClick: () => { this.processClick("Reply") } },
    { text: "Reply All", onClick: () => { this.processClick("Reply All") } },
    { text: "Forward", onClick: () => { this.processClick("Forward") } },
    { text: "Delete", onClick: () => { this.processClick("Delete") } }
  ];
 
  constructor() {
      this.isPopupVisible = false;
  }

  togglePopup(): void {
      this.isPopupVisible = !this.isPopupVisible;
  }
  
  hideMessage(): void {
    this.isInfoVisible = false;
    this.isWarningVisible = false;
    this.isErrorVisible = false;
    this.isSuccessVisible = false;
  }

  processClick (name: string) {
    notify(name + " clicked", "success", 3000);
  }

  showInfoMessage() {
    this.hideMessage();
    this.isInfoVisible = true;
  }

  showWarningMessage() {
    this.hideMessage();
    this.isWarningVisible = true;
  }

  showErrorMessage() {
    this.hideMessage();
    this.isErrorVisible = true;
  }

  showSuccessMessage() {
    this.hideMessage();
    this.isSuccessVisible = true;
  }
}
