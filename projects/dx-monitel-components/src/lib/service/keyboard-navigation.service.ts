import { Injectable, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { Subject, Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FocusManagerService implements OnDestroy {
  private focusedElements = new Map<ElementRef, Subscription>();
  private destroy$ = new Subject<void>();

  constructor(
    private focusMonitor: FocusMonitor,
    private ngZone: NgZone
  ) {}

  monitorFocus(element: ElementRef<HTMLElement>, className: string = 'me-keyboard-focused'): Observable<FocusOrigin> {
    if (this.focusedElements.has(element)) {
      return this.focusMonitor.monitor(element);
    }

    const subscription = this.focusMonitor.monitor(element)
      .pipe(takeUntil(this.destroy$))
      .subscribe((origin: FocusOrigin) => {
        this.ngZone.run(() => {
          if (origin === 'keyboard') {
            element.nativeElement.classList.add(className);
          } else if (origin === null) {
            element.nativeElement.classList.remove(className);
          }
        });
      });

    this.focusedElements.set(element, subscription);
    element.nativeElement.addEventListener('click', this.handleClick);

    return this.focusMonitor.monitor(element);
  }

  stopMonitoring(element: ElementRef<HTMLElement>): void {
    const subscription = this.focusedElements.get(element);
    if (subscription) {
      subscription.unsubscribe();
      this.focusedElements.delete(element);
      this.focusMonitor.stopMonitoring(element);
      element.nativeElement.removeEventListener('click', this.handleClick);
    }
  }

  focusVia(element: ElementRef<HTMLElement>, origin: FocusOrigin, options?: FocusOptions): void {
    this.focusMonitor.focusVia(element, origin, options);
  }

  blurAll(): void {
    this.focusedElements.forEach((_, element) => {
      element.nativeElement.blur();
    });
  }

  private handleClick = (event: MouseEvent): void => {
    const target = event.currentTarget as HTMLElement;
    this.ngZone.run(() => {
      target.blur();
      target.classList.remove('keyboard-focused');
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.focusedElements.forEach((subscription, element) => {
      subscription.unsubscribe();
      this.focusMonitor.stopMonitoring(element);
      element.nativeElement.removeEventListener('click', this.handleClick);
    });
    this.focusedElements.clear();
  }
}
