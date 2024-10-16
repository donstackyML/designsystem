import {
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DxToolbarComponent } from 'devextreme-angular';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meToolbar]',
})
export class MeToolbarDirective implements OnInit, AfterViewChecked {
  @Input() size: MeSize = 'medium';
  @Input() background: boolean = false;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private component: DxToolbarComponent
  ) {}

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

  ngAfterViewChecked(): void {
    console.log(this.component);
  }
}
