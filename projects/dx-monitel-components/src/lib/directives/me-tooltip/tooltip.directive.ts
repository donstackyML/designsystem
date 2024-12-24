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
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.tooltipComponentRef) return;

    const instance = this.tooltipComponentRef.instance;

    if (changes['tooltipPosition']) {
      instance.position = this.tooltipPosition;
    }

    if (changes['tooltipWidth'] || changes['tooltipMaxWidth'] ||
      changes['tooltipHeight'] || changes['tooltipMaxHeight']) {
      this.updateTooltipDimensions(instance);
    }

    if (changes['tooltipShowAnimation'] || changes['tooltipHideAnimation']) {
      instance.animation = {
        show: this.tooltipShowAnimation,
        hide: this.tooltipHideAnimation,
      };
    }

    if (changes['meTooltip'] || changes['tooltipTemplateRef']) {
      this.updateTooltipContent();
    }

    if (changes['colorMode']) {
      instance.wrapperAttr = {
        class: `${this.ME_TOOLTIP_CLASS} me-tooltip-${this.colorMode}`,
      };
    }
  }

  ngOnDestroy() {
    if (this.tooltipComponentRef) {
      this.tooltipComponentRef.destroy();
    }
  }

  @HostListener('mouseenter')
  showTooltip() {
    if (this.tooltipComponentRef?.instance) {
      this.tooltipComponentRef.instance.visible = true;
    }
  }

  @HostListener('mouseleave')
  hideTooltip() {
    if (this.tooltipComponentRef?.instance) {
      this.tooltipComponentRef.instance.visible = false;
    }
  }

  private initializeTooltip() {
    this.tooltipComponentRef = this.viewContainerRef.createComponent(DxTooltipComponent);
    const instance = this.tooltipComponentRef.instance;

    instance.target = this.element.nativeElement;
    instance.position = this.tooltipPosition;

    this.updateTooltipDimensions(instance);

    instance.animation = {
      show: this.tooltipShowAnimation,
      hide: this.tooltipHideAnimation,
    };

    instance.wrapperAttr = {
      class: `${this.ME_TOOLTIP_CLASS} me-tooltip-${this.colorMode}`,
    };

    this.updateTooltipContent();

    const tooltipElement = this.tooltipComponentRef.location.nativeElement;

    if (this.tooltipClass) {
      this.renderer.addClass(tooltipElement, this.tooltipClass);
    }
  }

  private updateTooltipDimensions(instance: DxTooltipComponent) {
    instance.width = this.tooltipWidth;
    instance.maxWidth = this.tooltipMaxWidth;
    instance.height = this.tooltipHeight;
    instance.maxHeight = this.tooltipMaxHeight;
  }

  private createContentDiv(): HTMLDivElement {
    const contentDiv = this.renderer.createElement('div');
    const width = typeof this.tooltipWidth === 'number' ? `${this.tooltipWidth}px` : this.tooltipWidth;

    if (width !== 'auto') {
      this.renderer.setStyle(contentDiv, 'width', width);
    }

    this.renderer.setStyle(contentDiv, 'box-sizing', 'border-box');
    this.renderer.setStyle(contentDiv, 'word-wrap', 'break-word');

    return contentDiv;
  }

  private updateTooltipContent() {
    if (!this.tooltipComponentRef) return;

    const instance = this.tooltipComponentRef.instance;

    if (this.tooltipTemplateRef) {
      instance.contentTemplate = (contentElement: HTMLElement) => {
        const viewRef = this.tooltipTemplateRef.createEmbeddedView({});
        const contentDiv = this.createContentDiv();
        contentDiv.appendChild(viewRef.rootNodes[0]);
        return contentDiv;
      };
    } else if (this.meTooltip) {
      instance.contentTemplate = () => {
        const contentDiv = this.createContentDiv();
        const safeContent = this.sanitizer.sanitize(SecurityContext.HTML, this.meTooltip) || '';
        this.renderer.setProperty(contentDiv, 'innerHTML', safeContent);
        return contentDiv;
      };
    } else {
      instance.contentTemplate = null;
    }
  }
}
