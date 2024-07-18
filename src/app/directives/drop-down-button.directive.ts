import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MeControlDirective } from './control.directive';
import { MeIconStoreService } from '../service/icon-store.service';
import { DxDropDownButtonComponent } from 'devextreme-angular';
import { MeCommonType, MeScrollbarShowType } from '../types/types';

const DEFAULT_ICON_COLOR = '#ffffff';

@Directive({
  selector: '[meDropDownButton]',
})
export class MeDropDownButtonDirective extends MeControlDirective implements OnInit {
  @Input() icon: string = '';
  @Input() iconColor: string = '';
  @Input() iconSize: string = '';
  @Input() splitButton: boolean = false;
  @Input() wrapperAttr: MeCommonType = {};
  @Input() showScrollbar: MeScrollbarShowType = 'always';
  @Input() dropDownOptions: MeCommonType = {};

  constructor(
    private element: ElementRef,
    private component: DxDropDownButtonComponent,
    private renderer: Renderer2,
    private iconStore: MeIconStoreService,
  ) {
    super();
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

    this.renderer.addClass(this.element.nativeElement, 'me-dropdownbutton');

    this.renderer.addClass(this.element.nativeElement, `me-dropdownbutton-${this.size}`);

    this.component.icon = this.iconStore.getIcon({
      icon: this.icon,
      color: this.iconColor,
      size: this.getIconSize(this.iconSize),
    });

    if (this.type === 'default') {
      this.renderer.addClass(this.element.nativeElement, 'dx-button-default');
    }

    if (this.splitButton) {
      this.renderer.addClass(this.element.nativeElement, 'me-split-button');
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
  }
}
