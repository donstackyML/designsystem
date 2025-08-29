import { NgIf, NgStyle } from '@angular/common';
import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MeIconsModule, MeIconsRegistry } from '@monitel/me-icons-registry';

export interface MeMenuLeftItem {
  id: string;
  text: string;
  icon?: string;
  expanded?: boolean;
  items?: MeMenuLeftItem[];
  badge?: number;
  action?: () => {};
  selected?: boolean;
  pressed?: boolean;
  divider?: boolean;
}

@Component({
  selector: 'me-menu-left-item',
  standalone: true,
  imports: [MeIconsModule, NgIf, NgStyle],
  templateUrl: 'me-menu-left-item.component.html',
})
export class MeMenuLeftItemComponent implements OnInit, OnDestroy {
  private meIconRegistry = inject(MeIconsRegistry);

  @Input() item?: MeMenuLeftItem;
  @Input() collapsed: boolean = false;
  @Input() expandedIcon = 'expand_less_x20';
  @Input() collapsedIcon = 'keyboard_arrow_down_x20';
  @Input() offset: number = 0;

  @Input() pressed = false;

  get icon(): string {
    return this.item?.icon || 'stat_0_x20';
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  isPressed(): boolean {
    return this.pressed;
  }
}
