import {
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SecurityContext,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DxTooltipComponent } from 'devextreme-angular/ui/tooltip';

@Directive({
  selector: '[meTooltip]',
})
export class MeTooltipDirective implements OnInit, OnDestroy, OnChanges {
  @Input() meTooltip: string = '';
  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tooltipClass: string = 'me-tooltip';
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
  @Input() colorMode: 'light' | 'dark' = 'dark';

  private tooltipComponentRef!: ComponentRef<DxTooltipComponent>;
  private readonly ME_TOOLTIP_CLASS = 'me-tooltip';
  private sanitizer = inject(DomSanitizer);

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.initializeTooltip();
    this.tooltipComponentRef.instance.wrapperAttr = {
      class: `me-tooltip me-tooltip-${this.colorMode}`,
    };
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

    this.renderer.addClass(tooltipElement, this.ME_TOOLTIP_CLASS);

    this.renderer.addClass(tooltipElement, `me-tooltip-${this.colorMode}`);

    if (this.tooltipClass) {
      this.renderer.addClass(tooltipElement, this.tooltipClass);
    }

    instance.wrapperAttr = {
      class: `me-tooltip me-tooltip-${this.colorMode}`,
    };

    this.renderer.appendChild(this.element.nativeElement, tooltipElement);
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
