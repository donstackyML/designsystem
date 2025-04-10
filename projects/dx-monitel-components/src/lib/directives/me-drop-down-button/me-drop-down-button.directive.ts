import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DxDropDownButtonComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeIconStoreService } from '../../service/icon-store.service';

import { NestedListItemDividerService } from '../../service/nested-list-item-divider.service';
import { MeCommonType, MeScrollbarShowType } from '../../types/types';
import { MeControlDirective } from '../me-control/me-control.directive';

const DEFAULT_ICON_COLOR = 'currentColor';

@Directive({
  selector: '[meDropDownButton]',
  host: {
    '[class.me-dropdownbutton]': 'true',
    '[class.me-dropdownbutton-small]': 'isSizeSmall',
    '[class.me-dropdownbutton-medium]': 'isSizeMedium',
    '[class.me-dropdownbutton-large]': 'isSizeLarge',
  },
})
export class MeDropDownButtonDirective
  extends MeControlDirective
  implements OnInit, OnDestroy {
  @Input() icon: string = '';
  @Input() iconColor: string = '';
  @Input() iconSize: string = '';
  @Input() wrapperAttr: MeCommonType = {};
  @Input() showScrollbar: MeScrollbarShowType = 'always';
  @Input() dropDownOptions: MeCommonType = {};
  @Input() dividersVisibility: 'none' | 'all' | 'auto' = 'auto';

  private focusService: ComponentFocusService;

  constructor(
    private element: ElementRef,
    private component: DxDropDownButtonComponent,
    private renderer: Renderer2,
    private iconStore: MeIconStoreService,
    private dividerService: NestedListItemDividerService
  ) {
    super();
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnDestroy(): void {
    this.focusService.ngOnDestroy();
  }

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }

  ngOnInit(): void {
    this.setIconColor();
    this.addClasses();
    this.setIconSize();
    this.setComponentIcon();
    this.setDropDownOptions();
  }

  private setIconColor(): void {
    if (!this.iconColor) {
      this.iconColor = this.stylingMode !== 'contained'
        ? `var(--button-${this.component.type}-icon-color)`
        : DEFAULT_ICON_COLOR;

      if (this.disabled) {
        this.iconColor = `var(--button-${this.type}-${this.stylingMode}-icon-disabled-color)`;
      }
    }
  }

  private addClasses(): void {
    this.renderer.addClass(this.element.nativeElement, 'me-dropdownbutton');
    this.renderer.addClass(
      this.element.nativeElement,
      `me-dropdownbutton-${this.size}`
    );

    if (this.type === 'default') {
      this.renderer.addClass(this.element.nativeElement, 'dx-button-default');
    }
  }

  private setIconSize(): void {
    if (this.isSizeLarge) {
      this.iconSize = 'large';
    }
  }

  private setComponentIcon(): void {
    this.component.icon = this.iconStore.getIcon({
      icon: this.icon,
      color: this.iconColor,
      size: this.getIconSize(this.iconSize),
    });
  }

  private setDropDownOptions(): void {
    const popupWrapperClasses = `${this.wrapperAttr['class'] || ''} me-scroll-view me-dropdownlist-${this.size} me-dropdownlist ${this.showScrollbar === 'always' ? 'me-scrollbar-visible' : ''
      }`;

    this.component.dropDownOptions = {
      wrapperAttr: {
        ...this.wrapperAttr,
        class: `${popupWrapperClasses} me-dropdown-button-popup`,
      },
      position: {
        my: 'left top',
        at: 'left bottom',
        offset: { y: 4 },
        collision: 'fit flip',
        of: this.element.nativeElement,
      },
      ...this.dropDownOptions,
      contentTemplate: this.createContentTemplate.bind(this),
    };
  }

  private createContentTemplate(contentElement: HTMLElement): void {
    contentElement.classList.add(`me-dropdownbutton-list-${this.size}`);
    this.dividerService.addDividers(
      contentElement,
      '.dx-list-item',
      this.dividersVisibility,
      this.component.items || this.component.dataSource || []
    );
  }
}