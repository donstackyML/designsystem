import { Injectable, ElementRef } from '@angular/core';
import { fromEvent, Subject, merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KeyboardNavigationService {
  private destroy$ = new Subject<void>();

  setupKeyboardNavigation(
    containerRef: ElementRef,
    itemSelector: string,
    onSelect: (index: number) => void,
    onRemove?: (index: number) => void
  ) {
    const container = containerRef.nativeElement;

    const keydown$ = fromEvent<KeyboardEvent>(container, 'keydown');
    const focusin$ = fromEvent<FocusEvent>(container, 'focusin');
    const focusout$ = fromEvent<FocusEvent>(container, 'focusout');

    merge(keydown$, focusin$, focusout$)
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: Event) => {
        const items = container.querySelectorAll(itemSelector);

        if (event instanceof KeyboardEvent) {
          const currentIndex = this.getCurrentFocusedIndex(items);

          switch (event.key) {
            case 'Tab':
              if (!event.shiftKey) {
                if (currentIndex === -1 || currentIndex === items.length - 1) {
                  this.focusItem(items, 0);
                  event.preventDefault();
                } else {
                  this.focusItem(items, currentIndex + 1);
                  event.preventDefault();
                }
              } else {
                if (currentIndex <= 0) {
                  return;
                } else {
                  this.focusItem(items, currentIndex - 1);
                  event.preventDefault();
                }
              }
              break;
            case 'ArrowRight':
            case 'ArrowDown':
              event.preventDefault();
              this.focusItem(items, currentIndex + 1);
              break;
            case 'ArrowLeft':
            case 'ArrowUp':
              event.preventDefault();
              this.focusItem(items, currentIndex - 1);
              break;
            case 'Home':
              event.preventDefault();
              this.focusItem(items, 0);
              break;
            case 'End':
              event.preventDefault();
              this.focusItem(items, items.length - 1);
              break;
            case 'Enter':
            case ' ':
              event.preventDefault();
              if (currentIndex !== -1) {
                onSelect(currentIndex);
              }
              break;
            case 'Delete':
            case 'Backspace':
              if (onRemove && currentIndex !== -1) {
                event.preventDefault();
                onRemove(currentIndex);
                this.focusItem(items, Math.min(currentIndex, items.length - 2));
              }
              break;
          }
        } else if (event instanceof FocusEvent) {
          if (event.type === 'focusin') {
            if (event.target === container) {
              const firstItem = items[0] as HTMLElement;
              if (firstItem && !firstItem.hasAttribute('disabled')) {
                firstItem.focus();
              }
            }
            const targetElement = event.target as HTMLElement;
            this.updateTabIndexes(items, targetElement);
          } else if (event.type === 'focusout') {
            setTimeout(() => {
              if (!container.contains(document.activeElement)) {
                this.resetTabIndexes(items);
              }
            }, 0);
          }
        }
      });
  }

  private getCurrentFocusedIndex(items: NodeListOf<Element>): number {
    return Array.from(items).findIndex(item =>
      item === document.activeElement ||
      item.contains(document.activeElement)
    );
  }

  private focusItem(items: NodeListOf<Element>, index: number) {
    if (items.length === 0) return;

    const targetIndex = (index + items.length) % items.length;
    const targetItem = items[targetIndex] as HTMLElement;

    if (targetItem && !targetItem.hasAttribute('disabled')) {
      targetItem.focus();
      this.updateTabIndexes(items, targetItem);
    }
  }

  private updateTabIndexes(items: NodeListOf<Element>, focusedElement: HTMLElement) {
    items.forEach((item: Element) => {
      const itemElement = item as HTMLElement;
      itemElement.tabIndex = item === focusedElement ? 0 : -1;
    });
  }

  private resetTabIndexes(items: NodeListOf<Element>) {
    items.forEach((item: Element, index: number) => {
      const itemElement = item as HTMLElement;
      itemElement.tabIndex = index === 0 ? 0 : -1;
    });
  }

  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
