import { Component } from '@angular/core';

@Component({
  selector: 'me-text-box',
  templateUrl: './me-text-box.component.html',
  styleUrls: ['./me-text-box.component.css'],
})
export class MeTextBoxComponent {
  errorMessage = 'Do not use digits.';
}
