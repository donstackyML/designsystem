import { Component } from '@angular/core';
import { FormService, Company } from 'src/app/service/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  companies: Company[];
  labelMode: string;
  labelLocation: string;
  readOnly: boolean;
  showColon: boolean;
  minColWidth: number;
  colCount: number;
  width: any;

  constructor(service: FormService) {
    this.labelMode = 'floating';
    this.labelLocation = 'left';
    this.readOnly = false;
    this.showColon = true;
    this.minColWidth = 300;
    this.colCount = 2;
    this.companies = service.getCompanies();
  }

  getCompanySelectorLabelMode() {
    return this.labelMode === 'outside'
      ? 'hidden'
      : this.labelMode;
  }
}
