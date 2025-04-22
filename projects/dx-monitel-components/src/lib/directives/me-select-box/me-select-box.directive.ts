import { DxSelectBoxComponent } from 'devextreme-angular';

import {
  AfterViewInit,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
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

  private leftIconComponentRef: ComponentRef<MeIconComponent> | null = null;

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

  @HostListener('onOpened', ['$event'])
  onOpened(e: any) {
    const listInstance = e.component?._list;

    if (!listInstance) {
      return;
    }
    const listElement = listInstance.element();

    this.dividerService.addDividers(
      listElement,
      '.dx-list-item',
      this.dividersVisibility,
      this.component.items || this.component.dataSource || []
    );
  }

  ngAfterViewInit() {
    this.setLeftIcon();
  }

  ngOnChanges(changes: SimpleChanges): void {
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
