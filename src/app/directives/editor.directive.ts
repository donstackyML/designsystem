import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  Renderer2,
} from '@angular/core';
import { MeEditorComponents, MeSize } from '../types/types';
import { DxTextBoxComponent } from 'devextreme-angular';

@Directive({
  selector: '[meEditor]',
})
export class MeEditorDirective {
  @Input() size: MeSize = 'medium';

  constructor(
    protected element: ElementRef,
    @Inject(DxTextBoxComponent)
    protected component: MeEditorComponents,
    protected renderer: Renderer2
  ) {}

  initMeEditor() {
    this.renderer.addClass(this.element.nativeElement, 'me-editor');
    this.renderer.addClass(
      this.element.nativeElement,
      `me-editor-${this.size}`
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
