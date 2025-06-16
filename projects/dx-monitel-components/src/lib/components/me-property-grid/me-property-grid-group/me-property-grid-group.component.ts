import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DxScrollViewModule } from 'devextreme-angular';
import { MeScrollViewModule } from '../../../directives';

@Component({
  selector: 'me-property-grid-group',
  standalone: true,
  templateUrl: './me-property-grid-group.component.html',
  styleUrls: ['./me-property-grid-group.component.scss'],
  imports: [CommonModule, DxScrollViewModule, MeScrollViewModule],
  host: {
    '[style.--gap]': 'gap',
  },
})
export class MePropertyGridGroupComponent {
  @Input() gap: string = '8px';
  @Input() height?: number | string;
}
