import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MeSize } from '../../types/types';
import { ComponentFocusService } from '../../service/component-focus.service';

@Directive({
  selector: '[meToolbar]',
})
export class MeToolbarDirective implements OnInit {
  @Input() size: MeSize = 'medium';
  @Input() background: boolean = false;

  private focusService: ComponentFocusService;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'me-toolbar');
    this.renderer.addClass(
      this.element.nativeElement,
      `me-toolbar-${this.size}`
    );

    if (this.background) {
      this.renderer.addClass(
        this.element.nativeElement,
        `me-toolbar-background`
      );
    }
  }
}
