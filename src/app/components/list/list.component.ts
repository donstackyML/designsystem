import { Component, OnInit } from '@angular/core';
import { ListService, Product } from 'src/app/service/list.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  dataSource: DataSource;
  products: Product[] = [];
 
    constructor(service: ListService) {
        this.products = service.getProducts();
        this.dataSource = new DataSource({
          store: this.products,
          group: "Category"
      });
    }
}
