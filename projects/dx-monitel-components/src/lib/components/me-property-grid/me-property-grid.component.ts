import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { DxScrollViewModule, DxTemplateModule } from 'devextreme-angular';

import { MeScrollViewModule } from '../../directives';
import {
  MePropertyGridCellComponent,
  type PropertyGridCell,
} from './me-property-grid-cell';
import { MePropertyGridHeaderComponent } from './me-property-grid-header';

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
  },
})
export class MePropertyGridComponent implements OnInit, OnDestroy {
  private _isResizeHandlerHovered = false;

  private _rightCellWidth = '60%';

  private ngZone = inject(NgZone);

  private renderer = inject(Renderer2);

  private elementRef = inject(ElementRef<HTMLElement>);

  private startX = 0;

  private startWidthPx = 0;

  private listeners: Array<() => void> = [];

  private documentMouseMoveListener: (() => void) | null = null;

  private documentMouseUpListener: (() => void) | null = null;

  isDragging = false;

  @Input() dataSource: Array<PropertyGridCell> = [];

  @Input() gridTitle?: string | number | null = 'Свойства';

  @Input() height: number | string = 'auto';

  @Input() closeMode: 'remove' | 'hide' = 'hide';

  @Input() resizable = true;

  @Input() valueTemplate: TemplateRef<any> | null = null;

  @Input() isOpen = true;

  @Input() minLeftWidthPx = 50;

  @Input() minRightWidthPx = 50;

  @Input()
  set rightCellWidth(value: string) {
    if (this._rightCellWidth !== value) {
      this._rightCellWidth = value;
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        'style',
        `--current-right-cell-width: ${value}`
      );
    }
  }

  get rightCellWidth(): string {
    return this._rightCellWidth;
  }

  @Input()
  set isResizeHandlerHovered(value: boolean) {
    if (this._isResizeHandlerHovered !== value) {
      this._isResizeHandlerHovered = value;
      this.updateResizeHandlerHoverClass();
    }
  }

  get isResizeHandlerHovered(): boolean {
    return this._isResizeHandlerHovered;
  }

  @Output() rightCellWidthChange = new EventEmitter<string>();

  @Output() isResizeHandlerHoveredChange = new EventEmitter<boolean>();

  @Output() toggleOpenEvent = new EventEmitter<void>();

  @ViewChild('propertyGridContent', { static: true })
  propertyGridContentRef!: ElementRef<HTMLUListElement>;

  @ViewChild('resizeHandler', { static: true })
  resizeHandlerRef!: ElementRef<HTMLDivElement>;

  readonly propertyCellTemplateName = 'propertyCellTemplate';

  ngOnInit() {
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'style',
      `--current-right-cell-width: ${this._rightCellWidth}`
    );
    this.updateResizeHandlerHoverClass();

    if (this.resizable) {
      this.ngZone.runOutsideAngular(() => {
        this.listeners.push(
          this.renderer.listen(
            this.resizeHandlerRef.nativeElement,
            'mousedown',
            this.onResizeHandlerMouseDown.bind(this)
          )
        );
        this.listeners.push(
          this.renderer.listen(
            this.resizeHandlerRef.nativeElement,
            'mouseenter',
            () => {
              this._isResizeHandlerHovered = true;
              this.updateResizeHandlerHoverClass();
              this.isResizeHandlerHoveredChange.emit(true);
            }
          )
        );
        this.listeners.push(
          this.renderer.listen(
            this.resizeHandlerRef.nativeElement,
            'mouseleave',
            () => {
              if (!this.isDragging) {
                this._isResizeHandlerHovered = false;
                this.updateResizeHandlerHoverClass();
                this.isResizeHandlerHoveredChange.emit(false);
              }
            }
          )
        );
      });
    }
  }

  ngOnDestroy() {
    this.listeners.forEach((unlisten) => unlisten());
    this.listeners = [];
    this.removeDocumentListeners();
  }

  private updateResizeHandlerHoverClass() {
    if (this._isResizeHandlerHovered) {
      this.renderer.addClass(
        this.elementRef.nativeElement,
        'resize-handler-hovered'
      );
    } else {
      this.renderer.removeClass(
        this.elementRef.nativeElement,
        'resize-handler-hovered'
      );
    }
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
    this.toggleOpenEvent.emit();
  }

  trackRow(_: number, item: PropertyGridCell): string {
    return item.name;
  }

  private onResizeHandlerMouseDown(event: MouseEvent): void {
    if (event.button !== 0) return;

    event.preventDefault();
    event.stopPropagation();

    if (!this.propertyGridContentRef?.nativeElement) return;
    const gridWidth = this.propertyGridContentRef.nativeElement.offsetWidth;
    if (gridWidth <= 0) return;

    this.isDragging = true;
    this.startX = event.clientX;
    this.startWidthPx = (parseFloat(this._rightCellWidth) / 100) * gridWidth;

    this._isResizeHandlerHovered = true;
    this.updateResizeHandlerHoverClass();
    this.isResizeHandlerHoveredChange.emit(true);

    this.documentMouseMoveListener = this.renderer.listen(
      document,
      'mousemove',
      this.onDocumentMouseMove.bind(this)
    );
    this.documentMouseUpListener = this.renderer.listen(
      document,
      'mouseup',
      this.onDocumentMouseUp.bind(this)
    );
  }

  private onDocumentMouseMove(event: MouseEvent): void {
    if (!this.isDragging || !this.propertyGridContentRef?.nativeElement) return;
    event.preventDefault();

    const currentX = event.clientX;
    const deltaX = currentX - this.startX;
    const gridWidth = this.propertyGridContentRef.nativeElement.offsetWidth;
    if (gridWidth <= 0) return;

    let newRightWidthPx = this.startWidthPx - deltaX;
    const maxRightWidthPx = gridWidth - this.minLeftWidthPx;
    newRightWidthPx = Math.max(this.minRightWidthPx, newRightWidthPx);
    newRightWidthPx = Math.min(maxRightWidthPx, newRightWidthPx);

    const newRightWidthPercent = (newRightWidthPx / gridWidth) * 100;
    const newWidth = `${newRightWidthPercent}%`;

    this.rightCellWidth = newWidth;
    this.rightCellWidthChange.emit(newWidth);
  }

  private onDocumentMouseUp(event: MouseEvent): void {
    if (!this.isDragging) return;
    if (event.button !== 0) return;

    this.isDragging = false;
    this.removeDocumentListeners();

    const handlerRect =
      this.resizeHandlerRef.nativeElement.getBoundingClientRect();
    const mouseOverHandler =
      event.clientX >= handlerRect.left &&
      event.clientX <= handlerRect.right &&
      event.clientY >= handlerRect.top &&
      event.clientY <= handlerRect.bottom;

    this._isResizeHandlerHovered = mouseOverHandler;
    this.updateResizeHandlerHoverClass();
    this.isResizeHandlerHoveredChange.emit(mouseOverHandler);
  }

  private removeDocumentListeners(): void {
    if (this.documentMouseMoveListener) {
      this.documentMouseMoveListener();
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      this.documentMouseUpListener();
      this.documentMouseUpListener = null;
    }
  }
}
