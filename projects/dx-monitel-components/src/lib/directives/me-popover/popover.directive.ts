import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

import { MeSize } from '../../types/types';
import { DxPopoverComponent } from 'devextreme-angular';

@Directive({
  selector: '[mePopover]',
  host: {
    '[class.me-popover]': 'true',
    '[class.me-popover-small]': 'isSizeSmall',
    '[class.me-popover-medium]': 'isSizeMedium',
    '[class.me-popover-large]': 'isSizeLarge',
  },
})
export class MePopoverDirective implements AfterViewInit, OnChanges {
  @Input() size: MeSize = 'medium';
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
  }

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeLarge() {
    return this.size === 'large';
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
