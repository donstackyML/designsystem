import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Input,
} from '@angular/core';
import { DxTreeListComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { Column } from 'devextreme/ui/tree_list';

type AlignedTreeListColumn = {
  headerAlign?: 'left' | 'right';
} & Column;

@Directive({
  selector: '[meTreeList]',
  host: {
    '[class.me-tree-list]': 'true',
  },
})
export class MeTreeListDirective implements AfterViewInit {
  private focusService: ComponentFocusService;

  @Input() alignedColumns: AlignedTreeListColumn[] = [];

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

    if (!!this.alignedColumns.length) {
      this.component.instance.option('columns', this.alignedColumns);
    }

    this.setupHeaderStyles();
  }

  private setupHeaderStyles(): void {
    console.log(this.component.onContentReady.subscribe())
    this.component.onContentReady.subscribe(() => {
      const headerCells = this.element.nativeElement.querySelectorAll(
        '.dx-header-row td[role="columnheader"]'
      );

      this.component.columns.forEach((col: any, index: number) => {
        if (col.headerAlign && headerCells[index]) {
          const cell = headerCells[index];
          const contentElement = cell.querySelector(
            '.dx-treelist-text-content'
          );

          if (contentElement) {
            this.clearAlignmentClasses(contentElement);
            this.renderer.addClass(
              contentElement,
              `treelist-header-${col.headerAlign}`
            );
          }
        }
      });
    });
  }

  private clearAlignmentClasses(element: Element): void {
    const alignmentClasses = ['treelist-header-left', 'treelist-header-right'];
    alignmentClasses.forEach(cls => this.renderer.removeClass(element, cls));
  }
}
