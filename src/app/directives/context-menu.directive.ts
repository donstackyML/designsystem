import { Directive, Input } from '@angular/core';
import { DxContextMenuComponent } from 'devextreme-angular';

@Directive({
  selector: '[meContextMenu]',
})
export class MeContextMenuDirective {
  @Input() cssClass: string = '';

  constructor(private component: DxContextMenuComponent) {}

  ngOnInit(): void {
    this.component.cssClass = `${this.cssClass} me-context-menu`;
  }
}
