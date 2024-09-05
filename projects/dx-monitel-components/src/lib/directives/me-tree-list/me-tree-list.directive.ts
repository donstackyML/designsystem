import {
  Directive,
  HostListener,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { DxTreeListComponent } from 'devextreme-angular';

@Directive({
  selector: '[meTreeList]',
  host: {
    '[class.me-tree-list]': 'true',
  },
})
export class MeTreeListDirective implements OnChanges {
  private component = inject(DxTreeListComponent);

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.component);
  }

  @HostListener('onToolbarPreparing', ['$event']) onToolbarPreparing(e: any) {
    console.log(e);
  }
}
