import { Component, OnInit } from '@angular/core';

interface Item {
  id: number;
  text: string;
}

interface ListGroup {
  key: string;
  items: Item[];
}

@Component({
  selector: 'me-list',
  templateUrl: './me-list.component.html',
  styleUrls: ['./me-list.component.css'],
})
export class MeListComponent implements OnInit {
  public items: ListGroup[] = [
    {
      key: 'Заголовок 1',
      items: [
        { id: 1, text: 'title' },
        { id: 2, text: 'title' },
        { id: 3, text: 'title' },
        { id: 4, text: 'title' },
        { id: 5, text: 'title' },
        { id: 6, text: 'title' },
        { id: 7, text: 'title' },
      ],
    },
    {
      key: 'Заголовок 2',
      items: [
        { id: 1, text: 'title' },
        { id: 2, text: 'title' },
        { id: 3, text: 'title' },
        { id: 4, text: 'title' },
        { id: 5, text: 'title' },
        { id: 6, text: 'title' },
        { id: 7, text: 'title' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
