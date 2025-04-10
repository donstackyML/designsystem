import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DxListComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { ListItemDividerService } from '../../service/list-item-divider.service';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meList]',
  host: {
    '[class.me-list]': 'true',
    '[class.me-list-small]': 'isSizeSmall',
    '[class.me-list-medium]': 'isSizeMedium',
    '[class.me-list-large]': 'isSizeLarge',
  },
})
export class MeListDirective implements AfterViewInit {
  @Input() size: MeSize = 'medium';
  @Input() dividersVisibility: 'none' | 'all' | 'auto' = 'all';

  private focusService: ComponentFocusService;
  constructor(
    private element: ElementRef,
    private component: DxListComponent,
    private renderer: Renderer2,
    private dividerService: ListItemDividerService
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
    this.focusService.addKeyUpEventHandle('Escape', (evt) =>
      this.escapeHandle(evt)
    );
    this.focusService.addKeyUpEventHandle('Tab', (evt) => this.tabHandle(evt));
  }

  ngAfterViewInit(): void {
    const contentElement = this.element.nativeElement.querySelector('.dx-list-items');
    if (!contentElement) return;

    this.dividerService.addDividersClass(contentElement, this.dividersVisibility);
  }

  @HostListener('onItemRendered', ['$event'])
  onItemRendered({ itemData, itemElement }: any) {
    if (itemData.hasDivider && this.dividersVisibility === 'auto') {
      this.dividerService.addDividerToItem(itemElement, true)
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

  isSearchActive(): boolean {
    let searchElm: Element =
      this.element.nativeElement.querySelector('.dx-list-search');
    if (searchElm) {
      return searchElm.classList.contains('dx-state-focused');
    }
    return false;
  }

  private escapeHandle(evt: KeyboardEvent) {
    if (this.isSearchActive()) {
      this.component.searchValue = '';
    }
  }

  private tabHandle(evt: KeyboardEvent) {
    let searchElm: Element =
      this.element.nativeElement.querySelector('.dx-list-search');
    if (searchElm) {
      searchElm.setAttribute('tabindex', '1');
    }
    let containerElm: Element =
      this.element.nativeElement.querySelector('.dx-list-items');
    if (containerElm) {
      containerElm.setAttribute('tabindex', '2');
    }
    let groupsElms: Element = this.element.nativeElement.querySelector(
      '.dx-list-group-header'
    );
    if (groupsElms) {
      groupsElms.setAttribute('tabindex', '3');
      console.log('Headers: %o', groupsElms);
    }
  }
}
