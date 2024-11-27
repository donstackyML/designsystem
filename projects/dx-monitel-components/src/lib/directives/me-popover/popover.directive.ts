import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

import { MeSize } from '../../types/types';

@Directive({
  selector: '[mePopover]',
})
export class MePopoverDirective implements AfterViewInit, OnChanges {
  @Input() size: MeSize = 'medium';
  @Input() colorMode: 'light' | 'dark' = 'dark';
  @Input() customClass = '';

  private renderer = inject(Renderer2);
  private element = inject(ElementRef);

  ngAfterViewInit(): void {
    this.applyStyles();
    this.updatePopoverProperties();
    this.addClassesToPopup();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updatePopoverProperties();
  }

  private addClassesToPopup() {
    this.renderer.addClass(
      this.element.nativeElement.children[0],
      'me-popover'
    );
    this.renderer.addClass(
      this.element.nativeElement.children[0],
      'me-popover-' + this.size
    );
    this.renderer.addClass(
      this.element.nativeElement.children[0],
      'me-popover-' + this.colorMode
    );
  }

  @HostListener('onShown', ['$event'])
  onShown(event: any): void {
    let buttons = event.component._$bottom[0].querySelectorAll('.dx-button');
    buttons.forEach((e: any) => {
      this.renderer.addClass(e, 'me-button');
      this.renderer.addClass(e, 'me-button-' + this.size);
    });
    console.log(buttons);
  }

  private applyStyles(): void {
    const popoverElement = this.element.nativeElement;
    if (this.customClass) {
      this.renderer.addClass(popoverElement, this.customClass);
    }
  }

  private updatePopoverProperties(changes?: SimpleChanges): void {
    if (changes) {
      for (const propName in changes) {
        if (changes.hasOwnProperty(propName)) {
          this.updateClass(
            propName,
            changes[propName].currentValue,
            changes[propName].previousValue
          );
        }
      }
    }
  }

  private updateClass(
    propName: string,
    currentValue: any,
    previousValue: any
  ): void {
    if (previousValue !== undefined) {
      this.renderer.removeClass(
        this.element.nativeElement,
        `me-popover-${propName}-${previousValue}`
      );
    }
    this.renderer.addClass(
      this.element.nativeElement,
      `me-popover-${propName}-${currentValue}`
    );
  }
}
