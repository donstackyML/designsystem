import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DxTabPanelComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';

export type MeTabPanelStylingMode = 'inside' | 'outside';

@Directive({
  selector: '[meTabPanel]',
  host: {
    '[class.me-tabs-panel]': 'true',
    '[class.me-tabs-small]': 'size === "small"',
    '[class.me-tabs-medium]': 'size === "medium"',
    '[class.me-tabs-large]': 'size === "large"',
    '[class.dx-tabs-styling-mode-primary]': 'internalStylingMode === "primary"',
    '[class.dx-tabs-styling-mode-secondary]':
      'internalStylingMode === "secondary"',
    '[class.me-tabs-panel-rounded-borders]': 'roundedBorders',
    '[class.me-tabs-panel-content-border]': 'showContentBorder',
  },
})
export class MeTabPanelDirective implements OnInit {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() roundedBorders?: boolean = true;
  @Input() showContentBorder: boolean = true;

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
  private focusService: ComponentFocusService;
  constructor(
    elementRef: ElementRef,
    renderer: Renderer2,
    private tabPanel: DxTabPanelComponent
  ) {
    this.focusService = new ComponentFocusService(elementRef, renderer);
  }

  ngOnInit() {
    if (this.tabPanel?.instance) {
      this.tabPanel.instance.option('stylingMode', this.internalStylingMode);
    }
  }
}
