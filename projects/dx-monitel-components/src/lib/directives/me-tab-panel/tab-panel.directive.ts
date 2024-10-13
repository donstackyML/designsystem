import { Directive, Input, OnInit} from '@angular/core';
import {DxTabPanelComponent} from 'devextreme-angular';


@Directive({
  selector: '[meTabPanel]',
  host: {
    '[class.me-tabs-panel]': 'true',
    '[class.me-tabs-top]': 'position === "top"',
    '[class.me-tabs-bottom]': 'position === "bottom"',
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
export class MeTabPanelDirective implements OnInit {
  @Input() position: 'top' | 'bottom' = 'top';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() stylingMode: 'inside' | 'outside' = 'outside';
  @Input() tabsPosition: 'top' | 'bottom' | 'left'|  'right'= 'top';
  @Input() iconPosition: 'top' | 'start' | 'end' | 'bottom' = 'start';
  @Input() width: string | number = 'auto';

  constructor(private tabs: DxTabPanelComponent) {}

  ngOnInit() {
    this.tabs.tabsPosition = this.tabsPosition;
    this.tabs.iconPosition = this.iconPosition;
    this.tabs.width = this.width;
  }
}
