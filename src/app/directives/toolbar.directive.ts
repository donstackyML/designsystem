import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DxToolbarComponent } from 'devextreme-angular';

@Directive({
  selector: '[meToolbar]',
})
export class MeToolbarDirective implements OnInit {
  constructor(
    private element: ElementRef,
    private Component: DxToolbarComponent,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'me-toolbar');
  }
}
