import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'me-drop-down-button',
  templateUrl: './me-drop-down-button.component.html',
  styleUrls: ['./me-drop-down-button.component.css'],
})
export class MeDropDownButtonComponent implements OnInit {
  menuItems = [
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

  dropDownOptions = {
    height: '184px',
    width: '212px',
  };

  constructor() {}

  ngOnInit(): void {}
}
