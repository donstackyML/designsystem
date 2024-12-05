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
  implements OnInit, AfterViewInit {

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

      // Добавляем слушатель события valueChanged
      this.textBox.instance.on('valueChanged', () => {
        this.updatePasswordToggleVisibility();
      });
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

    const buttonsContainer = this.element.nativeElement.querySelector('.dx-texteditor-buttons-container');
    if (buttonsContainer) {
      this.renderer.appendChild(buttonsContainer, parentSpan);
    }
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

    if (buttonsContainer) {
      this.renderer.insertBefore(
        buttonsContainer,
        this.passwordToggleButton,
        buttonsContainer.firstChild
      );
    }
  }

  updatePasswordToggleVisibility() {
    if (!this.passwordToggleButton) return;

    const hasValue = !!this.textBox.instance.option('value');
    const inputElement = this.element.nativeElement.querySelector('input');
    const hasInputValue = inputElement && inputElement.value.length > 0;

    this.renderer.setStyle(
      this.passwordToggleButton,
      'display',
      (hasValue || hasInputValue) ? 'block' : 'none'
    );
  }

  togglePasswordVisibility(iconElement: HTMLElement) {
    this.passwordVisible = !this.passwordVisible;

    this.textBox.instance.option(
      'mode',
      this.passwordVisible ? 'text' : 'password'
    );

    if (this.passwordVisible) {
      this.renderer.removeClass(iconElement, 'dx-icon-eyeoff');
      this.renderer.addClass(iconElement, 'dx-icon-eyeopen');
    } else {
      this.renderer.removeClass(iconElement, 'dx-icon-eyeopen');
      this.renderer.addClass(iconElement, 'dx-icon-eyeoff');
    }
  }

  addLockIcon() {
    const lockIcon = this.element.nativeElement.querySelector('.dx-lock-button-area');
    if (lockIcon) {
      this.renderer.removeClass(lockIcon, 'dx-state-invisible');
    }
  }

  removeLockIcon() {
    const lockIcon = this.element.nativeElement.querySelector('.dx-lock-button-area');
    if (lockIcon) {
      this.renderer.addClass(lockIcon, 'dx-state-invisible');
    }
  }

  @HostListener('input')
  onInput() {
    if (this.isPasswordInput) {
      this.updatePasswordToggleVisibility();
    }
  }

  @HostListener('onOptionChanged', ['$event'])
  onOptionChanged(e: any) {
    if (e.name === 'readOnly') {
      if (e.value === true) {
        this.addLockIcon();
      } else {
        this.removeLockIcon();
      }
    }

    if (e.name === 'mode' && e.value === 'password' && !this.isPasswordInput) {
      this.isPasswordInput = true;
      this.createPasswordToggle();
      this.updatePasswordToggleVisibility();
    }

    if (e.name === 'value' && this.isPasswordInput) {
      this.updatePasswordToggleVisibility();
    }
  }
}
