import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { MeSize } from '../../types/types';
import { ComponentFocusService } from '../../service/component-focus.service';
import { DxListComponent, DxTreeViewComponent } from 'devextreme-angular';

@Directive({
  selector: '[meTreeView]',
  host: {
    '[class.me-tree-view]': 'true',
    '[class.me-tree-view-small]': 'isSizeSmall',
    '[class.me-tree-view-large]': 'isSizeLarge',
  },
})
export class MeTreeViewDirective {
  @Input() size: Exclude<MeSize, 'medium'> = 'large';

  private focusService: ComponentFocusService;
  constructor(
    private element: ElementRef,
    private component: DxTreeViewComponent,
    renderer: Renderer2
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
  }

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }
}
