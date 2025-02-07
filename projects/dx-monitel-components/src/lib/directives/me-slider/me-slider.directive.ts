import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  inject,
} from '@angular/core';
import { ComponentFocusService } from '../../service/component-focus.service';

@Directive({
  selector: '[meSlider]',
  host: {
    '[class.me-slider]': 'true',
  },
})
export class MeSliderDirective {
  private renderer = inject(Renderer2);
  private element = inject(ElementRef);

  focusService: ComponentFocusService;
  constructor(
  ) {
    this.focusService = new ComponentFocusService(this.element, this.renderer);
  }
  
  private addClassSafely(selector: string, className: string) {
    const element = this.element.nativeElement.querySelector(selector);
    if (element) {
      this.renderer.addClass(element, className);
    }
  }

  private removeClassSafely(selector: string, className: string) {
    const element = this.element.nativeElement.querySelector(selector);
    if (element) {
      this.renderer.removeClass(element, className);
    }
  }

  private addHoverEffect() {
    this.addClassSafely('.me-start-point', 'dx-state-hover');
    this.addClassSafely('.dx-slider-handle', 'dx-state-hover');
    this.addClassSafely('.dx-trackbar-range', 'dx-state-hover');
  }

  private addActiveEffect() {
    this.addClassSafely('.me-start-point', 'dx-state-active');
    this.addClassSafely('.dx-slider-handle', 'dx-state-active');
    this.addClassSafely('.dx-trackbar-range', 'dx-state-active');
  }

  private removeHoverEffect() {
    this.removeClassSafely('.me-start-point', 'dx-state-hover');
    this.removeClassSafely('.dx-slider-handle', 'dx-state-hover');
    this.removeClassSafely('.dx-trackbar-range', 'dx-state-hover');
  }

  private removeActiveEffect() {
    this.removeClassSafely('.me-start-point', 'dx-state-active');
    this.removeClassSafely('.dx-slider-handle', 'dx-state-active');
    this.removeClassSafely('.dx-trackbar-range', 'dx-state-active');
  }

  @HostListener('onOptionChanged', ['$event'])
  onOptionChanged(e: any) {
    if (!this.element.nativeElement) {
      return;
    }

    if (e.name === 'hoveredElement') {
      if (e.previousValue === null) {
        this.addHoverEffect();
      } else {
        this.removeHoverEffect();
      }
    }

    if (e.name === 'isActive') {
      if (e.value === true) {
        this.addActiveEffect();
      } else {
        this.removeActiveEffect();
      }
    }
  }
}
