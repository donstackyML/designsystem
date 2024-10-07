import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DxButtonComponent } from 'devextreme-angular';
import { MeIconStoreService } from '../service/icon-store.service';
import { MeControlDirective } from './control.directive';

const DEFAULT_ICON_COLOR = '#ffffff';

@Directive({
  selector: '[meButton]',
  host: {
    '[class]': 'customClasses',
  },
})
export class ButtonDirective extends MeControlDirective implements OnInit, OnDestroy {
  @Input() leftIcon: string = '';
  @Input() rightIcon: string = '';
  @Input() iconOnly: string = '';
  @Input() iconSize: string = '';
  @Input() leftIconSize: string = '';
  @Input() rightIconSize: string = '';
  @Input() iconColor: string = '#18181A';
  @Input() leftIconColor: string = '';
  @Input() rightIconColor: string = '';
  @Input() selectionStateEnable: boolean = false;
  @Input() isSelected: boolean = false;
  private customClasses = 'me-button';
  private unlistenClickFn?: () => void;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private component: DxButtonComponent,
    private iconStore: MeIconStoreService,
  ) {
    super();
  }

  ngOnInit(): void {
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
        ${this.iconStore.getIcon({
          icon: this.leftIcon,
          color: this.leftIconColor ? this.leftIconColor : this.iconColor,
          size: this.getIconSize(this.leftIconSize),
        })}
        ${this.iconStore.getIcon({
          icon: this.iconOnly,
          color: this.iconColor,
          size: this.getIconSize(this.iconSize),
        })}
        ${this.getText()}
        ${this.iconStore.getIcon({
          icon: this.rightIcon,
          color: this.rightIconColor ? this.rightIconColor : this.iconColor,
          size: this.getIconSize(this.rightIconSize),
        })}
      </div>`;

    this.customClasses += ` me-button-${this.size}`;

    if (this.type === 'warning') {
      this.customClasses += ` me-button-warning`;
    }

    if (this.iconOnly) {
      this.customClasses += ` me-button-icon-only`;
    }

    if (this.leftIcon || this.rightIcon) {
      this.customClasses += ` me-button-icon`;
    }

    if (this.isSelected) {
      this.customClasses += ` me-state-selected`;
    }

    if (this.selectionStateEnable) {
      this.unlistenClickFn = this.renderer.listen(this.element.nativeElement, 'click', () => {
        this.isSelected = !this.isSelected;

        if (this.isSelected) {
          this.renderer.addClass(this.element.nativeElement, `me-state-selected`);
        } else {
          this.renderer.removeClass(this.element.nativeElement, `me-state-selected`);
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.unlistenClickFn) {
      this.unlistenClickFn();
    }
  }

  // ngAfterViewInit(): void {
  //   if (this.leftIconName) {
  //     this.leftIconPath = this.getIconPath(this.leftIconName);

  //     let leftIcon = this.createIconElement(this.leftIconPath);
  //     this.element.nativeElement.firstElementChild.firstElementChild.prepend(
  //       leftIcon
  //     );
  //   }

  //   if (this.rightIconName) {
  //     this.rightIconPath = this.getIconPath(this.rightIconName);

  //     let rightIcon = this.createIconElement(this.rightIconPath);
  //     this.element.nativeElement.firstElementChild.firstElementChild.append(
  //       rightIcon
  //     );
  //   }
  // }

  // ngAfterViewChecked(): void {
  //   const theme = this.themeService.theme;

  //   const meBtnInner =
  //     this.element.nativeElement.firstElementChild.firstElementChild;

  //   if (this.theme !== theme) {
  //     this.theme = theme;

  //     if (this.leftIconName) {
  //       this.leftIconPath = this.getIconPath(this.leftIconName);
  //       const leftIcon = this.createIconElement(this.leftIconPath);

  //       meBtnInner.firstElementChild.remove();
  //       meBtnInner.prepend(leftIcon);
  //     }

  //     if (this.rightIconName) {
  //       this.rightIconPath = this.getIconPath(this.rightIconName);
  //       const rightIcon = this.createIconElement(this.rightIconPath);

  //       meBtnInner.lastElementChild.remove();
  //       meBtnInner.append(rightIcon);
  //     }
  //   }
  // }
}
