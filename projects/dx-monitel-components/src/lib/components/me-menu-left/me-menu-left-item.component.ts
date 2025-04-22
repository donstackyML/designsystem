import { NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MeSize } from '../../types/types';
import { MeIconComponent } from '../me-icon/me-icon.component';

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
}

@Component({
  selector: 'me-menu-left-item',
  standalone: true,
  imports: [MeIconComponent, NgIf, NgStyle],
  templateUrl: 'me-menu-left-item.component.html',
})
export class MeMenuLeftItemComponent implements OnInit, OnDestroy {
  @Input() item?: MeMenuLeftItem;
  @Input() collapsed: boolean = false;
  @Input() expandedIcon = 'expand_less';
  @Input() collapsedIcon = 'expand_more';
  @Input() size: MeSize = 'medium';
  @Input() offset: number = 0;

  @Input() pressed = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  isPressed(): boolean {
    return this.pressed;
  }
}
