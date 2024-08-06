import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  TemplateRef,
  OnChanges,
  SimpleChanges,
  HostListener,
  ViewContainerRef,
  ComponentRef,
  SecurityContext,
  EmbeddedViewRef,
} from '@angular/core';
import { DxTooltipComponent } from 'devextreme-angular/ui/tooltip';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[meTooltip]',
})
export class MeTooltipDirective implements OnInit, OnDestroy, OnChanges {
  @Input() meTooltip: string = '';
  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tooltipClass: string = '';
  @Input() tooltipWidth: number | string = 'auto';
  @Input() tooltipMaxWidth: number | string = 'auto';
  @Input() tooltipHeight: number | string = 'auto';
  @Input() tooltipMaxHeight: number | string = 'auto';
  @Input() tooltipShowAnimation: any = {
    type: 'fade',
    from: 0,
    to: 1,
    duration: 300,
  };
  @Input() tooltipHideAnimation: any = {
    type: 'fade',
    from: 1,
    to: 0,
    duration: 300,
  };
  @Input() tooltipTemplateRef!: TemplateRef<any>;

  private tooltipComponentRef!: ComponentRef<DxTooltipComponent>;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.initializeTooltip();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.tooltipComponentRef) {
      const instance = this.tooltipComponentRef.instance;
      if (changes['tooltipPosition']) {
        instance.position = this.tooltipPosition;
      }
      if (changes['tooltipWidth']) {
        instance.width = this.tooltipWidth;
      }
      if (changes['tooltipMaxWidth']) {
        instance.maxWidth = this.tooltipMaxWidth;
      }
      if (changes['tooltipHeight']) {
        instance.height = this.tooltipHeight;
      }
      if (changes['tooltipMaxHeight']) {
        instance.maxHeight = this.tooltipMaxHeight;
      }
      if (changes['tooltipShowAnimation'] || changes['tooltipHideAnimation']) {
        instance.animation = {
          show: this.tooltipShowAnimation,
          hide: this.tooltipHideAnimation,
        };
      }
      if (changes['tooltipContent'] || changes['tooltipTemplateRef']) {
        this.updateTooltipContent();
      }
    }
  }

  ngOnDestroy() {
    this.destroyTooltip();
  }

  @HostListener('mouseenter')
  showTooltip() {
    if (this.tooltipComponentRef && this.tooltipComponentRef.instance) {
      this.tooltipComponentRef.instance.visible = true;
    }
  }

  @HostListener('mouseleave')
  hideTooltip() {
    if (this.tooltipComponentRef && this.tooltipComponentRef.instance) {
      this.tooltipComponentRef.instance.visible = false;
    }
  }

  private initializeTooltip() {
    this.tooltipComponentRef =
      this.viewContainerRef.createComponent(DxTooltipComponent);
    const instance = this.tooltipComponentRef.instance;

    instance.target = this.element.nativeElement;
    instance.position = this.tooltipPosition;
    instance.width = this.tooltipWidth;
    instance.maxWidth = this.tooltipMaxWidth;
    instance.height = this.tooltipHeight;
    instance.maxHeight = this.tooltipMaxHeight;

    instance.animation = {
      show: this.tooltipShowAnimation,
      hide: this.tooltipHideAnimation,
    };

    this.updateTooltipContent();

    const tooltipElement = this.tooltipComponentRef.location.nativeElement;
    if (this.tooltipClass) {
      this.renderer.addClass(tooltipElement, this.tooltipClass);
    }

    this.renderer.appendChild(this.element.nativeElement, tooltipElement);

    instance.visible = false;
  }

  private updateTooltipContent() {
    if (this.tooltipComponentRef) {
      const instance: DxTooltipComponent = this.tooltipComponentRef.instance;

      if (this.tooltipTemplateRef) {
        instance.contentTemplate = (contentElement: any) => {
          const viewRef: EmbeddedViewRef<any> =
            this.tooltipTemplateRef.createEmbeddedView({});
          contentElement.appendChild(viewRef.rootNodes[0]);
          return contentElement;
        };
      } else if (this.meTooltip) {
        instance.contentTemplate = () => {
          const contentElement = this.renderer.createElement('div');

          let safeContent: string =
            this.sanitizer.sanitize(SecurityContext.HTML, this.meTooltip) || '';

          this.renderer.setProperty(contentElement, 'innerHTML', safeContent);

          return contentElement;
        };
      } else {
        instance.contentTemplate = null;
      }
    }
  }

  private destroyTooltip() {
    if (this.tooltipComponentRef) {
      this.tooltipComponentRef.destroy();
    }
  }
}
