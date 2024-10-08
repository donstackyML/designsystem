import { Directive, HostListener, inject } from '@angular/core';
import { DxListComponent } from 'devextreme-angular';

@Directive({
  selector: '[meList]',
  host: {
    '[class.me-list]': 'true',
  },
})
export class MeListDirective {
  private component = inject(DxListComponent);
  @HostListener('onContentReady', ['$event'])
  onContentReady(e: Event) {
    console.log(e);
    console.log(this.component);
  }
}
