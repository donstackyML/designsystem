import { Component } from '@angular/core';
import { TreeViewService, Product } from 'src/app/service/tree-view.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  providers: [TreeViewService],
})
export class TreeViewComponent {
  products: Product[];
  currentItem: Product;

  constructor(serviceTree: TreeViewService) {
    this.products = serviceTree.getProducts();
    this.currentItem = this.products[0];
  }

  selectItem(e: any) {
    this.currentItem = e.itemData;
  }
}
