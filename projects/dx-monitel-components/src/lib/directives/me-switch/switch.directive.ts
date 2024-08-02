import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { MeEditorDirective } from '../me-editor/editor.directive';
import { DxSwitchComponent } from 'devextreme-angular';

@Directive({
  selector: '[meSwitch]',
})
export class MeSwitchDirective extends MeEditorDirective {
  @Input() switchedOffText: string = '';
  @Input() switchedOnText: string = '';

  constructor(
    element: ElementRef,
    component: DxSwitchComponent,
    renderer: Renderer2
  ) {
    super(element, component, renderer);
  }

  ngOnInit(): void {
    const component = this.component as DxSwitchComponent;
    this.initMeEditor();
    component.switchedOffText = this.switchedOffText;
    component.switchedOnText = this.switchedOnText;
  }
}
