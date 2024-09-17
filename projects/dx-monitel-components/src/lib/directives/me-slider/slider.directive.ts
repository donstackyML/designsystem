import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[meSlider]',
  host: {
    '[class.me-slider]': 'true',
  },
})
export class MeSliderDirective {
  private renderer = inject(Renderer2);
  private element = inject(ElementRef);

  private addHoverEffect() {
    this.renderer.addClass(
      this.element.nativeElement.querySelector('.me-start-point'),
      'dx-state-hover'
    );
    this.renderer.addClass(
      this.element.nativeElement.querySelector('.dx-slider-handle'),
      'dx-state-hover'
    );
    this.renderer.addClass(
      this.element.nativeElement.querySelector('.dx-trackbar-range'),
      'dx-state-hover'
    );
  }

  private addActiveEffect() {
    this.renderer.addClass(
      this.element.nativeElement.querySelector('.me-start-point'),
      'dx-state-active'
    );
    this.renderer.addClass(
      this.element.nativeElement.querySelector('.dx-slider-handle'),
      'dx-state-active'
    );
    this.renderer.addClass(
      this.element.nativeElement.querySelector('.dx-trackbar-range'),
      'dx-state-active'
    );
  }

  private removeHoverEffect() {
    this.renderer.removeClass(
      this.element.nativeElement.querySelector('.me-start-point'),
      'dx-state-hover'
    );
    this.renderer.removeClass(
      this.element.nativeElement.querySelector('.dx-slider-handle'),
      'dx-state-hover'
    );
    this.renderer.removeClass(
      this.element.nativeElement.querySelector('.dx-trackbar-range'),
      'dx-state-hover'
    );
  }

  private removeActiveEffect() {
    this.renderer.removeClass(
      this.element.nativeElement.querySelector('.me-start-point'),
      'dx-state-active'
    );
    this.renderer.removeClass(
      this.element.nativeElement.querySelector('.dx-slider-handle'),
      'dx-state-active'
    );
    this.renderer.removeClass(
      this.element.nativeElement.querySelector('.dx-trackbar-range'),
      'dx-state-active'
    );
  }

  @HostListener('onOptionChanged', ['$event'])
  onOptionChanged(e: any) {
    if (e.name === 'hoveredElement' && e.previousValue === null) {
      this.addHoverEffect();
    }
    if (e.name === 'hoveredElement' && e.previousValue !== null) {
      this.removeHoverEffect();
    }

    if (e.name === 'isActive' && e.value === true) {
      this.addActiveEffect();
    }
    if (e.name === 'isActive' && e.value !== true) {
      this.removeActiveEffect();
    }
  }
}
