import {Directive, Input, ElementRef, Renderer2, OnInit, OnChanges} from '@angular/core';
import DxLoadIndicator from 'devextreme/ui/load_indicator';

@Directive({
  selector: '[meLoadIndicator]',
  host: {
    '[class.me-load-indicator-small]': 'isSizeSmall',
    '[class.me-load-indicator-medium]': 'isSizeMedium',
    '[class.me-load-indicator-large]': 'isSizeLarge',
    '[class.me-load-indicator-color-default]': 'isColorDefault',
    '[class.me-load-indicator-color-accent]': 'isColorAccent',
    '[class.me-load-indicator-color-normal]': 'isColorNormal',
  },
})
export class MeLoadIndicatorDirective implements OnInit, OnChanges {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() color: 'normal' | 'default' | 'accent' = 'default';
  @Input() indicatorSrc!: string;

  private dxLoadIndicatorInstance!: DxLoadIndicator;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.dxLoadIndicatorInstance = new DxLoadIndicator(this.el.nativeElement, {
      indicatorSrc: this.indicatorSrc
    });
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

  get isColorDefault() {
    return this.color === 'default';
  }

  get isColorAccent() {
    return this.color === 'accent';
  }

  get isColorNormal() {
    return this.color === 'normal';
  }

  // Обновление индикатора при изменении свойства
  ngOnChanges() {
    if (this.dxLoadIndicatorInstance) {
      this.dxLoadIndicatorInstance.option('indicatorSrc', this.indicatorSrc);
    }
  }
}
