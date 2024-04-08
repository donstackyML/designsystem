import {
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DxButtonComponent } from 'devextreme-angular';
import { Icon, IconStoreService } from '../service/icon-store.service';
import { ThemesService } from '../service/themes.service';
import { MeSize, MeButtonStyle, MeButtonType } from '../types/types';

const DEFAULT_ICON_COLOR = '#ffffff';
const LARGE_ICON_SIZE = '16';
const LARGE_ICON_ONLY_SIZE = '14';
const DEFAULT_ICON_SIZE = '12';
const DEFAULT_ICON_ONLY_SIZE = '10';

@Directive({
  selector: '[meButton]',
})
export class ButtonDirective
  implements OnInit, AfterViewInit, AfterViewChecked
{
  @Input() disabled: boolean = false;
  @Input() type: MeButtonType = 'normal';
  @Input() stylingMode: MeButtonStyle = 'contained';
  @Input() text: string = '';
  @Input() size: MeSize = 'medium';
  @Input() leftIcon: string = '';
  @Input() rightIcon: string = '';
  @Input() iconOnly: string = '';
  @Input() leftIconName: string = '';
  @Input() rightIconName: string = '';
  @Input() iconSize: string = '';
  @Input() leftIconSize: string = '';
  @Input() rightIconSize: string = '';
  @Input() iconColor: string = '';
  @Input() leftIconColor: string = '';
  @Input() rightIconColor: string = '';
  @Input() selectionStateEnable: boolean = false;
  @Input() isSelected: boolean = false;
  leftIconPath = '';
  rightIconPath = '';
  theme = 'light';
  icons: Icon;

  constructor(
    private element: ElementRef,
    private component: DxButtonComponent,
    private renderer: Renderer2,
    private themeService: ThemesService,
    private iconStoreService: IconStoreService
  ) {
    this.icons = this.iconStoreService.getIcons();
  }

  ngOnInit(): void {
    this.theme = this.themeService.theme;

    if (!this.iconColor) {
      if (this.stylingMode !== 'contained' || this.type === 'normal') {
        this.iconColor = `var(--button-${this.type}-icon-color)`;
      } else {
        this.iconColor = DEFAULT_ICON_COLOR;
      }

      if (this.disabled) {
        this.iconColor = `var(--button-${this.type}-${this.stylingMode}-icon-disabled-color)`;
      }
    }

    this.component.template = `
      <div class="me-button-inner">
        ${this.getIconAsString(
          this.leftIcon,
          this.leftIconColor ? this.leftIconColor : this.iconColor,
          this.leftIconSize ? this.leftIconSize : this.iconSize
        )}
        ${this.getIconAsString(this.iconOnly, this.iconColor, this.iconSize)}
        ${this.getText()}
        ${this.getIconAsString(
          this.rightIcon,
          this.rightIconColor ? this.rightIconColor : this.iconColor,
          this.rightIconSize ? this.rightIconSize : this.iconSize
        )}
      </div>`;

    this.renderer.addClass(this.element.nativeElement, `me-button`);
    this.renderer.addClass(
      this.element.nativeElement,
      `me-button-${this.size}`
    );

    if (this.type === 'warning') {
      this.renderer.addClass(this.element.nativeElement, `me-button-warning`);
    }

    if (this.iconOnly) {
      this.renderer.addClass(this.element.nativeElement, `me-button-icon-only`);
    }

    if (this.isSelected) {
      this.renderer.addClass(this.element.nativeElement, `me-state-selected`);
    }

    if (this.selectionStateEnable) {
      this.renderer.listen(this.element.nativeElement, 'click', () => {
        this.isSelected = !this.isSelected;

        if (this.isSelected) {
          this.renderer.addClass(
            this.element.nativeElement,
            `me-state-selected`
          );
        } else {
          this.renderer.removeClass(
            this.element.nativeElement,
            `me-state-selected`
          );
        }
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.leftIconName) {
      this.leftIconPath = this.getIconPath(this.leftIconName);

      let leftIcon = this.createIconElement(this.leftIconPath);
      this.element.nativeElement.firstElementChild.firstElementChild.prepend(
        leftIcon
      );
    }

    if (this.rightIconName) {
      this.rightIconPath = this.getIconPath(this.rightIconName);

      let rightIcon = this.createIconElement(this.rightIconPath);
      this.element.nativeElement.firstElementChild.firstElementChild.append(
        rightIcon
      );
    }
  }

  ngAfterViewChecked(): void {
    const theme = this.themeService.theme;

    const meBtnInner =
      this.element.nativeElement.firstElementChild.firstElementChild;

    if (this.theme !== theme) {
      this.theme = theme;

      if (this.leftIconName) {
        this.leftIconPath = this.getIconPath(this.leftIconName);
        const leftIcon = this.createIconElement(this.leftIconPath);

        meBtnInner.firstElementChild.remove();
        meBtnInner.prepend(leftIcon);
      }

      if (this.rightIconName) {
        this.rightIconPath = this.getIconPath(this.rightIconName);
        const rightIcon = this.createIconElement(this.rightIconPath);

        meBtnInner.lastElementChild.remove();
        meBtnInner.append(rightIcon);
      }
    }
  }

  getIconAsString(icon: string, iconColor: string, iconSize: string) {
    return icon
      ? this.icons[icon]
          .replaceAll('color', iconColor)
          .replaceAll('iconSize', this.getIconSize(iconSize))
      : '';
  }

  getIconSize(iconSize?: string) {
    let size = DEFAULT_ICON_SIZE;

    if (iconSize) {
      size = iconSize;
    } else if (this.size === 'large' && this.iconOnly) {
      size = LARGE_ICON_ONLY_SIZE;
    } else if (this.iconOnly) {
      size = DEFAULT_ICON_ONLY_SIZE;
    } else if (this.size === 'large') {
      size = LARGE_ICON_SIZE;
    }

    return size;
  }

  createIconElement(iconPath: string) {
    if (iconPath) {
      let icon = this.renderer.createElement('img');
      let path = iconPath;
      this.renderer.setAttribute(icon, 'src', path);
      return icon;
    } else {
      return '';
    }
  }

  getText() {
    if (this.text) {
      return `<span class="dx-button-text">${this.text}</span>`;
    } else {
      return '';
    }
  }

  getIconPath(iconPath: string) {
    return `assets/images/icons/${this.theme}/${iconPath}`;
  }
}
