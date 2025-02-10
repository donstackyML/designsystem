import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DxDropDownButtonComponent } from 'devextreme-angular';
import { MeIconStoreService } from '../service/icon-store.service';
import { MeCommonType, MeScrollbarShowType } from '../types/types';
import { MeControlDirective } from './control.directive';
import { ComponentFocusService } from 'projects/dx-monitel-components/src/lib/service/component-focus.service';

const DEFAULT_ICON_COLOR = '#ffffff';

@Directive({
  selector: '[meDropDownButton]',
  host: {
    '[class]': 'customClasses',
  },
})
export class MeDropDownButtonDirective extends MeControlDirective implements OnInit {
  @Input() icon: string = '';
  @Input() iconColor: string = '';
  @Input() iconSize: string = '';
  @Input() splitButton: boolean = false;
  @Input() wrapperAttr: MeCommonType = {};
  @Input() showScrollbar: MeScrollbarShowType = 'always';
  @Input() dropDownOptions: MeCommonType = {};
  @Input() useItemTextAsTitle: boolean = false;
  private customClasses: string = `me-dropdownbutton`;

  private focusService: ComponentFocusService;
  constructor(
    private component: DxDropDownButtonComponent,
    private iconStore: MeIconStoreService,
    private renderer: Renderer2,
    private element: ElementRef
  ) {
    super();
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit(): void {
    if (!this.iconColor) {
      if (this.type === 'normal' || this.stylingMode !== 'contained') {
        this.iconColor = `var(--button-${this.type}-icon-color)`;
      } else {
        this.iconColor = DEFAULT_ICON_COLOR;
      }

      if (this.disabled) {
        this.iconColor = `var(--button-${this.type}-${this.stylingMode}-icon-disabled-color)`;
      }
    }

    this.customClasses += ` me-dropdownbutton-${this.size}`;

    this.component.icon = this.iconStore.getIcon({
      icon: this.icon,
      color: this.iconColor,
      size: this.getIconSize(this.iconSize),
    });

    if (this.type === 'default') {
      this.customClasses += ' dx-button-default';
    }

    if (this.splitButton) {
      this.customClasses += ' me-split-button';
    }

    const popupWrapperClasses = `${
      this.wrapperAttr['class'] || ''
    } me-scroll-view me-dropdownlist-${this.size} me-dropdownlist ${
      this.showScrollbar === 'always' ? `me-scrollbar-visible` : ``
    }`;

    this.component.dropDownOptions = {
      wrapperAttr: {
        ...this.wrapperAttr,
        class: popupWrapperClasses,
      },
      ...this.dropDownOptions,
    };

    this.component.useItemTextAsTitle = this.useItemTextAsTitle;
  }
}
