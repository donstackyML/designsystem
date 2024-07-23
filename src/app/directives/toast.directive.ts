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
import { DxToastComponent } from 'devextreme-angular';
import { Subscription } from 'rxjs';
import { AnimationConfig } from 'devextreme/animation/fx';
import DevExpress from 'devextreme/bundles/dx.all';

@Directive({
  selector: '[meToast]',
  exportAs: 'meToastControl',
  host: {
    '[class.customClass]': 'customClass',
  }
})
export class MeToastDirective implements AfterViewInit, OnChanges, OnDestroy {
  @Input() customClass: string = '';
  @Input() message: string = '';
  @Input() displayTime: number = 2000;
  @Input() position: DevExpress.PositionConfig | string = 'bottom right';
  @Input() animation: { hide?: AnimationConfig; show?: AnimationConfig } = {
    show: { type: 'fade', duration: 400, from: 0, to: 1 },
    hide: { type: 'fade', duration: 400, from: 1, to: 0 }
  };

  @Output() onShowing = new EventEmitter<any>();
  @Output() onShown = new EventEmitter<any>();
  @Output() onHiding = new EventEmitter<any>();
  @Output() onHidden = new EventEmitter<any>();

  private subscriptions: Subscription[] = [];

  constructor(
    @Self() @Optional() private dxToastComponent: DxToastComponent
  ) {}

  ngAfterViewInit() {
    this.initializeToast();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.dxToastComponent?.instance) {
      this.updateToastProperties(changes);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private initializeToast() {
    this.updateToastProperties();
    this.setupEventListeners();
  }

  private updateToastProperties(changes?: SimpleChanges) {
    if (this.dxToastComponent?.instance) {
      const instance = this.dxToastComponent.instance;

      if (!changes || changes['message']) {
        instance.option('message', this.message);
      }

      if (!changes || changes['displayTime']) {
        instance.option('displayTime', this.displayTime);
      }

      if (!changes || changes['position']) {
        instance.option('position', this.getPositionConfig(this.position));
      }

      if (!changes || changes['animation']) {
        instance.option('animation', this.animation);
      }
    }
  }

  private setupEventListeners() {
    if (this.dxToastComponent) {
      this.subscribeToEvent(this.dxToastComponent.onShowing, this.onShowing);
      this.subscribeToEvent(this.dxToastComponent.onShown, this.onShown);
      this.subscribeToEvent(this.dxToastComponent.onHiding, this.onHiding);
      this.subscribeToEvent(this.dxToastComponent.onHidden, this.onHidden);
    }
  }

  private subscribeToEvent(dxEvent: any, emitter: EventEmitter<any>) {
    this.subscriptions.push(
      dxEvent.subscribe((e: any) => emitter.emit(e))
    );
  }

  private getPositionConfig(position: DevExpress.PositionConfig | string): DevExpress.PositionConfig {
    if (typeof position === 'string') {
      const [vertical, horizontal] = position.split(' ');
      return {
        my: { x: this.convertToHorizontalAlignment(horizontal), y: this.convertToVerticalAlignment(vertical) },
        at: { x: this.convertToHorizontalAlignment(horizontal), y: this.convertToVerticalAlignment(vertical) },
        of: window
      };
    }
    return position;
  }

  private convertToHorizontalAlignment(alignment: string): DevExpress.common.HorizontalAlignment {
    switch (alignment) {
      case 'left':
      case 'center':
      case 'right':
        return alignment as DevExpress.common.HorizontalAlignment;
      default:
        throw new Error(`Invalid horizontal alignment: ${alignment}`);
    }
  }

  private convertToVerticalAlignment(alignment: string): DevExpress.common.VerticalAlignment {
    switch (alignment) {
      case 'top':
      case 'center':
      case 'bottom':
        return alignment as DevExpress.common.VerticalAlignment;
      default:
        throw new Error(`Invalid vertical alignment: ${alignment}`);
    }
  }

  public showToast() {
    this.dxToastComponent?.instance?.show();
  }

  public hideToast() {
    this.dxToastComponent?.instance?.hide();
  }
}
