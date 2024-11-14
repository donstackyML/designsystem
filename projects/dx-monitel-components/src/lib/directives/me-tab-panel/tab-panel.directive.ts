import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MeFocusableDirective } from '../me-focusable/me-focusable.directive';
import { DxTabPanelComponent } from 'devextreme-angular';

// Определяем тип для стилей
export type MeTabPanelStylingMode = 'inside' | 'outside';

@Directive({
  selector: '[meTabPanel]',
  host: {
    '[class.me-tabs-panel]': 'true',
    '[class.me-tabs-small]': 'size === "small"',
    '[class.me-tabs-medium]': 'size === "medium"',
    '[class.me-tabs-large]': 'size === "large"',
    '[class.dx-tabs-styling-mode-primary]': 'internalStylingMode === "primary"',
    '[class.dx-tabs-styling-mode-secondary]': 'internalStylingMode === "secondary"',
  },
})
export class MeTabPanelDirective extends MeFocusableDirective implements OnInit {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Input() set styling(value: MeTabPanelStylingMode) {
    this._stylingMode = value;
    this.internalStylingMode = value === 'inside' ? 'primary' : 'secondary';

    if (this.tabPanel?.instance) {
      this.tabPanel.instance.option('stylingMode', this.internalStylingMode);
    }
  }
  get stylingMode(): MeTabPanelStylingMode {
    return this._stylingMode;
  }
  private _stylingMode: MeTabPanelStylingMode = 'outside';

  internalStylingMode: 'primary' | 'secondary' = 'secondary';

  constructor(
    elementRef: ElementRef,
    renderer: Renderer2,
    private tabPanel: DxTabPanelComponent
  ) {
    super(elementRef, renderer);
  }

  ngOnInit() {
    if (this.tabPanel?.instance) {
      this.tabPanel.instance.option('stylingMode', this.internalStylingMode);
    }
  }
}
