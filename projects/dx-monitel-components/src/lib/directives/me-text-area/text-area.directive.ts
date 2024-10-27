import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  inject,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';
import { DxTextAreaComponent } from 'devextreme-angular';
import { FocusManagerService } from "../../service/keyboard-navigation.service";
import { BehaviorSubject, Subscription, debounceTime } from 'rxjs';

type MeSize = 'small' | 'medium' | 'large';

@Directive({
  selector: '[meTextArea]',
  host: {
    '[class.me-text-area]': 'true',
    '[class.me-text-area-small]': 'isSizeSmall',
    '[class.me-text-area-medium]': 'isSizeMedium',
    '[class.me-text-area-large]': 'isSizeLarge',
    '[class.me-text-area-label-top]': 'isLabelModeTop',
    '[class.me-text-area-label-inside]': 'isLabelModeInside',
  },
})
export class MeTextAreaDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input() size: MeSize = 'medium';
  @Input() labelMode: 'top' | 'inside' | 'hidden' = 'inside';

  private component = inject(DxTextAreaComponent);
  private element = inject(ElementRef);
  private renderer = inject(Renderer2);
  private focusSubject: BehaviorSubject<boolean>;
  private focusSubscription: Subscription;

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }

  get isLabelModeTop() {
    return this.labelMode === 'top';
  }

  get isLabelModeInside() {
    return this.labelMode === 'inside';
  }

  constructor(
    private elementRef: ElementRef,
    private focusManager: FocusManagerService
  ) {
    this.focusSubject = new BehaviorSubject<boolean>(false);
    this.focusSubscription = this.focusSubject
      .pipe(debounceTime(0))
      .subscribe((isFocus) => {
        if (isFocus) {
          this.renderer.addClass(this.elementRef.nativeElement, 'me-state-focus');
        } else {
          this.renderer.removeClass(
            this.elementRef.nativeElement,
            'me-state-focus'
          );
        }
      });
  }

  ngOnInit(): void {
    this.focusManager.monitorFocus(this.elementRef).subscribe();
    this.applyInitialState();
  }

  ngAfterViewInit(): void {
    this.createLockIcon();
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

  applyInitialState() {
    this.component.instance.option('stylingMode', 'filled');
    this.component.instance.option('showClearButton', true);
  }

  createLockIcon() {
    const parentSpan = this.renderer.createElement('span');
    this.renderer.addClass(parentSpan, 'dx-lock-button-area');
    if (!this.element.nativeElement.classList.contains('dx-state-readonly')) {
      this.renderer.addClass(parentSpan, 'dx-state-invisible');
    }

    const childSpan = this.renderer.createElement('span');
    this.renderer.addClass(childSpan, 'dx-icon');
    this.renderer.addClass(childSpan, 'dx-icon-key');
    this.renderer.appendChild(parentSpan, childSpan);

    this.renderer.appendChild(
      this.element.nativeElement.querySelector(
        '.dx-texteditor-buttons-container'
      ),
      parentSpan
    );
  }

  addLockIcon() {
    this.renderer.removeClass(
      this.element.nativeElement.querySelector('.dx-lock-button-area'),
      'dx-state-invisible'
    );
  }

  removeLockIcon() {
    this.renderer.addClass(
      this.element.nativeElement.querySelector('.dx-lock-button-area'),
      'dx-state-invisible'
    );
  }

  @HostListener('onOptionChanged', ['$event'])
  onOptionChanged(e: any) {
    if (e.name === 'readOnly' && e.value === true) {
      this.addLockIcon();
    }
    if (e.name === 'readOnly' && e.value === false) {
      this.removeLockIcon();
    }
  }
}
