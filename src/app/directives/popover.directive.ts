import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { DxPopoverComponent } from 'devextreme-angular';
import { MeCommonType } from '../types/types';

@Directive({
  selector: '[mePopover]',
})
export class PopoverDirective {
  @Input() wrapperAttr: MeCommonType = {};
  // @Input() size: MeSizeType = 'medium';

  wrapperClasses: string = 'me-popover';

  constructor(
    private element: ElementRef,
    private component: DxPopoverComponent,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // this.wrapperClasses = `me-popover ${this.size}`;

    this.component.wrapperAttr = {
      ...this.wrapperAttr,
      class: `${this.wrapperAttr['class'] || ''} ${this.wrapperClasses}`,
    };
  }
}
