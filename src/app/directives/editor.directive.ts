import { Directive, ElementRef, Inject, Input, OnDestroy, Renderer2 } from '@angular/core';
import { MeEditorComponents, MeSize } from '../types/types';
import { DxTextBoxComponent } from 'devextreme-angular';
import { BehaviorSubject, Subscription, debounceTime } from 'rxjs';

@Directive({
  selector: '[meEditor]',
  host: {
    '(keyup)': 'addFocus($event)',
    '(focusout)': 'removeFocus()',
  },
})
export class MeEditorDirective implements OnDestroy {
  @Input() size: MeSize = 'medium';
  focusSubject: BehaviorSubject<boolean>;
  focusSubscription: Subscription;

  constructor(
    protected element: ElementRef,
    @Inject(DxTextBoxComponent)
    protected component: MeEditorComponents,
    protected renderer: Renderer2,
  ) {
    this.focusSubject = new BehaviorSubject<boolean>(false);
    this.focusSubscription = this.focusSubject.pipe(debounceTime(0)).subscribe((isFocus) => {
      if (isFocus) {
        this.renderer.addClass(this.element.nativeElement, 'me-state-focus');
      } else {
        this.renderer.removeClass(this.element.nativeElement, 'me-state-focus');
      }
    });
  }

  initMeEditor() {
    this.renderer.addClass(this.element.nativeElement, 'me-editor');
    this.renderer.addClass(this.element.nativeElement, `me-editor-${this.size}`);

    this.component.elementAttr['size'] = this.size;
  }

  addFocus(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      this.focusSubject.next(true);
    }
  }

  removeFocus() {
    this.focusSubject.next(false);
  }

  ngOnDestroy(): void {
    this.focusSubscription.unsubscribe();
  }
}
