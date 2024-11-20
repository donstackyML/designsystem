import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { DxButtonTypes } from 'devextreme-angular/ui/button';
import {
  DxTextBoxModule,
  DxNumberBoxModule,
  DxDateBoxModule,
} from 'devextreme-angular';
import {
  MeTextBoxModule,
  MeDateBoxModule,
  MeNumberBoxModule,
} from '../../public-api';
import { MeIconsModule } from '@monitel/me-icons-registry';

// Определяем типы для кнопок
interface ButtonProperties extends DxButtonTypes.Properties {
  stylingMode: 'text';
  onClick?: (e: any) => void;
}

@Component({
  selector: 'app-input-fields',
  standalone: true,
  imports: [
    DxTextBoxModule,
    DxNumberBoxModule,
    DxDateBoxModule,
    MeTextBoxModule,
    MeDateBoxModule,
    MeIconsModule,
    MeNumberBoxModule,
  ],
  template: `
    <div class="dx-fieldset">
      <div class="dx-field">
        <div class="dx-field-label">Password Field</div>
        <div class="dx-field-value">
          <dx-text-box
            meTextBox
            [stylingMode]="stylingMode"
            [size]="size"
            [disabled]="disabled"
            [readOnly]="readOnly"
            [mode]="passwordMode"
            [(value)]="initialValue"
            (onValueChanged)="handleValueChange($event)"
            placeholder="Enter password"
          >
            <dxi-button
              name="password-toggle"
              location="after"
              [options]="passwordButton"
            >
            </dxi-button>
          </dx-text-box>
        </div>
      </div>

      <div class="dx-field">
        <div class="dx-field-label">Currency Field</div>
        <div class="dx-field-value">
          <dx-number-box
            meNumberBox
            [size]="size"
            [stylingMode]="stylingMode"
            [disabled]="disabled"
            [readOnly]="readOnly"
            [format]="currencyFormat"
            [(value)]="currencyValue"
            (onValueChanged)="handleValueChange($event)"
            [showClearButton]="true"
          >
            <dxi-button
              name="currency"
              location="after"
              [options]="currencyButton"
            >
            </dxi-button>
          </dx-number-box>
        </div>
      </div>

      <div class="dx-field">
        <div class="dx-field-label">Date Field</div>
        <div class="dx-field-value">
          <dx-date-box
            meDateBox
            [size]="size"
            [disabled]="disabled"
            [readOnly]="readOnly"
            [(value)]="dateValue"
            (onValueChanged)="handleValueChange($event)"
            [showClearButton]="true"
            [showDropDownButton]="true"
            [openOnFieldClick]="true"
          >
            <dxi-button name="today" location="before" [options]="todayButton">
            </dxi-button>
            <dxi-button
              name="prevDate"
              location="before"
              [options]="prevDateButton"
            >
            </dxi-button>
            <dxi-button
              name="nextDate"
              location="after"
              [options]="nextDateButton"
            >
            </dxi-button>
          </dx-date-box>
        </div>
      </div>
    </div>
  `,
})
export class InputFieldsComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() stylingMode: 'outlined' | 'underlined' | 'filled' = 'outlined';
  @Input() disabled = false;
  @Input() readOnly = false;
  @Input() initialValue = '';
  @Input() currencyValue = 14500.55;
  @Input() dateValue = new Date();

  @Output() onPasswordVisibilityChange = new EventEmitter<{
    mode: 'text' | 'password';
  }>();
  @Output() onCurrencyChange = new EventEmitter<{
    currency: '$' | '€';
    value: number;
  }>();
  @Output() onValueChange = new EventEmitter<{
    value: any;
    component: string;
  }>();

  millisecondsInDay = 24 * 60 * 60 * 1000;
  passwordMode: 'text' | 'password' = 'password';
  currencyFormat = '$ #,##0.00';
  currentCurrencySymbol: '$' | '€' = '$';

  // Объявляем свойства для кнопок
  passwordButton!: ButtonProperties;
  currencyButton!: ButtonProperties;
  todayButton!: ButtonProperties;
  prevDateButton!: ButtonProperties;
  nextDateButton!: ButtonProperties;

  constructor(private cdr: ChangeDetectorRef) {
    this.initializeButtons();
  }

  private initializeButtons() {
    this.passwordButton = {
      stylingMode: 'text',
      icon: 'eyeopen',
      onClick: (e) => {
        this.passwordMode = this.passwordMode === 'text' ? 'password' : 'text';
        this.onPasswordVisibilityChange.emit({ mode: this.passwordMode });
        this.cdr.detectChanges();
      },
    };

    this.currencyButton = {
      stylingMode: 'text',
      hoverStateEnabled: true,
      text: this.currentCurrencySymbol,
      onClick: (e) => {
        this.currentCurrencySymbol =
          this.currentCurrencySymbol === '$' ? '€' : '$';
        // Обновляем иконку и текст через instance
        e.component.option({
          text: this.currentCurrencySymbol,
        });
        this.currencyFormat = `${this.currentCurrencySymbol} #,##0.00`;
        this.onCurrencyChange.emit({
          currency: this.currentCurrencySymbol,
          value: this.currencyValue,
        });
        this.cdr.detectChanges();
      },
    };

    // Календарные кнопки
    this.todayButton = {
      stylingMode: 'text',
      hoverStateEnabled: true,
      icon: 'event',
      onClick: () => {
        this.dateValue = new Date();
        this.cdr.detectChanges();
      },
    };

    this.prevDateButton = {
      stylingMode: 'text',
      hoverStateEnabled: true,
      icon: 'chevronleft',
      onClick: () => {
        this.dateValue = new Date(
          this.dateValue.getTime() - this.millisecondsInDay
        );
        this.cdr.detectChanges();
      },
    };

    this.nextDateButton = {
      stylingMode: 'text',
      hoverStateEnabled: true,
      icon: 'chevronright',
      onClick: () => {
        this.dateValue = new Date(
          this.dateValue.getTime() + this.millisecondsInDay
        );
        this.cdr.detectChanges();
      },
    };
  }

  handleValueChange(e: any) {
    let componentType = 'unknown';
    if (typeof e.value === 'string') componentType = 'text';
    else if (typeof e.value === 'number') componentType = 'currency';
    else if (e.value instanceof Date) componentType = 'date';

    this.onValueChange.emit({
      value: e.value,
      component: componentType,
    });
  }
}
