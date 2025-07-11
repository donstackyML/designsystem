import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { MeIconComponent } from '../me-icon/me-icon.component';

@Component({
  selector: 'me-chip',
  standalone: true,
  imports: [CommonModule, MeIconComponent],
  template: `
    <span
      [class]="chipClasses"
      class="me-chip"
      [attr.tabindex]="disabled ? -1 : 0"
      [attr.role]="'option'"
      [attr.aria-selected]="selected"
      [attr.aria-disabled]="disabled"
    >
      <span class="me-chip-label">
        {{ label }}
        <span *ngIf="isNumber(count)" class="me-chip-count">{{ count }}</span>
      </span>
      <button
        *ngIf="removable && !disabled"
        (click)="onRemove.emit(); $event.stopPropagation()"
        class="me-chip-remove-button"
        aria-label="Удалить"
      >
        <me-icon icon="close" [size]="size"></me-icon>
      </button>
    </span>
  `,
})
export class MeChipComponent {
  @Input() label: string = '';
  @Input() removable: boolean = true;
  @Input() disabled: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() count?: number | null = null;
  @Input() selected = false;
  @Input() tabindex: number = -1;
  @Output() onRemove = new EventEmitter<void>();

  isFocused = false;

  @HostListener('focus')
  onFocus() {
    this.isFocused = true;
  }

  @HostListener('blur')
  onBlur() {
    this.isFocused = false;
  }

  get chipClasses(): string {
    const classes = [this.size, 'chip-keyboard-navigable'];

    if (this.disabled) {
      classes.push('me-chip-disabled');
    }

    if (this.selected) {
      classes.push('me-chip-selected');
    }

    if (this.isFocused) {
      classes.push('me-chip-focused');
    }

    return classes.join(' ');
  }

  isNumber(val?: number | null): boolean {
    return typeof val === 'number';
  }
}
