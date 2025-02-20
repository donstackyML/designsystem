import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DxTextAreaComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeFormField } from '../me-form-item/me-form-field';

type MeSize = 'small' | 'medium' | 'large';

@Directive({
  selector: '[meTextArea]',
  providers: [{ provide: MeFormField, useExisting: MeTextAreaDirective }],
})
export class MeTextAreaDirective extends MeFormField implements OnInit {
  @Input() size: MeSize = 'medium';
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
      this.component.height = 'auto'
    }
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit(): void {
    const container = this.element.nativeElement

    if (this.height && container) {
      this.renderer.addClass(
        container,
        'me-text-area-custom-height',
      );
    }
  }

  @HostBinding('class')
  get hostClasses(): string {
    return `me-text-area me-text-area-${this.size} me-inputs me-inputs-${this.size}`;
  }
}
