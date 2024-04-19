import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { MeEditorDirective } from './editor.directive';
import { DxRadioGroupComponent } from 'devextreme-angular';

@Directive({
  selector: '[meRadioGroup]',
})
export class MeRadioGroupDirective extends MeEditorDirective {
  constructor(
    element: ElementRef,
    component: DxRadioGroupComponent,
    renderer: Renderer2
  ) {
    super(element, component, renderer);
  }

  ngOnInit(): void {
    this.initMeEditor();
  }
}
