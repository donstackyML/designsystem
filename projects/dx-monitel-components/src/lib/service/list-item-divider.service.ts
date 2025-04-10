import { Injectable } from '@angular/core';

export type DividersVisibility = 'none' | 'all' | 'auto';

@Injectable({
  providedIn: 'root',
})
export class ListItemDividerService {
  addDividerToItem(itemElement: Element, addClassOnly: boolean = false) {
    if (addClassOnly) {
      itemElement.classList.add('me-list-item-with-bottom-divider');
    } else {
      const existingDivider = itemElement.nextElementSibling?.classList.contains('me-list-item-divider');

      if (!existingDivider) {
        const Divider = document.createElement('li');
        Divider.classList.add('me-list-item-divider');
        itemElement.insertAdjacentElement('afterend', Divider);
      }
    }
  }

  addDividersClass(contentElement: Element, dividersVisibility: DividersVisibility) {
    contentElement.classList.add(`dividers-visibility-${dividersVisibility}`);
  }

  addDividers(
    contentElement: HTMLElement,
    selector: string,
    dividersVisibility: DividersVisibility,
    items: any[] | undefined = [],
    addClassOnly: boolean = false
  ): void {
    this.addDividersClass(contentElement, dividersVisibility);

    if (dividersVisibility !== 'none' && items.length) {
      this.addDividersToList(contentElement, selector, items, dividersVisibility, addClassOnly);
    }
  }

  private addDividersToList(
    contentElement: HTMLElement,
    selector: string,
    items: any[],
    dividersVisibility: Omit<DividersVisibility, 'none'>,
    addClassOnly: boolean
  ): void {
    const listItems = contentElement.querySelectorAll(selector);

    items.forEach((item, index) => {
      const itemElement = listItems[index];
      const isLastItem = index === listItems.length - 1;

      if (
        ((item?.hasDivider && dividersVisibility === 'auto') ||
          (dividersVisibility === 'all' && !isLastItem)) &&
        itemElement
      ) {
        this.addDividerToItem(itemElement, addClassOnly);
      }
    });
  }
}