import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'me-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="badgeClasses" [ngStyle]="style">
      <span *ngIf="leftValue">{{ leftValue }}</span>
      <span class="badge-content">{{ displayValue }}</span>
      <span *ngIf="rightValue">{{ rightValue }}</span>
    </div>
  `,
})
export class MeBadgeComponent implements OnChanges {
  @Input() size: 'small' | 'large' = 'small';
  @Input() color:
    | 'default'
    | 'secondary'
    | 'success'
    | 'attention'
    | 'error'
    | 'blue-gray'
    | 'blue'
    | 'red'
    | 'green'
    | 'green-light'
    | 'yellow'
    | 'yellow-light' = 'default';
  @Input() value: string | number | null = null;
  @Input() leftValue?: string | number = '';
  @Input() rightValue?: string | number = '';
  @Input() customStyle: { [key: string]: string } = {};

  displayValue: string = '';
  badgeClasses: string = '';
  style: { [key: string]: string } = {};

  ngOnChanges(changes: SimpleChanges) {
    this.updateStyles();
  }

  private updateStyles() {
    this.displayValue = this.formatValue(this.value);
    const isExtended =
      this.displayValue.length > 2 || this.rightValue || this.leftValue;

    // Формируем строку классов
    this.badgeClasses = [
      'badge',
      `size-${this.size}`,
      `color-${this.color}`,
      isExtended ? 'extended' : '',
    ]
      .filter(Boolean)
      .join(' ');

    this.style = { ...this.customStyle };
  }

  private formatValue(value: string | number | null): string {
    if (value === null) return '';
    return value.toString();
  }
}
