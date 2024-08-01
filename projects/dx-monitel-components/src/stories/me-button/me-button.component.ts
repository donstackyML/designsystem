import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { MeButtonStyle, MeButtonType, MeSize } from 'src/app/types/types';
import { MeButtonModule } from '../../public-api';

@Component({
  selector: 'me-button',
  standalone: true,
  imports: [CommonModule, DxButtonModule, MeButtonModule],
  templateUrl: './me-button.component.html',
  styleUrls: ['./me-button.component.css'],
})
export class MeButtonComponent {
  @Input() text: string = 'meButton';
  @Input() type: MeButtonType = 'normal';
  @Input() stylingMode: MeButtonStyle = 'contained';
  @Input() size: MeSize = 'medium';
}
