import { Component, OnInit } from '@angular/core';
import { SelectBoxDataService } from 'src/app/service/select-box-data.service';
import { MeCommonType } from 'src/app/types/types';

@Component({
  selector: 'me-select-box',
  templateUrl: './me-select-box.component.html',
  styleUrls: ['./me-select-box.component.css'],
})
export class MeSelectBoxComponent {
  dataSource: string[];
  dataSource9: string[];
  dataSource18: string[];
  dataSource27: string[];
  errorMessage: string = 'Error Text';

  constructor(private service: SelectBoxDataService) {
    this.dataSource = this.service.getSource();
    this.dataSource9 = this.service.getSource9();
    this.dataSource18 = this.service.getSource18();
    this.dataSource27 = this.service.getSource27();
  }
}
