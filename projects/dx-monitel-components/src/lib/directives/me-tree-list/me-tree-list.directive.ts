import { Directive, inject } from '@angular/core';
import { DxTreeListComponent } from 'devextreme-angular';

@Directive({
  selector: '[meTreeList]',
  host: {
    '[class.me-tree-list]': 'true',
  },
})
export class MeTreeListDirective {
  private component = inject(DxTreeListComponent);

  ngOnInit(): void {
    this.applyInitialSettings();
  }

  private applyInitialSettings() {
    this.component.instance.option('showBorders', true);
    this.component.instance.option('showRowLines', true);
  }
}
