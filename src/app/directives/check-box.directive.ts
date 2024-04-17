import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { MeSize } from '../types/types';
import { DxCheckBoxComponent } from 'devextreme-angular';

@Directive({
  selector: '[meCheckBox]',
})
export class MeCheckBoxDirective {
  @Input() size: MeSize = 'medium';

  constructor(
    private element: ElementRef,
    private component: DxCheckBoxComponent,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'me-checkbox');
    this.renderer.addClass(
      this.element.nativeElement,
      `me-checkbox-${this.size}`
    );

    this.component.elementAttr['size'] = this.size;
  }

  @HostListener('keyup', ['$event']) addFocus = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      this.renderer.addClass(this.element.nativeElement, 'me-state-focus');
    }
  };

  @HostListener('focusout') removeFocus = () => {
    this.renderer.removeClass(this.element.nativeElement, 'me-state-focus');
  };
}
