import { NgFor, NgIf } from '@angular/common';
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
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  DxCheckBoxModule,
  DxNumberBoxModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  defaultFullTimeShiftUnits,
  defaultMinimalTimeShiftUnits,
} from './default-shift-properties';
import {
  MinimalTimeShiftProperty,
  TimeShiftProperty,
} from './me-shift-properties.model';
import {
  MeCheckBoxModule,
  MeLabelModule,
  MeNumberBoxModule,
  MeSelectBoxModule,
} from '../../../../directives';

export interface MinimalTimeShiftUnit {
  text?: string;
  value: string;
}
export type PropertiesState = 'default' | 'disabled' | 'readOnly';
export type PropertiesVariant = 'full' | 'minimal';

@Component({
  selector: 'me-shift-properties',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    ReactiveFormsModule,
    DxCheckBoxModule,
    MeCheckBoxModule,
    DxNumberBoxModule,
    MeNumberBoxModule,
    MeLabelModule,
    DxSelectBoxModule,
    MeSelectBoxModule,
  ],
  templateUrl: './me-shift-properties.component.html',
  styleUrls: ['./me-shift-properties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeShiftPropertiesComponent
  implements OnInit, OnChanges, OnDestroy
{
  private _properties:
    | Array<TimeShiftProperty>
    | MinimalTimeShiftProperty
    | null = null;

  private fb = inject(FormBuilder);

  private destroy$ = new Subject<void>();

  private cdr = inject(ChangeDetectorRef);

  private isUpdatingFromInput = false;

  shiftForm!: FormGroup;

  minimalUnitsDataSource: Array<MinimalTimeShiftUnit> = [];

  minimalDisplayExpr = 'text';

  minimalValueExpr = 'value';

  @Input() title?: string = 'Настройка сдвига';

  @Input() variant: PropertiesVariant | null = 'full';

  @Input() state: PropertiesState = 'default';

  @Output() shiftPropertiesChange = new EventEmitter<
    Array<TimeShiftProperty> | MinimalTimeShiftProperty
  >();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['variant'] && !changes['variant'].firstChange) {
      this.destroy$.next();
      this.initializeForm();
      this.listenToFormChanges();
    }
    if (changes['state']) {
      this.updateFormState();
    }
    if (changes['properties'] && !changes['properties'].firstChange) {
      this.updateFormValues(changes['properties'].currentValue);
    }
  }

  ngOnInit(): void {
    this.initializeForm();
    this.listenToFormChanges();
    this.updateFormState();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get properties(): Array<TimeShiftProperty> | MinimalTimeShiftProperty | null {
    return this._properties;
  }

  @Input()
  set properties(
    value: Array<TimeShiftProperty> | MinimalTimeShiftProperty | null
  ) {
    this._properties = value;
  }

  get fullShiftItems(): FormArray | null {
    return this.shiftForm && this.variant === 'full'
      ? (this.shiftForm.get('items') as FormArray)
      : null;
  }

  trackByUnitKey(index: number, control: AbstractControl): string | number {
    const group = control as FormGroup;

    return group.get('key')?.value || index;
  }

  private initializeForm(): void {
    console.log(this.variant, 'this.variant');
    if (this.variant === 'full') {
      const props = (
        (this._properties && Array.isArray(this._properties)
          ? this._properties
          : defaultFullTimeShiftUnits) as Array<TimeShiftProperty>
      ).map((p) => ({ ...p }));

      this.shiftForm = this.fb.group({
        items: this.fb.array(
          props.map((prop) => this.createFullTimeShiftGroup(prop))
        ),
      });
    } else {
      let initialMinimalProps: MinimalTimeShiftProperty;
      const defaultMinimal: MinimalTimeShiftProperty = {
        value: 0,
        selectedUnit: 'minutes',
        displayExpr: 'text',
        valueExpr: 'value',
        units: defaultMinimalTimeShiftUnits.map((u) => ({ ...u })),
      };

      if (this._properties && !Array.isArray(this._properties)) {
        const inputProps = this._properties as MinimalTimeShiftProperty;
        initialMinimalProps = {
          ...defaultMinimal,
          ...inputProps,

          units: inputProps.units
            ? inputProps.units.map((u) => ({ ...u }))
            : defaultMinimal.units,
        };
      } else {
        initialMinimalProps = defaultMinimal;
      }

      this.minimalUnitsDataSource = initialMinimalProps.units || [];
      this.minimalDisplayExpr = initialMinimalProps.displayExpr || 'text';
      this.minimalValueExpr = initialMinimalProps.valueExpr || 'value';

      this.shiftForm = this.fb.group({
        value: [initialMinimalProps.value ?? 0],
        selectedUnit: [initialMinimalProps.selectedUnit],
      });
    }
    this.updateFormState();
  }

  private createFullTimeShiftGroup(prop: TimeShiftProperty): FormGroup {
    const group = this.fb.group({
      key: [prop.key],
      text: [prop.text],
      enabled: [prop.enabled],
      value: [
        {
          value: prop.value ?? 0,
          disabled: this.state === 'disabled' || !prop.enabled,
        },
      ],
    });

    group
      .get('enabled')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((isEnabled) => {
        const valueControl = group.get('value');
        if (this.state === 'disabled') return;

        if (isEnabled) {
          valueControl?.enable({ emitEvent: false });
        } else {
          valueControl?.disable({ emitEvent: false });
        }
      });

    return group;
  }

  private updateFormValues(
    newProperties: Array<TimeShiftProperty> | MinimalTimeShiftProperty | null
  ): void {
    if (!this.shiftForm) return;

    this.isUpdatingFromInput = true;
    try {
      if (this.variant === 'full') {
        const newPropsData = (
          (newProperties && Array.isArray(newProperties)
            ? newProperties
            : defaultFullTimeShiftUnits) as Array<TimeShiftProperty>
        ).map((p) => ({ ...p }));

        const newFormArray = this.fb.array(
          newPropsData.map((prop) => this.createFullTimeShiftGroup(prop))
        );
        this.shiftForm.setControl('items', newFormArray, { emitEvent: false });

        this.updateFormState();
      } else if (newProperties && !Array.isArray(newProperties)) {
        const minimalProps = newProperties as MinimalTimeShiftProperty;
        this.shiftForm.patchValue(
          {
            value: minimalProps.value ?? 0,
            selectedUnit: minimalProps.selectedUnit,
          },
          { emitEvent: false }
        );
        this.minimalUnitsDataSource = minimalProps.units
          ? minimalProps.units.map((u) => ({ ...u }))
          : defaultMinimalTimeShiftUnits.map((u) => ({ ...u }));
        this.minimalDisplayExpr = minimalProps.displayExpr || 'text';
        this.minimalValueExpr = minimalProps.valueExpr || 'value';
      } else if (this.variant === 'minimal' && !newProperties) {
        const defaultMinimal: MinimalTimeShiftProperty = {
          value: 0,
          selectedUnit: 'minutes',
          displayExpr: 'text',
          valueExpr: 'value',
          units: defaultMinimalTimeShiftUnits.map((u) => ({ ...u })),
        };
        this.shiftForm.patchValue(
          {
            value: defaultMinimal.value,
            selectedUnit: defaultMinimal.selectedUnit,
          },
          { emitEvent: false }
        );
        this.minimalUnitsDataSource = defaultMinimal.units!;
        this.minimalDisplayExpr = defaultMinimal.displayExpr!;
        this.minimalValueExpr = defaultMinimal.valueExpr!;
      }

      this.shiftForm.markAsPristine();
    } finally {
      this.cdr.markForCheck();
      Promise.resolve().then(() => (this.isUpdatingFromInput = false));
    }
  }

  private listenToFormChanges(): void {
    this.shiftForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((formValue) => {
        if (this.isUpdatingFromInput) {
          return;
        }
        if (!this.shiftForm.valid) {
          return;
        }

        if (this.variant === 'full') {
          const itemsArray = this.shiftForm.get('items') as FormArray;

          const outputProperties: Array<TimeShiftProperty> =
            itemsArray.controls.map((control) => {
              const rawValue = (control as FormGroup).getRawValue();
              return {
                key: rawValue.key,
                text: rawValue.text,
                enabled: rawValue.enabled,
                value: rawValue.value ?? 0,
              };
            });
          this.shiftPropertiesChange.emit(outputProperties);
        } else {
          const outputMinimal: MinimalTimeShiftProperty = {
            value: formValue.value ?? 0,
            selectedUnit: formValue.selectedUnit,
            units: this.minimalUnitsDataSource.map((u) => ({ ...u })),
            displayExpr: this.minimalDisplayExpr,
            valueExpr: this.minimalValueExpr,
          };
          this.shiftPropertiesChange.emit(outputMinimal);
        }
      });
  }

  private updateFormState(): void {
    if (!this.shiftForm) return;

    if (this.state === 'disabled') {
      this.shiftForm.disable({ emitEvent: false });
    } else {
      this.shiftForm.enable({ emitEvent: false });

      if (this.variant === 'full') {
        const itemsArray = this.shiftForm.get('items') as FormArray;
        itemsArray.controls.forEach((controlGroup) => {
          const enabledControl = controlGroup.get('enabled');
          const valueControl = controlGroup.get('value');
          if (!enabledControl?.value) {
            valueControl?.disable({ emitEvent: false });
          }
        });
      }
    }
  }
}
