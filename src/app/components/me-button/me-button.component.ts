import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me-test',
  templateUrl: './me-button.component.html',
  styleUrls: ['./me-button.component.css'],
})
export class MeButtonComponent {
  customIcon = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.25 5.75H0V4.25H4.25V0H5.75V4.25H10V5.75H5.75V10H4.25V5.75Z" fill="color"/>
  </svg>`;
}
