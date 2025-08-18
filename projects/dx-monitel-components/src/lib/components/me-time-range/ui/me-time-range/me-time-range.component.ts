import { NgIf, NgStyle, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { closeX20 } from '@monitel/me-icons';
import { MeIconsModule, MeIconsRegistry } from '@monitel/me-icons-registry';
import {
  DxButtonModule,
  DxNumberBoxModule,
  DxPopupModule,
  DxScrollViewModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { AnimationConfig } from 'devextreme/animation/fx';
import { PositionConfig } from 'devextreme/animation/position';
import { PositionAlignment } from 'devextreme/common';
// @ts-ignore
import { isEqual, omit } from 'lodash-es';
import { Subscription, interval } from 'rxjs';

import {
  MeButtonModule,
  MeNumberBoxModule,
  MeScrollViewModule,
  MeSelectBoxModule,
} from '../../../../directives';
import {
  buildTimeRangeSettings,
  calculateTimeRangeResultDates,
  getHighlightInfo,
  parseOptionalDateInput,
} from '../../helpers';
import { parseDateInput } from '../../helpers/parse-date-input';
import {
  DateHighlightInfo,
  TimeGranularity,
  TimeRangeConfig,
  TimeShiftChangedOutput,
} from '../../model/types';
import { MeQuickFiltersComponent } from '../me-quick-filters/me-quick-filters.component';
import {
  MinimalTimeShiftProperty,
  TimeShiftProperty,
} from '../me-shift-properties';
import { defaultFullTimeShiftUnits } from '../me-shift-properties/default-shift-properties';
import { ShiftSettingsOutput, ShiftType } from '../me-shift-settings';
import { MeShiftSettingsComponent } from '../me-shift-settings/me-shift-settings.component';
import { MeShiftTypeComponent } from '../me-shift-type/me-shift-type.component';
import { MeTimeRangeColumnsGridComponent } from '../me-time-range-columns-grid';
import { MeTimeRangeResultComponent } from '../me-time-range-result';
import { MeTimeRangeSettingSectionComponent } from '../me-time-range-settings-section';

type ResultEmitType = 'onChange' | 'onApply';
type SettingsBlock =
  | 'quickFilter'
  | 'shiftType'
  | 'shiftSettings'
  | 'steps'
  | 'result';

@Component({
  selector: 'me-time-range',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgStyle,
    NgTemplateOutlet,
    MeTimeRangeColumnsGridComponent,
    MeTimeRangeSettingSectionComponent,
    MeQuickFiltersComponent,
    MeShiftSettingsComponent,
    DxButtonModule,
    MeButtonModule,
    DxSelectBoxModule,
    MeSelectBoxModule,
    DxNumberBoxModule,
    MeNumberBoxModule,
    DxPopupModule,
    DxScrollViewModule,
    MeScrollViewModule,
    MeIconsModule,
    MeTimeRangeResultComponent,
    MeShiftTypeComponent,
  ],
  templateUrl: './me-time-range.component.html',
  styleUrls: ['./me-time-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeTimeRangeComponent implements OnInit, OnDestroy, OnChanges {
  private _initialSettings!: TimeRangeConfig;

  private _lastAppliedSettings: TimeRangeConfig | null = null;

  private _lastAppliedStartDate: Date | undefined = undefined;

  private _lastAppliedEndDate: Date | undefined = undefined;

  private meIconsRegistry = inject(MeIconsRegistry);

  private cdr = inject(ChangeDetectorRef);

  private intervalSubscription?: Subscription;

  private quickFilterChangedFromShift = false;

  private readonly OFF_QUICK_FILTER_ID = 'off';

  @Input() settingsBlocks: Array<SettingsBlock> = [
    'quickFilter',
    'shiftSettings',
    'steps',
    'result',
  ];

  @Input() defaultSettings?: Partial<TimeRangeConfig>;

  @Input() settings?: Partial<TimeRangeConfig>;

  @Input() isPopup = false;

  @Input() popupIsVisible = false;
  @Output() popupIsVisibleChange = new EventEmitter<boolean>();

  @Input() popupHideOnOutsideClick = true;

  @Input() popupWidth = '600px';

  @Input() popupHeight = 'auto';

  @Input() popupZIndex: number | null = null;

  @Input() popupPosition: PositionAlignment | PositionConfig = {
    my: 'center',
    at: 'center',
    of: window,
  };

  @Input() popupAnimation: { hide?: AnimationConfig; show?: AnimationConfig } =
    {
      show: { type: 'fade', duration: 300 },
      hide: { type: 'fade', duration: 300 },
    };

  @Input() showTitle = true;

  @Input() title?: string = '';

  @Input() hasHeaderCloseButton = false;

  @Input() hasFooterCancelButton = false;

  @Input() changesApplyMode: ResultEmitType = 'onApply';

  @Input() disableApplyButton: boolean | null = null;

  @Input() disableResetButton: boolean | null = null;

  @Input() intervalTime: number | null = null;

  @Input() quickFiltersDisabled = false;

  @Input() quickFiltersTitle = 'Интервал за последние:';

  @Output() timeRangeApplied = new EventEmitter<TimeRangeConfig>();

  @Output() settingsChanged = new EventEmitter<TimeRangeConfig>();

  @Output() timeRangeReset = new EventEmitter<TimeRangeConfig>();

  @Output() timeShiftChanged = new EventEmitter<TimeShiftChangedOutput>();

  @Output() closed = new EventEmitter<void>();

  @Output() popupOnHidden = new EventEmitter<void>();

  internalSettings!: TimeRangeConfig;

  selectedQuickFilterId?: string | null = null;

  effectiveStartDate: Date | undefined = undefined;

  effectiveEndDate: Date | undefined = undefined;

  startHighlightInfo: DateHighlightInfo = {};

  endHighlightInfo: DateHighlightInfo = {};

  closeIcon = '';

  constructor() {
    this.closeIcon = this.meIconsRegistry.getIcon(closeX20);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['intervalTime']) {
      this.intervalSubscription?.unsubscribe();

      if (this.intervalTime) {
        this.intervalSubscription = interval(this.intervalTime).subscribe(
          () => {
            if (
              this.internalSettings.startShift?.switchIsActive ||
              this.internalSettings.endShift?.switchIsActive
            ) {
              this.updateResultPreviewDates(false);
            }

            this.cdr.markForCheck();
          }
        );
      }
    }

    if (changes['settings']) {
      const newSettings = buildTimeRangeSettings(this.settings);

      if (!isEqual(this.internalSettings, newSettings)) {
        this._initialSettings = structuredClone(newSettings);
        this.internalSettings = newSettings;

        this.selectedQuickFilterId = this.internalSettings.quickFilterId;
        this.updateQuickFiltersDisabledState();
        this.updateResultPreviewDates(false);

        this.cdr.markForCheck();
      }
    }
  }

  ngOnInit(): void {
    this._initialSettings = buildTimeRangeSettings(this.settings);
    const df = buildTimeRangeSettings(this.settings);

    this.internalSettings = df;

    if (
      this.settings?.startShift?.properties !== null &&
      this.internalSettings.quickFilterId &&
      this.internalSettings.quickFilterId !== this.OFF_QUICK_FILTER_ID
    ) {
      this.applyQuickFilterProperties(
        this.internalSettings.quickFilterId,
        this.internalSettings,
        false
      );
    }
    this.selectedQuickFilterId = this.internalSettings.quickFilterId;

    this.updateQuickFiltersDisabledState();

    this.updateResultPreviewDates(false);
    this._lastAppliedSettings = structuredClone(this.internalSettings);
    this._lastAppliedStartDate = this.effectiveStartDate;
    this._lastAppliedEndDate = this.effectiveEndDate;

    if (this.intervalTime) {
      this.setupIntervalUpdater();
    }
  }

  ngOnDestroy() {
    this.intervalSubscription?.unsubscribe();
  }

  get popupWrapperAttr(): { [key: string]: string } {
    const baseClass = 'me-time-range-popup-wrapper';

    if (this.popupZIndex != null) {
      return {
        class: `${baseClass} has-custom-z-index`,
        style: `--me-custom-z-index: ${this.popupZIndex}`,
      };
    } else {
      return {
        class: baseClass,
      };
    }
  }

  get isApplyButtonDisabled(): boolean {
    if (this.disableApplyButton !== null) {
      return this.disableApplyButton;
    }

    const hasChanges = !isEqual(
      this._lastAppliedSettings,
      this.internalSettings
    );
    return !hasChanges;
  }

  get isResetDisabled(): boolean {
    if (this.disableResetButton !== null) {
      return this.disableResetButton;
    }

    const defaultSettingsForCompare = omit(
      this.defaultSettings,
      'absoluteDate'
    );
    const internalSettingsForCompare = omit(
      this.internalSettings,
      'absoluteDate'
    );

    return isEqual(internalSettingsForCompare, defaultSettingsForCompare);
  }

  onQuickFilterSelected(filterId: string) {
    const newSettings = structuredClone(
      this.internalSettings
    ) as TimeRangeConfig;

    this.applyQuickFilterProperties(
      filterId,
      newSettings,
      !this.quickFilterChangedFromShift
    );

    this.quickFilterChangedFromShift = false;
    newSettings.quickFilterId = filterId;
    this.internalSettings = newSettings;
    this.selectedQuickFilterId = filterId;
    this.updateQuickFiltersDisabledState();

    this.handleSettingsChange();
    this.cdr.markForCheck();
  }

  onShiftTypeChanged(shiftType: ShiftType) {
    const newSettings = structuredClone(
      this.internalSettings
    ) as TimeRangeConfig;

    if (newSettings.startShift) {
      newSettings.startShift.type = shiftType;
      newSettings.startShift.switchEnabled = false;
    }
    if (newSettings.endShift) {
      newSettings.endShift.type = shiftType;
      newSettings.endShift.switchEnabled = false;
    }

    this.internalSettings = newSettings;
  }

  handleShiftSettingsChange(
    shiftSettings: ShiftSettingsOutput,
    type: 'startShift' | 'endShift'
  ): void {
    const shiftToUpdate = this.internalSettings[type];
    if (!shiftToUpdate) return;

    const newSettings = structuredClone(
      this.internalSettings
    ) as TimeRangeConfig;

    newSettings[type] = {
      ...shiftToUpdate,
      properties: shiftSettings.properties
        ? structuredClone(shiftSettings.properties)
        : null,
      switchIsActive: shiftSettings.isRelativeModeActive,
      type: shiftSettings.shiftType,
    };

    if (type === 'startShift') {
      newSettings.absoluteDate.start =
        shiftSettings.absoluteDate === null
          ? null
          : parseOptionalDateInput(shiftSettings.absoluteDate);

      if (
        newSettings.quickFilterId !== this.OFF_QUICK_FILTER_ID &&
        this.settingsBlocks.includes('quickFilter')
      ) {
        this.quickFilterChangedFromShift = true;
        newSettings.quickFilterId = this.OFF_QUICK_FILTER_ID;
        this.selectedQuickFilterId = this.OFF_QUICK_FILTER_ID;
      }
    } else {
      newSettings.absoluteDate.end =
        shiftSettings.absoluteDate === null
          ? null
          : parseOptionalDateInput(shiftSettings.absoluteDate);
    }

    this.internalSettings = newSettings;
    this.updateQuickFiltersDisabledState();

    this.handleSettingsChange();
  }

  handleStepChange(value: {
    numberValue: number;
    selectedUnitValue: TimeGranularity;
  }): void {
    if (!this.internalSettings.step) return;

    const newSettings = {
      ...this.internalSettings,
      step: {
        ...this.internalSettings.step,
        numberValue: value.numberValue,
        selectedUnitValue: value.selectedUnitValue,
      },
    };

    this.internalSettings = newSettings;
    this.handleSettingsChange();
  }

  handleUpdateChange(value: {
    numberValue: number;
    selectedUnitValue: TimeGranularity;
  }): void {
    if (!this.internalSettings.update) return;
    const newSettings = {
      ...this.internalSettings,
      update: {
        ...this.internalSettings.update,
        numberValue: value.numberValue,
        selectedUnitValue: value.selectedUnitValue,
      },
    };
    this.internalSettings = newSettings;
    this.handleSettingsChange();
  }

  applyFilters() {
    if (
      document.activeElement &&
      (document.activeElement as HTMLElement).blur
    ) {
      (document.activeElement as HTMLElement).blur();
    }

    const rawSettingsToSave = { ...this.internalSettings };

    this._lastAppliedSettings = rawSettingsToSave;

    this._lastAppliedStartDate = this.effectiveStartDate;
    this._lastAppliedEndDate = this.effectiveEndDate;

    const configToEmit = {
      ...this._lastAppliedSettings,
      resultStartDate: this._lastAppliedStartDate,
      resultEndDate: this._lastAppliedEndDate,
    } as TimeRangeConfig;

    this.timeRangeApplied.emit(configToEmit);

    if (this.isPopup) {
      this.handleClose();
    }
    this.cdr.markForCheck();
  }

  resetFilters() {
    if (this.isResetDisabled) {
      return;
    }

    const defaultSettings = buildTimeRangeSettings(this.defaultSettings);

    this.internalSettings = defaultSettings;
    this.selectedQuickFilterId = null;

    this.timeRangeReset.emit(defaultSettings);

    this.handleSettingsChange(false);
  }

  handleClose() {
    this.popupIsVisible = false;
    this.popupIsVisibleChange.emit(false);
    this.closed.emit();
  }

  handleClosePopup() {
    this.popupIsVisible = false;
    this.popupIsVisibleChange.emit(false);
    this.closed.emit();
    this.popupOnHidden.emit();
  }

  onSubmit(): void {
    this.applyFilters();
  }

  private applyQuickFilterProperties(
    filterId: string,
    settingsToModify: TimeRangeConfig,
    isUserSelection: boolean
  ): boolean {
    let modified = false;

    if (!settingsToModify.startShift) {
      settingsToModify.startShift = {
        type: 'mixed',
        switchIsActive: true,
        properties: structuredClone(defaultFullTimeShiftUnits),
      };
      modified = true;
    }

    const startShift = settingsToModify.startShift!;
    let expectedPropertiesType: 'full' | 'minimal' | 'unknown';

    switch (startShift.type) {
      case 'current':
        expectedPropertiesType = 'minimal';
        break;
      case 'mixed':
      case 'absolute':
      default:
        if (Array.isArray(startShift.properties)) {
          expectedPropertiesType = 'full';
          break;
        }
        if (startShift.properties === null) {
          expectedPropertiesType = 'unknown';
          break;
        }
        expectedPropertiesType = 'minimal';
        break;
    }

    if (filterId.startsWith('last_')) {
      const match = filterId.match(/last_(\d+)([mhdwyM])/);
      if (match) {
        const [, valueStr, unitShorthand] = match;
        const value = -parseInt(valueStr, 10);
        let targetUnitKey: string;

        switch (unitShorthand) {
          case 'm':
            targetUnitKey = 'minutes';
            break;
          case 'h':
            targetUnitKey = 'hours';
            break;
          case 'd':
            targetUnitKey = 'days';
            break;
          case 'w':
            targetUnitKey = 'weeks';
            break;
          case 'M':
            targetUnitKey = 'months';
            break;
          default:
            console.warn(`Unknown unit shorthand: ${unitShorthand}`);
            return false;
        }

        let newProperties:
          | Array<TimeShiftProperty>
          | MinimalTimeShiftProperty
          | null = null;

        if (expectedPropertiesType === 'minimal') {
          const currentMinimalProps =
            startShift.properties as MinimalTimeShiftProperty | null;
          newProperties = {
            value: value,
            selectedUnit: targetUnitKey,
            units: currentMinimalProps?.units,
          };
        } else {
          let baseFullProps: Array<TimeShiftProperty>;
          if (Array.isArray(startShift.properties)) {
            baseFullProps = startShift.properties.map((p) => ({ ...p }));
          } else {
            baseFullProps = structuredClone(defaultFullTimeShiftUnits);
          }
          newProperties = baseFullProps.map((prop) => ({
            ...prop,
            enabled: prop.key === targetUnitKey,
            value: prop.key === targetUnitKey ? value : 0,
          }));
        }

        if (
          !isEqual(startShift.properties, newProperties) ||
          !startShift.switchIsActive
        ) {
          startShift.properties = newProperties;
          startShift.switchIsActive = true;
          modified = true;
        }
      }
    } else if (filterId === this.OFF_QUICK_FILTER_ID && isUserSelection) {
      if (this._initialSettings.startShift) {
        if (!isEqual(startShift, this._initialSettings.startShift)) {
          settingsToModify.startShift = structuredClone(
            this._initialSettings.startShift
          );
          modified = true;
        }
      }
    }

    return modified;
  }

  private handleSettingsChange(triggerApplyOnChange = true): void {
    this.updateResultPreviewDates();

    this.settingsChanged.emit(this.internalSettings);

    if (this.changesApplyMode === 'onChange' && triggerApplyOnChange) {
      this.timeRangeApplied.emit(this.internalSettings);

      this._lastAppliedSettings = this.internalSettings;
      this._lastAppliedStartDate = this.effectiveStartDate;
      this._lastAppliedEndDate = this.effectiveEndDate;
    }
  }

  private updateResultPreviewDates(emitEvent = true): void {
    const {
      resultStartDate,
      resultStartHighlightInfo,
      resultEndDate,
      resultEndHighlightInfo,
    } = calculateTimeRangeResultDates({
      absoluteDate: this.internalSettings.absoluteDate.start,
      startShiftProperties: this.internalSettings.startShift?.properties,
      startShiftRelativeModeIsActive:
        this.internalSettings.startShift?.switchIsActive,
      endDate: this.internalSettings.absoluteDate.end,
      endShiftProperties: this.internalSettings.endShift?.properties,
      endShiftRelativeModeIsActive:
        this.internalSettings.endShift?.switchIsActive,
    });

    const startSwitchIsActive =
      this.internalSettings.startShift?.switchIsActive;
    const endSwitchIsActive = this.internalSettings.endShift?.switchIsActive;

    this.effectiveStartDate = startSwitchIsActive
      ? resultStartDate
      : parseDateInput(this.internalSettings.absoluteDate.start);

    if (startSwitchIsActive) {
      this.startHighlightInfo = resultStartHighlightInfo;
    } else {
      const currentTime = new Date();
      const absoluteStartDate = parseDateInput(
        this.internalSettings.absoluteDate.start
      );
      this.startHighlightInfo = getHighlightInfo(
        currentTime,
        absoluteStartDate
      );
    }

    this.effectiveEndDate = endSwitchIsActive
      ? resultEndDate
      : parseDateInput(this.internalSettings.absoluteDate.end);

    if (endSwitchIsActive) {
      this.endHighlightInfo = resultEndHighlightInfo;
    } else {
      const currentTime = new Date();
      const absoluteEndDate = parseDateInput(
        this.internalSettings.absoluteDate.end
      );
      this.endHighlightInfo = getHighlightInfo(currentTime, absoluteEndDate);
    }

    if (emitEvent) {
      this.timeShiftChanged.emit({
        startDate: resultStartDate,
        endDate: resultEndDate,
      });
    }
  }

  private updateQuickFiltersDisabledState(): void {
    this.quickFiltersDisabled =
      this.internalSettings.quickFilterId !== this.OFF_QUICK_FILTER_ID &&
      this.internalSettings.quickFilterId !== null;
  }

  private setupIntervalUpdater(): void {
    this.intervalSubscription?.unsubscribe();
    if (this.intervalTime && this.intervalTime > 0) {
      this.intervalSubscription = interval(this.intervalTime).subscribe(() => {
        if (
          this.internalSettings.startShift?.switchIsActive ||
          this.internalSettings.endShift?.switchIsActive
        ) {
          this.updateResultPreviewDates(true);
          this.cdr.markForCheck();
        }
      });
    }
  }
}
