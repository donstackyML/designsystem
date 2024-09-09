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
  DxSwitchComponent,
  DxTextBoxComponent,
} from 'devextreme-angular';
import { MeEditorComponents, MeLabelDirection } from '../../types/types';

@Directive({
  selector: '[meLabel]',
})
export class MeLabelDirective implements OnInit, AfterContentInit, AfterContentChecked, OnDestroy {
  @ContentChild(DxTextBoxComponent) textBoxComponent?: DxTextBoxComponent;
  @ContentChild(DxSelectBoxComponent) selectBoxComponent?: DxSelectBoxComponent;
  @ContentChild(DxCheckBoxComponent) checkBoxComponent?: DxCheckBoxComponent;
  @ContentChild(DxSwitchComponent) switchComponent?: DxSwitchComponent;
  @Input() labelDirection: MeLabelDirection = 'row';
  @Input() width: string = '';
  field?: MeEditorComponents;
  isSwitch: boolean = false;
  unlistenLabel = () => {};

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'dx-widget');
    this.renderer.addClass(this.element.nativeElement, 'me-label');

    if (this.width) {
      this.renderer.setStyle(this.element.nativeElement, 'width', this.width);
    }

    if (this.labelDirection === 'column') {
      this.renderer.addClass(this.element.nativeElement, 'me-flex-column');
    }

    if (this.labelDirection === 'row') {
      this.renderer.addClass(this.element.nativeElement, 'me-flex-row');
    }
  }

  ngAfterContentInit(): void {
    this.field = this.textBoxComponent;
    this.field ||= this.selectBoxComponent;
    this.field ||= this.checkBoxComponent;
    this.field ||= this.switchComponent;

    this.unlistenLabel = this.renderer.listen(
      this.element?.nativeElement,
      'click',
      this.onLabelClick,
    );

    let size = this.field?.elementAttr?.size;

    if (size?.includes('large') && this.labelDirection === 'column')
      this.renderer.addClass(this.element.nativeElement, 'me-label-large');

    if (this.labelDirection === 'row') {
      if (size.includes('small'))
        this.renderer.addClass(this.element.nativeElement, 'me-label-row-small');
      if (size.includes('medium'))
        this.renderer.addClass(this.element.nativeElement, 'me-label-row-medium');
      if (size.includes('large'))
        this.renderer.addClass(this.element.nativeElement, 'me-label-row-large');
    }
  }

  ngAfterContentChecked(): void {
    if (!this.field?.isValid) {
      this.renderer.addClass(this.element.nativeElement, 'me-label-invalid');
    }
    if (this.field?.isValid) {
      this.renderer.removeClass(this.element.nativeElement, 'me-label-invalid');
    }

    this.isSwitch = this.field instanceof DxSwitchComponent;

    if (this.isSwitch) {
      if (this.field?.disabled) {
        this.renderer.addClass(this.element.nativeElement, 'me-label-disabled');
      } else {
        this.renderer.removeClass(this.element.nativeElement, 'me-label-disabled');
      }

      if (!this.field?.disabled && !this.field?.readOnly) {
        this.renderer.addClass(this.element.nativeElement, 'me-label-container');
      }
    }
  }

  ngOnDestroy(): void {
    this.unlistenLabel();
  }

  onLabelClick = (e: Event) => {
    if ((e.target as HTMLElement).classList.contains('me-label-container')) {
      if (this.field) {
        const instance = this.field.instance;
        instance.focus();

        if (this.isSwitch && !this.field?.disabled && !this.field?.readOnly) {
          instance.option({ value: !instance.option().value });
        }
      }
    }
  };
}
