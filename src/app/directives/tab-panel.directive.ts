import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[meTabPanel]',
  host: {
    '[class.customClass]': 'customClass',
    '[class.me-tabs-panel]': 'true',
  },
})
export class MeTabPanelDirective {
  @Input() customClass: string = '';
  @Input() height: string = '300px';
  @Input() selectedIndex: number = 0;
  @Input() animationEnabled: boolean = true;
  @Input() swipeEnabled: boolean = true;
}
