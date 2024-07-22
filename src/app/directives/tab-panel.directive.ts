import {
  Directive,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  Self,
  Optional
} from '@angular/core';
import { DxTabPanelComponent } from 'devextreme-angular';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[meTabPanel]',
  host: {
    '[class.customClass]': 'customClass',
  }
})
export class MeTabPanelDirective implements AfterViewInit, OnChanges, OnDestroy {
  @Input() customClass: string = '';
  @Input() height!: number | string;
  @Input() animationEnabled!: boolean;
  @Input() swipeEnabled!: boolean;
  @Input() dataSource!: any[];
  @Input() selectedIndex!: number | undefined;
  @Input() itemTitleTemplate: any;

  @Output() onItemClick = new EventEmitter<any>();
  @Output() onSelectionChanged = new EventEmitter<any>();
  @Output() onItemRendered = new EventEmitter<any>();

  private subscriptions: Subscription[] = [];

  constructor(
    @Self() @Optional() private dxTabPanelComponent: DxTabPanelComponent
  ) {}

  ngAfterViewInit() {
    this.initializeTabPanel();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.dxTabPanelComponent && this.dxTabPanelComponent.instance) {
      this.updateTabPanelProperties();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private initializeTabPanel() {
    this.updateTabPanelProperties();
    this.setupEventListeners();
  }

  private updateTabPanelProperties() {
    if (this.dxTabPanelComponent && this.dxTabPanelComponent.instance) {
      const instance = this.dxTabPanelComponent.instance;
      if (this.height !== undefined) {
        instance.option('height', this.height);
      }
      if (this.animationEnabled !== undefined) {
        instance.option('animationEnabled', this.animationEnabled);
      }
      if (this.swipeEnabled !== undefined) {
        instance.option('swipeEnabled', this.swipeEnabled);
      }
      if (this.dataSource !== undefined) {
        instance.option('dataSource', this.dataSource);
      }
      if (this.selectedIndex !== undefined) {
        instance.option('selectedIndex', this.selectedIndex);
      }
      if (this.itemTitleTemplate !== undefined) {
        instance.option('itemTitleTemplate', this.itemTitleTemplate);
      }
    }
  }

  private setupEventListeners() {
    if (this.dxTabPanelComponent) {
      this.subscriptions.push(
        this.dxTabPanelComponent.onItemClick.subscribe((e) => {
          this.onItemClick.emit(e);
        })
      );

      this.subscriptions.push(
        this.dxTabPanelComponent.onSelectionChanged.subscribe((e) => {
          this.onSelectionChanged.emit(e);
        })
      );

      this.subscriptions.push(
        this.dxTabPanelComponent.onItemRendered.subscribe((e) => {
          this.onItemRendered.emit(e);
        })
      );
    }
  }
}
