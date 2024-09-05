import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { DxPivotGridComponent } from 'devextreme-angular';
import { MeIconComponent } from '../../../public-api';

@Directive({
  selector: '[mePivotGrid]',
  providers: [MeIconComponent],
  host: {
    '[class.me-pivot-grid]': 'true',
  },
})
export class MePivotGridDirective implements OnInit, AfterViewInit {
  private element = inject(ElementRef);
  private renderer = inject(Renderer2);
  private pivotGrid = inject(DxPivotGridComponent);

  ngOnInit() {
    this.applyOptions();
  }

  ngAfterViewInit(): void {
    // this.changeColumnChooserIcon();
    this.loadPanelStyles();
  }

  private applyOptions() {
    this.pivotGrid.instance.option('showBorders', true);
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
