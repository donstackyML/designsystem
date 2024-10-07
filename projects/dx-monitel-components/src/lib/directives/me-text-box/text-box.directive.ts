import {
  AfterViewInit,
  Directive,
  HostListener,
  OnInit,
  inject,
} from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';
import { MeTextEditorDirective } from '../me-text-editor/text-editor.directive';

@Directive({
  selector: '[meTextBox]',
  host: {
    '[class.me-textbox]': 'true',
    '[class.me-textbox-small]': 'isSizeSmall',
    '[class.me-textbox-medium]': 'isSizeMedium',
    '[class.me-textbox-large]': 'isSizeLarge',
  },
})
export class MeTextBoxDirective
  extends MeTextEditorDirective
  implements OnInit, AfterViewInit
{
  private textBox = inject(DxTextBoxComponent);
  ngOnInit(): void {
    this.initMeField();
    this.textBox.instance.option('stylingMode', 'filled');
    this.textBox.instance.option('labelMode', 'hidden');
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
