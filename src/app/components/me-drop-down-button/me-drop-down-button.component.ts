import { Component, OnInit } from '@angular/core';
import {
  DxDropDownBoxComponent,
  DxDropDownButtonComponent,
} from 'devextreme-angular';
import { ItemClickEvent } from 'devextreme/ui/box';

@Component({
  selector: 'me-drop-down-button',
  templateUrl: './me-drop-down-button.component.html',
  styleUrls: ['./me-drop-down-button.component.css'],
})
export class MeDropDownButtonComponent implements OnInit {
  dropDownButton?: DxDropDownButtonComponent['instance'];
  isDropDownOpen: boolean = false;

  menuItems = [
    { id: 1, text: 'Пункт' },
    { id: 2, text: 'Пункт' },
    { id: 3, text: 'Пункт' },
    { id: 4, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
  ];

  menuItemsOverflow = [
    {
      id: 1,
      text: 'Пункт ПунктПункт ПунктПункт ПунктПункт ПунктПункт ПунктПункт ПунктПункт',
    },
    { id: 2, text: 'Пункт' },
    { id: 3, text: 'Пункт' },
    { id: 4, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
    { id: 5, text: 'Пункт' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick(event: Event) {
    this.isDropDownOpen = false;
    console.log(event.target);
  }
}
