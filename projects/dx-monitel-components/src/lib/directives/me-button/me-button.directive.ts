import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { DxButtonComponent } from 'devextreme-angular';
import { MeIconStoreService } from '../../service/icon-store.service';
import { MeControlDirective } from '../me-control/me-control.directive';

const DEFAULT_ICON_COLOR = '#ffffff';

@Directive({
  selector: '[meButton]',
  host: {
    '[class.me-button]': 'true',
    '[class.me-button-small]': 'size === "small"',
    '[class.me-button-medium]': 'size === "medium"',
    '[class.me-button-large]': 'size === "large"',
    '[class.me-button-warning]': 'type === "warning"',
    '[class.me-button-icon-only]': '!!iconOnly',
    '[class.me-button-icon]': 'leftIcon || rightIcon',
    '[class.me-state-selected]': 'isSelected',
  },
})
export class MeButtonDirective extends MeControlDirective implements OnInit {
  @Input() leftIcon: string = '';
  @Input() rightIcon: string = '';
  @Input() iconOnly: string = '';
  @Input() iconSize: string = '';
  @Input() leftIconSize: string = '';
  @Input() rightIconSize: string = '';
  @Input() iconColor: string = '';
  @Input() leftIconColor: string = '';
  @Input() rightIconColor: string = '';
  @Input() selectionStateEnable: boolean = false;
  @Input() isSelected: boolean = false;
  @Input() template: string | Function | HTMLElement = 'content';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private component: DxButtonComponent,
    private iconStore: MeIconStoreService
  ) {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('size' in changes) {
      this.setTemplate();
    }
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

    this.setTemplate();

    if (this.selectionStateEnable) {
      this.renderer.listen(this.element.nativeElement, 'click', () => {
        this.isSelected = !this.isSelected;
      });
    }
  }

  protected setTemplate() {
    if (this.template === 'content' && !this.component.icon) {
      this.component.template = `
        <div class="me-button-inner">
          ${this.iconStore.getIcon({
            icon: this.leftIcon,
            color: this.leftIconColor || this.iconColor,
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
            color: this.rightIconColor || this.iconColor,
            size: this.getIconSize(this.rightIconSize),
          })}
        </div>`;
    }
  }
}
