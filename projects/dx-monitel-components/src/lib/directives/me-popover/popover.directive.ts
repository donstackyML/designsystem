import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

import { MeSize } from '../../types/types';

@Directive({
  selector: '[mePopover]',
  host: {
    '[class.me-popover]': 'true',
  },
})
export class MePopoverDirective implements AfterViewInit, OnChanges {
  @Input() size?: MeSize;

  private renderer = inject(Renderer2);
  private element = inject(ElementRef);

  ngAfterViewInit(): void {
    this.ApplyStyles();
    this.ApplySize(this.size);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updatePopoverProperties(changes);
  }

  ApplyStyles() {
    this.renderer.addClass(
      this.element.nativeElement.children[0],
      'me-popover'
    );
  }

  private ApplySize(size: MeSize | undefined) {
    const element = this.element.nativeElement.children[0];
    this.renderer.addClass(element, 'me-popover-' + this.size);
  }

  private changeSize(size: MeSize | undefined, changes?: SimpleChanges) {
    const element = this.element.nativeElement.children[0];
    if (changes?.['size'].previousValue !== undefined) {
      this.renderer.removeClass(
        element,
        'me-popover-' + changes?.['size'].previousValue
      );
      this.renderer.addClass(element, 'me-popover-' + this.size);
    }
  }

  private updatePopoverProperties(changes: SimpleChanges) {
    if (changes['size']) {
      this.changeSize(this.size, changes);
    }
  }
}
