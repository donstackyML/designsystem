import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import { DxTooltipComponent, DxTreeViewComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meTreeView]',
  host: {
    '[class.me-tree-view]': 'true',
    '[class.me-tree-view-small]': 'isSizeSmall',
    '[class.me-tree-view-large]': 'isSizeLarge',
    '[class.me-tree-view-truncate-text]': 'truncateText',
  },
})
export class MeTreeViewDirective implements AfterViewInit, OnDestroy {
  @Input() size: MeSize = 'large';
  @Input() textTruncateBehavior: 'truncate' | 'wrap' = 'wrap';

  private tooltipRefs: Map<HTMLElement, any> = new Map();
  private focusService: ComponentFocusService;

  constructor(
    private element: ElementRef,
    private component: DxTreeViewComponent,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.setAttribute('tabindex', '1');

    setTimeout(() => this.updateTooltips(), 0);

    this.component.onItemExpanded.subscribe(() => setTimeout(() => this.updateTooltips(), 0));
    this.component.onItemCollapsed.subscribe(() => setTimeout(() => this.updateTooltips(), 0));
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateTooltips();
  }

  ngOnDestroy(): void {
    this.clearTooltips();
  }

  private updateTooltips(): void {
    if (this.textTruncateBehavior === 'wrap') {
      return;
    }

    this.clearTooltips();

    const spans: NodeListOf<HTMLElement> = this.element.nativeElement
      .querySelectorAll('.dx-item.dx-treeview-item .dx-item-content.dx-treeview-item-content span');

    spans.forEach(span => {
      if (span.offsetWidth < span.scrollWidth) {
        const tooltipTarget = span.closest('.dx-item.dx-treeview-item') as HTMLElement;
        if (tooltipTarget && !this.tooltipRefs.has(tooltipTarget)) {
          const tooltipComponentRef = this.viewContainerRef.createComponent(DxTooltipComponent);
          const tooltipInstance = tooltipComponentRef.instance as DxTooltipComponent;

          tooltipInstance.target = tooltipTarget;
          tooltipInstance.position = 'bottom';
          tooltipInstance.showEvent = 'mouseenter';
          tooltipInstance.hideEvent = 'mouseleave';
          tooltipInstance.maxWidth = this.element.nativeElement.offsetWidth > 300
            ? this.element.nativeElement.offsetWidth / 2
            : '200px';
          tooltipInstance.contentTemplate = () => span.innerText;

          tooltipComponentRef.changeDetectorRef.detectChanges();

          this.renderer.appendChild(document.body, tooltipComponentRef.location.nativeElement);

          this.tooltipRefs.set(tooltipTarget, tooltipComponentRef);
        }
      }
    });
  }

  private clearTooltips(): void {
    this.tooltipRefs.forEach(ref => ref.destroy());
    this.tooltipRefs.clear();
  }

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }
  get truncateText() {
    return this.textTruncateBehavior === 'truncate';
  }
}
