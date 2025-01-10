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
import { DxTextBoxComponent } from 'devextreme-angular';
import { MeSize } from 'projects/dx-monitel-components/me-components';
import { MeFormField } from '../me-form-item/me-form-field';
import { FocusManagerService } from '../../service/keyboard-navigation.service';

@Directive({
  selector: '[meTextBox]',
  host: {
    '[class.me-textbox]': 'true',
    '[class.me-textbox-small]': 'isSizeSmall',
    '[class.me-textbox-medium]': 'isSizeMedium',
    '[class.me-textbox-large]': 'isSizeLarge',

    '[class.me-inputs]': 'true',
    '[class.me-inputs-small]': 'isSizeSmall',
    '[class.me-inputs-medium]': 'isSizeMedium',
    '[class.me-inputs-large]': 'isSizeLarge',
  },
  providers: [{ provide: MeFormField, useExisting: MeTextBoxDirective }],
})
export class MeTextBoxDirective
  extends MeFormField
  implements OnInit, AfterViewInit
{
  @Input() size: MeSize = 'medium';
  private passwordVisible = false;
  private isPasswordInput = false;
  private passwordToggleButton: HTMLElement | null = null;

  private renderer = inject(Renderer2);

  constructor(
    public element: ElementRef,
    protected textBox: DxTextBoxComponent,
    private focusManager: FocusManagerService
  ) {
    super(textBox);
  }
  ngOnInit(): void {
    this.focusManager.monitorFocus(this.element, true).subscribe();
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
    if (this.isPasswordInput) {
      this.createPasswordToggle();
      this.updatePasswordToggleVisibility();

      // Добавляем слушатель события valueChanged
      this.textBox.instance.on('valueChanged', () => {
        this.updatePasswordToggleVisibility();
      });
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
      hasValue || hasInputValue ? 'block' : 'none'
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

  @HostListener('input')
  onInput() {
    if (this.isPasswordInput) {
      this.updatePasswordToggleVisibility();
    }
  }

  @HostListener('onOptionChanged', ['$event'])
  onOptionChanged(e: any) {
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
