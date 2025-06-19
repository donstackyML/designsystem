import {Directive, ElementRef, Renderer2, ViewContainerRef} from "@angular/core";
import {DxColorBoxComponent} from "devextreme-angular";

@Directive({
  selector: '[meColorBox]',
  host: {
    '[class.me-color-box]': 'true',
  },
})
export class MeColorBoxDirective {
  constructor(
    private element: ElementRef,
    private component: DxColorBoxComponent,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ) {}
}
