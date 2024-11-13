import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { DxTabsComponent } from 'devextreme-angular';
import { FocusManagerService } from '../../service/keyboard-navigation.service';
export interface Tab {
  id: number;
  text?: string;
  icon?: string;
}
// Определяем собственный тип для стилей
export type MeTabsStylingMode = 'inside' | 'outside';

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
    // Обновляем классы для стилизации
    '[class.dx-tabs-styling-mode-primary]': 'internalStylingMode === "primary"',
    '[class.dx-tabs-styling-mode-secondary]':
      'internalStylingMode === "secondary"',
    '[class.me-tabs-style-inside]': 'stylingMode === "inside"',
    '[class.me-tabs-style-outside]': 'stylingMode === "outside"',
    '[class.me-tabs-icon-top]': 'iconPosition === "top"',
    '[class.me-tabs-icon-start]': 'iconPosition === "start"',
    '[class.me-tabs-icon-end]': 'iconPosition === "end"',
    '[class.me-tabs-icon-bottom]': 'iconPosition === "bottom"',
    '[style.min-height.px]': '50',
  },
})
export class MeTabsDirective implements OnInit {
  @Input() customClass: string = '';
  @Input() position: 'top' | 'bottom' = 'top';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  // Обновляем определение stylingMode
  @Input() set stylingMode(value: MeTabsStylingMode) {
    this._stylingMode = value;
    // Конвертируем наш stylingMode в формат, понятный DevExtreme
    this.internalStylingMode = value === 'inside' ? 'primary' : 'secondary';
  }
  get stylingMode(): MeTabsStylingMode {
    return this._stylingMode;
  }
  private _stylingMode: MeTabsStylingMode = 'inside';

  // Внутреннее свойство для DevExtreme tabs
  internalStylingMode: 'primary' | 'secondary' = 'primary';

  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() iconPosition: 'top' | 'start' | 'end' | 'bottom' = 'start';
  @Input() width: string | number = 'auto';
  @Input() stretchTabs: boolean = false;

  constructor(
    private tabs: DxTabsComponent,
    private elementRef: ElementRef,
    private focusManager: FocusManagerService
  ) {}

  ngOnInit() {
    this.tabs.orientation = this.orientation;
    this.tabs.iconPosition = this.iconPosition;

    if (this.width !== 'auto' || this.stretchTabs) {
      this.tabs.width = this.width;
    }

    // Устанавливаем стиль для DevExtreme компонента
    if (this.tabs.instance) {
      this.tabs.instance.option('stylingMode', this.internalStylingMode);
    }

    this.focusManager.monitorFocus(this.elementRef).subscribe();
  }
}
