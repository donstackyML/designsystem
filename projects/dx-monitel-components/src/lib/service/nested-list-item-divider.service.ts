import { Injectable } from '@angular/core';

export type DividersVisibility = 'none' | 'all' | 'auto'

@Injectable({
  providedIn: 'root',
})
export class NestedListItemDividerService {
  addDividerToItem(itemElement: Element) {
    const existingSeparator = itemElement.nextElementSibling?.classList.contains('me-list-item-separator');

    if (!existingSeparator) {
      const separator = document.createElement('li');
      separator.classList.add('me-list-item-separator');
      itemElement.insertAdjacentElement('afterend', separator);
    }
  }

  addDividersClass(contentElement: Element, dividersVisibility: DividersVisibility) {
    contentElement.classList.add(`dividers-visibility-${dividersVisibility}`);
  }

  addDividers(contentElement: HTMLElement, selector: string, dividersVisibility: DividersVisibility, items: any[] | undefined = []): void {
    this.addDividersClass(contentElement, dividersVisibility)

    if (dividersVisibility !== 'none' && items.length) {
      this.addDividersToList(contentElement, selector, items, dividersVisibility);
    }
  }

  private addDividersToList(contentElement: HTMLElement, selector: string, items: any[], dividersVisibility: Omit<DividersVisibility, 'none'>): void {
    const listItems = contentElement.querySelectorAll(selector);

    items.forEach((item, index) => {
      const itemElement = listItems[index];
      const isLastItem = index === listItems.length - 1;

      if (((item?.hasDivider && dividersVisibility === 'auto') || (dividersVisibility === 'all' && !isLastItem)) && itemElement) {
        this.addDividerToItem(itemElement)
      }
    });
  }
}
