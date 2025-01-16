import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFocusService } from '../../service/component-focus.service';
import { DxListComponent, DxMenuComponent } from 'devextreme-angular';

@Directive({
  selector: '[meList]',
  host: {
    '[class.me-list]': 'true',
    '[class.me-list-small]': 'isSizeSmall',
    '[class.me-list-medium]': 'isSizeMedium',
    '[class.me-list-large]': 'isSizeLarge',
  },
})
export class MeListDirective {
  private focusService: ComponentFocusService;
  constructor(
    private element: ElementRef,
    private component: DxListComponent,
    renderer: Renderer2
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
  }
}
