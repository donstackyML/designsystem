import {
  AfterViewInit,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import {
  DxDataGridComponent,
  DxDropDownBoxComponent,
  DxTreeViewComponent,
} from 'devextreme-angular';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meDropDownBox]',
  host: {
    '[class.me-drop-down-box]': 'true',
    '[class.me-drop-down-box-small]': 'isSizeSmall',
    '[class.me-drop-down-box-large]': 'isSizeLarge',
  },
})
export class MeDropDownBoxDirective implements AfterViewInit {
  @Input() size: MeSize = 'large';

  constructor(
    private element: ElementRef,
    private component: DxDropDownBoxComponent,
    private renderer: Renderer2
  ) {}

  @ContentChild(DxTreeViewComponent, { static: false })
  treeView!: DxTreeViewComponent;

  @ContentChild(DxDataGridComponent, { static: false })
  dataGrid!: DxDataGridComponent;

  @Output() valueChange: EventEmitter<any[]> = new EventEmitter();

  ngAfterViewInit(): void {
    if (this.treeView) {
      this.treeView.onItemSelectionChanged.subscribe(() => {
        const selectedItems = this.treeView.instance
          .getSelectedNodes()
          .map((node: any) => node.key);

        this.component.instance.option('value', selectedItems);
        this.valueChange.emit(selectedItems);
      });
    }

    if (this.dataGrid) {
      this.dataGrid.onSelectionChanged.subscribe(() => {
        const selectedItems = this.dataGrid.instance
          .getSelectedRowsData()
          .map((item: any) => item.id);

        this.component.instance.option('value', selectedItems);
        this.valueChange.emit(selectedItems);
      });
    }

    this.component.dropDownOptions = {
      wrapperAttr: {
        class: 'me-drop-down-box-wrapper-popup',
      },
    };
  }

  @HostListener('onOpened', ['$event'])
  onOpened() {
    if (this.treeView && !this.component.value) {
      this.treeView.instance.unselectAll();
    }

    if (this.dataGrid && !this.component.value) {
      this.dataGrid.instance.deselectAll();
    }
  }

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }
}
