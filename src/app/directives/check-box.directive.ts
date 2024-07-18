import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DxCheckBoxComponent } from 'devextreme-angular';
import { MeEditorDirective } from './editor.directive';

@Directive({
  selector: '[meCheckBox]',
})
export class MeCheckBoxDirective extends MeEditorDirective implements OnInit {
  constructor(element: ElementRef, component: DxCheckBoxComponent, renderer: Renderer2) {
    super(element, component, renderer);
  }

  ngOnInit(): void {
    this.initMeEditor();
  }
}
