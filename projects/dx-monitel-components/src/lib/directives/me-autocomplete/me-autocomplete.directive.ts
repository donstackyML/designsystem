import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, HostListener } from '@angular/core';
import { DxAutocompleteComponent } from 'devextreme-angular';
import { MeSize, MeScrollbarShowType } from '../../types/types';
import { BehaviorSubject, Subscription, debounceTime } from 'rxjs';

@Directive({
  selector: '[meAutocomplete]',
  host: {
    '[class.me-autocomplete]': 'true',
    '[class.me-autocomplete-small]': 'isSizeSmall',
    '[class.me-autocomplete-medium]': 'isSizeMedium',
    '[class.me-autocomplete-large]': 'isSizeLarge'
  }
})
export class MeAutocompleteDirective implements OnInit, OnDestroy {
  @Input() size: MeSize = 'medium';
  @Input() showScrollbar: MeScrollbarShowType = 'always';

  private focusSubject: BehaviorSubject<boolean>;
  private focusSubscription: Subscription;

  constructor(
    private component: DxAutocompleteComponent,
    private element: ElementRef,
    private renderer: Renderer2,
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

  ngOnInit(): void {
    this.setDropDownOptions();
    this.initDefaultClasses();
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

  private initDefaultClasses(): void {
    this.renderer.addClass(this.element.nativeElement, 'me-editor');
    this.renderer.addClass(
      this.element.nativeElement,
      `me-editor-${this.size}`
    );
  }

  private setDropDownOptions(): void {
    const popupWrapperClasses = `me-scroll-view me-autocomplete-${this.size} ${
      this.showScrollbar === 'always' ? 'me-scrollbar-visible' : ''
    }`;

    this.component.dropDownOptions = {
      ...this.component.dropDownOptions,
      wrapperAttr: {
        ...this.component.dropDownOptions?.wrapperAttr,
        class: popupWrapperClasses,
      },
    };
  }
}
