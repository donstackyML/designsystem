import { DxAccordionComponent } from 'devextreme-angular/ui/accordion';
import { Subscription } from 'rxjs';

import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self,
  SimpleChanges,
} from '@angular/core';


@Directive({
  selector: '[meAccordion]'
})
export class MeAccordionDirective implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() dataSource: any[] = []
  @Input() selectedIndex: number = 0;
  @Input() multiple: boolean = false;
  @Input() collapsible: boolean = false;
  @Input() animationDuration: number = 300;
  @Input() width: string | number = 'auto';
  @Input() rtlEnabled: boolean = false;
  @Input() customClass: string = '';
  @Input() focusStateEnabled: boolean = true;
  @Input() disabled: boolean = false;
  @Input() noDataText: string = 'No data to display';

  @Output() onItemClick = new EventEmitter<any>();
  @Output() onSelectionChanged = new EventEmitter<any>();
  @Output() onItemRendered = new EventEmitter<any>();

  private subscriptions: Subscription[] = [];

  constructor(
    private elementRef: ElementRef,
    @Self() @Optional() private dxAccordionComponent: DxAccordionComponent,
  ) {}

  ngOnInit() {
    this.applyStyles();
  }

  ngAfterViewInit() {
    this.initializeAccordion();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['size'] || changes['customClass']) {
      this.applyStyles();
    }
    if (this.dxAccordionComponent && this.dxAccordionComponent.instance) {
      this.updateAccordionProperties();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private applyStyles() {
    const element = this.elementRef.nativeElement;
    element.classList.remove('me-accordion-small', 'me-accordion-medium', 'me-accordion-large');
    element.classList.add('me-accordion', `me-accordion-${this.size}`);
    if (this.customClass) {
      element.classList.add(this.customClass);
    }
  }

  private initializeAccordion() {
    this.updateAccordionProperties();
    this.setupEventListeners();
  }

  private updateAccordionProperties() {
    if (this.dxAccordionComponent && this.dxAccordionComponent.instance) {
      const instance = this.dxAccordionComponent.instance;
      instance.option('dataSource', this.dataSource);
      instance.option('selectedIndex', this.selectedIndex);
      instance.option('multiple', this.multiple);
      instance.option('collapsible', this.collapsible);
      instance.option('animationDuration', this.animationDuration);
      instance.option('width', this.width);
      instance.option('rtlEnabled', this.rtlEnabled);
      instance.option('focusStateEnabled', this.focusStateEnabled);
      instance.option('disabled', this.disabled);
      instance.option('noDataText', this.noDataText);
    }
  }

  private setupEventListeners() {
    if (this.dxAccordionComponent) {
      this.subscriptions.push(
        this.dxAccordionComponent.onItemClick.subscribe((e) => {
          this.onItemClick.emit(e);
        })
      );

      this.subscriptions.push(
        this.dxAccordionComponent.onSelectionChanged.subscribe((e) => {
          this.onSelectionChanged.emit(e);
        })
      );

      this.subscriptions.push(
        this.dxAccordionComponent.onItemRendered.subscribe((e) => {
          this.styleRenderedItem(e.itemElement);
          this.onItemRendered.emit(e);
        })
      );
    }
  }

  private styleRenderedItem(itemElement: HTMLElement) {
    itemElement.classList.add('me-accordion-item');

    const titleElement = itemElement.querySelector('.dx-accordion-item-title');
    if (titleElement) {
      titleElement.classList.add('me-accordion-item-title');
    }

    const contentElement = itemElement.querySelector('.dx-accordion-item-body');
    if (contentElement) {
      contentElement.classList.add('me-accordion-item-content');
    }
  }
  expandItem(index: number) {
    if (this.dxAccordionComponent && this.dxAccordionComponent.instance) {
      this.dxAccordionComponent.instance.expandItem(index);
    }
  }

  collapseItem(index: number) {
    if (this.dxAccordionComponent && this.dxAccordionComponent.instance) {
      this.dxAccordionComponent.instance.collapseItem(index);
    }
  }

  updateDimensions() {
    if (this.dxAccordionComponent && this.dxAccordionComponent.instance) {
      this.dxAccordionComponent.instance.updateDimensions();
    }
  }
}
