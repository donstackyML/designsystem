import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { MeSize } from '../types/types';

@Directive({
  selector: '[meCheckBox]',
})
export class MeCheckBoxDirective {
  @Input() size: MeSize = 'medium';

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'me-checkbox');
    this.renderer.addClass(
      this.element.nativeElement,
      `me-checkbox-${this.size}`
    );
  }
}
