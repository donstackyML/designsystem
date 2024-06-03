import { Component, OnInit } from '@angular/core';
import { ListService, Product } from 'src/app/service/list.service';
import DataSource from 'devextreme/data/data_source';
import { IconStoreService } from 'src/app/service/icon-store.service';

interface Item {
  name: string;
  count: number;
  image?: string;
  icon?: string;
  description?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  dataSource: DataSource;
  products: Product[] = [];

  public items: Item[] = [
    { name: 'Apples', count: 10 },
    { name: 'Oranges', count: 12 },
    { name: 'Lemons', count: 15 },
    { name: 'Potatoes', count: 5 },
    { name: 'Tomatoes', count: 9 },
    { name: 'Turnips', count: 8 },
  ];

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

  constructor(service: ListService, public iconStore: IconStoreService) {
    this.products = service.getProducts();
    this.dataSource = new DataSource({
      store: this.products,
      group: 'Category',
    });
  }
}
