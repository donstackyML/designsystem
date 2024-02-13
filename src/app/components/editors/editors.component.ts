import { Component } from '@angular/core';
import { TagBoxService, TagItem } from 'src/app/service/tag-box.service';

const data = [ 'checked', 'unchecked' ];

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.css']
})
export class EditorsComponent {
  tagBoxData: TagItem[];
  radioData = data;
  start = '2/1/2024';
  end = '2/29/2024';

  constructor(service: TagBoxService) {
    this.tagBoxData = service.getItems();
  }
}
