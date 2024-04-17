import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  Renderer2,
} from '@angular/core';
import {
  MeFieldComponent,
  MeFieldStyle,
  MeLabelMode,
  MeSize,
} from '../types/types';
import {
  DxSelectBoxComponent,
  DxTemplateDirective,
  DxTextBoxComponent,
} from 'devextreme-angular';

@Directive({
  selector: '[meField]',
})
export class MeFieldDirective {
  @Input() stylingMode: MeFieldStyle = 'filled';
  @Input() size: MeSize = 'medium';
  @Input() labelMode: MeLabelMode = 'static';
  @Input() label: string = '';

  constructor(
    protected element: ElementRef,
    @Inject(DxTextBoxComponent)
    protected component: MeFieldComponent,
    protected renderer: Renderer2
  ) {}

  initMeField = () => {
    this.component.stylingMode = this.stylingMode;
    this.renderer.addClass(this.element.nativeElement, 'me-texteditor');
    this.renderer.addClass(
      this.element.nativeElement,
      `me-texteditor-${this.size}`
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

    this.component.templates.push(this.size as unknown as DxTemplateDirective);
  };

  @HostListener('keyup', ['$event']) addFocus = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      this.renderer.addClass(this.element.nativeElement, 'me-state-focus');
    }
  };

  @HostListener('focusout') removeFocus = () => {
    this.renderer.removeClass(this.element.nativeElement, 'me-state-focus');
  };
}
