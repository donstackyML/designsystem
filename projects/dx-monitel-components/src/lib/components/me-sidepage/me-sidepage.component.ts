import { NgIf } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DxScrollViewModule } from 'devextreme-angular';
import { MePosition } from '../../types/types';

@Component({
  standalone: true,
  selector: 'me-sidepage',
  imports: [DxScrollViewModule, NgIf],
  templateUrl: './me-sidepage.component.html',
  styleUrls: ['./me-sidepage.component.css'],
})
export class MeSidePageComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewChecked
{
  @Input() hideOnOutsideClick: boolean = false;
  @Input() isSidePageOpen: boolean = false;
  @Input() position: MePosition = 'left';
  @Input() shading: boolean = true;
  @Input() width: string = '27vw';
  @Input() zIndex: string = '1500';
  @Input() zIndexOverlay: string = '1499';
  @Input() minWidth: string = '250px';
  @Input() maxWidth: string = '80vw';

  @Input() height?: string;
  @Input() minHeight?: string;
  @Input() maxHeight: string = '80vh';

  @Output() heightChange = new EventEmitter<string>();
  @Output() isSidePageOpenChange = new EventEmitter<boolean>();
  @Output() widthChange = new EventEmitter<string>();

  @ViewChild('sidepage', { static: true })
  element!: ElementRef<HTMLDivElement>;

  private overlay?: HTMLDivElement;
  private startPosition: string = '-125%';
  private endPosition: string = '0';
  private isResizing: boolean = false;

  private startX: number = 0;
  private startWidth: number = 0;
  private startY: number = 0;
  private startHeight: number = 0;

  private hasMeasuredMinHeight = false;

  get isHorizontal() {
    return this.position === 'top' || this.position === 'bottom';
  }

  constructor(private renderer: Renderer2) {}

  ngAfterViewChecked(): void {
    if (!this.hasMeasuredMinHeight && this.element && !this.minHeight) {
      const contentHeight = this.element.nativeElement.offsetHeight;
      this.minHeight = `${contentHeight}px`;
      this.hasMeasuredMinHeight = true;
    }
  }

  ngOnInit(): void {
    this.renderer.addClass(
      this.element.nativeElement,
      `me-sidepage-${this.position}`
    );
    if (this.shading) {
      this.createShading();
    }

    if (!this.isHorizontal) {
      this.renderer.setStyle(this.element.nativeElement, 'width', this.width);
    }

    if (this.position === 'right') {
      this.startPosition = 'calc(100dvw)';
      this.endPosition = 'calc(100dvw - 100%)';
    }

    if (this.position === 'bottom') {
      this.startPosition = '125%';
    }

    const transformDirection = this.isHorizontal ? 'Y' : 'X';
    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      `translate${transformDirection}(${this.startPosition})`
    );

    document.addEventListener('mousemove', this.onResizeMove.bind(this));
    document.addEventListener('mouseup', this.onResizeEnd.bind(this));
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isOpen = changes?.['isSidePageOpen'];
    if (
      isOpen?.currentValue !== isOpen?.previousValue &&
      !isOpen?.firstChange
    ) {
      this.toggleSidePage();
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('mousemove', this.onResizeMove.bind(this));
    document.removeEventListener('mouseup', this.onResizeEnd.bind(this));

    if (this.overlay) {
      document.body.removeChild(this.overlay);
    }
    this.enableBodyScroll();
  }

  onResizeStart(event: MouseEvent): void {
    this.isResizing = true;
    this.startX = event.clientX;
    this.startWidth = this.element.nativeElement.offsetWidth;

    this.startY = event.clientY;
    this.startHeight = this.element.nativeElement.offsetHeight;
    event.preventDefault();

    document.body.classList.add('resize-active');
  }

