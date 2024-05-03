import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import DevExpress from 'devextreme';
import { DxDrawerComponent, DxPopupComponent } from 'devextreme-angular';

@Component({
  selector: 'me-sidepage',
  templateUrl: './me-sidepage.component.html',
  styleUrls: ['./me-sidepage.component.css'],
})
export class MeSidepageComponent implements OnInit {
  @ViewChild(DxPopupComponent) popup?: DxPopupComponent;
  isOpenSidePage = false;
  position: DevExpress.PositionConfig = { my: 'right', at: 'left', of: window };
  constructor() {}

  ngOnInit(): void {}

  toggleDrawer() {
    this.isOpenSidePage = !this.isOpenSidePage;
  }
}
