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
  private labelElement?: HTMLElement;
  private unlistenLabel = () => {};

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initializeBaseStyles();
    this.createLabelElement();
  }

  private initializeBaseStyles(): void {
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

  private createLabelElement(): void {
    const textNode = Array.from<ChildNode>(this.element.nativeElement.childNodes)
      .find((node): node is Text =>
        node.nodeType === Node.TEXT_NODE &&
        node instanceof Text &&
        node.textContent?.trim() !== ''
      );

    if (textNode && textNode.textContent) {
      this.labelElement = this.renderer.createElement('span');
      this.renderer.addClass(this.labelElement, 'me-label-text');
      this.renderer.setStyle(this.labelElement, 'cursor', 'pointer');

      const text = this.renderer.createText(textNode.textContent.trim());
      this.renderer.appendChild(this.labelElement, text);

      this.renderer.insertBefore(this.element.nativeElement, this.labelElement, textNode);
      this.renderer.removeChild(this.element.nativeElement, textNode);
    }
  }

  ngAfterContentInit(): void {
    this.initializeField();
    this.setupEventListener();
    this.applySizeStyles();
  }

  private initializeField(): void {
    this.field = this.textBoxComponent;
    this.field ||= this.selectBoxComponent;
    this.field ||= this.checkBoxComponent;
    this.field ||= this.switchComponent;
  }

  private setupEventListener(): void {
    if (this.labelElement) {
      this.unlistenLabel = this.renderer.listen(
        this.labelElement,
        'click',
        this.onLabelClick
      );
    }
  }

  private applySizeStyles(): void {
    if (!this.field) return;

    const size = this.field.elementAttr?.['size'] || '';

    if (size && this.labelDirection === 'column' && size.includes('large')) {
      this.renderer.addClass(this.element.nativeElement, 'me-label-large');
    }

    if (this.labelDirection === 'row' && size) {
      if (size.includes('small')) {
        this.renderer.addClass(this.element.nativeElement, 'me-label-row-small');
      }
      if (size.includes('medium')) {
        this.renderer.addClass(this.element.nativeElement, 'me-label-row-medium');
      }
      if (size.includes('large')) {
        this.renderer.addClass(this.element.nativeElement, 'me-label-row-large');
      }
    }
  }

  ngAfterContentChecked(): void {
    this.updateValidationState();
    this.updateSwitchState();
  }

  private updateValidationState(): void {
    if (!this.field?.isValid) {
      this.renderer.addClass(this.element.nativeElement, 'me-label-invalid');
    }
    if (this.field?.isValid) {
      this.renderer.removeClass(this.element.nativeElement, 'me-label-invalid');
    }
  }

  private updateSwitchState(): void {
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

  onLabelClick = (e: Event): void => {
    const target = e.target as HTMLElement;
    const isLabelClick = target.classList.contains('me-label-text');

    if (isLabelClick && this.field && !this.field?.disabled && !this.field?.readOnly) {
      const instance = this.field.instance;
      instance.focus();
    }
  };

  ngOnDestroy(): void {
    this.unlistenLabel();
  }
}
