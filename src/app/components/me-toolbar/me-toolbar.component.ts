import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'me-toolbar',
  templateUrl: './me-toolbar.component.html',
  styleUrls: ['./me-toolbar.component.css'],
})
export class MeToolbarComponent implements OnInit {
  textBoxOptions = {
    placeholder: 'Search...',
    showClearButton: true,
  };

  searchButtonOptions = {
    icon: 'search',
    onClick() {},
  };

  constructor() {}

  ngOnInit(): void {}
}
