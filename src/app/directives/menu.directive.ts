import { Directive, Input, OnInit } from '@angular/core';
import { DxMenuComponent } from 'devextreme-angular';
import { MeSize } from '../types/types';

@Directive({
  selector: '[meMenu]',
})
export class MeMenuDirective implements OnInit {
  @Input() cssClass?: string = '';
  @Input() size: MeSize = 'large';

  constructor(private component: DxMenuComponent) {}

  ngOnInit(): void {
    this.component.cssClass = `${this.cssClass}  me-menu-${this.size} me-menu me-context-menu`;
  }
}
