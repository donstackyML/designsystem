import { Directive, Input } from '@angular/core';
import {MeSize} from "../../types/types";


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
export class MeTabsDirective {
  @Input() customClass: string = '';
  @Input() position: 'top' | 'bottom' = 'top';
  @Input() size: MeSize = 'medium';
  @Input() stylingMode: 'outside' | 'inside' = 'outside';

  protected get isSizeSmall(): boolean {
    return this.size === Sizes.Small;
  }

  protected get isSizeMedium(): boolean {
    return this.size === Sizes.Medium;
  }

  protected get isSizeLarge(): boolean {
    return this.size === Sizes.Large;
  }

  protected get isStylingModeOutside(): boolean {
    return this.stylingMode === StylingModes.Outside;
  }

  protected get isStylingModeInside(): boolean {
    return this.stylingMode === StylingModes.Inside;
  }
}
