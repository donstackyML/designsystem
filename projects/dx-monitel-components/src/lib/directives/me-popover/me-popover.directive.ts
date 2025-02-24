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
    this.updateClasses();
    this.configurePopover();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('size' in changes || 'colorMode' in changes) {
      this.updateClasses();
    }
  }

  private updateClasses(): void {
    const popoverElement = this.element.nativeElement;

    ['default', 'alternate', 'light', 'dark'].forEach((mode) =>
      this.renderer.removeClass(popoverElement, `me-colors-${mode}`)
    );
    ['small', 'medium', 'large'].forEach((size) =>
      this.renderer.removeClass(popoverElement, `me-popover-${size}`)
    );

    this.renderer.addClass(popoverElement, `me-popover-${this.size}`);
    this.renderer.addClass(popoverElement, `me-colors-${this.colorMode}`);

    if (this.customClass) {
      this.renderer.addClass(popoverElement, this.customClass);
    }
  }

  private configurePopover(): void {
    let color: string | undefined = undefined;

    switch (this.colorMode) {
      case 'light':
      case 'dark':
        color = `me-colors-${this.colorMode}`;
        break;
      case 'default':
        color = `me-colors-alternate`;
        break;
    }

    this.component.instance.option('wrapperAttr', {
      class: `me-popover me-popover-${this.size} me-popover-color-mode-${this.colorMode} ${color}`,
    });

    this.component.toolbarItems.forEach((e: any) => {
      if (e.widget == 'dxButton') {
        e.options.elementAttr = { class: 'me-button me-button-' + this.size };
      }
    });
  }
}
