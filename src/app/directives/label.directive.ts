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
import {
  DxCheckBoxComponent,
  DxSelectBoxComponent,
  DxTextBoxComponent,
} from 'devextreme-angular';
import { MeFieldComponent, MeLabelPosition } from '../types/types';
import { MeCheckBoxComponent } from '../components/me-check-box/me-check-box.component';

@Directive({
  selector: '[meLabel]',
})
export class MeLabelDirective
  implements OnInit, AfterContentInit, AfterContentChecked, OnDestroy
{
  @ContentChild(DxTextBoxComponent) textBoxComponent?: DxTextBoxComponent;
  @ContentChild(DxSelectBoxComponent) selectBoxComponent?: DxSelectBoxComponent;
  @ContentChild(DxCheckBoxComponent) checkBoxComponent?: DxCheckBoxComponent;
  @ContentChild('meLabel') label?: ElementRef<HTMLLabelElement>;
  @Input() labelPosition: MeLabelPosition = 'left';
  @Input() width: string = '';
  field?: MeFieldComponent | DxCheckBoxComponent;
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
    this.field ||= this.checkBoxComponent;

    if (this.label) {
      this.unlistenLabel = this.renderer.listen(
        this.label?.nativeElement,
        'click',
        this.onLabelClick
      );
    }

    let size = this.field?.elementAttr?.size;

    if (size?.includes('large') && this.labelPosition === 'top')
      this.renderer.addClass(this.element.nativeElement, 'me-label-large');

    if (this.field instanceof DxCheckBoxComponent) {
      this.renderer.addClass(this.element.nativeElement, 'me-label-option');

      if (this.field?.disabled) {
        this.renderer.addClass(this.element.nativeElement, 'me-label-disabled');
      }
    }

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
