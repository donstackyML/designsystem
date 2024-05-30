import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconStoreService } from '../service/icon-store.service';

const DEFAULT_SIZE = 'auto';

@Directive({
  selector: '[meIcon]',
})
export class MeIconDirective {
  @Input() icon = '';
  @Input() color?: string;
  @Input() iconSize?: string;
  @Input() height = '';
  @Input() width = '';

  constructor(
    private element: ElementRef,
    private service: IconStoreService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const svg = this.service.getIcon({
      icon: this.icon,
      color: this.color,
      size: this.iconSize,
    });
    this.element.nativeElement.innerHTML = svg;

    this.renderer.setStyle(
      this.element.nativeElement,
      'width',
      `${this.width ? this.width : DEFAULT_SIZE}px`
    );

    this.renderer.setStyle(
      this.element.nativeElement,
      'height',
      `${this.height ? this.height : DEFAULT_SIZE}px`
    );

    this.renderer.addClass(this.element.nativeElement, 'me-flex-centered');
  }
}
