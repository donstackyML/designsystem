import {Directive, ElementRef, HostBinding, OnInit, Renderer2} from '@angular/core';
import { DxButtonGroupComponent } from 'devextreme-angular';
import { MeIconStoreService } from '../../service/icon-store.service';
import { MeControlDirective } from '../me-control/control.directive';
import { ComponentFocusService } from '../../service/component-focus.service';

const DEFAULT_ICON_COLOR = '#ffffff';

@Directive({
  selector: '[meButtonGroup]',
})
export class MeButtonGroupDirective
  extends MeControlDirective
  implements OnInit
{
  private focusService: ComponentFocusService;
  constructor(
    private component: DxButtonGroupComponent,
    private iconStore: MeIconStoreService,
    private renderer: Renderer2,
    private element: ElementRef
  ) {
    super();
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit(): void {
    this.component.items = this.items.map((item, index) => {
      // Преобразуем существующие типы в meType
      if (!item.meType) {
        if (item.warningType) {
          item.meType = 'warning';
        } else {
          item.meType = item.type || 'normal';
        }
      }

      this.renderer.addClass(this.element.nativeElement, `me-button`);
      this.renderer.addClass(
        this.element.nativeElement,
        `me-button-${this.size}`
      );

      if (item.meType === 'warning') {
        item.elementAttr = {
          ...item.elementAttr,
          class: item.elementAttr?.['class']
            ? item.elementAttr?.['class'] + ' me-button-warning'
            : 'me-button-warning',
        };
      }

      // Определение цвета иконки
      if (!item.iconColor) {
        if (this.stylingMode !== 'contained' || item.meType === 'normal') {
          if (item.meType === 'warning' && this.stylingMode !== 'contained') {
            item.iconColor = `var(--button-warning-icon-color)`;
          } else if (item.meType === 'warning') {
            item.iconColor = DEFAULT_ICON_COLOR;
          } else {
            item.iconColor = `var(--button-${item.meType}-icon-color)`;
          }
        } else {
          item.iconColor = DEFAULT_ICON_COLOR;
        }

        if (this.disabled) {
          item.iconColor = `var(--button-${item.meType}-${this.stylingMode}-icon-disabled-color)`;
        }
      }

      if (!item.template) {
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
      }

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
