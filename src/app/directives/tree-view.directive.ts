import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[meTreeView]',
})
export class MeTreeViewDirective {
  constructor(
    private element: ElementRef,
    // private component: dxTreeView,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, 'me-tree-view');
  }
}
