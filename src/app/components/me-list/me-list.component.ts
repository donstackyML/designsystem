import { Component, OnInit } from '@angular/core';

interface Item {
  name: string;
  count: number;
}

interface ListGroup {
  key: string;
  description: string;
  items: Item[];
}

@Component({
  selector: 'me-list',
  templateUrl: './me-list.component.html',
  styleUrls: ['./me-list.component.css'],
})
export class MeListComponent implements OnInit {
  public items: Item[] = [
    { name: 'Apples', count: 10 },
    { name: 'Oranges', count: 12 },
    { name: 'Lemons', count: 15 },
    { name: 'Potatoes', count: 5 },
    { name: 'Tomatoes', count: 9 },
    { name: 'Turnips', count: 8 },
  ];
  public itemsGrouped: ListGroup[] = [
    {
      key: 'Fruits',
      description: 'Fruits are good for you.',
      items: [
        { name: 'Apples', count: 10 },
        { name: 'Oranges', count: 12 },
        { name: 'Lemons', count: 15 },
      ],
    },
    {
      key: 'Vegetables',
      description: 'Vegetables are good for you too.',
      items: [
        { name: 'Potatoes', count: 5 },
        { name: 'Tomatoes', count: 9 },
        { name: 'Turnips', count: 8 },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
