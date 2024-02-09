import { Component } from '@angular/core';
import { Item, SelectDataService } from './select-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Item[];

  constructor(service: SelectDataService) {
    this.data = service.getItems();
  }
}
