import { Directive, Input, OnInit, inject } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meDataGrid]',
  host: {
    '[class.me-data-grid]': 'true',
    '[class.me-data-grid-small]': 'isSizeSmall',
    '[class.me-data-grid-medium]': 'isSizeMedium',
    '[class.me-data-grid-large]': 'isSizeLarge',
  },
})
export class MeDataGridDirective implements OnInit {
  @Input() size: MeSize = 'medium';

  private component = inject(DxDataGridComponent);

  ngOnInit(): void {
    this.applyInitialSettings();
  }

  private applyInitialSettings() {
    this.component.instance.option('showBorders', true);
    this.component.instance.option('showRowLines', true);
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
