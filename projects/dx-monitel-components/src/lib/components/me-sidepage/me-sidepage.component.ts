import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
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
  imports: [DxScrollViewModule],
  templateUrl: './me-sidepage.component.html',
  styleUrls: ['./me-sidepage.component.css'],
})
export class MeSidepageComponent implements OnInit, OnChanges {
  @Input() hideOnOutsideClick: boolean = false;
  @Input() isSidePageOpen: boolean = false;
  @Input() position: MePosition = 'left';
  @Input() shading: boolean = true;
  @Input() width: string = '27vw';
  @Input() zIndex: string = '1505';
  @Input() zIndexOverlay: string = '1504';
  @Output()
  private isSidePageOpenChange = new EventEmitter<boolean>();
  private overlay?: HTMLDivElement;
  private startPosition: string = '-100%';
  private endPosition: string = '0';

  @ViewChild('sidepage', { static: true })
  element!: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.shading) {
      this.createShading();
    }

    this.renderer.setStyle(
      this.element.nativeElement,
      'width',
      `${this.width}`
    );

    if (this.position === 'right') {
      this.startPosition = 'calc(100vw)';
      this.endPosition = 'calc(100vw - 100%)';
    }

    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      `translateX(${this.startPosition})`
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isOpen = changes?.['isSidePageOpen'];

    if (isOpen.currentValue !== isOpen.previousValue && !isOpen.firstChange) {
      this.toggleSidePage();
    }
  }

  onCloseButtonClick() {
    this.isSidePageOpen = !this.isSidePageOpen;
  }

  toggleSidePage() {
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

  createShading() {
    this.overlay = this.renderer.createElement('div');

    this.renderer.addClass(this.overlay, 'me-overlay');
    this.renderer.setStyle(this.overlay, 'z-index', `${this.zIndexOverlay}`);

    this.renderer.appendChild(document.body, this.overlay);
  }

  windowClick(event: Event) {
    const withinSidepage = event
      .composedPath()
      .includes(this.element.nativeElement);

    if (!withinSidepage) {
      this.isSidePageOpenChange.emit(false);
    }
  }
}
