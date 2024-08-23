import { AfterViewInit, Directive, ElementRef, inject, Input, Renderer2 } from '@angular/core';

import { MeSize } from '../types/types';

@Directive({
  selector: '[mePopover]',
  host: {
    '[class.me-popover]': 'true',
  },
})
export class MePopoverDirective implements AfterViewInit {
  @Input() size?: MeSize;

  private renderer = inject(Renderer2);
  private element = inject(ElementRef);

  ngAfterViewInit(): void {
    this.ApplyStyles();
    this.ApplySize(this.size);
  }

  ApplyStyles() {
    this.renderer.addClass(this.element.nativeElement.children[0], 'me-popover');
  }

  ApplySize(size: MeSize | undefined) {
    this.renderer.addClass(this.element.nativeElement.children[0], 'me-popover-' + this.size);
  }
}
