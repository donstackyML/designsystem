import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  Optional,
  AfterViewInit,
  OnDestroy, Self,
} from '@angular/core';
import { DxTabsComponent } from 'devextreme-angular';
import { Subscription } from 'rxjs';

export interface Tab {
  id: number;
  text?: string;
  icon?: string;
}

@Directive({
  selector: '[meTabs]'
})
export class MeTabsDirective implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() dataSource: Tab[] = [];
  @Input() selectedIndex: number = 0;
  @Input() scrollByContent: boolean = true;
  @Input() showNavButtons: boolean = false;
  @Input() width: string | number = 'auto';
  @Input() rtlEnabled: boolean = false;
  @Input() customClass: string = '';

  @Output() selectedIndexChange = new EventEmitter<number>();
  @Output() onItemClick = new EventEmitter<any>();

  private subscriptions: Subscription[] = [];

  constructor(
    private elementRef: ElementRef,
    @Self() @Optional() private dxTabsComponent: DxTabsComponent,
  ) {}

  ngOnInit() {
    this.applyStyles();
  }

  ngAfterViewInit() {
    this.initializeTabs();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['size'] || changes['customClass']) {
      this.applyStyles();
    }
    if (this.dxTabsComponent && this.dxTabsComponent.instance) {
      this.updateTabsProperties();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private applyStyles() {
    const element = this.elementRef.nativeElement;
    element.classList.remove('me-tabs-small', 'me-tabs-medium', 'me-tabs-large');
    element.classList.add('me-tabs', `me-tabs-${this.size}`);
    if (this.customClass) {
      element.classList.add(this.customClass);
    }
  }

  private initializeTabs() {
    this.updateTabsProperties();
    this.setupEventListeners();
  }

  private updateTabsProperties() {
    if (this.dxTabsComponent && this.dxTabsComponent.instance) {
      const instance = this.dxTabsComponent.instance;
      instance.option('dataSource', this.dataSource);
      instance.option('selectedIndex', this.selectedIndex);
      instance.option('scrollByContent', this.scrollByContent);
      instance.option('showNavButtons', this.showNavButtons);
      instance.option('width', this.width);
      instance.option('rtlEnabled', this.rtlEnabled);
    }
  }

  private setupEventListeners() {
    if (this.dxTabsComponent) {
      this.subscriptions.push(
        this.dxTabsComponent.onItemClick.subscribe((e) => {
          this.onItemClick.emit(e);
        })
      );

      this.subscriptions.push(
        this.dxTabsComponent.selectedIndexChange.subscribe((index: number) => {
          this.selectedIndexChange.emit(index);
        })
      );
    }
  }
}
