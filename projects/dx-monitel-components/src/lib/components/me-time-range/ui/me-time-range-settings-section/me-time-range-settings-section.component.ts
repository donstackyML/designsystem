import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'me-time-range-settings-section',
  standalone: true,
  imports: [NgIf],
  templateUrl: './me-time-range-settings-section.component.html',
  styleUrls: ['./me-time-range-settings-section.component.scss'],
})
export class MeTimeRangeSettingSectionComponent {
  @Input() title?: string = 'title';

  @Input() disabled = false;
}
