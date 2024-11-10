import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'me-tag-box',
  templateUrl: './me-tag-box.component.html',
  styleUrls: ['./me-tag-box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeTagBoxComponent {
  items = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'];
  size = 'small' as const;
  width = '400px';
  height = '';
  label = 'Label*';
  labelMode = 'outside' as const;
  applyValueMode = 'instantly' as const;
  grouped = false;
  searchEnabled = true;
  placeholder = 'Выберите...';
  showClearButton = false;
  showSelectionControls = false;
  hideSelectedItems = false;
  activeStateEnabled = true;
  hoverStateEnabled = true;
  focusStateEnabled = true;
  disabled = false;
  isValid = true;
  validationMessageMode = 'auto' as const;
  validationMessagePosition = 'top' as const;
  readOnly = false;
}
