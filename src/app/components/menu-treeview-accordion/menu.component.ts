import { Component } from '@angular/core';
import { AccordionService, Employee } from 'src/app/service/accordion.service';
import { TreeViewService, Product } from 'src/app/service/tree-view.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [TreeViewService, AccordionService],
})
export class MenuComponent {
  toggle: boolean = false;

  products: Product[];
  employees: Employee[];

  currentItem: Product;

  constructor(serviceTree: TreeViewService, serviceAcc: AccordionService) {
    this.products = serviceTree.getProducts();
    this.currentItem = this.products[0];
    this.employees = serviceAcc.getEmployees();
  }

  onValueChanged(e: any) {
    this.toggle = e.value;
  }

  selectItem(e: any) {
    this.currentItem = e.itemData;
  }
}
