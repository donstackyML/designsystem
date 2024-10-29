import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'me-date-range-box',
  templateUrl: './me-date-range-box.component.html',
  styleUrls: ['./me-date-range-box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeDateRangeBoxComponent {}
