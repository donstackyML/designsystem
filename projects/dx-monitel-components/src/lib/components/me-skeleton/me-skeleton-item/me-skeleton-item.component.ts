import { NgClass } from '@angular/common';
import {
  Component,
  HostBinding,
  Input
} from '@angular/core';

export type SkeletonShape = 'circle' | 'rounded' | 'rectangle';

export interface SkeletonItemProps {
  shape?: SkeletonShape;
  animated?: boolean;
  width?: number | string;
  height?: number | string;
}

@Component({
  selector: 'me-skeleton-item',
  standalone: true,
  templateUrl: './me-skeleton-item.component.html',
  imports: [NgClass],
})
export class MeSkeletonItemComponent {
  @Input() shape?: SkeletonShape = 'rounded'
  @Input() animated?: boolean = false;

  @HostBinding('style.width')
  @Input() width?: number | string = '100%'

  @HostBinding('style.height')
  @Input() height?: number | string = '8px'

  @HostBinding('class')
  get hostClasses(): string {
    return `me-skeleton-item`;
  }
}
