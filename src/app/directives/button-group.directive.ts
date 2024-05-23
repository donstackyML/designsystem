import { Directive } from '@angular/core';
import { DxButtonGroupComponent } from 'devextreme-angular';
import { IconStoreService } from '../service/icon-store.service';
import { MeControlDirective } from './control.directive';

const DEFAULT_ICON_COLOR = '#ffffff';

@Directive({
  selector: '[meButtonGroup]',
})
export class MeButtonGroupDirective extends MeControlDirective {
  constructor(
    private component: DxButtonGroupComponent,
    iconStoreService: IconStoreService
  ) {
    super(iconStoreService);
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
          ${this.getIconAsString(item.icon, item.iconColor, item.iconSize)}
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

      if (item.icon) {
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
}
