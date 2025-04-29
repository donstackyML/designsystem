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
      const existingDivider =
        itemElement.nextElementSibling?.classList.contains(
          'me-list-item-divider'
        );

      if (!existingDivider) {
        const Divider = document.createElement('li');
        Divider.classList.add('me-list-item-divider');
        itemElement.insertAdjacentElement('afterend', Divider);
      }
    }
  }

  addDividersClass(
    contentElement: Element,
    dividersVisibility: DividersVisibility
  ) {
    contentElement.classList.add(`dividers-visibility-${dividersVisibility}`);
  }

  addDividers(params: {
    contentElement: HTMLElement;
    selector: string;
    items: any[];
    dividersVisibility: DividersVisibility;
    addClassOnly?: boolean;
  }): void {
    const {
      contentElement,
      selector,
      dividersVisibility,
      items = [],
      addClassOnly = false,
    } = params;
    this.addDividersClass(contentElement, dividersVisibility);

    if (dividersVisibility !== 'none' && items.length) {
      const isGrouped = items.every(
        (item) => 'items' in item && Array.isArray(item.items)
      );

      if (isGrouped) {
        this.addDividersToGroupedList({
          contentElement,
          selector,
          groupedItems: items,
          dividersVisibility,
          addClassOnly,
        });
      } else {
        this.addDividersToList({
          contentElement,
          selector,
          items,
          dividersVisibility,
          addClassOnly,
        });
      }
    }
  }

  private addDividersToList(params: {
    contentElement: HTMLElement;
    selector: string;
    items: any[];
    dividersVisibility: Omit<DividersVisibility, 'none'>;
    addClassOnly: boolean;
  }): void {
    const {
      contentElement,
      selector,
      items,
      dividersVisibility,
      addClassOnly,
    } = params;
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

  private addDividersToGroupedList(params: {
    contentElement: HTMLElement;
    selector: string;
    groupedItems: { items: any[]; hasDivider?: boolean }[];
    dividersVisibility: Omit<DividersVisibility, 'none'>;
    addClassOnly: boolean;
  }): void {
    const {
      contentElement,
      selector,
      groupedItems,
      dividersVisibility,
      addClassOnly,
    } = params;
    const listItems = Array.from(contentElement.querySelectorAll(selector));
    let flatIndex = 0;

    groupedItems.forEach((group) => {
      group.items.forEach((item, index) => {
        const itemElement = listItems[flatIndex];
        const isLastInGroup = index === group.items.length - 1;

        if (
          ((item?.hasDivider && dividersVisibility === 'auto') ||
            (dividersVisibility === 'all' && !isLastInGroup)) &&
          itemElement
        ) {
          this.addDividerToItem(itemElement, addClassOnly);
        }

        flatIndex++;
      });
    });
  }
}
