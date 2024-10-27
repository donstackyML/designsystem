import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeIconComponent } from '../me-icon/me-icon.component';

@Component({
  selector: 'me-chip',
  standalone: true,
  imports: [CommonModule, MeIconComponent],
  template: `
    <span [class]="chipClasses" class="chip">
      <span class="chip-label">
        {{ label }}
        <span *ngIf="count !== null" class="chip-count">{{ count }}</span>
      </span>
      <button
        *ngIf="removable && !disabled"
        (click)="onRemove.emit()"
        class="chip-remove-button"
      >
        <me-icon icon="close" [size]="size" color="#333"></me-icon>
      </button>
    </span>
  `
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
