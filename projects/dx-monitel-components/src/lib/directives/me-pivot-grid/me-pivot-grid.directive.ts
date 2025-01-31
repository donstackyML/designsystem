import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { DxPivotGridComponent, DxTreeListComponent } from 'devextreme-angular';
import { MeIconComponent } from '../../../public-api';
import { ComponentFocusService } from '../../service/component-focus.service';
import { Element } from '@angular/compiler';

@Directive({
  selector: '[mePivotGrid]',
  providers: [MeIconComponent],
  host: {
    '[class.me-pivot-grid]': 'true',
  },
})
export class MePivotGridDirective implements OnInit, AfterViewInit {
  private focusService: ComponentFocusService;
  constructor(
    private element: ElementRef,
    private pivotGrid: DxPivotGridComponent,
    private renderer: Renderer2
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngOnInit() {
    this.applyOptions();
  }

  ngAfterViewInit(): void {
    // this.changeColumnChooserIcon();
    this.loadPanelStyles();
    // .dx-scrollable-wrapper .dx-scrollable-container .dx-scrollable-content .dx-virtual-content
    let test = document.querySelector('.dx-pivotgrid-container');
    let test2 = document.querySelectorAll(
      '.dx-bottom-row .dx-area-row-cell .dx-pivotgrid-vertical-headers .dx-scrollable-content table:not(.dx-hidden) .dx-pivotgrid-vertical-headers tr'
    );
    let t = test2[0];
    t.setAttribute('tabindex', '1');
    // @ts-ignore
    t.focus();
    console.log('Horizontal %o', test);
    console.log('Horizontal %o', test2);
    let horizontal = this.element.nativeElement.querySelectorAll(
      '.dx-pivotgrid-collapsed'
    );
    console.log('Horizontal %o', horizontal);
  }

  private applyOptions() {
    this.pivotGrid.instance.option('showBorders', true);
    this.pivotGrid.tabIndex = 0;
  }

  private changeColumnChooserIcon() {
    const buttonContainer =
      this.element.nativeElement.querySelector('.dx-button-content');
    const icon = this.renderer.createElement('me-icon');
    this.renderer.setAttribute(icon, 'icon', 'search');
    this.renderer.setAttribute(icon, 'size', 'small');
    this.renderer.appendChild(buttonContainer, icon);

    this.renderer.removeChild(
      buttonContainer,
      this.element.nativeElement.querySelector('.dx-icon-columnchooser')
    );
  }

  private loadPanelStyles() {
    this.renderer.addClass(
      this.element.nativeElement.querySelector('.dx-loadpanel-content'),
      'me-load-panel'
    );
    this.renderer.addClass(
      this.element.nativeElement.querySelector('.dx-loadpanel-content'),
      'me-load-panel-small'
    );
    this.renderer.addClass(
      this.element.nativeElement.querySelector('.dx-loadindicator'),
      'me-load-indicator-small'
    );
  }
}
