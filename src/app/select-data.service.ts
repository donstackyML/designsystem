import { Injectable } from '@angular/core';

export interface Item {
  ID: number;
  Name: string;
}

const items: Item[] = [{
  ID: 1,
  Name: 'Outlined',
}, {
  ID: 2,
  Name: 'Filled',
}, {
  ID: 3,
  Name: 'Underlined',
}]

@Injectable({
  providedIn: 'root'
})
export class SelectDataService {
  getItems(): Item[] {
    return items;
  }
}