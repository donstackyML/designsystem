import {
  ContentChild,
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DxTemplateDirective, DxTextBoxComponent } from 'devextreme-angular';
import { MeLabelPosition, MeTextBoxComponent } from '../types/types';

@Directive({
  selector: '[meLabel]',
})
export class MeLabelDirective {
  @ContentChild(DxTextBoxComponent) textBox?: DxTextBoxComponent;
  // @ContentChild(HTMLSpanElement) label?: HTMLSpanElement;
  @Input() labelPosition: MeLabelPosition = 'top';
  @Input() width: string = '';

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'dx-widget');
    this.renderer.addClass(this.element.nativeElement, 'me-label');

    if (this.width) {
      this.element.nativeElement.style = `width: ${this.width}`;
    }

    if (this.labelPosition === 'top') {
      this.renderer.addClass(this.element.nativeElement, 'me-flex-column');
    }

    if (this.labelPosition === 'left') {
      this.renderer.addClass(this.element.nativeElement, 'me-flex-row');
    }
  }

  ngAfterContentInit(): void {
    console.log(this.textBox?.templates);
    console.log(this.textBox?.isValid);
    const size = this.textBox?.templates as unknown as string[];

    if (size?.includes('large') && this.labelPosition === 'top')
      this.renderer.addClass(this.element.nativeElement, 'me-label-large');

    if (this.labelPosition === 'left') {
      if (size.includes('small'))
        this.renderer.addClass(
          this.element.nativeElement,
          'me-label-left-small'
        );
      if (size.includes('medium'))
        this.renderer.addClass(
          this.element.nativeElement,
          'me-label-left-medium'
        );
      if (size.includes('large'))
        this.renderer.addClass(
          this.element.nativeElement,
          'me-label-left-large'
        );
    }
  }

  ngAfterContentChecked(): void {
    if (!this.textBox?.isValid) {
      this.renderer.addClass(this.element.nativeElement, 'me-label-invalid');
    }
    if (this.textBox?.isValid) {
      this.renderer.removeClass(this.element.nativeElement, 'me-label-invalid');
    }
  }
}
