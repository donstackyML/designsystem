import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Renderer2,
} from '@angular/core';
import { DxListComponent, DxTreeListComponent } from 'devextreme-angular';
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
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit(): void {
    this.applyInitialSettings();
  }
  ngAfterViewInit(): void {
    this.element.nativeElement.setAttribute('tabindex', '1');
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

  private applyInitialSettings() {
    this.component.instance.option('showBorders', true);
    this.component.instance.option('showRowLines', true);
  }
}
