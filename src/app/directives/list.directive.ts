import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[meList]',
})
export class MeListDirective {
  // @Input() dataSource:

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'me-list');
  }
}
