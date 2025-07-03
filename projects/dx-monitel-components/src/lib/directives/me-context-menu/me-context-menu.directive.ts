import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { ComponentFocusService } from '../../service/component-focus.service';
import { ListItemDividerService } from '../../service/list-item-divider.service';
import { MeSize } from '../../types/types';
import { MeIconComponent } from '@monitel/me-icons-registry';

@Directive({
  selector: '[meContextMenu]',
  host: {
    '[class.me-context-menu]': 'true',
  },
})
export class MeContextMenuDirective {
  @Input() size: MeSize = 'medium';
  @Input() subMenuMaxHeight?: string = '';
  @Input() dividersVisibility: 'none' | 'all' | 'auto' = 'auto';

  private focusService: ComponentFocusService;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private dividerService: ListItemDividerService,
    private viewContainerRef: ViewContainerRef
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
  }

  private iconComponentRef: ComponentRef<MeIconComponent> | null = null;

  @HostListener('onItemRendered', ['$event'])
  onItemRendered(event: any) {
    const contextListElement = event.itemElement.parentElement
      .parentElement as HTMLElement;

    const contextMenuElement = contextListElement?.parentElement as HTMLElement;

    this.renderer.addClass(contextMenuElement, 'me-context-menu-submenu');

    if (this.subMenuMaxHeight) {
      contextMenuElement.style.maxHeight = this.subMenuMaxHeight;
    }

    const closestMenuItemElement = event.itemElement.closest(
      '.dx-menu-item-wrapper .dx-item.dx-menu-item'
    ) as Element;
    const closestMenuItemWrapperElement = event.itemElement.closest(
      '.dx-menu-item-wrapper'
    ) as Element;

    if (
      closestMenuItemElement &&
      event.itemData?.disabled &&
      event.itemData?.beginGroup
    ) {
      this.renderer.addClass(closestMenuItemElement, 'me-menu-item-title');
    }

    closestMenuItemElement.querySelector('.dx-icon')?.remove();

    const itemContent =
      closestMenuItemElement.querySelector('.dx-item-content');

    if (event.itemData?.icon) {
      this.iconComponentRef =
        this.viewContainerRef.createComponent(MeIconComponent);

      this.iconComponentRef.setInput('name', event.itemData.icon);

      itemContent?.insertBefore(
        this.iconComponentRef.location.nativeElement,
        itemContent?.firstChild
      );
    }

    this.iconComponentRef?.changeDetectorRef.detectChanges();

    this.dividerService.addDividersClass(
      contextListElement,
      this.dividersVisibility
    );

    if (this.dividersVisibility !== 'none') {
      if (closestMenuItemWrapperElement) {
        if (this.dividersVisibility === 'all') {
          this.dividerService.addDividerToItem(closestMenuItemWrapperElement);
        } else if (
          this.dividersVisibility === 'auto' &&
          event.itemData?.hasDivider
        ) {
          this.dividerService.addDividerToItem(closestMenuItemWrapperElement);
        }
      }

      const separators = contextListElement.querySelectorAll(
        '.me-list-item-divider'
      );

      separators.forEach((separator: Element) => {
        const nextSibling = separator.nextElementSibling;
        if (
          nextSibling &&
          nextSibling.classList.contains('dx-menu-separator')
        ) {
          separator.parentElement?.removeChild(separator);
        }
      });
    }
  }
}
