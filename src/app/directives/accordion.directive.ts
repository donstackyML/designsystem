import { DxAccordionComponent } from 'devextreme-angular/ui/accordion';
import { Subscription } from 'rxjs';

import {
  AfterViewInit,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  Self,
  SimpleChanges,
} from '@angular/core';

enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

@Directive({
  selector: '[meAccordion]',
  host: {
    '[class.me-accordion-small]': 'isSizeSmall',
    '[class.me-accordion-medium]': 'isSizeMedium',
    '[class.me-accordion-large]': 'isSizeLarge',
    '[class.customClass]': 'customClass',
  },
})
export class MeAccordionDirective
  implements AfterViewInit, OnChanges, OnDestroy
{
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() customClass: string = '';

  @Output() onItemClick = new EventEmitter<any>();
  @Output() onSelectionChanged = new EventEmitter<any>();
  @Output() onItemRendered = new EventEmitter<any>();

  private subscriptions: Subscription[] = [];

  constructor(
    @Self() @Optional() private dxAccordionComponent: DxAccordionComponent
  ) {}

  ngAfterViewInit() {
    this.initializeAccordion();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.dxAccordionComponent && this.dxAccordionComponent.instance) {
      this.updateAccordionProperties();
    }
  }

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private initializeAccordion() {
    this.updateAccordionProperties();
    this.setupEventListeners();
  }

  private updateAccordionProperties() {
    if (this.dxAccordionComponent && this.dxAccordionComponent.instance) {
      const instance = this.dxAccordionComponent.instance;
      instance.option('size', this.size);
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
