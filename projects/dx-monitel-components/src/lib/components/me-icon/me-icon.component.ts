import { Component, Input } from '@angular/core';

@Component({
  selector: 'me-icon',
  standalone: true,
  template: `
    <span
      class="material-icons"
      [class.icon_active]="pressed"
      [style.color]="color"
      [class.small]="size === 'small'"
      [class.medium]="size === 'medium'"
      [class.large]="size === 'large'"
    >
      {{ icon }}
    </span>
  `,
  styles: [
    `
      :host {
        display: flex;
        font-family: var(--me-symbols-family);
      }

      .material-icons.small {
        font-size: 20px;
      }

      .material-icons.medium {
        font-size: 20px;
      }

      .material-icons.large {
        font-size: 24px;
      }

      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
      }
    `,
  ],
})
export class MeIconComponent {
  @Input() icon: string = 'home';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() color?: string;

  pressed = false;

  press() {
    this.pressed = true;
  }

  pressup() {
    this.pressed = false;
  }
}
