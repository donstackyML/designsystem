import { Directive, OnInit } from '@angular/core';
import { DxButtonGroupComponent } from 'devextreme-angular';
import { MeIconStoreService } from '../service/icon-store.service';
import { MeControlDirective } from './control.directive';

const DEFAULT_ICON_COLOR = '#ffffff';

@Directive({
  selector: '[meButtonGroup]',
})
export class MeButtonGroupDirective extends MeControlDirective implements OnInit {
  constructor(private component: DxButtonGroupComponent, private iconStore: MeIconStoreService) {
    super();
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
          item.iconColor = `var(--button-${item.warningType ? 'warning' : item.type}-${
            this.stylingMode
          }-icon-disabled-color)`;
        }
      }

      item.template = `<div class="me-button-inner">${this.iconStore.getIcon({
        icon: item.leftIcon,
        color: item.leftIconColor ? item.leftIconColor : item.iconColor,
        size: this.getIconSize(item.leftIconSize),
      })}
          ${this.iconStore.getIcon({
            icon: item.icon,
            color: item.iconColor,
            size: this.getIconSize(item.iconSize),
          })}
          ${this.getText(index)}
          ${this.iconStore.getIcon({
            icon: item.rightIcon,
            color: item.rightIconColor ? item.rightIconColor : item.iconColor,
            size: this.getIconSize(item.rightIconSize),
          })}</div>`;

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
