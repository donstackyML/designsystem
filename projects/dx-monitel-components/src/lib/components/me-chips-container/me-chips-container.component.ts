import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeChipComponent } from '../me-chips/me-chips.component';

export interface MeChip {
  label: string;
  size: 'small' | 'medium' | 'large';
  count: number | null;
  removable?: boolean;
  disabled?: boolean;
  active?: boolean;
}

@Component({
  selector: 'me-chips-container',
  standalone: true,
  imports: [CommonModule, MeChipComponent],
  template: `
    <div class="chips-container">
      <me-chip
        *ngFor="let chip of chips; let i = index"
        [label]="chip.label"
        [removable]="chip.removable ?? true"
        [disabled]="chip.disabled ?? false"
        [size]="chip.size"
        [count]="chip.count"
        [active]="i === activeChipIndex"
      (click)="setActiveChip(i)"
      (onRemove)="removeChip(i)">
      </me-chip>
    </div>
  `,
  styles: [`
    .chips-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  `]
})
export class MeChipsContainerComponent {
  @Input() chips: MeChip[] = [];
  @Output() chipsChange = new EventEmitter<MeChip[]>();

  activeChipIndex: number | null = null;

  setActiveChip(index: number): void {
    if (!this.chips[index].disabled) {
      this.activeChipIndex = index;
      this.chips = this.chips.map((chip, i) => ({
        ...chip,
        active: i === index
      }));
      this.chipsChange.emit(this.chips);
    }
  }

  removeChip(index: number): void {
    this.chips.splice(index, 1);
    this.chipsChange.emit(this.chips);
  }
}
