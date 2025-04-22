import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import { MeSize } from '../../types/types';
import { ComponentFocusService } from '../../service/component-focus.service';

@Directive({
  selector: '[meToolbar]',
})
export class MeToolbarDirective implements OnInit, OnChanges {
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

  protected getMenuButtonElement() {
    return this.element.nativeElement.querySelector('.dx-toolbar-button.dx-toolbar-menu-container > .dx-button');
  }

  ngAfterViewInit() {
    const menuButton = this.getMenuButtonElement();
    this.renderer.addClass(menuButton, 'me-button');
    this.renderer.addClass(menuButton, 'me-button-icon-only');
    this.renderer.addClass(menuButton, `me-button-${this.size}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('size' in changes) {
      const menuButton = this.getMenuButtonElement();
      if (!changes['size'].firstChange) {
        this.renderer.removeClass(menuButton, `me-button-${changes['size'].previousValue}`);
      }
      this.renderer.addClass(menuButton, `me-button-${changes['size'].currentValue}`);
    }
  }
}
