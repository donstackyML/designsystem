import { FormLabelMode, LabelLocation } from 'devextreme/ui/form';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export class FormDataFieldsService {
  private labelChangeEmitter = new EventEmitter<{
    mode: FormLabelMode;
    location: LabelLocation;
    showColon: boolean;
  }>();

  labelChange(
    mode: FormLabelMode,
    location: LabelLocation,
    showColonAfterLabel: boolean
  ) {
    setTimeout(() => {
      this.labelChangeEmitter.emit({
        mode: mode,
        location: location,
        showColon: showColonAfterLabel,
      });
    }, 15);
  }

  labelChangeObservable(): Observable<{
    mode: FormLabelMode;
    location: LabelLocation;
    showColon: boolean;
  }> {
    return this.labelChangeEmitter;
  }
}
