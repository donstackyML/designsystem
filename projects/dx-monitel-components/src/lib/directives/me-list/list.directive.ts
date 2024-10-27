import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  HostListener
} from '@angular/core';
import { BehaviorSubject, Subscription, debounceTime } from 'rxjs';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meList]',
  host: {
    '[class.me-list]': 'true',
    '[class.me-list-small]': 'isSizeSmall',
    '[class.me-list-medium]': 'isSizeMedium',
    '[class.me-list-large]': 'isSizeLarge'
  }
})
export class MeListDirective implements OnDestroy {
  @Input() size: MeSize = 'medium';

  private focusSubject: BehaviorSubject<boolean>;
  private focusSubscription: Subscription;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
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

  get isSizeSmall(): boolean {
    return this.size === 'small';
  }

  get isSizeMedium(): boolean {
    return this.size === 'medium';
  }

  get isSizeLarge(): boolean {
    return this.size === 'large';
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
