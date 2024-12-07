import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { DxTextAreaComponent } from 'devextreme-angular';
import { FocusManagerService } from '../../service/keyboard-navigation.service';
import { MeFocusableDirective } from '../me-focusable/me-focusable.directive';

type MeSize = 'small' | 'medium' | 'large';

@Directive({
  selector: '[meTextArea]',
  host: {
    '[class.me-text-area]': 'true',
    '[class.me-text-area-small]': 'isSizeSmall',
    '[class.me-text-area-medium]': 'isSizeMedium',
    '[class.me-text-area-large]': 'isSizeLarge',
  },
})
export class MeTextAreaDirective
  extends MeFocusableDirective
  implements OnInit, AfterViewInit
{
  @Input() size: MeSize = 'medium';

  private component = inject(DxTextAreaComponent);

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }

  constructor(element: ElementRef, renderer: Renderer2) {
    super(element, renderer);
  }

  ngOnInit(): void {
    this.applyInitialState();
  }

  ngAfterViewInit(): void {
    this.createLockIcon();
  }

  applyInitialState() {
    this.component.instance.option('stylingMode', 'filled');
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
