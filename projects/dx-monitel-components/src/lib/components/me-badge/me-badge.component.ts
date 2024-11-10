import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'me-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="badgeClasses"
      [ngStyle]="style"
    >
      <span class="badge-content">{{ displayValue }}</span>
    </div>
  `
})
export class MeBadgeComponent implements OnChanges {
  @Input() size: '20' | '24' = '20';
  @Input() color: 'default' | 'secondary' | 'success' | 'attention' | 'error' = 'default';
  @Input() value: number | null = null;
  @Input() customStyle: { [key: string]: string } = {};

  displayValue: string | number = '';
  badgeClasses: string = '';
  style: { [key: string]: string } = {};

  ngOnChanges(changes: SimpleChanges) {
    this.updateStyles();
  }

  private updateStyles() {
    const isExtended = this.value !== null && this.value > 99;

    // Формируем строку классов
    this.badgeClasses = [
      'badge',
      `size-${this.size}`,
      `color-${this.color}`,
      isExtended ? 'extended' : ''
    ].filter(Boolean).join(' ');

    this.displayValue = this.formatValue(this.value);
    this.style = { ...this.customStyle };
  }

  private formatValue(value: number | null): string | number {
    if (value === null) return '';
    return value.toString();
  }
}
