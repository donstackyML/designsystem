import {
  AfterContentInit,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ecbWrapComponents]',
  standalone: true,
})
export class WrapComponentsDirective implements AfterContentInit {
  private allowedTags = ['me-icon', 'i'];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterContentInit() {
    const childNodes = Array.from(
      this.el.nativeElement.childNodes
    ) as Array<Node>;

    childNodes.forEach((child: Node) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        const element = child as HTMLElement;

        if (this.allowedTags.includes(element.nodeName.toLowerCase())) {
          const buttonEl = this.renderer.createElement(
            'button'
          ) as HTMLButtonElement;
          buttonEl.type = 'button';
          this.renderer.addClass(buttonEl, 'cell-action-button');

          this.renderer.removeChild(this.el.nativeElement, child);
          this.renderer.appendChild(buttonEl, child);
          this.renderer.appendChild(this.el.nativeElement, buttonEl);
        }
      }
    });
  }
}
