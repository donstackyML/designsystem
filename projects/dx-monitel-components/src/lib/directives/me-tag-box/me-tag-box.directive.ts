import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DxTagBoxComponent } from 'devextreme-angular';
import { Subscription, fromEvent } from 'rxjs';

import { ComponentFocusService } from '../../service/component-focus.service';
import { DropDownOptionsService } from '../../service/drop-down-options.service';
import { ListItemDividerService } from '../../service/list-item-divider.service';
import { MeFormField } from '../me-form-item/me-form-field';

@Directive({
  selector: '[meTagBox]',
  host: {
    '[class.me-tag-box]': 'true',
  },
  providers: [{ provide: MeFormField, useExisting: MeTagBoxDirective }],
})
export class MeTagBoxDirective
  extends MeFormField
  implements OnInit, OnDestroy
{
  @Input() description: string = '';
  @Input() dropDownListMaxHeight?: string | number;
  @Input() dividersVisibility: 'none' | 'all' | 'auto' = 'auto';

  private focusService: ComponentFocusService;
  private isKeyboardNavigation = false;
  private globalKeydownSub!: Subscription;
  private globalMousedownSub!: Subscription;

  constructor(
    public element: ElementRef,
    protected tagBox: DxTagBoxComponent,
    private renderer: Renderer2,
    private dropDownOptionsService: DropDownOptionsService,
    private dividerService: ListItemDividerService
  ) {
    super(tagBox);
    this.tagBox.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit(): void {
    this.globalKeydownSub = fromEvent<KeyboardEvent>(
      window,
      'keydown'
    ).subscribe(() => {
      this.isKeyboardNavigation = true;
    });

    this.globalMousedownSub = fromEvent<MouseEvent>(
      window,
      'mousedown'
    ).subscribe(() => {
      this.isKeyboardNavigation = false;
    });

    this.dropDownOptionsService.configureDropDownOptions(
      this.tagBox,
      this.element,
      this.renderer,
      this.size,
      this.dropDownListMaxHeight,
      'me-tag-box'
    );
  }

  ngOnDestroy(): void {
    this.focusService.ngOnDestroy();
    this.globalKeydownSub?.unsubscribe();
    this.globalMousedownSub?.unsubscribe();
  }

  @HostListener('onOpened', ['$event'])
  onOpened(e: any) {
    const listInstance = e.component?._list;

    if (!listInstance) {
      return;
    }

    const listElement = listInstance.element();

    const updateDividers = () => {
      const listElement = listInstance.element();
      this.dividerService.addDividers({
        contentElement: listElement,
        selector: '.dx-list-item',
        dividersVisibility: this.dividersVisibility,
        items: this.tagBox.items || this.tagBox.dataSource || [],
      });
    };

    updateDividers();

    listInstance.on('contentReady', updateDividers);

    listInstance.option('onFocusedItemChanged', (focusEvent: any) => {
      if (!this.isKeyboardNavigation && focusEvent?.element) {
        listElement.classList.add('me-keyboard-focused');
      }
    });

    const originalOnItemClick = listInstance.option('onItemClick');
    listInstance.option('onItemClick', (clickEvent: any) => {
      if (originalOnItemClick) {
        originalOnItemClick(clickEvent);
      }
      if (!this.isKeyboardNavigation && clickEvent?.itemElement) {
        listElement.classList.remove('me-keyboard-focused');
      }
    });

    const popupContainer = listElement.parentElement?.parentElement;
    if (!popupContainer) {
      return;
    }

    const submitButton = popupContainer.querySelector(
      '.dx-button.dx-popup-done'
    );
    const cancelButton = popupContainer.querySelector(
      '.dx-button.dx-popup-cancel'
    );

    if (submitButton) {
      this.renderer.addClass(submitButton, 'me-button');
      this.renderer.addClass(submitButton, 'dx-button-default');
      this.renderer.addClass(submitButton, `me-button-${this.size}`);

      const submitText = submitButton.querySelector('.dx-button-text');
      if (submitText) {
        submitText.innerHTML = 'Выбрать';
      }
    }

    if (cancelButton) {
      this.renderer.addClass(cancelButton, 'me-button');
      this.renderer.addClass(cancelButton, `me-button-${this.size}`);
      this.renderer.addClass(cancelButton, 'dx-button-normal');

      const cancelText = cancelButton.querySelector('.dx-button-text');
      if (cancelText) {
        cancelText.innerHTML = 'Отмена';
      }
    }
  }
}
