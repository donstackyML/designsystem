import { Component, OnInit } from '@angular/core';
import {
  Product,
  CustomSelectService,
} from 'src/app/service/custom-select.service';
import { ItemClickEvent } from 'devextreme/ui/list';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
  providers: [CustomSelectService],
})
export class CustomSelectComponent {
  products: Product[];
  dropDownOptions = {
    contentTemplate: 'popupContent',
  };

  constructor(service: CustomSelectService) {
    this.products = service.getProducts();
  }

  currentIndex = 0;
  value = 'name';

  chooseElement(event: ItemClickEvent) {
    console.log(event.itemIndex);
    this.currentIndex = event.itemIndex as number;
  }
}
