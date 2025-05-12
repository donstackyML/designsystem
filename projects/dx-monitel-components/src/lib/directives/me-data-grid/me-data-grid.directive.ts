import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChanges,
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
export class MeDataGridDirective
  implements AfterViewInit, OnDestroy, OnChanges
{
  @Input() size: MeSize = 'medium';
  @Input() columnHeaderStyles: { [key: string]: string } = {};

  private focusService: ComponentFocusService;

  constructor(
    private element: ElementRef,
    private component: DxDataGridComponent,
    private renderer: Renderer2
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

    this.applyColumnHeaderStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columnHeaderStyles']) {
      this.applyColumnHeaderStyles();
    }
  }

  private applyColumnHeaderStyles(): void {
    if (!this.columnHeaderStyles) return;

    const headerCells = this.element.nativeElement.querySelectorAll(
      'td[role="columnheader"]'
    );

    if (!headerCells || headerCells.length === 0) {
      setTimeout(() => this.applyColumnHeaderStyles(), 100);
      return;
    }

    headerCells.forEach((cell: Element) => {
      const ariaLabel = cell.getAttribute('aria-label');
      if (!ariaLabel) return;

      const match = ariaLabel.match(/Столбец\s+(.+)/);
      if (!match || !match[1]) return;

      const columnName = match[1].trim();
      const alignment = this.columnHeaderStyles[columnName];

      if (alignment) {
        this.renderer.addClass(cell, `grid-header-${alignment}`);
      }
    });
  }

  ngOnDestroy(): void {
    this.focusService.ngOnDestroy();
  }
}
