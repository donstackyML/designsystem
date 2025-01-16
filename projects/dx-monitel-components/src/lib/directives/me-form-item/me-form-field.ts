import { LabelMode } from 'devextreme/common';
import { DxComponent } from 'devextreme-angular/core';
import { LabelLocation } from 'devextreme/ui/form';

export class MeFormField {
  constructor(protected component: DxComponent) {}

  updateLabel(label: string) {
    // @ts-ignore
    this.component.instance.option('label', label);
  }

  updateLabelMode(labelMode: LabelMode) {
    // @ts-ignore
    this.component.instance.option('labelMode', labelMode);
  }

  updateLabelLocation(location: LabelLocation) {
    // @ts-ignore
    this.component.instance.option('labelLocation', location);
  }
}
