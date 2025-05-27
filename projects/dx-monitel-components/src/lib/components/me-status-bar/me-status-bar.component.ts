export type StatusBarSize = 'small' | 'large';
export type StatusType = 'error' | 'warning' | 'success' | 'info';

export interface StatusBarItem {
  text?: string;
  textColor?: string;
  type?: StatusType;
  icon?: string;
  iconColor?: string;
  showStatusIcon?: boolean;
  fill?: boolean;
  backgroundColor?: string;
  readOnly?: boolean;
  onClick?: () => void;
}

import { NgClass, NgForOf, NgIf } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { MeIconComponent } from '../me-icon/me-icon.component';

const spacings: Record<StatusBarSize, number> = {
  large: 8,
  small: 4,
};

const statusIcons: Record<StatusType, string> = {
  error: 'error',
  warning: 'warning',
  success: 'check_circle',
  info: 'info',
};

const applyStyles = (
  element: HTMLElement,
  styles: Partial<CSSStyleDeclaration>
): void => {
  Object.assign(element.style, styles);
};

@Component({
  selector: 'me-status-bar',
  templateUrl: './me-status-bar.component.html',
  imports: [DxButtonModule, NgForOf, NgIf, NgClass, MeIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MeStatusBarComponent implements AfterViewInit {
  @Input() leftItems: StatusBarItem[] = [];
  @Input() rightItems: StatusBarItem[] = [];
  @Input() size: StatusBarSize = 'small';
  @Input() showDivider: boolean = false;
  @Input() transparent: boolean = false;
  @Input() minHeight?: number;

  @ViewChild('leftSection', { static: true })
  leftSectionRef!: ElementRef<HTMLElement>;
  @ViewChild('rightSection', { static: true })
  rightSectionRef!: ElementRef<HTMLElement>;

  private currentOverlappingIndex: null | number = null;

  ngAfterViewInit(): void {
    this.adjustBlocks();
  }

  @HostBinding('style.--status-bar-min-height.px') get height() {
    if (this.minHeight) {
      return this.minHeight;
    }

    return this.size === 'large' ? 32 : 24;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.adjustBlocks();
  }

  adjustBlocks(): void {
    const isCurrentIndexValid =
      typeof this.currentOverlappingIndex === 'number';

    const adjustedSpacing = spacings[this.size] + 1;
    const spacingStyle = `${spacings[this.size]}px`;

    const leftSection = this.leftSectionRef.nativeElement;
    const leftButtons = Array.from(leftSection.children) as HTMLElement[];
    const leftSectionLeft = leftSection.getBoundingClientRect().left;

    const rightSection = this.rightSectionRef.nativeElement;
    const rightSectionLeft = rightSection.getBoundingClientRect().left;

    let shouldUpdateIndex = true;

    leftButtons.forEach((button, index) => {
      const buttonRect = button.getBoundingClientRect();

      if (
        (this.currentOverlappingIndex &&
          this.currentOverlappingIndex! < index) ||
        this.currentOverlappingIndex === 0
      ) {
        applyStyles(button, {
          width: '0',
          overflow: 'initial',
          marginRight: 'auto',
        });
        return;
      } else if (buttonRect.right > rightSectionLeft) {
        if (buttonRect.left >= rightSectionLeft) {
          applyStyles(button, {
            width: '0',
            overflow: 'initial',
            marginRight: 'auto',
          });
        } else {
          applyStyles(button, {
            overflow: 'hidden',
            width: 'auto',
            marginRight: 'auto',
          });
          this.currentOverlappingIndex = index;
          shouldUpdateIndex = false;
        }
      }
    });

    applyStyles(leftSection, {
      marginRight:
        leftSectionLeft + adjustedSpacing > rightSectionLeft
          ? '0'
          : spacingStyle,
    });

    if (!shouldUpdateIndex) return;

    const nextIndex = isCurrentIndexValid
      ? Math.min(this.currentOverlappingIndex! + 1, leftButtons.length - 1)
      : 0;

    const nextButton = leftButtons[nextIndex];
    const nextButtonRect = nextButton?.getBoundingClientRect();

    if (
      nextButtonRect &&
      rightSectionLeft > nextButtonRect.right + adjustedSpacing
    ) {
      const currentButton =
        isCurrentIndexValid && leftButtons[this.currentOverlappingIndex!];
      const isLastIndex =
        this.currentOverlappingIndex === leftSection.children.length - 1;

      if (currentButton) {
        applyStyles(currentButton, {
          overflow: 'initial',
          width: 'auto',
          marginRight: isLastIndex ? undefined : spacingStyle,
        });

        applyStyles(nextButton, {
          width: 'auto',
          overflow: 'hidden',
        });

        this.currentOverlappingIndex = nextIndex;
      }
    }
  }

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

    if (!item.text) {
      classes.push('me-status-bar__button--no-text');
    }

    return classes;
  }

  getIcon(item: StatusBarItem): string {
    if (item.showStatusIcon && item.type) {
      return statusIcons[item.type];
    }

    return item.icon || '';
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
