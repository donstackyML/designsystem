import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DxTextAreaComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeFormField } from '../me-form-item/me-form-field';

@Directive({
  selector: '[meTextArea]',
  host: {
    '[class.me-text-area]': 'true',
  },
  providers: [{ provide: MeFormField, useExisting: MeTextAreaDirective }],
})
export class MeTextAreaDirective extends MeFormField implements OnInit {
  @Input() height: string | number = '';

  private focusService: ComponentFocusService;
  constructor(
    public element: ElementRef,
    protected override component: DxTextAreaComponent,
    protected renderer: Renderer2
  ) {
    super(component);
    this.component.labelMode = 'outside';

    if (this.component.autoResizeEnabled) {
      this.component.height = 'auto';
    }
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit(): void {
    const container = this.element.nativeElement;

    if (this.height && container) {
      this.renderer.addClass(container, 'me-text-area-custom-height');
    }
  }
}
