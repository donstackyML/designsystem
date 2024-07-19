import { DxTabsComponent } from 'devextreme-angular';
import { Subscription } from 'rxjs';

import {
  AfterViewInit,
  Directive,
  Input,
  OnDestroy,
  Optional,
  Self,
  SimpleChanges,
} from '@angular/core';

export interface Tab {
  id: number;
  text?: string;
  icon?: string;
}

enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

enum StylingModes {
  Outside = 'outside',
  Inside = 'inside',
}

@Directive({
  selector: '[meTabs]',
  host: {
    '[class.me-tabs]': 'true',
    '[class.custom-class]': 'customClass',
    '[class.me-tabs-top]': 'position === "top"',
    '[class.me-tabs-bottom]': 'position === "bottom"',
    '[class.me-tabs-small]': 'this.isSizeSmall',
    '[class.me-tabs-medium]': 'this.isSizeMedium',
    '[class.me-tabs-large]': 'this.isSizeLarge',
    '[class.me-tabs-outside]': 'this.isStylingModeOutside',
    '[class.me-tabs-inside]': 'this.isStylingModeInside',
  },
})
export class MeTabsDirective implements AfterViewInit, OnDestroy {
  @Input() customClass: string = '';
  @Input() position: 'top' | 'bottom' = 'top';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() stylingMode: 'outside' | 'inside' = 'outside';

  private subscriptions: Subscription[] = [];

  constructor(@Self() @Optional() private dxTabsComponent: DxTabsComponent) {}

  private get isSizeSmall(): boolean {
    return this.size === Sizes.Small;
  }

  private get isSizeMedium(): boolean {
    return this.size === Sizes.Medium;
  }

  private get isSizeLarge(): boolean {
    return this.size === Sizes.Large;
  }

  private get isStylingModeOutside(): boolean {
    return this.stylingMode === StylingModes.Outside;
  }

  private get isStylingModeInside(): boolean {
    return this.stylingMode === StylingModes.Inside;
  }

  ngAfterViewInit() {
    this.updateTabsProperties();
  }

  private updateTabsProperties() {
    if (this.dxTabsComponent && this.dxTabsComponent.instance) {
      const instance = this.dxTabsComponent.instance;
      instance.option('focusStateEnabled', true);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
