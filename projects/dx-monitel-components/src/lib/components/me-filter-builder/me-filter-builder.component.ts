import { Component } from '@angular/core';
import { DxDataGridModule, DxFilterBuilderModule } from 'devextreme-angular';

@Component({
  selector: 'me-filter-builder',
  standalone: true,
  imports: [DxFilterBuilderModule, DxDataGridModule],
  templateUrl: './me-filter-builder.component.html',
})
export class MeFilterBuilderComponent {
  employeesData = [
    {
      Name: 'Максим',
      Position: 'Dev',
      HireDate: new Date(2020, 2, 10),
      Salary: 120000,
    },
    {
      Name: 'Алексей',
      Position: 'Manager',
      HireDate: new Date(2019, 6, 15),
      Salary: 150000,
    },
    {
      Name: 'Ирина',
      Position: 'Analyst',
      HireDate: new Date(2021, 0, 5),
      Salary: 110000,
    },
  ];

  dataSource = this.employeesData;

  fields = [
    {
      dataField: 'Name',
      dataType: 'string' as const,
    },
    {
      dataField: 'Position',
      dataType: 'string' as const,
    },
    {
      dataField: 'HireDate',
      dataType: 'date' as const,
    },
    {
      dataField: 'Salary',
      dataType: 'number' as const,
    },
  ];

  filter: any = [];
}
