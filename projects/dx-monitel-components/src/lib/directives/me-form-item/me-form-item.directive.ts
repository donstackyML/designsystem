import {
  AfterViewInit,
  ContentChild,
  ContentChildren,
  Directive,
  Host,
  Optional,
  QueryList,
  Self,
} from '@angular/core';
import {
  DxiItemComponent,
  DxoLabelComponent,
} from 'devextreme-angular/ui/nested';
import { FormDataFieldsService } from '../../service/form-datafields.service';
import { Subscription } from 'rxjs';
import { FormLabelMode, LabelLocation } from 'devextreme/ui/form';
import { MeFormField } from './me-form-field';

@Directive({
  selector: '[meFormItem]',
})
export class MeFormItemDirective implements AfterViewInit {
  @ContentChildren(MeFormField, { descendants: true })
  viewChildren!: QueryList<MeFormField>;
  @ContentChild(DxoLabelComponent, { descendants: true })
  dxLabel!: DxoLabelComponent;

  private _formService?: FormDataFieldsService;
  private _subscription?: Subscription;
  private label?: string;

  get formService(): FormDataFieldsService | undefined {
    return this._formService;
  }

  set formService(value: FormDataFieldsService | undefined) {
    this._formService = value;
    this._subscription?.unsubscribe();
    if (value) {
      this._subscription = value.labelChangeObservable().subscribe((data) => {
        this.changeLabel(data.mode, data.location, data.showColon);
      });
    }
  }

  constructor(
    @Host() @Self() @Optional() public hostFormItemComponent: DxiItemComponent
  ) {}

  ngAfterViewInit(): void {
    this.label = this.dxLabel.text;
    this.dxLabel.visible = false;
  }

  private changeLabel(
    mode: FormLabelMode,
    location: LabelLocation,
    showColon: boolean
  ) {
    switch (mode) {
      case 'floating':
        {
          this.dxLabel.visible = false;
          location = 'top';
        }
        break;
      case 'hidden':
        {
          this.dxLabel.visible = false;
          location = 'top';
        }
        break;
      case 'static':
        {
          this.dxLabel.visible = false;
          location = 'top';
        }
        break;
      case 'outside':
        {
          this.dxLabel.visible = true;
          mode = 'hidden';
        }
        break;
    }

    this.viewChildren.forEach((txtBox) => {
      txtBox.updateLabel(this.getFieldLabel(showColon));
      txtBox.updateLabelMode(mode);
      txtBox.updateLabelLocation(location);
    });
  }

  getFieldLabel(showColon: boolean) {
    return showColon ? this.label! + ':' : this.label!;
  }
}
