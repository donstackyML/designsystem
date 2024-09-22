import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'me-icon',
  standalone: true,
  template: `
    <span
      class="material-symbols-outlined"
      [ngStyle]="{ fontSize: getSize(), color: color }"
    >
      {{ icon }}
    </span>
  `,
  styles: [
    `
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
      }
    `,
  ],
  imports: [NgStyle],
})
export class MeIconComponent {
  @Input() icon: string = 'home';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() color: string = '#000000';

  getSize(): string {
    switch (this.size) {
      case 'small':
        return '16px';
      case 'medium':
      case 'large':
        return '20px';
      default:
        return '16px';
    }
  }
}
