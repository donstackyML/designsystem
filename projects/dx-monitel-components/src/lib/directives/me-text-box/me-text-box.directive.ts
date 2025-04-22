import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeFormField } from '../me-form-item/me-form-field';

@Directive({
  selector: '[meTextBox]',
  host: {
    '[class.me-textbox]': 'true',
  },
  providers: [{ provide: MeFormField, useExisting: MeTextBoxDirective }],
})
export class MeTextBoxDirective
  extends MeFormField
  implements OnInit, AfterViewInit
{
  private passwordVisible = false;
  private isPasswordInput = false;
  private passwordToggleButton: HTMLElement | null = null;

  private focusService: ComponentFocusService;
  constructor(
    public element: ElementRef,
    protected textBox: DxTextBoxComponent,
    private renderer: Renderer2
  ) {
    super(textBox);
    this.textBox.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
  }
  ngOnInit(): void {
    this.isPasswordInput = this.textBox.instance.option('mode') === 'password';
  }

  ngAfterViewInit(): void {
    if (this.isPasswordInput) {
      this.createPasswordToggle();
      this.updatePasswordToggleVisibility();

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
