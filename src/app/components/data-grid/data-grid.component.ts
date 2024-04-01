import { Component } from '@angular/core';
import { DataGridService, Sale } from 'src/app/service/data-grid.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
  providers: [DataGridService],
  preserveWhitespaces: true,
})
export class DataGridComponent {
  sales: Sale[];
  allMode: string;
  checkBoxesMode: string;

  constructor(service: DataGridService) {
    this.sales = service.getSales();
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick';
  }

  onReorder = (e: any) => {
    const visibleRows = e.component.getVisibleRows();
    const toIndex = this.sales.findIndex(
      (item) => item.orderId === visibleRows[e.toIndex].data.orderId
    );
    const fromIndex = this.sales.findIndex(
      (item) => item.orderId === e.itemData.orderId
    );

    this.sales.splice(fromIndex, 1);
    this.sales.splice(toIndex, 0, e.itemData);
  };
}
