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
  private passwordVisible = false;
  private isPasswordInput = false;
  private passwordToggleButton: HTMLElement | null = null;

  ngOnInit(): void {
    this.initMeField();
    this.textBox.instance.option('stylingMode', 'filled');
    this.textBox.instance.option('labelMode', 'hidden');

    // Проверяем, является ли поле полем для пароля
    this.isPasswordInput = this.textBox.instance.option('mode') === 'password';
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
    if (this.isPasswordInput) {
      this.createPasswordToggle();
      this.updatePasswordToggleVisibility();
    }
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
      this.element.nativeElement.querySelector('.dx-texteditor-buttons-container'),
      parentSpan
    );
  }

  createPasswordToggle() {
    this.passwordToggleButton = this.renderer.createElement('div');
    this.renderer.addClass(this.passwordToggleButton, 'dx-password-toggle');
    this.renderer.addClass(this.passwordToggleButton, 'dx-button');
    this.renderer.addClass(this.passwordToggleButton, 'dx-button-mode-text');
    this.renderer.addClass(this.passwordToggleButton, 'dx-button-normal');
    this.renderer.addClass(this.passwordToggleButton, 'dx-button-has-icon');
    // Изначально скрываем кнопку
    this.renderer.setStyle(this.passwordToggleButton, 'display', 'none');

    const iconElement = this.renderer.createElement('i');
    this.renderer.addClass(iconElement, 'dx-icon');
    this.renderer.addClass(iconElement, 'dx-icon-eyeoff');

    const buttonContent = this.renderer.createElement('div');
    this.renderer.addClass(buttonContent, 'dx-button-content');
    this.renderer.appendChild(buttonContent, iconElement);
    this.renderer.appendChild(this.passwordToggleButton, buttonContent);

    this.renderer.listen(this.passwordToggleButton, 'click', () => {
      this.togglePasswordVisibility(iconElement);
    });

    const buttonsContainer = this.element.nativeElement.querySelector(
      '.dx-texteditor-buttons-container'
    );
    this.renderer.insertBefore(buttonsContainer, this.passwordToggleButton, buttonsContainer.firstChild);
  }

  updatePasswordToggleVisibility() {
    if (!this.passwordToggleButton) return;

    const hasValue = !!this.textBox.instance.option('value');
    this.renderer.setStyle(
      this.passwordToggleButton,
      'display',
      hasValue ? 'block' : 'none'
    );
  }

  togglePasswordVisibility(iconElement: HTMLElement) {
    this.passwordVisible = !this.passwordVisible;

    this.textBox.instance.option('mode', this.passwordVisible ? 'text' : 'password');

    if (this.passwordVisible) {
      this.renderer.removeClass(iconElement, 'dx-icon-eyeoff');
      this.renderer.addClass(iconElement, 'dx-icon-eyeopen');
    } else {
      this.renderer.removeClass(iconElement, 'dx-icon-eyeopen');
      this.renderer.addClass(iconElement, 'dx-icon-eyeoff');
    }
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
    if (e.name === 'mode' && e.value === 'password' && !this.isPasswordInput) {
      this.isPasswordInput = true;
      this.createPasswordToggle();
      this.updatePasswordToggleVisibility();
    }
    // Обработка изменения значения поля
    if (e.name === 'value') {
      if (this.isPasswordInput) {
        this.updatePasswordToggleVisibility();
      }
    }
  }
}
