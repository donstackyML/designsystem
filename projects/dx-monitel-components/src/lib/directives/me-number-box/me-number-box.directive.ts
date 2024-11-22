import {
  AfterViewInit,
  Directive,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { DxNumberBoxComponent } from 'devextreme-angular';

import { MeSize } from '../../types/types';
import { MeFocusableDirective } from '../me-focusable/me-focusable.directive';

@Directive({
  selector: '[meNumberBox]',
  host: {
    '[class.me-number-box]': 'true',
    '[class.me-number-box-small]': 'isSizeSmall',
    '[class.me-number-box-medium]': 'isSizeMedium',
    '[class.me-number-box-large]': 'isSizeLarge',

    '[class.me-editor]': 'true',
    '[class.me-editor-large]': 'isSizeLarge',
    '[class.me-editor-medium]': 'isSizeMedium',
    '[class.me-editor-small]': 'isSizeSmall',
  },
})
export class MeNumberBoxDirective
  extends MeFocusableDirective
  implements OnInit, AfterViewInit
{
  @Input() size: MeSize = 'medium';

  override renderer = inject(Renderer2);
  private component = inject(DxNumberBoxComponent);

  ngOnInit(): void {
    this.component.instance.option('stylingMode', 'filled');
  }

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeMedium() {
    return this.size === 'medium';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }

  // Установка цвета при фокусе
  @HostListener('focusin')
  onFocusIn() {
    const labelElement = this.element.nativeElement.querySelector(
      '.dx-texteditor-label'
    );
    if (labelElement) {
      this.renderer.setStyle(labelElement, 'color', '#3257DC'); // Установите нужный цвет
    }
  }

  // Снятие цвета при потере фокуса
  @HostListener('focusout')
  override onFocusOut() {
    const labelElement = this.element.nativeElement.querySelector(
      '.dx-texteditor-label'
    );
    if (labelElement) {
      this.renderer.removeStyle(labelElement, 'color');
    }
  }

  ngAfterViewInit(): void {
    this.createLockIcon();
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

  @HostListener('onOptionChanged', ['$event']) onOptionChanged(e: any) {
    if (e.name === 'readOnly' && e.value === true) {
      this.addLockIcon();
    }
    if (e.name === 'readOnly' && e.value === false) {
      this.removeLockIcon();
    }
  }
}
