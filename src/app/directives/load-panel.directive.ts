import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[meLoadPanel]',
  host: {
    '[class.me-load-panel-small]': 'isSmall',
    '[class.me-load-panel-medium]': 'isMedium',
    '[class.me-load-panel-large]': 'isLarge',
    '[class.me-load-panel-custom]': 'customClass',
  },
})
export class MeLoadPanelDirective {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() customClass: boolean = false;

  get isSmall() {
    return this.size === 'small';
  }

  get isMedium() {
    return this.size === 'medium';
  }

  get isLarge() {
    return this.size === 'large';
  }
}
