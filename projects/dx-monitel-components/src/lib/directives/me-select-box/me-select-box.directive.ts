import { DxSelectBoxComponent } from 'devextreme-angular';

import {
  AfterViewInit,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';

import { MeIconComponent } from '@monitel/me-icons-registry';
import { ComponentFocusService } from '../../service/component-focus.service';
import { DropDownOptionsService } from '../../service/drop-down-options.service';
import { ListItemDividerService } from '../../service/list-item-divider.service';
import type { MeCommonType, MeScrollbarShowType } from '../../types/types';
import { MeFormField } from '../me-form-item/me-form-field';

import DxList from 'devextreme/ui/list';

@Directive({
  selector: '[meSelectBox]',
  host: {
    '[class.me-selectbox]': 'true',
    '[class.me-selectbox-label-mode-hidden]': 'isHidden',
    '[class.me-selectbox-label-mode-floating]': 'isFloating',
    '[class.me-selectbox-label-mode-outside]': 'isOutside',
    '[class.me-selectbox-label-mode-static]': 'isStatic',
  },
  providers: [{ provide: MeFormField, useExisting: MeSelectBoxDirective }],
})
export class MeSelectBoxDirective
  extends MeFormField
  implements OnInit, AfterViewInit
{
  @Input() showScrollbar: MeScrollbarShowType = 'always';
  @Input() wrapperAttr: MeCommonType = {};
  @Input() dropDownListMaxHeight?: string | number;
  @Input() leftIcon?: string = '';
  @Input() dividersVisibility: 'none' | 'all' | 'auto' = 'auto';
  @Input() multiSelect?: boolean = false;
  @Input() selectedItems: any[] = [];
  @Input() dataSource: any[] = [];

  @Output() selectedItemsChange = new EventEmitter<any[]>();

  private leftIconComponentRef: ComponentRef<MeIconComponent> | null = null;
  private multipleListInstance!: DxList;
  private multipleListElement!: HTMLElement;
  private searchActive?: Boolean;

  private focusService: ComponentFocusService;
  constructor(
    public element: ElementRef,
    protected override component: DxSelectBoxComponent,
    private renderer: Renderer2,
    private dropDownOptionsService: DropDownOptionsService,
    private viewContainerRef: ViewContainerRef,
    private dividerService: ListItemDividerService
  ) {
    super(component);
    this.component.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit(): void {
    const popupWrapperClasses = `${this.wrapperAttr['class'] || ''} ${
      this.showScrollbar === 'always' ? `me-scrollbar-visible` : ``
    }`;

    this.searchActive = this.component.instance.option('searchEnabled');

    this.dropDownOptionsService.configureDropDownOptions(
      this.component,
      this.element,
      this.renderer,
      this.size,
      this.dropDownListMaxHeight,
      popupWrapperClasses
    );

    this.component.wrapItemText = true;
  }

  ngAfterViewInit() {
    this.setLeftIcon();

    if (this.multiSelect && this.dataSource.length) {
      this.initMultiSelectList(this.dataSource);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource'] && this.component?.instance) {
      const newDataSource = changes['dataSource'].currentValue as Array<{
        name: string;
      }>;

      this.component.instance.option('dataSource', newDataSource);

      if (this.multiSelect) {
        const plainNames = newDataSource.map((item) => item.name);

        if (this.multipleListInstance) {
          this.multipleListInstance.option('dataSource', plainNames);

          if (Array.isArray(this.component.value)) {
            this.selectedItems = newDataSource.filter((item) =>
              this.component.value.includes(item.name)
            );

            this.multipleListInstance.option(
              'selectedItems',
              this.selectedItems
            );
          }
        } else {
          this.initMultiSelectList(newDataSource);
        }
      }
    }

    if (this.leftIconComponentRef && (changes['leftIcon'] || changes['size'])) {
      if (this.leftIcon) {
        this.leftIconComponentRef.setInput('name', this.leftIcon);
        this.leftIconComponentRef.setInput(
          'containerSize',
          this.size === 'large' ? 24 : 20
        );
        this.leftIconComponentRef.changeDetectorRef.detectChanges();
      }
    }
  }

  @HostListener('onOpened', ['$event'])
  onOpened(e: any) {
    const listInstance = e.component?._list;

    if (!this.component.value) {
      this.multipleListInstance?.unselectAll();
    }

    if (this.multiSelect) {
      this.renderer.addClass(this.element.nativeElement, 'selectbox-active');
    }

    const listElement = listInstance.element();

    const updateDividers = () => {
      const items =
        (this.component.dataSource as any[]) || this.component.items || [];

      if (this.multiSelect && this.multipleListInstance?.element()) {
        this.dividerService.addDividers({
          contentElement: this.multipleListInstance.element(),
          selector: '.dx-list-item',
          dividersVisibility: this.dividersVisibility,
          items,
        });
      } else {
        this.dividerService.addDividers({
          contentElement: listElement,
          selector: '.dx-list-item',
          dividersVisibility: this.dividersVisibility,
          items,
        });
      }
    };

    updateDividers();
    listInstance.on('contentReady', updateDividers);
  }

  @HostListener('onClosed', ['$event'])
  onClosed(e: any) {
    if (this.multiSelect) {
      this.multipleListInstance.option('searchValue', undefined);

      this.renderer.removeClass(this.element.nativeElement, 'selectbox-active');
    }
  }

  private initMultiSelectList(dataSource: any[]) {
    const plainNames = dataSource.map((item) => item.name);

    const valueArray = Array.isArray(this.component.value)
      ? this.component.value
      : [];

    this.selectedItems = dataSource.filter((item) =>
      valueArray.includes(item.name)
    );

    this.component.displayExpr = () =>
      this.selectedItems.map((i: any) => i.name ?? i).join(', ');

    this.component.instance.option('dropDownOptions', {
      wrapperAttr: {
        ...this.wrapperAttr,
        class: `me-select-box-multi-select me-dropdownlist-${this.size} ${
          this.showScrollbar === 'always' ? 'me-scrollbar-visible' : ''
        }`,
      },
      position: {
        my: 'left top',
        at: 'left bottom',
        offset: { y: 4 },
        collision: 'fit flip',
        of: this.element.nativeElement,
      },
      contentTemplate: (contentElement: any) => {
        this.multipleListElement = document.createElement('div');
        contentElement.appendChild(this.multipleListElement);

        this.multipleListInstance = new DxList(this.multipleListElement, {
          dataSource: plainNames,
          selectionMode: 'multiple',
          showSelectionControls: true,
          selectedItems: valueArray,
          onSelectionChanged: (e: any) => {
            this.selectedItems = e.component.option('selectedItems') ?? [];
            this.selectedItemsChange.emit(this.selectedItems);
            this.component.value = this.selectedItems
              .map((i: any) => i.name ?? i)
              .join(', ');
          },
        });
      },
    });

    this.component.instance.on('input', (e: any) => {
      this.multipleListInstance.option(
        'searchValue',
        e.event.originalEvent.target.value
      );
    });
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

  get isFloating() {
    let optionLabelMode = this.component.instance.option('labelMode');
    return !optionLabelMode || optionLabelMode == 'floating';
  }
  get isOutside() {
    let optionLabelMode = this.component.instance.option('labelMode');
    return optionLabelMode && optionLabelMode == 'outside';
  }
  get isStatic() {
    let optionLabelMode = this.component.instance.option('labelMode');
    return optionLabelMode && optionLabelMode == 'static';
  }
  get isHidden() {
    let optionLabelMode = this.component.instance.option('labelMode');
    return optionLabelMode && optionLabelMode == 'hidden';
  }
}
