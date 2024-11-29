export type StatusBarSize = 'small' | 'large';
export type StatusType = 'error' | 'warning' | 'success' | 'info';

export interface StatusBarItem {
  icon?: string;
  text: string;
  type?: StatusType;
  fill?: boolean;
  onClick?: () => void;
  readonly?: boolean;
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
}

import { NgClass, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { MeIconComponent } from "../me-icon/me-icon.component";

@Component({
  selector: 'me-status-bar',
  templateUrl: './me-status-bar.component.html',
  imports: [DxButtonModule, NgForOf, NgIf, NgClass, MeIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MeStatusBarComponent {
  @Input() leftItems: StatusBarItem[] = [];
  @Input() rightItems: StatusBarItem[] = [];
  @Input() size: StatusBarSize = 'small';
  @Input() showDivider: boolean = false;
  @Input() transparent: boolean = false;

  get containerClass(): string[] {
    const classes = ['me-status-bar'];
    classes.push(`me-status-bar--${this.size.toLowerCase()}`);
    if (this.transparent) {
      classes.push('me-status-bar--transparent');
    }
    return classes;
  }

  getButtonClasses(item: StatusBarItem): string[] {
    const classes = ['me-status-bar__button'];

    if (item.type) {
      classes.push(`me-status-bar__button--${item.type}`);
    }

    return classes;
  }

  getStylingMode(item: StatusBarItem): 'text' | 'contained' {
    return item.fill ? 'contained' : 'text';
  }

  getContentStyles(item: StatusBarItem): Record<string, string> {
    return {
      color: item.textColor || '',
    };
  }
}
