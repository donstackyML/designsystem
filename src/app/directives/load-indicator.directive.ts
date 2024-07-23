import {
  Directive,
  Input,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  Optional,
  Self,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { DxLoadIndicatorComponent } from 'devextreme-angular';

@Directive({
  selector: '[meLoadIndicator]',
  host: {
    '[class.me-load-indicator-small]': 'isSizeSmall',
    '[class.me-load-indicator-medium]': 'isSizeMedium',
    '[class.me-load-indicator-large]': 'isSizeLarge',
    '[class.customClass]': 'customClass',
  },
})
export class MeLoadIndicatorDirective implements AfterViewInit, OnChanges, OnDestroy {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() customClass: string = '';
  @Input() height: number | string | undefined;
  @Input() width: number | string | undefined;
  @Input() indicatorSrc?: string;
  @Input() hint?: string;
  @Input() elementAttr: any = {};
  @Input() rtlEnabled: boolean = false;
  @Input() visible: boolean = true;

  @Output() onContentReady = new EventEmitter<any>();
  @Output() onDisposing = new EventEmitter<any>();
  @Output() onInitialized = new EventEmitter<any>();
  @Output() onOptionChanged = new EventEmitter<any>();

  constructor(@Self() @Optional() private loadIndicator: DxLoadIndicatorComponent) {}

  ngAfterViewInit() {
    this.updateLoadIndicatorProperties();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.loadIndicator && this.loadIndicator.instance) {
      this.updateLoadIndicatorProperties();
    }
  }

  ngOnDestroy() {
    // Подписки удалять не нужно, если они выполняются через Angular директивы событий
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

  private updateLoadIndicatorProperties() {
    if (this.loadIndicator && this.loadIndicator.instance) {
      const instance = this.loadIndicator.instance;

      if (this.height !== undefined) {
        instance.option('height', this.height);
      }
      if (this.width !== undefined) {
        instance.option('width', this.width);
      }
      if (this.indicatorSrc) {
        instance.option('indicatorSrc', this.indicatorSrc);
      }
      if (this.hint) {
        instance.option('hint', this.hint);
      }
      instance.option('elementAttr', this.elementAttr);
      instance.option('rtlEnabled', this.rtlEnabled);
      instance.option('visible', this.visible);

    }
  }
}
