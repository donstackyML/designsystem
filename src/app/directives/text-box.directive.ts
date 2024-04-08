import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';
import { MeFieldStyle, MeSize } from '../types/types';

@Directive({
  selector: '[meTextBox]',
})
export class MeTextBoxDirective implements OnInit {
  @Input() stylingMode: MeFieldStyle = 'filled';
  @Input() size: MeSize = 'medium';

  constructor(
    private element: ElementRef,
    private component: DxTextBoxComponent,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.component.stylingMode = this.stylingMode;
    this.renderer.addClass(this.element.nativeElement, 'me-textbox');
    this.renderer.addClass(
      this.element.nativeElement,
      `me-textbox-${this.size}`
    );
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
