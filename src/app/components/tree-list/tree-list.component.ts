import { Component } from '@angular/core';
import {
  Employee,
  TreeListDataService,
} from 'src/app/service/tree-list-data.service';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css'],
  providers: [TreeListDataService],
})
export class TreeListComponent {
  employees: Employee[];

  constructor(service: TreeListDataService) {
    this.employees = service.getEmployees();
  }

  ngOnInit(): void {}
}
