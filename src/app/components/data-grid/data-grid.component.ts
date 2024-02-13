import { Component, OnInit } from '@angular/core';
import { Sale, DataGridService } from 'src/app/service/data-grid.service';

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
}
