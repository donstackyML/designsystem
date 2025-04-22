import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import {
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  MeSkeletonItemComponent,
  type SkeletonItemProps,
  type SkeletonShape,
} from './me-skeleton-item/me-skeleton-item.component';

export interface SkeletonAvatar extends SkeletonItemProps {
  size?: number | 'large' | 'small' | 'default';
}

export interface SkeletonTitle {
  width?: number | string;
  height?: number | string;
}

export interface SkeletonParagraph {
  rows?: number;
  width?: number | string | Array<number | string>;
  height?: number | string;
  shape?: SkeletonShape;
  gap?: string;
}

export interface SkeletonContentSettings {
  gap?: string;
}

@Component({
  selector: 'me-skeleton',
  templateUrl: './me-skeleton.component.html',
  standalone: true,
  imports: [NgIf, NgStyle, NgForOf, MeSkeletonItemComponent],
})
export class MeSkeletonComponent implements OnInit, OnChanges {
  private _animated: boolean = false;
  private _avatar: SkeletonAvatar | null = null;
  private _loading: boolean = true;
  private _paragraph: SkeletonParagraph | null = null;
  private _title: SkeletonTitle | null = null;
  private _shape: SkeletonShape = 'rounded';

  @Input() set animated(value: boolean) {
    this._animated = value;
    this.updateConfig();
  }
  get animated(): boolean {
    return this._animated;
  }

  @Input() contentSettings: SkeletonContentSettings | null = null;

  @Input() set avatar(value: SkeletonAvatar | null) {
    this._avatar = value;
    this.updateConfig();
  }
  get avatar(): SkeletonAvatar | null {
    return this._avatar;
  }

  @Input() set loading(value: boolean) {
    this._loading = value;
    this.updateConfig();
  }
  get loading(): boolean {
    return this._loading;
  }

  @Input() set paragraph(value: SkeletonParagraph | null) {
    this._paragraph = value;
    this.updateConfig();
  }
  get paragraph(): SkeletonParagraph | null {
    return this._paragraph;
  }

  @Input() set title(value: SkeletonTitle | null) {
    this._title = value;
    this.updateConfig();
  }
  get title(): SkeletonTitle | null {
    return this._title;
  }

  @Input() set shape(value: SkeletonShape) {
    this._shape = value;
    this.updateConfig();
  }
  get shape(): SkeletonShape {
    return this._shape;
  }

  @ContentChild('customTitle', { read: ElementRef }) customTitle?: ElementRef;
  @ContentChild('customParagraph', { read: ElementRef })
  customParagraph?: ElementRef;

  get hasCustomTitle(): boolean {
    return !!this.customTitle;
  }
  get hasCustomParagraph(): boolean {
    return !!this.customParagraph;
  }

  avatarClass: string = '';
  avatarStyle: any = {};
  titleStyle: { [key: string]: string } = {};
  paragraphRows: Array<string> = [];
  skeletonStyle: { [key: string]: string } = {};

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
    this.updateSkeletonStyle();
  }

  private updateSkeletonStyle(): void {
    if (this.paragraph?.gap) {
      this.skeletonStyle['--paragraph-gap'] = this.paragraph.gap;
    }
    if (this.contentSettings?.gap) {
      this.skeletonStyle['--content-gap'] = this.contentSettings?.gap;
    }
  }

  private setupAvatar(): void {
    if (this.avatar && typeof this.avatar === 'object') {
      this.avatarClass = this.avatar.shape
        ? `me-skeleton-avatar-${this.avatar.shape}`
        : '';
      if (this.avatar.size) {
        this.avatarStyle = {
          width: this.getSize(this.avatar.size),
          height: this.getSize(this.avatar.size),
        };
      } else {
        this.avatarStyle = {
          width: this.avatar.width,
          height: this.avatar.height,
        };
      }
    } else {
      this.avatarClass = '';
      this.avatarStyle = {};
    }
  }

  private setupTitle(): void {
    if (this.title && typeof this.title === 'object') {
      this.titleStyle = {
        width:
          typeof this.title.width === 'number'
            ? `${this.title.width}px`
            : this.title.width || '100%',
        height:
          typeof this.title.height === 'number'
            ? `${this.title.height}px`
            : this.title.height || '16px',
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
