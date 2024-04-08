import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';
import { MeFieldStyle, MeLabelMode, MeSize } from '../types/types';

@Directive({
  selector: '[meTextBox]',
})
export class MeTextBoxDirective implements OnInit {
  @Input() stylingMode: MeFieldStyle = 'filled';
  @Input() size: MeSize = 'medium';
  @Input() labelMode: MeLabelMode = 'static';
  @Input() label: string = '';

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

    if (
      this.label &&
      (this.labelMode === 'floating' || this.labelMode === 'static')
    ) {
      this.renderer.addClass(
        this.element.nativeElement,
        'me-texteditor-with-label'
      );

      if (this.labelMode === 'floating')
        this.renderer.addClass(this.element.nativeElement, 'me-label-floating');
    }
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
