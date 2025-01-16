import { DxPopoverComponent } from 'devextreme-angular';

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
})
export class MePopoverDirective implements AfterViewInit, OnChanges {
  @Input() size: MeSize = 'medium';
  @Input() colorMode: 'default' | 'alternate' | 'light' | 'dark' = 'default';
  @Input() customClass = '';

  private renderer = inject(Renderer2);
  private element = inject(ElementRef);
  private component = inject(DxPopoverComponent);

  ngAfterViewInit(): void {
    this.applyStyles();
    this.updatePopoverProperties();
    this.addClassesToPopup();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updatePopoverProperties();
  }

  private addClassesToPopup() {
    this.component.instance.option('wrapperAttr', {
      class:
        'me-popover me-popover-' + this.size + ' me-popover-' + this.colorMode,
    });
    this.component.toolbarItems.forEach((e: any) => {
      if (e.widget == 'dxButton') {
        e.options.elementAttr = { class: 'me-button me-button-' + this.size };
      }
    });
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
