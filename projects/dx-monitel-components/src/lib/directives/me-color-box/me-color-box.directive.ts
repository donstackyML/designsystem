import {Directive, ElementRef, Input, Renderer2, ViewContainerRef} from "@angular/core";
import {DxColorBoxComponent} from "devextreme-angular";
import {MeFormField} from "../me-form-item/me-form-field";
import {ComponentFocusService} from "../../service/component-focus.service";
import {MeSize} from "../../types/types";

@Directive({
  selector: '[meColorBox]',
  host: {
    '[class.me-color-box]': 'true',
  },
  providers: [{ provide: MeFormField, useExisting: MeColorBoxDirective }],
})
export class MeColorBoxDirective extends MeFormField {
  @Input() override size: MeSize = 'small';

  private focusService: ComponentFocusService;

  constructor(
    private element: ElementRef,
    protected override  component: DxColorBoxComponent,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ) {
    super(component);
    this.focusService = new ComponentFocusService(element, renderer);
  }
}
