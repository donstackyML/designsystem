import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';

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
  imports: [NgIf, NgClass, NgStyle, NgForOf],
})
export class MeSkeletonComponent implements OnInit, OnChanges {
  private _active: boolean = false;
  private _avatar: SkeletonAvatar | boolean = false;
  private _loading: boolean = false;
  private _paragraph: SkeletonParagraph | boolean = true;
  private _title: SkeletonTitle | boolean = true;
  private _round: boolean = false;

  @Input() set active(value: boolean) {
    this._active = value;
    this.updateConfig();
  }
  get active(): boolean {
    return this._active;
  }

  @Input() set avatar(value: SkeletonAvatar | boolean) {
    this._avatar = value;
    this.updateConfig();
  }
  get avatar(): SkeletonAvatar | boolean {
    return this._avatar;
  }

  @Input() set loading(value: boolean) {
    this._loading = value;
    this.updateConfig();
  }
  get loading(): boolean {
    return this._loading;
  }

  @Input() set paragraph(value: SkeletonParagraph | boolean) {
    this._paragraph = value;
    this.updateConfig();
  }
  get paragraph(): SkeletonParagraph | boolean {
    return this._paragraph;
  }

  @Input() set title(value: SkeletonTitle | boolean) {
    this._title = value;
    this.updateConfig();
  }
  get title(): SkeletonTitle | boolean {
    return this._title;
  }

  @Input() set round(value: boolean) {
    this._round = value;
    this.updateConfig();
  }
  get round(): boolean {
    return this._round;
  }

  avatarClass: string = '';
  avatarStyle: { [key: string]: string } = {};
  titleStyle: { [key: string]: string } = {};
  paragraphRows: Array<string> = [];

  ngOnInit() {
    this.updateConfig();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.updateConfig();
    }
  }

  private updateConfig(): void {
    this.setupAvatar();
    this.setupTitle();
    this.setupParagraph();
  }

  private setupAvatar(): void {
    if (this.avatar && typeof this.avatar === 'object') {
      this.avatarClass = this.avatar.shape
        ? `skeleton-avatar-${this.avatar.shape}`
        : '';
      if (this.avatar.size) {
        this.avatarStyle = {
          width: this.getSize(this.avatar.size),
          height: this.getSize(this.avatar.size),
        };
      }
    } else {
      this.avatarClass = '';
      this.avatarStyle = {};
    }
  }

  private setupTitle(): void {
    if (this.title && typeof this.title === 'object' && this.title.width) {
      this.titleStyle = {
        width:
          typeof this.title.width === 'number'
            ? `${this.title.width}px`
            : this.title.width,
      };
    } else {
      this.titleStyle = {};
    }
  }

  private setupParagraph(): void {
    if (this.paragraph && typeof this.paragraph === 'object') {
      const rows = this.paragraph.rows || 3;
      if (Array.isArray(this.paragraph.width)) {
        this.paragraphRows = this.paragraph.width.map((width) =>
          typeof width === 'number' ? `${width}px` : width
        );
      } else {
        this.paragraphRows = Array(rows).fill('100%');
        if (this.paragraph.width) {
          this.paragraphRows[rows - 1] =
            typeof this.paragraph.width === 'number'
              ? `${this.paragraph.width}px`
              : this.paragraph.width.toString();
        }
      }
    } else if (this.paragraph === true) {
      this.paragraphRows = Array(3).fill('100%');
    } else {
      this.paragraphRows = [];
    }
  }

  private getSize(size: number | 'large' | 'small' | 'default'): string {
    switch (size) {
      case 'large':
        return '64px';
      case 'small':
        return '32px';
      case 'default':
        return '40px';
      default:
        return `${size}px`;
    }
  }
}
