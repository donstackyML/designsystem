import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { DxButtonGroupComponent } from 'devextreme-angular';
import { MeButtonStyle, MeButtonType, MeSize } from '../types/types';
import { IconStoreService, MeIcon } from '../service/icon-store.service';
import { DxiButtonGroupItem } from 'devextreme-angular/ui/nested/base/button-group-item-dxi';
import { ThemesService } from '../service/themes.service';

const DEFAULT_ICON_COLOR = '#ffffff';
const LARGE_ICON_SIZE = '24';
const DEFAULT_ICON_SIZE = '20';

export interface MeButtonGroupItem extends Partial<DxiButtonGroupItem> {
  leftIcon?: string;
  leftIconColor?: string;
  iconColor?: string;
  leftIconSize?: string;
  iconSize?: string;
  iconOnly?: string;
  rightIcon?: string;
  rightIconColor?: string;
  rightIconSize?: string;
}

@Directive({
  selector: '[meButtonGroup]',
})
export class MeButtonGroupDirective {
  @Input() disabled: boolean = false;
  @Input() size: MeSize = 'medium';
  @Input() items: MeButtonGroupItem[] = [{}];
  @Input() text: string = '';
  @Input() type: MeButtonType = 'normal';
  @Input() stylingMode: MeButtonStyle = 'contained';

  icons: MeIcon;
  theme = 'light';

  constructor(
    private element: ElementRef,
    private component: DxButtonGroupComponent,
    private renderer: Renderer2,
    private themeService: ThemesService,
    private iconStoreService: IconStoreService
  ) {
    this.icons = this.iconStoreService.getIcons(true);
  }

  ngOnInit(): void {
    this.theme = this.themeService.theme;

    this.items.map((item, index) => {
      if (!this.items[index].iconColor) {
        if (
          this.stylingMode !== 'contained' ||
          this.items[index].type === 'normal'
        ) {
          this.items[
            index
          ].iconColor = `var(--button-${this.items[index].type}-icon-color)`;
        } else {
          this.items[index].iconColor = DEFAULT_ICON_COLOR;
        }

        if (this.disabled) {
          this.items[
            index
          ].iconColor = `var(--button-${this.items[index].type}-${this.stylingMode}-icon-disabled-color)`;
        }
      }

      item.template = `<div class="me-button-inner">${this.getIconAsString(
        this.items[index].leftIcon,
        this.items[index].leftIconColor
          ? this.items[index].leftIconColor
          : this.items[index].iconColor,
        this.items[index].leftIconSize
          ? this.items[index].leftIconSize
          : this.items[index].iconSize
      )}
          ${this.getIconAsString(
            this.items[index].iconOnly,
            this.items[index].iconColor,
            this.items[index].iconSize
          )}
          ${this.getText(index)}
          ${this.getIconAsString(
            this.items[index].rightIcon,
            this.items[index].rightIconColor
              ? this.items[index].rightIconColor
              : this.items[index].iconColor,
            this.items[index].rightIconSize
              ? this.items[index].rightIconSize
              : this.items[index].iconSize
          )}</div>`;
    });

    this.renderer.addClass(this.element.nativeElement, `me-button`);
    this.renderer.addClass(
      this.element.nativeElement,
      `me-button-${this.size}`
    );

    // if (this.type === 'warning') {
    //   this.renderer.addClass(this.element.nativeElement, `me-button-warning`);
    // }

    // if (this.items[index].iconOnly) {
    //   this.renderer.addClass(this.element.nativeElement, `me-button-icon-only`);
    // }

    // if (
    //   this.items[index].leftIcon ||
    //   this.items[index].rightIcon
    // ) {
    //   this.renderer.addClass(this.element.nativeElement, `me-button-icon`);
    // }
  }

  getIconAsString(icon?: string, iconColor = '', iconSize = '') {
    if (!icon) return '';
    if (this.icons.hasOwnProperty(icon)) {
      const iconName = <keyof MeIcon>icon;

      return this.icons[iconName]
        .replaceAll('color', iconColor)
        .replaceAll('iconSize', this.getIconSize(iconSize));
    } else {
      return icon
        .replaceAll('color', iconColor)
        .replaceAll('iconSize', this.getIconSize(iconSize));
    }
  }

  getIconSize(iconSize?: string) {
    let size = DEFAULT_ICON_SIZE;

    if (iconSize) {
      size = iconSize;
    } else if (this.size === 'large') {
      size = LARGE_ICON_SIZE;
    } else {
      size = DEFAULT_ICON_SIZE;
    }

    return size;
  }

  getText(index: number) {
    if (this.items[index].text) {
      return `<span class="dx-button-text">${this.items[index].text}</span>`;
    } else {
      return '';
    }
  }
}
