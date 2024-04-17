import {
  AfterContentChecked,
  AfterContentInit,
  ContentChild,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DxSelectBoxComponent, DxTextBoxComponent } from 'devextreme-angular';
import { MeFieldComponent, MeLabelPosition } from '../types/types';

@Directive({
  selector: '[meLabel]',
})
export class MeLabelDirective
  implements OnInit, AfterContentInit, AfterContentChecked, OnDestroy
{
  @ContentChild(DxTextBoxComponent) textBoxComponent?: DxTextBoxComponent;
  @ContentChild(DxSelectBoxComponent) selectBoxComponent?: DxSelectBoxComponent;
  @ContentChild('label') label?: ElementRef<HTMLLabelElement>;
  @Input() labelPosition: MeLabelPosition = 'top';
  @Input() width: string = '';
  field?: MeFieldComponent;
  unlistenLabel = () => {};

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'dx-widget');
    this.renderer.addClass(this.element.nativeElement, 'me-label');

    if (this.width) {
      this.renderer.setStyle(this.element.nativeElement, 'width', this.width);
    }

    if (this.labelPosition === 'top') {
      this.renderer.addClass(this.element.nativeElement, 'me-flex-column');
    }

    if (this.labelPosition === 'left') {
      this.renderer.addClass(this.element.nativeElement, 'me-flex-row');
    }
  }

  ngAfterContentInit(): void {
    this.field = this.textBoxComponent;
    this.field ||= this.selectBoxComponent;

    if (this.label) {
      this.unlistenLabel = this.renderer.listen(
        this.label?.nativeElement,
        'click',
        this.onLabelClick
      );
    }

    let size = this.field?.templates as unknown as string[];

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
    if (!this.field?.isValid) {
      this.renderer.addClass(this.element.nativeElement, 'me-label-invalid');
    }
    if (this.field?.isValid) {
      this.renderer.removeClass(this.element.nativeElement, 'me-label-invalid');
    }
  }

  ngOnDestroy(): void {
    this.unlistenLabel();
  }

  onLabelClick = () => {
    console.log('Label click!');
    this.field?.instance.focus();
  };
}
