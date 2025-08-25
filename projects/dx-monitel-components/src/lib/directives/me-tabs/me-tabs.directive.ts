import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DxTabsComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
export interface Tab {
  id: number;
  text?: string;
  icon?: string;
}

export type MeTabsStylingMode = 'inside' | 'outside';

@Directive({
  selector: '[meTabs]',
  host: {
    '[class.me-tabs]': 'true',
    '[class.me-tabs-top]': 'position === "bottom"',
    '[class.me-tabs-bottom]': 'position === "top"',
    '[class.me-tabs-horizontal]': 'orientation === "horizontal"',
    '[class.me-tabs-vertical]': 'orientation === "vertical"',
    '[class.me-tabs-small]': 'size === "small"',
    '[class.me-tabs-medium]': 'size === "medium"',
    '[class.me-tabs-large]': 'size === "large"',
    '[class.dx-tabs-styling-mode-primary]': 'internalStylingMode === "primary"',
    '[class.dx-tabs-styling-mode-secondary]':
      'internalStylingMode === "secondary"',
    '[class.me-tabs-style-inside]': 'stylingMode === "inside"',
    '[class.me-tabs-style-outside]': 'stylingMode === "outside"',
    '[class.me-tabs-icon-top]': 'iconPosition === "top"',
    '[class.me-tabs-icon-start]': 'iconPosition === "start"',
    '[class.me-tabs-icon-end]': 'iconPosition === "end"',
    '[class.me-tabs-icon-bottom]': 'iconPosition === "bottom"',
    '[class.me-tabs-rounded-borders]': 'roundedBorders',
  },
})
export class MeTabsDirective implements OnInit {
  @Input() position: 'top' | 'bottom' = 'top';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() iconPosition: 'top' | 'start' | 'end' | 'bottom' = 'start';
  @Input() stretchTabs: boolean = false;
  @Input() roundedBorders?: boolean = true;

  @Input() width: string | number = 'auto';

  @Input() customClass: string = '';

  @Input() set stylingMode(value: MeTabsStylingMode) {
    this._stylingMode = value;
    this.internalStylingMode = value === 'inside' ? 'primary' : 'secondary';
  }
  get stylingMode(): MeTabsStylingMode {
    return this._stylingMode;
  }

  private _stylingMode: MeTabsStylingMode = 'inside';
  private focusService: ComponentFocusService;

  internalStylingMode: 'primary' | 'secondary' = 'primary';

  constructor(
    elementRef: ElementRef,
    private tabs: DxTabsComponent,
    renderer: Renderer2
  ) {
    this.focusService = new ComponentFocusService(elementRef, renderer);
  }

  ngOnInit() {
    this.tabs.orientation = this.orientation;
    this.tabs.iconPosition = this.iconPosition;

    if (this.width !== 'auto' || this.stretchTabs) {
      this.tabs.width = this.width;
    }

    if (this.tabs.instance) {
      this.tabs.instance.option('stylingMode', this.internalStylingMode);
    }
  }
}
