import { Component, OnInit } from '@angular/core';
import { MeIconStoreService } from 'src/app/service/icon-store.service';

interface Item {
  name: string;
  count: number;
  image?: string;
  icon?: string;
  description?: string;
  disabled?: boolean;
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
export class MeListComponent {
  public itemsWithIcons: Item[] = [
    {
      name: 'Apples',
      count: 10,
      icon: this.iconStore.getIcon({ icon: 'check', size: '24' }),
    },
    {
      name: 'Oranges',
      count: 12,
      icon: this.iconStore.getIcon({ icon: 'check', size: '24' }),
    },
    {
      name: 'Lemons',
      count: 15,
      icon: this.iconStore.getIcon({ icon: 'check', size: '24' }),
    },
    {
      name: 'Potatoes',
      count: 5,
      icon: this.iconStore.getIcon({ icon: 'check', size: '24' }),
    },
    {
      name: 'Tomatoes',
      count: 9,
      icon: this.iconStore.getIcon({ icon: 'check', size: '24' }),

      disabled: true,
    },
    {
      name: 'Turnips',
      count: 8,
      icon: this.iconStore.getIcon({ icon: 'check', size: '24' }),

      disabled: true,
    },
  ];

  public itemsWithImage: Item[] = [
    {
      name: 'Apples',
      count: 10,
      image: 'assets/images/image.png',
    },
    {
      name: 'Oranges',
      count: 12,
      image: 'assets/images/image.png',
    },
    {
      name: 'Lemons',
      count: 15,
      image: 'assets/images/image.png',
    },
    {
      name: 'Potatoes',
      count: 5,
      image: 'assets/images/image.png',
    },
    {
      name: 'Tomatoes',
      count: 9,
      image: 'assets/images/image.png',
    },
    {
      name: 'Turnips',
      count: 8,
      image: 'assets/images/image.png',
    },
  ];

  public itemsWithImageAndDescription: Item[] = [
    {
      name: 'Apples',
      count: 10,
      image: 'assets/images/image.png',
      icon: 'favorites',
      description: 'Vegetables are good for you too.',
    },
    {
      name: 'Oranges',
      count: 12,
      image: 'assets/images/image.png',
      icon: 'favorites',
      description: 'Vegetables are good for you too.',
    },
    {
      name: 'Lemons',
      count: 15,
      image: 'assets/images/image.png',
      icon: 'favorites',
      description: 'Vegetables are good for you too.',
    },
    {
      name: 'Potatoes',
      count: 5,
      image: 'assets/images/image.png',
      icon: 'favorites',
      description: 'Vegetables are good for you too.',
    },
    {
      name: 'Tomatoes',
      count: 9,
      image: 'assets/images/image.png',
      icon: 'favorites',
      description: 'Vegetables are good for you too.',
    },
    {
      name: 'Turnips',
      count: 8,
      image: 'assets/images/image.png',
      icon: 'favorites',
      description: 'Vegetables are good for you too.',
    },
  ];

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

  constructor(private iconStore: MeIconStoreService) {}
}
