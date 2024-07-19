import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { DxPopoverComponent } from 'devextreme-angular/ui/popover';

@Directive({
  selector: '[mePopover]'
})
export class MePopoverDirective implements OnInit, OnChanges {
  @Input() customClass: string | undefined;
  @Input() maxWidth: number | string | undefined;
  @Input() minWidth: number | string | undefined;

  constructor(
    private element: ElementRef,
    private dxPopover: DxPopoverComponent
  ) {}

  ngOnInit() {
    this.applyCustomizations();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.applyCustomizations();
  }

  private applyCustomizations() {
    const popoverInstance = this.dxPopover.instance;

    if (this.customClass) {
      this.element.nativeElement.classList.add(this.customClass);
    }

    if (this.maxWidth !== undefined) {
      popoverInstance.option('maxWidth', this.maxWidth);
    }

    if (this.minWidth !== undefined) {
      popoverInstance.option('minWidth', this.minWidth);
    }
  }

}
