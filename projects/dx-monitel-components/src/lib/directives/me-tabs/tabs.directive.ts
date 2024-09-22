import { Directive, Input, OnInit } from '@angular/core';
import { DxTabsComponent } from 'devextreme-angular';

export interface Tab {
  id: number;
  text?: string;
  icon?: string;
}

@Directive({
  selector: '[meTabs]',
  host: {
    '[class.me-tabs]': 'true',
    '[class.me-tabs-top]': 'position === "top"',
    '[class.me-tabs-bottom]': 'position === "bottom"',
    '[class.me-tabs-horizontal]': 'orientation === "horizontal"',
    '[class.me-tabs-vertical]': 'orientation === "vertical"',
    '[class.me-tabs-small]': 'size === "small"',
    '[class.me-tabs-medium]': 'size === "medium"',
    '[class.me-tabs-large]': 'size === "large"',
    '[class.dx-tabs-styling-mode-primary]': 'stylingMode === "inside"',
    '[class.dx-tabs-styling-mode-secondary]': 'stylingMode === "outside"',
    '[class.me-tabs-icon-top]': 'iconPosition === "top"',
    '[class.me-tabs-icon-start]': 'iconPosition === "start"',
    '[class.me-tabs-icon-end]': 'iconPosition === "end"',
    '[class.me-tabs-icon-bottom]': 'iconPosition === "bottom"',
  },
})
export class MeTabsDirective implements OnInit {
  @Input() customClass: string = '';
  @Input() position: 'top' | 'bottom' = 'top';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() stylingMode: 'inside' | 'outside' = 'inside';
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() iconPosition: 'top' | 'start' | 'end' | 'bottom' = 'start';
  @Input() width: string | number = 'auto';

  constructor(private tabs: DxTabsComponent) {}

  ngOnInit() {
    this.tabs.orientation = this.orientation;
    this.tabs.iconPosition = this.iconPosition;
    this.tabs.width = this.width;
  }
}
