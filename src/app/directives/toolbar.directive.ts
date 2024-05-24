import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DxToolbarComponent } from 'devextreme-angular';
import { MeSize } from '../types/types';

@Directive({
  selector: '[meToolbar]',
})
export class MeToolbarDirective implements OnInit {
  @Input() size: MeSize = 'medium';
  @Input() background: boolean = false;

  constructor(
    private element: ElementRef,
    private Component: DxToolbarComponent,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    console.log(this.size);
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
