import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { DxTreeListComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';

@Directive({
  selector: '[meTreeList]',
  host: {
    '[class.me-tree-list]': 'true',
  },
})
export class MeTreeListDirective implements AfterViewInit {
  private focusService: ComponentFocusService;
  constructor(
    private element: ElementRef,
    private component: DxTreeListComponent,
    renderer: Renderer2
  ) {
    this.component.showBorders = true;
    this.component.showRowLines = true;
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.setAttribute('tabindex', '0');
    let toolbarElm: Element =
      this.element.nativeElement.querySelector('.dx-toolbar');
    if (toolbarElm) {
      toolbarElm.setAttribute('tabindex', '1');
      let widgets = toolbarElm.querySelectorAll('.dx-widget');
      if (widgets) {
        widgets.forEach((elm) => elm.setAttribute('tabindex', '1'));
      }
    }
  }
}
