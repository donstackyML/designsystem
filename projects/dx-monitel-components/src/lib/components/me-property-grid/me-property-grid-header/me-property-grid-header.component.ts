import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { arrowDropDownX20 } from '@monitel/me-icons';
import { MeIconsModule, MeIconsRegistry } from '@monitel/me-icons-registry';

@Component({
  selector: 'me-property-grid-header',
  standalone: true,
  templateUrl: './me-property-grid-header.component.html',
  styleUrls: ['./me-property-grid-header.component.scss'],
  imports: [CommonModule, MeIconsModule],
})
export class MePropertyGridHeaderComponent {
  private meIconsRegistry = inject(MeIconsRegistry);
  
  @Input() title?: string | number | null = 'Элемент';

  @Input() isOpen = false;

  @Output() toggleEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.meIconsRegistry.registerIcons([arrowDropDownX20]);
  }

  onToggle(): void {
    this.toggleEvent.emit();
  }
}
