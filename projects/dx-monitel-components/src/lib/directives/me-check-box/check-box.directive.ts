import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DxCheckBoxComponent, DxTextBoxComponent } from 'devextreme-angular';
import { MeEditorDirective } from '../me-editor/editor.directive';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeEditorComponents, MeSize } from '../../types/types';
@Directive({
  selector: '[meCheckBox]',
})
export class MeCheckBoxDirective implements OnInit, OnDestroy {
  @Input() size: MeSize = 'medium';

  protected focusService: ComponentFocusService;
  constructor(
    protected element: ElementRef,
    @Inject(DxCheckBoxComponent)
    protected component: DxCheckBoxComponent,
    protected renderer: Renderer2
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
    this.focusService.addKeyUpEventHandle('Tab', (evt) => this.tabHandle(evt));
  }

  ngOnDestroy(): void {
    this.focusService.ngOnDestroy();
  }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'me-editor');
    this.renderer.addClass(
      this.element.nativeElement,
      `me-editor-${this.size}`
    );
  }

  private tabHandle(evt: KeyboardEvent) {
    console.log(evt);
  }
}
