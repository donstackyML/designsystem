import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-builder',
  templateUrl: './filter-builder.component.html',
  styleUrls: ['./filter-builder.component.css']
})
export class FilterBuilderComponent {
  filterValue = [
    [
        ["Product_Name", "startswith", "Super"],
        "and",
        ["Product_Cost", ">=", 300]
    ],
    "or",
    [
        ["Product_Name", "contains", "HD"],
        "and",
        ["Product_Cost", "<", 200]
    ]
];
}
