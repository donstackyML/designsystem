import { Component } from '@angular/core';
import { TreeViewService, Product } from 'src/app/service/tree-view.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [TreeViewService],
})
export class MenuComponent {
  toggle: boolean = false;

  products: Product[];

  currentItem: Product;

  constructor(service: TreeViewService) {
    this.products = service.getProducts();
    this.currentItem = this.products[0];
  }

  onValueChanged(e: any) {
    this.toggle = e.value;
  }

  selectItem(e: any) {
    this.currentItem = e.itemData;
  }
}
