import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { ValueChangedEvent as DateBoxValueChangedEvent } from 'devextreme/ui/date_box';
import { ValueChangedEvent as SwitchValueChangedEvent } from 'devextreme/ui/switch';
import {
  DxCheckBoxModule,
  DxDateBoxModule,
  DxNumberBoxModule,
  DxSwitchModule,
} from 'devextreme-angular';

import {
  MeCheckBoxModule,
  MeDateBoxModule,
  MeLabelModule,
  MeNumberBoxModule,
  MeSwitchModule,
} from '../../../../directives';
import {
  MeShiftPropertiesComponent,
  MinimalTimeShiftProperty,
  TimeShiftProperty,
} from '../me-shift-properties';
import { ShiftSettingsOutput, ShiftType } from './me-shift-settings.model';
import { PropertiesState } from '../me-shift-properties/me-shift-properties.component';

@Component({
  selector: 'me-shift-settings',
  standalone: true,
  imports: [
    NgIf,
    DxCheckBoxModule,
    MeCheckBoxModule,
    DxNumberBoxModule,
    MeNumberBoxModule,
    DxSwitchModule,
    MeSwitchModule,
    MeLabelModule,
    DxDateBoxModule,
    MeDateBoxModule,
    MeShiftPropertiesComponent,
  ],
  templateUrl: './me-shift-settings.component.html',
  styleUrls: ['./me-shift-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeShiftSettingsComponent implements OnInit, OnChanges {
  _switchTitle = '';

  _propertiesVariant: MeShiftPropertiesComponent['variant'] = 'full';

  _isDateBoxReadOnly = false;

  private cdr = inject(ChangeDetectorRef);

  @Input() title: string | null = 'Сдвиг';

  @Input() shiftType: ShiftType = 'mixed';

  @Input() switchIsActive = true;

  @Input() absoluteDate: Date | string | number = '';

  @Input() properties:
    | Array<TimeShiftProperty>
    | MinimalTimeShiftProperty
    | null = null;

  @Input() propertiesTitle = 'Настройка сдвига';

  @Input() propertiesVariant?: MeShiftPropertiesComponent['variant'];

  @Input() propertiesState: PropertiesState = 'default';

  @Input() switchTitle?: string = '';

  @Input() switchEnabled = true;

  @Input() hasProperties = true;

  @Output() settingsChange = new EventEmitter<ShiftSettingsOutput>();

  @Output() shiftPropertiesChanged = new EventEmitter<
    Array<TimeShiftProperty> | MinimalTimeShiftProperty | null
  >();

  @Output() absoluteDateChanged = new EventEmitter<Date | null>();

  @Output() switchValueChanged = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
    let needsUpdate = false;

    if (changes['shiftType']) {
      needsUpdate = true;
    }
    if (changes['switchTitle']) {
      this.updateSwitchTitleAndState();
    }
    if (changes['currentShiftIsActive']) {
      needsUpdate = true;
    }
    if (changes['switchEnabled']) {
      needsUpdate = true;
    }

    if (needsUpdate) {
      this.updateComponentState();
    }
  }

  ngOnInit(): void {
    this.updateComponentState();
  }

  onSwitchChange(event: SwitchValueChangedEvent): void {
    const newRelativeMode = event.value;
    if (this.switchEnabled && this.switchIsActive !== newRelativeMode) {
      this.switchIsActive = newRelativeMode;
      this.updateComponentState();
      this.emitSettings();
    }
    this.switchValueChanged.emit(newRelativeMode);
  }

  handleAbsoluteDateChange(event: DateBoxValueChangedEvent): void {
    const newAbsoluteDate = event.value as Date;

    if (this.absoluteDate !== newAbsoluteDate) {
      this.absoluteDate = newAbsoluteDate;
      this.emitSettings();
    }
    this.absoluteDateChanged.emit(newAbsoluteDate);
  }

  handleShiftPropertiesChange(
    newProperties: Array<TimeShiftProperty> | MinimalTimeShiftProperty | null
  ): void {
    this.properties = newProperties;
    this.shiftPropertiesChanged.emit(newProperties);
    this.emitSettings();
  }

  get effectiveChildVariant(): MeShiftPropertiesComponent['variant'] {
    return this.propertiesVariant || this._propertiesVariant;
  }

  private updateComponentState(): void {
    this.updateSwitchTitleAndState();
    this.updatePropertiesVariantAndDateBoxState();
  }

  private updateSwitchTitleAndState(): void {
    if (!this.switchEnabled) {
      this._switchTitle = '';
      return;
    }

    if (this.switchTitle) {
      this._switchTitle = this.switchTitle;
    } else {
      switch (this.shiftType) {
        case 'mixed':
          this._switchTitle = this.switchIsActive
            ? 'Относительно тек.'
            : 'Абсолютное время';
          break;
        case 'current':
          this._switchTitle = 'Относительно текущего';
          break;
        case 'absolute':
          this._switchTitle = 'Абсолютное время';
          break;
        default:
          this._switchTitle = '';
          break;
      }
    }
  }

  private updatePropertiesVariantAndDateBoxState(): void {
    console.log(this.switchEnabled, 'this.switchEnabled');

    switch (this.shiftType) {
      case 'mixed':
        this._isDateBoxReadOnly = this.switchIsActive;
        break;
      case 'current':
        this._isDateBoxReadOnly = this.switchEnabled
          ? this.switchIsActive
          : true;
        break;
      case 'absolute':
        this._isDateBoxReadOnly = false;
        break;
      default:
        this._isDateBoxReadOnly = false;
        break;
    }

    if (Array.isArray(this.properties)) {
      this._propertiesVariant = 'full';
    } else {
      this._propertiesVariant = 'minimal';
    }

    this.cdr.markForCheck();
  }

  private emitSettings(): void {
    let dateToEmit: Date | null = null;
    if (this.absoluteDate instanceof Date) {
      dateToEmit = this.absoluteDate;
    } else if (
      typeof this.absoluteDate === 'string' ||
      typeof this.absoluteDate === 'number'
    ) {
      const parsedDate = new Date(this.absoluteDate);
      if (!isNaN(parsedDate.getTime())) {
        dateToEmit = parsedDate;
      }
    }
    const output: ShiftSettingsOutput = {
      absoluteDate: dateToEmit,
      isRelativeModeActive: this.switchIsActive,
      properties: this.properties,
      shiftType: this.shiftType,
    };
    this.settingsChange.emit(output);
  }
}
