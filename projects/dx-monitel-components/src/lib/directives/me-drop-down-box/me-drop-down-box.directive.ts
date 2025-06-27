import {
  AfterViewInit,
  ComponentRef,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import {
  DxDataGridComponent,
  DxDropDownBoxComponent,
  DxTreeViewComponent,
} from 'devextreme-angular';
import { type MeScrollbarShowType, MeSize } from '../../types/types';
import { DropDownOptionsService } from '../../service/drop-down-options.service';
import { MeIconComponent } from '@monitel/me-icons-registry';
import { ComponentFocusService } from '../../service/component-focus.service';

@Directive({
  selector: '[meDropDownBox]',
  host: {
    '[class.me-drop-down-box]': 'true',
    '[class.me-drop-down-box-small]': 'isSizeSmall',
    '[class.me-drop-down-box-medium]': 'isSizeMedium',
    '[class.me-drop-down-box-large]': 'isSizeLarge',
  },
})
export class MeDropDownBoxDirective implements AfterViewInit {
  @Input() size: MeSize = 'small';
  @Input() dropDownListMaxHeight?: string | number;
  @Input() leftIcon?: string = '';
  @Input() showScrollbar: MeScrollbarShowType = 'always';

  private focusService: ComponentFocusService;

  constructor(
    private element: ElementRef,
    private component: DxDropDownBoxComponent,
    private dropDownOptionsService: DropDownOptionsService,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
  }

  @ContentChild(DxTreeViewComponent, { static: false })
  treeView?: DxTreeViewComponent;

  @ContentChild(DxDataGridComponent, { static: false })
  dataGrid?: DxDataGridComponent;

  @Output() valueChange: EventEmitter<any[]> = new EventEmitter();

  private leftIconComponentRef: ComponentRef<MeIconComponent> | null = null;

  ngAfterViewInit(): void {
    const popupWrapperClasses = `${
      this.showScrollbar === 'always' ? `me-scrollbar-visible` : ``
    }`;

    if (this.treeView) {
      this.treeView.onItemSelectionChanged.subscribe(() => {
        const selectedItems = this.treeView?.instance
          .getSelectedNodes()
          .map((node: any) => node.key);

        this.component.instance.option('value', selectedItems);
        this.valueChange.emit(selectedItems);
      });
    }

    if (this.dataGrid) {
      this.dataGrid.onSelectionChanged.subscribe(() => {
        const selectedItems = this.dataGrid?.instance
          .getSelectedRowsData()
          .map((item: any) => item.id);

        this.component.instance.option('value', selectedItems);
        this.valueChange.emit(selectedItems);
      });
    }

    this.dropDownOptionsService.configureDropDownOptions(
      this.component,
      this.element,
      this.renderer,
      this.size,
      this.dropDownListMaxHeight,
      popupWrapperClasses
    );

    this.component.dropDownOptions = {
      wrapperAttr: {
        class: `me-drop-down-box-wrapper-popup me-drop-down-box-wrapper-popup-${this.size} ${popupWrapperClasses}`,
        position: {
          my: 'left top',
          at: 'left bottom',
          offset: { y: 4 },
          collision: 'fit flip',
          of: this.element.nativeElement,
        },
      },
    };

    this.setLeftIcon();
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

  private setLeftIcon() {
    if (this.leftIcon) {
      const textEditorContainer = this.element.nativeElement.querySelector(
        '.dx-texteditor-container'
      );
      this.leftIconComponentRef =
        this.viewContainerRef.createComponent(MeIconComponent);

      this.leftIconComponentRef.setInput('name', this.leftIcon);
      this.leftIconComponentRef.setInput(
        'containerSize',
        this.size === 'large' ? 24 : 20
      );
      this.leftIconComponentRef.changeDetectorRef.detectChanges();

      textEditorContainer.insertBefore(
        this.leftIconComponentRef.location.nativeElement,
        textEditorContainer.firstChild
      );
      this.renderer.addClass(
        this.leftIconComponentRef.location.nativeElement,
        'me-selectbox-left-icon'
      );
    }
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
}
