import { Component, OnInit } from '@angular/core';
import { DropdownButtonService } from 'src/app/service/dropdown-button.service';

@Component({
  selector: 'me-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.css'],
})
export class DropdownButtonComponent implements OnInit {
  downloads: string[];

  constructor(public service: DropdownButtonService) {
    this.downloads = service.getDownloads();
  }

  ngOnInit(): void {}
}
