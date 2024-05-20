import { Directive, Input } from '@angular/core';
import { DxButtonGroupComponent } from 'devextreme-angular';
import { MeButtonStyle, MeButtonType, MeSize } from '../types/types';
import { IconStoreService, MeIcon } from '../service/icon-store.service';
import { dxButtonGroupItem } from 'devextreme/ui/button_group';

const DEFAULT_ICON_COLOR = '#ffffff';
const LARGE_ICON_SIZE = '24';
const DEFAULT_ICON_SIZE = '20';

export interface MeButtonGroupItem extends Partial<dxButtonGroupItem> {
  leftIcon?: string;
  leftIconColor?: string;
  iconColor?: string;
  leftIconSize?: string;
  iconSize?: string;
  iconOnly?: string;
  rightIcon?: string;
  rightIconColor?: string;
  rightIconSize?: string;
  warningType?: boolean;
}

@Directive({
  selector: '[meButtonGroup]',
})
export class MeButtonGroupDirective {
  @Input() disabled: boolean = false;
  @Input() size: MeSize = 'medium';
  @Input() text: string = '';
  @Input() type: MeButtonType = 'normal';
  @Input() stylingMode: MeButtonStyle = 'contained';
  @Input() set items(value: MeButtonGroupItem[]) {
    this._items = JSON.parse(JSON.stringify(value));
  }
  get items(): MeButtonGroupItem[] {
    return this._items;
  }

  private _items: MeButtonGroupItem[] = [];
  icons: MeIcon;
  theme = 'light';

  constructor(
    private component: DxButtonGroupComponent,
    private iconStoreService: IconStoreService
  ) {
    this.icons = this.iconStoreService.getIcons(true);
  }

  ngOnInit(): void {
    this.component.items = this.items.map((item, index) => {
      if (!item.type) item.type = 'normal';

      if (!item.iconColor) {
        if (this.stylingMode !== 'contained' || item.type === 'normal') {
          if (item.warningType && this.stylingMode !== 'contained') {
            item.iconColor = `var(--button-warning-icon-color)`;
          } else if (item.warningType) {
            item.iconColor = DEFAULT_ICON_COLOR;
          } else {
            item.iconColor = `var(--button-${item.type}-icon-color)`;
          }
        } else {
          item.iconColor = DEFAULT_ICON_COLOR;
        }

        if (this.disabled) {
          item.iconColor = `var(--button-${
            item.warningType ? 'warning' : item.type
          }-${this.stylingMode}-icon-disabled-color)`;
        }
      }

      item.template = `<div class="me-button-inner">${this.getIconAsString(
        item.leftIcon,
        item.leftIconColor ? item.leftIconColor : item.iconColor,
        item.leftIconSize ? item.leftIconSize : item.iconSize
      )}
          ${this.getIconAsString(item.iconOnly, item.iconColor, item.iconSize)}
          ${this.getText(index)}
          ${this.getIconAsString(
            item.rightIcon,
            item.rightIconColor ? item.rightIconColor : item.iconColor,
            item.rightIconSize ? item.rightIconSize : item.iconSize
          )}</div>`;

      if (item.leftIcon || item.rightIcon) {
        item.elementAttr = {
          ...item.elementAttr,
          class: item.elementAttr?.['class']
            ? item.elementAttr?.['class'] + ' me-button-icon'
            : 'me-button-icon',
        };
      }

      item.elementAttr = {
        ...item.elementAttr,
        class: item.elementAttr?.['class']
          ? item.elementAttr?.['class'] + ` me-button me-button-${this.size}`
          : `me-button me-button-${this.size}`,
      };

      if (item.warningType) {
        item.elementAttr = {
          ...item.elementAttr,
          class: item.elementAttr?.['class']
            ? item.elementAttr?.['class'] + ' me-button-warning'
            : 'me-button-warning',
        };
      }

      if (item.iconOnly) {
        item.elementAttr = {
          ...item.elementAttr,
          class: item.elementAttr?.['class']
            ? item.elementAttr?.['class'] + ' me-button-icon-only'
            : 'me-button-icon-only',
        };
      }

      return item;
    });
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
