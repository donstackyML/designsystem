import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { MeSize } from '../types/types';

@Directive({
  selector: '[meTreeView]',
})
export class MeTreeViewDirective {
  @Input() size: Exclude<MeSize, 'medium'> = 'large';
  @Input() itemWordWrap: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, 'me-tree-view');
    this.renderer.addClass(
      this.element.nativeElement,
      `me-tree-view-${this.size}`
    );

    if (this.itemWordWrap) {
      this.renderer.addClass(
        this.element.nativeElement,
        'me-tree-view-word-wrap'
      );
    }
  }
}
