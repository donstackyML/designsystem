import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';

import { DxScrollViewModule, DxTemplateModule } from 'devextreme-angular';

import { MeScrollViewModule } from '../../directives';
import { MePropertyGridCellComponent } from './me-property-grid-cell/me-property-grid-cell.component';
import { PropertyGridCell } from './me-property-grid-cell/me-property-grid-item.model';
import { MePropertyGridHeaderComponent } from './me-property-grid-header/me-property-grid-header.component';

@Component({
  selector: 'me-property-grid',
  standalone: true,
  imports: [
    CommonModule,
    MePropertyGridHeaderComponent,
    MePropertyGridCellComponent,
    DxTemplateModule,
    DxScrollViewModule,
    MeScrollViewModule,
  ],
  templateUrl: './me-property-grid.component.html',
  styleUrls: ['./me-property-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.height]': 'height',
    '[style.overflowY]': 'visible',
    '[style.--current-right-cell-width]': 'rightCellWidth',
    '[class.resize-handler-hovered]': 'isResizeHandlerHovered',
  },
})
export class MePropertyGridComponent {
  private cdr = inject(ChangeDetectorRef);

  private isResizeHandlerHovered = false;

  private isDragging = false;

  private startX = 0;

  private startWidthPx = 0;

  @Input() dataSource: Array<PropertyGridCell> = [];

  @Input() gridTitle = 'Свойства';

  @Input() height: number | string = '';

  @Input() closeMode: 'remove' | 'hide' = 'hide';

  @Input() resizable = true;

  @Input() valueTemplate: TemplateRef<any> | null = null;

  @Input() isOpen = true;

  @Input() minLeftWidthPx = 50;

  @Input() minRightWidthPx = 50;

  @Input() rightCellWidth = '60%';

  @ViewChild('propertyGridContent', { static: false })
  propertyGridContentRef!: ElementRef<HTMLUListElement>;

  readonly propertyCellTemplateName = 'propertyCellTemplate';

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
    this.cdr.markForCheck();
  }

  onResizeHandlerMouseDown(event: MouseEvent): void {
    event.preventDefault();
    if (!this.propertyGridContentRef?.nativeElement) {
      return;
    }
    const gridWidth = this.propertyGridContentRef.nativeElement.offsetWidth;
    if (gridWidth <= 0) {
      return;
    }
    this.isDragging = true;
    this.startX = event.clientX;
    this.startWidthPx = (parseFloat(this.rightCellWidth) / 100) * gridWidth;
  }

  @HostListener('document:mousemove', ['$event'])
  onResizeHandlerMouseMove(event: MouseEvent): void {
    if (!this.isDragging || !this.propertyGridContentRef?.nativeElement) return;
    const currentX = event.clientX;
    const deltaX = currentX - this.startX;
    const gridWidth = this.propertyGridContentRef.nativeElement.offsetWidth;
    if (gridWidth <= 0) return;
    let newRightWidthPx = this.startWidthPx - deltaX;
    const maxRightWidthPx = gridWidth - this.minLeftWidthPx;
    newRightWidthPx = Math.max(this.minRightWidthPx, newRightWidthPx);
    newRightWidthPx = Math.min(maxRightWidthPx, newRightWidthPx);
    const newRightWidthPercent = (newRightWidthPx / gridWidth) * 100;
    this.setRightCellWidth(`${newRightWidthPercent}%`);
  }

  @HostListener('document:mouseup', ['$event'])
  onResizeHandlerMouseUp(): void {
    if (this.isDragging) {
      this.isDragging = false;
    }
  }

  onResizeHandlerMouseEnter(): void {
    this.setResizeHandlerHover(true);
  }

  onResizeHandlerMouseLeave(): void {
    if (!this.isDragging) {
      this.setResizeHandlerHover(false);
    }
  }

  trackRow(_: number, item: PropertyGridCell): string {
    return item.name;
  }

  private setRightCellWidth(newWidth: string): void {
    if (this.rightCellWidth !== newWidth) {
      this.rightCellWidth = newWidth;
    }
  }

  private setResizeHandlerHover(hovered: boolean): void {
    if (this.isResizeHandlerHovered !== hovered) {
      this.isResizeHandlerHovered = hovered;
    }
  }
}
