import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, Optional } from '@angular/core';
import * as i0 from '@angular/core';
import * as i1 from './me-icons-registry.service';
const DEFAULT_ICON_COLOR = 'var(--Icon-Default)';
export class MeIconComponent {
  ngOnInit() {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    if (this.name) {
      this.svgData = this.meIcon.getIconFromString(this.name, this.color);
    }
    if (this.svgData) {
      this.svgIcon = this.svgElementFromString(this.svgData);
      this.element.nativeElement.appendChild(this.svgIcon);
    }
  }
  constructor(element, meIcon, document) {
    this.element = element;
    this.meIcon = meIcon;
    this.document = document;
    this.color = DEFAULT_ICON_COLOR;
  }
  svgElementFromString(svgContent) {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: MeIconComponent,
      deps: [
        { token: i0.ElementRef },
        { token: i1.MeIconsRegistry },
        { token: DOCUMENT, optional: true },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: '14.0.0',
      version: '16.2.12',
      type: MeIconComponent,
      selector: 'me-icon',
      inputs: { color: 'color', name: 'name' },
      ngImport: i0,
      template: `
        <ng-content></ng-content>
    `,
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: MeIconComponent,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'me-icon',
          template: `
        <ng-content></ng-content>
    `,
          changeDetection: ChangeDetectionStrategy.OnPush,
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ElementRef },
      { type: i1.MeIconsRegistry },
      {
        type: undefined,
        decorators: [
          {
            type: Optional,
          },
          {
            type: Inject,
            args: [DOCUMENT],
          },
        ],
      },
    ];
  },
  propDecorators: {
    color: [
      {
        type: Input,
      },
    ],
    name: [
      {
        type: Input,
      },
    ],
  },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWUtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWUtaWNvbnMtcmVnaXN0cnkvc3JjL2xpYi9tZS1pY29ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUt4RyxNQUFNLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDO0FBU2pELE1BQU0sT0FBTyxlQUFlO0lBUTFCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0RDtRQUVELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyRTtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFRCxZQUFvQixPQUFtQixFQUFTLE1BQXVCLEVBQy9CLFFBQWE7UUFEakMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQUs7UUFwQjVDLFVBQUssR0FBVyxrQkFBa0IsQ0FBQztJQXFCNUMsQ0FBQztJQUVPLG9CQUFvQixDQUFDLFVBQWtCO1FBQzdDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQzNCLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RyxDQUFDOytHQS9CVSxlQUFlLDJFQXdCSixRQUFRO21HQXhCbkIsZUFBZSx5RkFMaEI7O0tBRVA7OzRGQUdRLGVBQWU7a0JBUDNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRTs7S0FFUDtvQkFDSCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQXlCSSxRQUFROzswQkFBSSxNQUFNOzJCQUFDLFFBQVE7NENBcEJyQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBtZUljb25zIH0gZnJvbSAnQG1vbml0ZWwvbWUtaWNvbnMnO1xyXG5cclxuaW1wb3J0IHsgTWVJY29uc1JlZ2lzdHJ5IH0gZnJvbSAnLi9tZS1pY29ucy1yZWdpc3RyeS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IERFRkFVTFRfSUNPTl9DT0xPUiA9ICd2YXIoLS1JY29uLURlZmF1bHQpJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWUtaWNvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZUljb25Db21wb25lbnQge1xyXG4gIHByaXZhdGUgc3ZnSWNvbj86IFNWR0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzdmdEYXRhPzogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gREVGQVVMVF9JQ09OX0NPTE9SO1xyXG4gIEBJbnB1dCgpIG5hbWU/OiBtZUljb25zO1xyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdmdJY29uKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuc3ZnSWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubmFtZSkge1xyXG4gICAgICB0aGlzLnN2Z0RhdGEgPSB0aGlzLm1lSWNvbi5nZXRJY29uRnJvbVN0cmluZyh0aGlzLm5hbWUsIHRoaXMuY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN2Z0RhdGEpIHtcclxuICAgICAgdGhpcy5zdmdJY29uID0gdGhpcy5zdmdFbGVtZW50RnJvbVN0cmluZyh0aGlzLnN2Z0RhdGEpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnN2Z0ljb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbWVJY29uOiBNZUljb25zUmVnaXN0cnksXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3ZnRWxlbWVudEZyb21TdHJpbmcoc3ZnQ29udGVudDogc3RyaW5nKTogU1ZHRWxlbWVudCB7XHJcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IHN2Z0NvbnRlbnQ7XHJcbiAgICByZXR1cm4gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIHx8IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgfVxyXG59Il19
