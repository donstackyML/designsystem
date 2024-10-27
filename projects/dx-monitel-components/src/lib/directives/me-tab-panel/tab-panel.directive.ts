import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  HostListener
} from '@angular/core';
import { DxTabPanelComponent } from 'devextreme-angular';
import { FocusManagerService } from "../../service/keyboard-navigation.service";
import { BehaviorSubject, Subscription, debounceTime } from 'rxjs';

@Directive({
  selector: '[meTabPanel]',
  host: {
    '[class.me-tabs-panel]': 'true',
    '[class.me-tabs-small]': 'size === "small"',
    '[class.me-tabs-medium]': 'size === "medium"',
    '[class.me-tabs-large]': 'size === "large"',
    '[class.dx-tabs-styling-mode-primary]': 'stylingMode === "inside"',
    '[class.dx-tabs-styling-mode-secondary]': 'stylingMode === "outside"',
  },
})
export class MeTabPanelDirective implements OnDestroy {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() stylingMode: 'inside' | 'outside' = 'outside';

  private focusSubject: BehaviorSubject<boolean>;
  private focusSubscription: Subscription;

  constructor(
    private tabs: DxTabPanelComponent,
    private elementRef: ElementRef,
    private focusManager: FocusManagerService,
    private renderer: Renderer2
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

    this.focusManager.monitorFocus(this.elementRef).subscribe();
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
