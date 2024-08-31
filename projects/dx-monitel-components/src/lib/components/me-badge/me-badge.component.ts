import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'me-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="badge" [ngClass]="[sizeClass, colorClass]" [ngStyle]="style">
      <span class="badge-content">{{ displayValue }}</span>
    </div>
  `,
  styles: [`
    .badge {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: #ffffff;
      font-family: 'Roboto Mono', monospace;
      font-weight: 400;
      overflow: hidden;
    }
    .badge-content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      text-align: center;
    }
    .size-20 {
      width: 20px;
      height: 20px;
      font-size: 12px;
    }
    .size-24 {
      width: 24px;
      height: 24px;
      font-size: 14px;
    }
    .color-default { background-color: var(--me-icon-default); }
    .color-secondary { background-color: var(--me-icon-secondary); }
    .color-success { background-color: var(--me-icon-success); }
    .color-attention { background-color: var(--me-icon-attention); }
    .color-error { background-color: var(--me-icon-error); }
  `]
})
export class MeBadgeComponent implements OnChanges {
  @Input() size: '20' | '24' = '20';
  @Input() color: 'default' | 'secondary' | 'success' | 'attention' | 'error' = 'default';
  @Input() value: number | null = null;
  @Input() customStyle: { [key: string]: string } = {};

  sizeClass: string = 'size-20';
  colorClass: string = 'color-default';
  displayValue: string | number = '';
  style: { [key: string]: string } = {};

  ngOnChanges(changes: SimpleChanges) {
    this.updateStyles();
  }

  private updateStyles() {
    this.sizeClass = `size-${this.size}`;
    this.colorClass = `color-${this.color}`;
    this.displayValue = this.formatValue(this.value);

    this.style = {
      ...this.customStyle,
    };

    if (this.displayValue.toString().length > 1) {
      this.style['fontSize'] = this.size === '20' ? '10px' : '12px';
    }
  }

  private formatValue(value: number | null): string | number {
    if (value === null) return '';
    if (value > 99) return '99+';
    return value;
  }
}
