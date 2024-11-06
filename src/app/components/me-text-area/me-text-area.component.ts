import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LabelMode } from 'devextreme/common';

@Component({
  selector: 'me-text-area',
  templateUrl: './me-text-area.component.html',
  styleUrls: ['./me-text-area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeTextAreaComponent {
  autoResizeEnabled = false;
  activeStateEnabled = true;
  size = 'medium' as const;
  label = 'Label';
  labelMode = 'top' as LabelMode;
  placeholder = 'Enter your text';
  readOnly = false;
  disabled = false;
  isValid = true;
  validationError = '';
  validationMessageMode = 'auto' as const;
  validationMessagePosition = 'top' as const;
  value =
    'Prepare 2013 Marketing Plan: We need to double revenues in 2013 and our marketing strategy is going to be key here.';
  width = '320px';
}
