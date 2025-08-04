import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import { DxTreeListComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meTreeList]',
  host: {
    '[class.me-tree-list]': 'true',
    '[class.me-tree-list-show-borders]': 'showBorders',
    '[class.me-tree-list-show-row-lines]': 'showRowLines',
    '[class.me-tree-list-cell-small]': 'isCellSizeSmall',
    '[class.me-tree-list-cell-medium]': 'isCellSizeMedium',
  },
})
export class MeTreeListDirective implements AfterViewInit {
  private focusService: ComponentFocusService;

  @Input() headerAlign: { [colKey: string]: 'left' | 'right' } = {};
  @Input() cellSize: MeSize = 'medium';
  @Input() showRowLines = true;
  @Input() showBorders = true;

  constructor(
    private element: ElementRef,
    private component: DxTreeListComponent,
    private renderer: Renderer2
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

    this.setupHeaderStyles();
  }

  private setupHeaderStyles(): void {
    this.component.onContentReady.subscribe(() => {
      const headerCells = this.element.nativeElement.querySelectorAll(
        '.dx-header-row td[role="columnheader"]'
      );

      headerCells.forEach((cell: Element) => {
        const ariaLabel = cell.getAttribute('aria-label');
        if (!ariaLabel) return;

        const columnName = this.extractColumnName(ariaLabel);

        if (!columnName || !this.headerAlign[columnName]) return;

        const alignment = this.headerAlign[columnName];
        const contentElement = cell.querySelector('.dx-treelist-text-content');

        if (contentElement) {
          this.clearAlignmentClasses(contentElement);
          this.renderer.addClass(
            contentElement,
            `treelist-header-${alignment}`
          );
        }
      });
    });
  }

  private extractColumnName(ariaLabel: string): string | null {
    const match = ariaLabel.match(/^Столбец\s+(.+)$/);
    return match ? match[1].trim() : null;
  }

  private clearAlignmentClasses(element: Element): void {
    const alignmentClasses = ['treelist-header-left', 'treelist-header-right'];
    alignmentClasses.forEach((cls) => this.renderer.removeClass(element, cls));
  }

  get isCellSizeSmall(): boolean {
    return this.cellSize === 'small';
  }

  get isCellSizeMedium(): boolean {
    return this.cellSize === 'medium';
  }
}
