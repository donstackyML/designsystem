import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

import { MeSize } from '../../types/types';
import { ComponentFocusService } from '../../service/component-focus.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Directive({
  selector: '[meDataGrid]',
  host: {
    '[class.me-data-grid]': 'true',
    '[class.me-data-grid-small]': 'isSizeSmall',
    '[class.me-data-grid-medium]': 'isSizeMedium',
    '[class.me-data-grid-large]': 'isSizeLarge',
  },
})
export class MeDataGridDirective implements AfterViewInit, OnDestroy {
  @Input() size: MeSize = 'medium';

  private focusService: ComponentFocusService;
  constructor(
    private element: ElementRef,
    private component: DxDataGridComponent,
    renderer: Renderer2
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
  }

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeLarge() {
    return this.size === 'large';
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

  ngOnDestroy(): void {
    this.focusService.ngOnDestroy();
  }
}