  onResizeMove(event: MouseEvent): void {
    if (!this.isResizing) return;

    if (this.isHorizontal && this.minHeight) {
      const minHeightPx = parseInt(this.minHeight);
      const maxHeightPx = window.innerHeight * 0.8;

      const newHeight =
        this.position === 'bottom'
          ? this.startHeight - (event.clientY - this.startY)
          : this.startHeight + (event.clientY - this.startY);

      const clampedHeight = Math.max(
        minHeightPx,
        Math.min(newHeight, maxHeightPx)
      );

      this.height = `${clampedHeight}px`;
      this.heightChange.emit(this.height);
      this.renderer.setStyle(this.element.nativeElement, 'height', this.height);
    } else {
      let newWidth: number;
      const minWidthPx = parseInt(this.minWidth);
      const maxWidthPx = window.innerWidth * 0.8; // 80vw

      newWidth =
        this.position === 'left'
          ? this.startWidth + (event.clientX - this.startX)
          : this.startWidth - (event.clientX - this.startX);

      newWidth = Math.max(minWidthPx, Math.min(newWidth, maxWidthPx));

      this.width = `${newWidth}px`;
      this.widthChange.emit(this.width);

      this.renderer.setStyle(this.element.nativeElement, 'width', this.width);
    }
  }

  onResizeEnd(): void {
    this.isResizing = false;
    document.body.classList.remove('resize-active');
  }

  onCloseButtonClick(): void {
    this.isSidePageOpen = !this.isSidePageOpen;
    this.isSidePageOpenChange.emit(this.isSidePageOpen);
  }

  getScrollbarWidth(): number {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  private disableBodyScroll(): void {
    const scrollbarWidth = this.getScrollbarWidth();
    document.body.style.overflow = 'hidden';

    if (window.CSS && CSS.supports('scrollbar-gutter', 'stable')) {
      document.body.style.scrollbarGutter = 'stable';
    } else {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }

  private enableBodyScroll(): void {
    document.body.style.overflow = '';
    if (window.CSS && CSS.supports('scrollbar-gutter', 'stable')) {
      document.body.style.scrollbarGutter = '';
    } else {
      document.body.style.paddingRight = '';
    }
  }

  toggleSidePage(): void {
    if (this.isSidePageOpen) {
      this.openSidePage();
    } else {
      this.closeSidePage();
    }
  }

  private openSidePage(): void {
    if (this.shading) {
      this.disableBodyScroll();
    }

    const scrollbarWidth = this.getScrollbarWidth();

    if (this.isHorizontal) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'transform',
        `translateY(${this.endPosition})`
      );
    } else {
      this.renderer.setStyle(
        this.element.nativeElement,
        'transform',
        this.position === 'left'
          ? `translateY(${this.endPosition})`
          : `translateX(calc(${this.endPosition} - ${scrollbarWidth}px))`
      );
    }

    if (this.shading) {
      this.renderer.setStyle(this.overlay, 'display', 'block');
    }

    if (this.hideOnOutsideClick) {
      window.addEventListener('click', this.windowClick.bind(this), true);
    }
  }

  private closeSidePage(): void {
    this.enableBodyScroll();

    const transform =
      this.position === 'left' || this.position === 'right'
        ? `translateX(${this.startPosition})`
        : `translateY(${this.startPosition})`;

    this.renderer.setStyle(this.element.nativeElement, 'transform', transform);
    this.renderer.removeClass(this.element.nativeElement, 'me-sidepage-open');

    if (this.shading) {
      this.renderer.removeStyle(this.overlay, 'display');
    }

    if (this.hideOnOutsideClick) {
      window.removeEventListener('click', this.windowClick.bind(this));
    }
  }

  createShading(): void {
    this.overlay = this.renderer.createElement('div');
    this.renderer.addClass(this.overlay, 'me-overlay');
    this.renderer.setStyle(this.overlay, 'z-index', this.zIndexOverlay);
    this.renderer.setStyle(this.overlay, 'position', 'fixed');
    this.renderer.appendChild(document.body, this.overlay);
  }

  windowClick(event: Event): void {
    const withinSidepage = event
      .composedPath()
      .includes(this.element.nativeElement);

    if (!withinSidepage) {
      this.isSidePageOpenChange.emit(false);
    }
  }
}
