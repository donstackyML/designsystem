import {
  ContentChild,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DxButtonComponent } from 'devextreme-angular';
import { Icon, IconStoreService } from '../service/icon-store.service';

const DEFAULT_ICON_COLOR = '#000000';
const LARGE_ICON_SIZE = '16';
const LARGE_ICON_ONLY_SIZE = '14';
const DEFAULT_ICON_SIZE = '12';
const DEFAULT_ICON_ONLY_SIZE = '10';

type MeBtnSize = 'small' | 'normal' | 'large';

@Directive({
  selector: '[meButtonTest]',
})
export class MeButtonTestDirective implements OnInit {
  @Input() size: MeBtnSize = 'normal';
  @Input() text: string = '';
  @Input() leftIcon: string = '';
  @Input() rightIcon: string = '';
  @Input() iconOnly: string = '';
  @Input() leftIconName: string = '';
  @Input() rightIconName: string = '';
  @Input() iconSize: string = '';
  @Input() leftIconSize: string = '';
  @Input() rightIconSize: string = '';
  @Input() iconColor: string = '#fff';
  @Input() leftIconColor: string = '';
  @Input() rightIconColor: string = '';
  leftIconPath = this.getIconPath(this.leftIconName);
  rightIconPath = '';
  theme = 'light';
  icons: Icon;

  constructor(
    private element: ElementRef,
    private component: DxButtonComponent,
    private iconStoreService: IconStoreService,
    private renderer: Renderer2
  ) {
    this.icons = this.iconStoreService.getIcons();
  }

  @ContentChild(HTMLDivElement) template?: HTMLDivElement;

  ngOnInit(): void {
    // this.component.nativeElement.text = 'Test button';
    this.component.text = 'Custom text';
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
    console.log(this.component.text);
  }

  ngAfterContentChecked(): void {
    console.log(this.template);
  }

  getIconAsString(icon: string, iconColor: string, iconSize: string) {
    return icon
      ? this.icons[icon]
          .replaceAll('color', iconColor ? iconColor : DEFAULT_ICON_COLOR)
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
