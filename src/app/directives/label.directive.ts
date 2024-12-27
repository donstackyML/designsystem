import {
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
import { MeEditorComponents, MeLabelDirection } from '../types/types';

@Directive({
  selector: '[meLabel]',
})
export class MeLabelDirective implements OnInit, AfterContentInit, OnDestroy {
  @ContentChild(DxTextBoxComponent) textBoxComponent?: DxTextBoxComponent;
  @ContentChild(DxSelectBoxComponent) selectBoxComponent?: DxSelectBoxComponent;
  @ContentChild(DxCheckBoxComponent) checkBoxComponent?: DxCheckBoxComponent;
  @ContentChild(DxSwitchComponent) switchComponent?: DxSwitchComponent;

  @Input() labelDirection: MeLabelDirection = 'row';
  @Input() width: string = '';
  @Input() labelText: string = '';

  private field?: MeEditorComponents;
  private labelElement?: HTMLElement;
  private unlistenLabel = () => {};

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initializeStyles();
    this.createLabelElement();
  }

  ngAfterContentInit(): void {
    this.initializeField();
    this.setupEventListeners();
    this.applyFieldSpecificStyles();
  }

  ngOnDestroy(): void {
    this.unlistenLabel();
  }

  private initializeStyles(): void {
    const baseClasses = ['dx-widget', 'me-label'];
    baseClasses.forEach((className) => {
      this.renderer.addClass(this.element.nativeElement, className);
    });

    if (this.width) {
      this.renderer.setStyle(this.element.nativeElement, 'width', this.width);
    }

    const directionClass = this.labelDirection === 'column' ? 'me-flex-column' : 'me-flex-row';
    this.renderer.addClass(this.element.nativeElement, directionClass);
  }

  private createLabelElement(): void {
    // Создаем элемент label с нужными стилями
    this.labelElement = this.renderer.createElement('span');
    this.renderer.addClass(this.labelElement, 'me-label-text');
    this.renderer.setStyle(this.labelElement, 'cursor', 'pointer');

    // Находим первый текстовый узел и заменяем его на label
    const firstChild = this.element.nativeElement.firstChild;
    if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
      const text = this.renderer.createText(firstChild.textContent?.trim() || '');
      this.renderer.appendChild(this.labelElement, text);
      this.renderer.removeChild(this.element.nativeElement, firstChild);
      this.renderer.insertBefore(
        this.element.nativeElement,
        this.labelElement,
        this.element.nativeElement.firstChild,
      );
    }
  }

  private initializeField(): void {
    this.field =
      this.textBoxComponent ||
      this.selectBoxComponent ||
      this.checkBoxComponent ||
      this.switchComponent;
  }

  private setupEventListeners(): void {
    if (this.labelElement) {
      this.unlistenLabel = this.renderer.listen(this.labelElement, 'click', this.handleLabelClick);
    }
  }

  private applyFieldSpecificStyles(): void {
    if (!this.field) return;

    const size = this.field.elementAttr?.size;

    // Применяем стили в зависимости от размера
    if (size) {
      this.applySizeSpecificStyles(size);
    }

    // Добавляем стили для disabled состояния
    this.renderer.addClass(this.element.nativeElement, 'me-label-container');
    this.updateDisabledState();
  }

  private applySizeSpecificStyles(size: string): void {
    if (this.labelDirection === 'column' && size.includes('large')) {
      this.renderer.addClass(this.element.nativeElement, 'me-label-large');
      return;
    }

    if (this.labelDirection === 'row') {
      const sizeMap = {
        small: 'me-label-row-small',
        medium: 'me-label-row-medium',
        large: 'me-label-row-large',
      };

      Object.entries(sizeMap).forEach(([sizeKey, className]) => {
        if (size.includes(sizeKey)) {
          this.renderer.addClass(this.element.nativeElement, className);
        }
      });
    }
  }

  private updateDisabledState(): void {
    if (this.field?.disabled) {
      this.renderer.addClass(this.element.nativeElement, 'me-label-disabled');
      this.renderer.setStyle(this.labelElement, 'cursor', 'default');
    }
  }

  private handleLabelClick = (e: Event): void => {
    if (!this.field || this.field.disabled || this.field.readOnly) return;

    const instance = this.field.instance;
    instance.focus();
  };
}
