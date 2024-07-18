import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MeIconStoreService } from '../service/icon-store.service';

const DEFAULT_SIZE = 'auto';

@Directive({
  selector: '[meIcon]',
})
export class MeIconDirective implements OnInit {
  @Input() icon = '';
  @Input() color?: string;
  @Input() size?: string;
  @Input() height = '';
  @Input() width = '';

  constructor(
    private element: ElementRef,
    private service: MeIconStoreService,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const svg = this.service.getIcon({
      icon: this.icon,
      color: this.color,
      size: this.size,
    });
    this.element.nativeElement.innerHTML = svg;

    this.renderer.setStyle(
      this.element.nativeElement,
      'width',
      `${this.width ? this.width : DEFAULT_SIZE}px`,
    );

    this.renderer.setStyle(
      this.element.nativeElement,
      'height',
      `${this.height ? this.height : DEFAULT_SIZE}px`,
    );

    this.renderer.addClass(this.element.nativeElement, 'me-flex-centered');
  }
}
