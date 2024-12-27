import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DxScrollViewModule } from 'devextreme-angular';
import { MePosition } from '../../types/types';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'me-sidepage',
  imports: [DxScrollViewModule, NgIf],
  template: `
    <div
      #sidepage
      class="me-sidepage me-scrollbar-visible me-scroll-view"
      [style.z-index]="zIndex"
    >
      <ng-content select="[sidepage-header]"></ng-content>
      <div class="me-sidepage-content">
        <dx-scroll-view>
          <ng-content select="[sidepage-content]"></ng-content>
        </dx-scroll-view>
      </div>
      <ng-content select="[sidepage-footer]"></ng-content>
      <div
        *ngIf="isSidePageOpen"
        class="resize-handle"
        [class.resize-handle-right]="position === 'right'"
        [class.resize-handle-left]="position === 'left'"
        (mousedown)="onResizeStart($event)"
      ></div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .me-sidepage {
        position: fixed;
        top: 0;
        height: 100vh;
        transition: transform 0.3s ease;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .me-sidepage.me-sidepage-left {
        left: 0;
      }

      .me-sidepage.me-sidepage-right {
        right: 0;
      }

      .me-sidepage-content {
        height: 100%;
        overflow: hidden;
      }

      .resize-handle {
        position: absolute;
        top: 0;
        width: 4px;
        height: 100%;
        cursor: ew-resize;
        background: transparent;
        transition: background-color 0.2s;
        z-index: 1;
      }

      .resize-handle:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .resize-handle-right {
        left: 0;
      }

      .resize-handle-left {
        right: 0;
      }
    `,
  ],
})
export class MeSidepageComponent implements OnInit, OnChanges, OnDestroy {
  @Input() hideOnOutsideClick: boolean = false;
  @Input() isSidePageOpen: boolean = false;
  @Input() position: MePosition = 'left';
  @Input() shading: boolean = true;
  @Input() width: string = '27vw';
  @Input() zIndex: string = '1505';
  @Input() zIndexOverlay: string = '1504';
  @Input() minWidth: string = '250px';
  @Input() maxWidth: string = '80vw';

  @Output() isSidePageOpenChange = new EventEmitter<boolean>();
  @Output() widthChange = new EventEmitter<string>();

  @ViewChild('sidepage', { static: true })
  element!: ElementRef<HTMLDivElement>;

  private overlay?: HTMLDivElement;
  private startPosition: string = '-100%';
  private endPosition: string = '0';
  private isResizing: boolean = false;
  private startX: number = 0;
  private startWidth: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(
      this.element.nativeElement,
      `me-sidepage-${this.position}`
    );
    if (this.shading) {
      this.createShading();
    }

    this.renderer.setStyle(this.element.nativeElement, 'width', this.width);

    if (this.position === 'right') {
      this.startPosition = 'calc(100vw)';
      this.endPosition = 'calc(100vw - 100%)';
    }

    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      `translateX(${this.startPosition})`
    );

    document.addEventListener('mousemove', this.onResizeMove.bind(this));
    document.addEventListener('mouseup', this.onResizeEnd.bind(this));
  }

  ngOnDestroy(): void {
    document.removeEventListener('mousemove', this.onResizeMove.bind(this));
    document.removeEventListener('mouseup', this.onResizeEnd.bind(this));
    if (this.overlay) {
      document.body.removeChild(this.overlay);
    }
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

  onResizeStart(event: MouseEvent): void {
    this.isResizing = true;
    this.startX = event.clientX;
    this.startWidth = this.element.nativeElement.offsetWidth;
    event.preventDefault();

    document.body.classList.add('resize-active');
  }

  onResizeMove(event: MouseEvent): void {
    if (!this.isResizing) return;

    let newWidth: number;
    const minWidthPx = parseInt(this.minWidth);
    const maxWidthPx = window.innerWidth * 0.8; // 80vw

    if (this.position === 'left') {
      newWidth = this.startWidth + (event.clientX - this.startX);
    } else {
      newWidth = this.startWidth - (event.clientX - this.startX);
    }

    newWidth = Math.max(minWidthPx, Math.min(newWidth, maxWidthPx));

    this.width = `${newWidth}px`;
    this.widthChange.emit(this.width);

    this.renderer.setStyle(this.element.nativeElement, 'width', this.width);
  }

  onResizeEnd(): void {
    this.isResizing = false;
    document.body.classList.remove('resize-active');
  }

  onCloseButtonClick(): void {
    this.isSidePageOpen = !this.isSidePageOpen;
    this.isSidePageOpenChange.emit(this.isSidePageOpen);
  }

  toggleSidePage(): void {
    if (this.isSidePageOpen) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'transform',
        `translateX(${this.endPosition})`
      );

      this.renderer.addClass(this.element.nativeElement, 'me-sidepage-open');

      if (this.shading)
        this.renderer.setStyle(this.overlay, 'display', 'block');

      if (this.hideOnOutsideClick) {
        window.addEventListener('click', this.windowClick.bind(this), true);
      }
    } else {
      this.renderer.setStyle(
        this.element.nativeElement,
        'transform',
        `translateX(${this.startPosition})`
      );

      this.renderer.removeClass(this.element.nativeElement, 'me-sidepage-open');

      if (this.shading) this.renderer.removeStyle(this.overlay, 'display');

      if (this.hideOnOutsideClick) {
        window.removeEventListener('click', this.windowClick.bind(this));
      }
    }
  }

  createShading(): void {
    this.overlay = this.renderer.createElement('div');
    this.renderer.addClass(this.overlay, 'me-overlay');
    this.renderer.setStyle(this.overlay, 'z-index', this.zIndexOverlay);
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
