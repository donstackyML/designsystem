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
import { DxPopoverComponent } from 'devextreme-angular';

export type PopoverSize = 'small' | 'medium' | 'large';
export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right';

@Directive({
  selector: '[mePopover]',
  host: {
    '[class.me-popover]': 'true',
  },
})
export class MePopoverDirective implements AfterViewInit, OnChanges {
  @Input() size: PopoverSize = 'medium';
  @Input() position: PopoverPosition = 'bottom';
  @Input() showTitle = true;
  @Input() showCloseButton = true;
  @Input() customClass = '';

  private renderer = inject(Renderer2);
  private element = inject(ElementRef);
  private dxPopoverComponent = inject(DxPopoverComponent);

  ngAfterViewInit(): void {
    this.applyStyles();
    this.updatePopoverProperties();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updatePopoverProperties(changes);
  }

  private applyStyles(): void {
    const popoverElement = this.element.nativeElement;
    this.renderer.addClass(popoverElement, 'me-popover');
    this.renderer.addClass(popoverElement, `me-popover-${this.size}`);
    this.renderer.addClass(popoverElement, `me-popover-${this.position}`);

    if (this.customClass) {
      this.renderer.addClass(popoverElement, this.customClass);
    }
  }

  private updatePopoverProperties(changes?: SimpleChanges): void {
    this.dxPopoverComponent.position = this.position;
    this.dxPopoverComponent.showTitle = this.showTitle;
    this.dxPopoverComponent.showCloseButton = this.showCloseButton;

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
