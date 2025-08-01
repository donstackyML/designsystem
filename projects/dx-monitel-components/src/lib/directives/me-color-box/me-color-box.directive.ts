import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { DxColorBoxComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { DropDownOptionsService } from '../../service/drop-down-options.service';
import { MeSize } from '../../types/types';
import { MeFormField } from '../me-form-item/me-form-field';

@Directive({
  selector: '[meColorBox]',
  host: {
    '[class.me-color-box]': 'true',
  },
  providers: [{ provide: MeFormField, useExisting: MeColorBoxDirective }],
})
export class MeColorBoxDirective extends MeFormField implements AfterViewInit {
  @Input() override size: MeSize = 'small';

  private focusService: ComponentFocusService;

  constructor(
    private element: ElementRef,
    protected override component: DxColorBoxComponent,
    private viewContainerRef: ViewContainerRef,
    private dropDownOptionsService: DropDownOptionsService,
    private renderer: Renderer2
  ) {
    super(component);
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngAfterViewInit() {
    this.dropDownOptionsService.configureDropDownOptions(
      this.component,
      this.element,
      this.renderer,
      this.size
    );

    this.component.dropDownOptions = {
      wrapperAttr: {
        class: `me-color-box-wrapper-popup me-color-box-wrapper-popup-${this.size}`,
        position: {
          my: 'left top',
          at: 'left bottom',
          offset: { y: 4 },
          collision: 'fit flip',
          of: this.element.nativeElement,
        },
      },
    };
  }
}
