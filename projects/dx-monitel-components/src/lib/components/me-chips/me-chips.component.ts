import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'me-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="chipClasses" class="chip">
      <span class="chip-label">
        {{ label }}
        <span *ngIf="count !== null" class="chip-count">{{ count }}</span>
      </span>
      <button *ngIf="removable && !disabled" (click)="onRemove.emit()" class="chip-remove-button">
        ×
      </button>
    </span>
  `,
  styles: [`
    .chip {
      display: inline-flex;
      align-items: center;
      padding: 0 12px;
      border-radius: 16px;
      background-color: #ECEDF3;
      color: #333;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: background-color 0.3s ease;
    }

    .chip.small {
      height: 24px;
      font-size: 12px;
      padding: 0 8px;
      border-radius: 12px;
    }

    .chip.medium {
      height: 32px;
      font-size: 14px;
    }

    .chip.large {
      height: 40px;
      font-size: 16px;
      padding: 0 16px;
    }

    .chip-label {
      display: flex;
      align-items: baseline;
    }

    .chip-count {
      font-size: 0.75em;
      margin-left: 4px;
      color: #555;
      vertical-align: baseline;
      position: relative;
      top: -4px;
    }

    .chip-remove-button {
      margin-left: 8px;
      padding: 0;
      border: none;
      background: none;
      font-size: 1.5em;
      line-height: 1;
      cursor: pointer;
      color: #333;
    }

    .chip-disabled {
      background-color: #DEDFE6;
      color: #757575;
      cursor: not-allowed;
    }

    .chip-active {
      background-color: #C4D8FF;
    }

    .chip-active:hover {
      background-color: #C4D8FF;
    }

    .chip:not(.chip-active):hover {
      background-color: #D8DAEA;
    }

    .chip:hover .chip-remove-button {
      color: #000;
    }
  `]
})
export class MeChipComponent {
  @Input() label: string = '';
  @Input() removable: boolean = true;
  @Input() disabled: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() count: number | null = null;
  @Input() active: boolean = false;
  @Output() onRemove = new EventEmitter<void>();

  get chipClasses(): string {
    let classes = `${this.size}`;
    if (this.disabled) {
      classes += ' chip-disabled';
    }
    if (this.active) {
      classes += ' chip-active';
    }
    return classes;
  }
}
