import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { KeyboardNavigationService } from '../../service/keyboard.service';
import { MeChipComponent } from '../me-chip/me-chip.component';
export interface MeChip {
  label: string;
  size: 'small' | 'medium' | 'large';
  count?: number | null;
  removable?: boolean;
  disabled?: boolean;
  active?: boolean;
  selected?: boolean;
}

@Component({
  selector: 'me-chips, me-chips-container',
  standalone: true,
  imports: [CommonModule, MeChipComponent],
  template: `
    <div
      class="me-chips-container"
      tabindex="0"
      #container
      [attr.role]="'listbox'"
      [attr.aria-multiselectable]="multiSelect"
    >
      <me-chip
        *ngFor="let chip of chips; let i = index"
        [attr.role]="'option'"
        [attr.aria-selected]="chip.selected"
        [tabindex]="i === 0 ? 0 : -1"
        [label]="chip.label"
        [removable]="chip.removable ?? true"
        [disabled]="chip.disabled ?? false"
        [size]="chip.size"
        [count]="chip.count"
        [selected]="chip.selected ?? false"
        (click)="toggleChipSelection(i)"
        (onRemove)="removeChip(i)"
        class="me-chip-item"
      >
      </me-chip>
    </div>
  `,
})
export class MeChipsComponent implements AfterViewInit, OnDestroy {
  @Input() chips: MeChip[] = [];
  @Input() multiSelect: boolean = false;
  @Output() chipsChange = new EventEmitter<MeChip[]>();
  @Output() selectionChange = new EventEmitter<MeChip[]>();

  private selectedIndex: number | null = null;

  @ViewChild('container') containerRef!: ElementRef;

  constructor(private keyboardNavigation: KeyboardNavigationService) {}

  ngAfterViewInit() {
    if (this.containerRef) {
      this.keyboardNavigation.setupKeyboardNavigation(
        this.containerRef,
        '.me-chip-item',
        (index) => this.toggleChipSelection(index),
        (index) => this.removeChip(index)
      );
    }
  }

  ngOnDestroy() {
    this.keyboardNavigation.destroy();
  }

  toggleChipSelection(index: number): void {
    if (!this.chips[index].disabled) {
      if (this.multiSelect) {
        this.chips = this.chips.map((chip, i) => ({
          ...chip,
          selected: i === index ? !chip.selected : chip.selected,
        }));
      } else {
        const isCurrentlySelected = this.chips[index].selected;

        this.chips = this.chips.map((chip) => ({
          ...chip,
          selected: false,
        }));

        if (!isCurrentlySelected) {
          this.chips = this.chips.map((chip, i) => ({
            ...chip,
            selected: i === index,
          }));
          this.selectedIndex = index;
        } else {
          this.selectedIndex = null;
        }
      }

      this.chipsChange.emit(this.chips);
      this.selectionChange.emit(this.chips.filter((chip) => chip.selected));
    }
  }

  removeChip(index: number): void {
    if (!this.multiSelect && index === this.selectedIndex) {
      this.selectedIndex = null;
    }

    this.chips.splice(index, 1);
    this.chipsChange.emit(this.chips);
    this.selectionChange.emit(this.chips.filter((chip) => chip.selected));
  }
}
