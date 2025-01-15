import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { BehaviorSubject, Subscription, debounceTime } from 'rxjs';

@Directive({
  selector: '[meFocusable]',
})
export class MeFocusableDirective implements OnDestroy {
  protected focusSubject: BehaviorSubject<boolean>;
  protected focusSubscription: Subscription;
  protected keyboardFocuseClass = 'me-keyboard-focused';
  constructor(protected element: ElementRef, protected renderer: Renderer2) {
    this.focusSubject = new BehaviorSubject<boolean>(false);
    this.focusSubscription = this.focusSubject
      .pipe(debounceTime(0))
      .subscribe((isFocus) => {
        if (isFocus) {
          this.renderer.addClass(this.element.nativeElement, 'me-state-focus');
        } else {
          this.renderer.removeClass(
            this.element.nativeElement,
            'me-state-focus'
          );
        }
      });
  }

  ngOnDestroy(): void {
    if (this.focusSubscription) {
      this.focusSubscription.unsubscribe();
    }
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Tab') {
      this.focusSubject.next(true);
    }
  }

  @HostListener('focusout')
  onFocusOut(): void {
    this.focusSubject.next(false);
  }
}
