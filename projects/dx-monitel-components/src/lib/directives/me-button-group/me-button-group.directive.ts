import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DxButtonGroupComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeIconStoreService } from '../../service/icon-store.service';
import { MeControlDirective } from '../me-control/me-control.directive';
import { MeButtonGroupItem } from 'src/app/types/types';

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

  ngOnChanges(changes: any) {
    if ('size' in changes) {
      this.setItems();
    }
  }

  ngOnInit(): void {
    this.setItems();
  }

  protected getIconColor(item: MeButtonGroupItem) {
    if (item.iconColor) return item.iconColor;
    if (this.disabled)
      return `var(--button-${item.meType}-${this.stylingMode}-icon-disabled-color)`;
    if (this.stylingMode === 'contained' && item.meType !== 'normal')
      return DEFAULT_ICON_COLOR;

    return `var(--button-${item.meType}-icon-color)`;
  }

  protected setItems() {
    this.component.items = this.items.map((item, index) => {
      const itemClasses = ['me-button', `me-button-${this.size}`];
      const returnedItem = {
        ...item,
        // Преобразуем существующие типы в meType
        meType:
          item.meType ?? (item.warningType ? 'warning' : item.type ?? 'normal'),
        elementAttr: item.elementAttr ? { ...item.elementAttr } : {},
      };

      this.renderer.addClass(this.element.nativeElement, `me-button`);
      this.renderer.addClass(
        this.element.nativeElement,
        `me-button-${this.size}`
      );

      // Определение цвета иконки
      returnedItem.iconColor = this.getIconColor(returnedItem);

      if (!returnedItem.template) {
        returnedItem.template = `
        <div class="me-button-inner">
          ${this.iconStore.getIcon({
            icon: returnedItem.leftIcon,
            color: returnedItem.leftIconColor
              ? returnedItem.leftIconColor
              : returnedItem.iconColor,
            size: this.getIconSize(returnedItem.leftIconSize),
          })}
          ${this.iconStore.getIcon({
            icon: returnedItem.icon,
            color: returnedItem.iconColor,
            size: this.getIconSize(returnedItem.iconSize),
          })}
          ${this.getText(index)}
          ${this.iconStore.getIcon({
            icon: returnedItem.rightIcon,
            color: returnedItem.rightIconColor
              ? returnedItem.rightIconColor
              : returnedItem.iconColor,
            size: this.getIconSize(returnedItem.rightIconSize),
          })}
        </div>`;
      }

      if (returnedItem.elementAttr?.['class']) {
        itemClasses.push(item.elementAttr?.['class']);
      }
      if (returnedItem.leftIcon || returnedItem.rightIcon) {
        itemClasses.push('me-button-icon');
      }
      if (returnedItem.warningType) {
        itemClasses.push('me-button-warning');
      }
      if (returnedItem.icon) {
        itemClasses.push('me-button-icon-only');
      }

      returnedItem.elementAttr['class'] = itemClasses.join(' ');

      return returnedItem;
    });
  }
}
