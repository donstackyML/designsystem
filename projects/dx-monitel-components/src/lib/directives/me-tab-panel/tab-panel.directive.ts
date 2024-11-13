import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MeFocusableDirective } from '../me-focusable/me-focusable.directive';

@Directive({
  selector: '[meTabPanel]',
  host: {
    '[class.me-tabs-panel]': 'true',
    '[class.me-tabs-small]': 'size === "small"',
    '[class.me-tabs-medium]': 'size === "medium"',
    '[class.me-tabs-large]': 'size === "large"',
    '[class.dx-tabs-styling-mode-primary]': 'stylingMode === "inside"',
    '[class.dx-tabs-styling-mode-secondary]': 'stylingMode === "outside"',
  },
})
export class MeTabPanelDirective extends MeFocusableDirective {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() stylingMode: 'inside' | 'outside' = 'outside';

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
