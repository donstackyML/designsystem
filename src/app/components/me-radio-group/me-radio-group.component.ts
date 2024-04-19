import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'me-radio-group',
  templateUrl: './me-radio-group.component.html',
  styleUrls: ['./me-radio-group.component.css'],
})
export class MeRadioGroupComponent {
  dataSource = ['value 1', 'value 2', 'value 3'];
}
