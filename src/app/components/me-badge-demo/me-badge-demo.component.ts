import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'me-badge-demo',
  templateUrl: './me-badge-demo.component.html',
  styleUrls: ['./me-badge-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeBadgeDemoComponent {}
