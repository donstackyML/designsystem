import { Directive, Input } from '@angular/core';
import { DxComponent } from 'devextreme-angular/core';
import { LabelMode } from 'devextreme/common';
import { LabelLocation } from 'devextreme/ui/form';
import { MeSize } from '../../types/types';

@Directive({
  host: {
    '[class.me-inputs]': 'true',
    '[class.me-inputs-small]': 'isSizeSmall',
    '[class.me-inputs-medium]': 'isSizeMedium',
    '[class.me-inputs-large]': 'isSizeLarge',
    '[class.me-inputs-show-required-mark]': 'showRequiredMark',
  },
})
export class MeFormField {
  @Input() size: MeSize = 'medium';
  @Input() showRequiredMark: boolean = false;

  constructor(protected component: DxComponent) {}

  updateLabel(label: string) {
    this.component.instance.option('label', label);
  }

  updateLabelMode(labelMode: LabelMode) {
    this.component.instance.option('labelMode', labelMode);
  }

  updateLabelLocation(location: LabelLocation) {
    this.component.instance.option('labelLocation', location);
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
}
