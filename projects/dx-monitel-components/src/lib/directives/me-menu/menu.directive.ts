import {
  Directive,
  HostListener,
  Input,
  Renderer2,
  inject, OnInit,
} from '@angular/core';
import {MeOrientation, MeSize} from '../../types/types';
import {DxMenuComponent} from "devextreme-angular";

@Directive({
  selector: '[meMenu]',
})
export class MeMenuDirective implements OnInit {
  @Input() cssClass?: string = '';
  @Input() size: MeSize = 'large';
  @Input() orientation: MeOrientation = 'horizontal';

  constructor(private component: DxMenuComponent) {}

  ngOnInit(): void {
    let menuClasses = `${this.cssClass} me-menu-${this.size} me-menu me-context-menu me-menu-submenu me-menu-submenu-${this.size}`;

    if (this.orientation === 'horizontal') menuClasses += ' me-menu-horizontal';
    if (this.orientation === 'vertical') menuClasses += ' me-menu-vertical';

    this.component.cssClass = menuClasses;
  }
}
