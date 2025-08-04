import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meDataGrid]',
  host: {
    '[class.me-data-grid]': 'true',
    '[class.me-data-grid-show-borders]': 'showBorders',
    '[class.me-data-grid-show-row-lines]': 'showRowLines',
    '[class.me-data-grid-small]': 'isSizeSmall',
    '[class.me-data-grid-medium]': 'isSizeMedium',
    '[class.me-data-grid-large]': 'isSizeLarge',
    '[class.me-data-grid-cell-small]': 'isCellSizeSmall',
    '[class.me-data-grid-cell-medium]': 'isCellSizeMedium',
  },
})
export class MeDataGridDirective implements AfterViewInit, OnDestroy {
  @Input() size: MeSize = 'medium';
  @Input() cellSize: MeSize = 'medium';
  @Input() headerAlign: { [colKey: string]: 'left' | 'right' } = {};
  @Input() showRowLines = true;
  @Input() showBorders = true;

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

  get isCellSizeSmall(): boolean {
    return this.cellSize === 'small';
  }

  get isCellSizeMedium(): boolean {
    return this.cellSize === 'medium';
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

    this.setupHeaderStyles();
  }

  ngOnDestroy(): void {
    this.focusService.ngOnDestroy();
  }

  private setupHeaderStyles(): void {
    this.component.onContentReady.subscribe(() => {
      this.updateColumnHeaders();
    });
  }

  private updateColumnHeaders(): void {
    const headerCells = this.element.nativeElement.querySelectorAll(
      '.dx-header-row td[role="columnheader"]'
    );

    headerCells.forEach((cell: Element) => {
      const ariaLabel = cell.getAttribute('aria-label');
      if (!ariaLabel) return;

      const columnName = this.extractColumnName(ariaLabel);

      if (!columnName || !this.headerAlign[columnName]) return;

      const alignment = this.headerAlign[columnName];
      const contentElement = cell.querySelector('.dx-datagrid-text-content');

      if (contentElement) {
        this.clearAlignmentClasses(contentElement);
        this.renderer.addClass(contentElement, `grid-header-${alignment}`);
      }
    });
  }

  private extractColumnName(ariaLabel: string): string | null {
    const match = ariaLabel.match(/^Столбец\s+(.+)$/);
    return match ? match[1].trim() : null;
  }

  private clearAlignmentClasses(element: Element): void {
    const classes = ['grid-header-left', 'grid-header-right'];
    classes.forEach((cls) => this.renderer.removeClass(element, cls));
  }
}
