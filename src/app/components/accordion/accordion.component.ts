import { Component, OnInit } from '@angular/core';
import { AccordionService, Employee } from 'src/app/service/accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [AccordionService],
})
export class AccordionComponent {
  toggle: boolean = false;

  employees: Employee[];

  constructor(serviceAcc: AccordionService) {
    this.employees = serviceAcc.getEmployees();
  }

  onValueChanged(e: any) {
    this.toggle = e.value;
  }
}
