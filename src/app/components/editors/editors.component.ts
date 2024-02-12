import { Component, OnInit } from '@angular/core';

const data = [ 'checked', 'unchecked' ];

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.css']
})
export class EditorsComponent {
  radioData = data;
  start = '2/1/2024';
  end = '2/29/2024';
}
