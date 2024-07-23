import {
	Directive,
	Input,
} from '@angular/core';

@Directive({
  selector: '[meTabPanel]',
  host: {
    '[class.customClass]': 'customClass',
		'[class.me-tabs-panel]': 'true',
  }
})
export class MeTabPanelDirective {
  @Input() customClass: string = '';
}
