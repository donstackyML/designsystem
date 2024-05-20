import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MeControlDirective } from './control.directive';
import { IconStoreService } from '../service/icon-store.service';
import { DxDropDownButtonComponent } from 'devextreme-angular';

const DEFAULT_ICON_COLOR = '#ffffff';

@Directive({
  selector: '[meDropDownButton]',
})
export class MeDropDownButtonDirective
  extends MeControlDirective
  implements OnInit
{
  @Input() icon: string = '';
  @Input() iconColor: string = '';
  @Input() iconSize: string = '';

  constructor(
    private element: ElementRef,
    private component: DxDropDownButtonComponent,
    private renderer: Renderer2,
    iconStoreService: IconStoreService
  ) {
    super(iconStoreService);
  }

  ngOnInit(): void {
    if (!this.iconColor) {
      console.log(this.type);
      if (this.type === 'normal' || this.stylingMode !== 'contained') {
        this.iconColor = `var(--button-${this.type}-icon-color)`;
      } else {
        this.iconColor = DEFAULT_ICON_COLOR;
      }

      console.log(this.iconColor);

      if (this.disabled) {
        this.iconColor = `var(--button-${this.type}-${this.stylingMode}-icon-disabled-color)`;
      }
    }

    this.renderer.addClass(this.element.nativeElement, 'me-dropdownbutton');

    this.renderer.addClass(
      this.element.nativeElement,
      `me-dropdownbutton-${this.size}`
    );

    this.component.icon = this.iconStoreService.getIcon(
      this.icon,
      this.iconColor,
      this.getIconSize(this.iconSize)
    );

    if (this.type === 'default') {
      this.renderer.addClass(this.element.nativeElement, 'dx-button-default');
    }
  }
}
