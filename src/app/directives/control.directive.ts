import { Directive, Input } from '@angular/core';
import { IconStoreService, MeIcon } from '../service/icon-store.service';
import { MeButtonStyle, MeButtonType, MeSize } from '../types/types';
import { MeButtonGroupItem } from '../types/types';

const LARGE_ICON_SIZE = '24';
const DEFAULT_ICON_SIZE = '20';

@Directive({
  selector: '[control]',
})
export class MeControlDirective {
  @Input() disabled: boolean = false;
  @Input() type: MeButtonType = 'normal';
  @Input() stylingMode: MeButtonStyle = 'contained';
  @Input() size: MeSize = 'medium';
  @Input() text: string = '';
  @Input() set items(value: MeButtonGroupItem[]) {
    this._items = JSON.parse(JSON.stringify(value));
  }
  get items(): MeButtonGroupItem[] {
    return this._items;
  }
  protected _items: MeButtonGroupItem[] = [];
  icons: MeIcon;

  constructor(protected iconStoreService: IconStoreService) {
    this.icons = this.iconStoreService.getIcons(true);
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

  getText(index?: number) {
    if (typeof index === 'number' && this.items[index].text) {
      return `<span class="dx-button-text">${this.items[index].text}</span>`;
    }

    if (this.text) {
      return `<span class="dx-button-text">${this.text}</span>`;
    } else {
      return '';
    }
  }
}
