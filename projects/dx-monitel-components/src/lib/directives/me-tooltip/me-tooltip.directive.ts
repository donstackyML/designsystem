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
import { AnimationConfig } from 'devextreme/animation/fx';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meTooltip]',
})
export class MeTooltipDirective implements OnInit, OnDestroy, OnChanges {
  @Input() meTooltip: string = '';

  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tooltipWidth: number | string = 'auto';
  @Input() tooltipMaxWidth: number | string = 'auto';
  @Input() tooltipHeight: number | string = 'auto';
  @Input() tooltipMaxHeight: number | string = 'auto';

  @Input() tooltipSize: MeSize = 'medium';
  @Input() tooltipColorMode: 'default' | 'alternate' | 'light' | 'dark' = 'default';

  @Input() tooltipClass: string = 'me-tooltip';

  @Input() tooltipShowAnimation?: AnimationConfig = {
    type: 'fade',
    from: 0,
    to: 1,
    duration: 300,
  };
  @Input() tooltipHideAnimation?: AnimationConfig = {
    type: 'fade',
    from: 1,
    to: 0,
    duration: 300,
  };

  @Input() tooltipTemplateRef!: TemplateRef<any>;

  private tooltipComponentRef!: ComponentRef<DxTooltipComponent>;
  private sanitizer = inject(DomSanitizer);

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.initializeTooltip();
    this.configureTooltipStyles();
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
      if (changes['tooltipColorMode'] || changes['tooltipSize']) {
        this.configureTooltipStyles();
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

    const hostElement = this.element.nativeElement;
    if (!hostElement.id) {
      hostElement.id = 'me-tooltip-target-' + Math.random().toString(36).slice(2, 11);
    }

    instance.target = `#${hostElement.id}`;

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

    this.renderer.appendChild(document.body, tooltipElement);
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

  private configureTooltipStyles(): void {
    let color: string | undefined = undefined;

    switch (this.tooltipColorMode) {
      case 'light':
      case 'dark':
      color = `me-colors-${this.tooltipColorMode}`;
        break;
      case 'default':
        color = `me-colors-alternate`;
        break;
    }

    this.tooltipComponentRef.instance.wrapperAttr = {
      class: `me-tooltip me-tooltip-color-mode-${this.tooltipColorMode} me-tooltip-${this.tooltipSize} ${color}`,
    };
  }

  private destroyTooltip() {
    if (this.tooltipComponentRef) {
      this.tooltipComponentRef.destroy();
    }
  }
}
