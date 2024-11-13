import { Directive, Input } from '@angular/core';
import { MeButtonStyle, MeButtonType, MeSize } from '../../types/types';
import { MeButtonGroupItem } from '../../types/types';

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
  @Input({
    transform: (originalItems: MeButtonGroupItem[]) =>
      structuredClone(originalItems),
  })
  items: MeButtonGroupItem[] = [];

  cloneItems(originalItems: MeButtonGroupItem[]) {
    return structuredClone(originalItems);
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
