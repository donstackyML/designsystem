import { Directive, Input } from '@angular/core';
import { DxContextMenuComponent } from 'devextreme-angular';

@Directive({
  selector: '[meContextMenu]',
})
export class MeContextMenuDirective {
  @Input() cssClass: string;
  @Input() height: string = '240px';

  constructor(private component: DxContextMenuComponent) {
    this.cssClass = '';
  }

  ngOnInit(): void {
    this.component.cssClass = `${this.cssClass} me-context-menu`;
    this.component.height = this.height;
    console.log(this.cssClass);
  }
}
