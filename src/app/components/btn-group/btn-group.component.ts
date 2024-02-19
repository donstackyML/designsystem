import { Component, OnInit } from '@angular/core';
import { Alignment, Service } from '../../service/btn-group.service';

@Component({
  selector: 'app-btn-group',
  providers: [Service],
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.css'],
})
export class BtnGroupComponent {
  constructor(service: Service) {
    this.dangerAlignments = service.getDangerAlignments();
    this.successAlignments = service.getSuccessAlignments();
    this.normalAlignments = service.getNormalAlignments();
    this.defaultAlignments = service.getDefaultAlignments();
  }
  ngOnInit(): void {}

  dangerAlignments: Alignment[];
  successAlignments: Alignment[];
  normalAlignments: Alignment[];
  defaultAlignments: Alignment[];
}
