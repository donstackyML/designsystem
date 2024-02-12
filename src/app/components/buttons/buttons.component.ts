import { Component, OnInit } from '@angular/core';
import { Alignment, Service } from '../../service/btn-group.service';

@Component({
  selector: 'app-buttons',
  providers: [Service],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(service: Service) {
    this.dangerAlignments = service.getDangerAlignments();
    this.successAlignments = service.getSuccessAlignments();
    this.normalAlignments = service.getNormalAlignments();
    this.defaultAlignments = service.getDefaultAlignments();
  }
  ngOnInit(): void {
  }

  dangerAlignments: Alignment[];
  successAlignments: Alignment[];
  normalAlignments: Alignment[];
  defaultAlignments: Alignment[];

  contained = 'contained';
}
