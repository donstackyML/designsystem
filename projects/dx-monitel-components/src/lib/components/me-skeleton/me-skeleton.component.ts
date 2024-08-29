import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgStyle } from "@angular/common";

export interface SkeletonAvatar {
  size?: number | 'large' | 'small' | 'default';
  shape?: 'circle' | 'square';
}

export interface SkeletonTitle {
  width?: number | string;
}

export interface SkeletonParagraph {
  rows?: number;
  width?: number | string | Array<number | string>;
}

@Component({
  selector: 'me-skeleton',
  standalone: true,
  templateUrl: './me-skeleton.component.html',
  imports: [
    NgIf,
    NgClass,
    NgStyle,
    NgForOf
  ],
  styles: [`
    .skeleton {
      display: flex;
      width: 100%;
    }

    .skeleton-content {
      flex: 1;
    }

    .skeleton-active .skeleton-avatar,
    .skeleton-active .skeleton-title,
    .skeleton-active .skeleton-row {
      background: var(--skeleton-animation-bg);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite linear;
    }

    .skeleton-avatar {
      flex-shrink: 0;
      background-color: var(--skeleton-avatar-bg);
      margin-right: 16px;
    }

    .skeleton-avatar-circle {
      border-radius: 50%;
    }

    .skeleton-avatar-square {
      border-radius: 4px;
    }

    .skeleton-title {
      height: 16px;
      background-color: var(--skeleton-title-bg);
      margin-bottom: 16px;
      width: 100%;
    }

    .skeleton-paragraph .skeleton-row {
      height: 16px;
      background-color: var(--skeleton-paragraph-bg);
      margin-bottom: 12px;
      width: 100%;
    }

    .skeleton-round .skeleton-title,
    .skeleton-round .skeleton-row {
      border-radius: 4px;
    }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

  `]
})
export class MeSkeletonComponent implements OnInit {
  @Input() active: boolean = false;
  @Input() avatar: SkeletonAvatar | boolean = false;
  @Input() loading: boolean = false;
  @Input() paragraph: SkeletonParagraph | boolean = true;
  @Input() title: SkeletonTitle | boolean = true;
  @Input() round: boolean = false;

  avatarClass: string = '';
  avatarStyle: { [key: string]: string } = {};
  titleStyle: { [key: string]: string } = {};
  paragraphRows: Array<string> = [];

  ngOnInit() {
    this.setupAvatar();
    this.setupTitle();
    this.setupParagraph();
  }

  private setupAvatar(): void {
    if (this.avatar && typeof this.avatar === 'object') {
      this.avatarClass = this.avatar.shape ? `skeleton-avatar-${this.avatar.shape}` : '';
      if (this.avatar.size) {
        this.avatarStyle = { width: this.getSize(this.avatar.size), height: this.getSize(this.avatar.size) };
      }
    }
  }

  private setupTitle(): void {
    if (this.title && typeof this.title === 'object' && this.title.width) {
      this.titleStyle = { width: typeof this.title.width === 'number' ? `${this.title.width}px` : this.title.width };
    }
  }

  private setupParagraph(): void {
    if (this.paragraph && typeof this.paragraph === 'object') {
      const rows = this.paragraph.rows || 3;
      if (Array.isArray(this.paragraph.width)) {
        this.paragraphRows = this.paragraph.width.map(width =>
          typeof width === 'number' ? `${width}px` : width
        );
      } else {
        this.paragraphRows = Array(rows).fill('100%');
        if (this.paragraph.width) {
          this.paragraphRows[rows - 1] = typeof this.paragraph.width === 'number' ?
            `${this.paragraph.width}px` : this.paragraph.width.toString();
        }
      }
    } else if (this.paragraph === true) {
      this.paragraphRows = Array(3).fill('100%');
    }
  }

  /**
   * Returns the size in pixels based on the input size value.
   * If the size is a predefined string value, returns the corresponding pixel size.
   * If the size is a number, returns the value with "px" as the unit.
   */
  private getSize(size: number | 'large' | 'small' | 'default'): string {
    switch(size) {
      case 'large': return '64px';
      case 'small': return '32px';
      case 'default': return '40px';
      default: return `${size}px`;
    }
  }
}
