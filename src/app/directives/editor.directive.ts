import { Directive, ElementRef, Inject, Input, OnDestroy, Renderer2 } from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';
import { BehaviorSubject, Subscription, debounceTime } from 'rxjs';
import { MeEditorComponents, MeSize } from '../types/types';

@Directive({
  selector: '[meEditor]',
  host: {
    '(keyup)': 'addFocus($event)',
    '(focusout)': 'removeFocus()',
    '[class]': 'customEditorClass',
  },
})
export class MeEditorDirective implements OnDestroy {
  @Input() size: MeSize = 'medium';
  private customEditorClass: string = 'me-editor';

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
    this.customEditorClass += ` me-editor-${this.size}`;

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
