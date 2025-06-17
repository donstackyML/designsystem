import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, Optional, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./me-icons-registry.service";
export class MeIconComponent {
    ngOnInit() {
        this.setIconSize();
    }
    ngOnChanges(changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        if ('name' in changes) {
            this.callInitFn();
        }
        if ('size' in changes) {
            this.callInitFn();
            this.setIconSize();
        }
    }
    callInitFn() {
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        if (this.name) {
            this.svgData = this.meIcon.getIconFromString(this.name, this.color, this.selector);
        }
        if (this.svgData) {
            this.element.nativeElement.innerHTML = this.svgData;
        }
    }
    setIconSize() {
        const icon = this.element.nativeElement.getElementsByTagName('svg')[0] ?? this.element.nativeElement.getElementsByTagName('img')[0] ?? this.element.nativeElement.getElementsByTagName('i')[0];
        if (icon) {
            icon.setAttribute('width', this.size);
            icon.setAttribute('height', this.size);
        }
    }
    constructor(element, meIcon, document) {
        this.element = element;
        this.meIcon = meIcon;
        this.document = document;
        this.size = '20px';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MeIconComponent, deps: [{ token: i0.ElementRef }, { token: i1.MeIconsRegistry }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.5", type: MeIconComponent, selector: "me-icon", inputs: { color: "color", selector: "selector", name: "name", size: ["size", "size", validateSizeValue], containerSize: ["containerSize", "containerSize", validateSizeValue] }, host: { properties: { "style.height": "containerSize", "style.width": "containerSize" } }, usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, styles: [":host{display:flex;justify-content:center;align-items:center;flex-shrink:0}:host .dx-icon{font-size:18px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MeIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'me-icon', standalone: false, template: ` <ng-content></ng-content> `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[style.height]': 'containerSize',
                        '[style.width]': 'containerSize'
                    }, styles: [":host{display:flex;justify-content:center;align-items:center;flex-shrink:0}:host .dx-icon{font-size:18px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.MeIconsRegistry }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { color: [{
                type: Input
            }], selector: [{
                type: Input
            }], name: [{
                type: Input
            }], size: [{
                type: Input,
                args: [{ transform: validateSizeValue }]
            }], containerSize: [{
                type: Input,
                args: [{ transform: validateSizeValue }]
            }] } });
function validateSizeValue(value) {
    if (Number.isNaN(Number(value))) {
        return value;
    }
    else {
        return value + 'px';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWUtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NyYy9tZS1pY29ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDOzs7QUFnQnZCLE1BQU0sT0FBTyxlQUFlO0lBVTFCLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyx5R0FBeUc7UUFDekcsNkNBQTZDO1FBQzdDLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyRDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0wsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELFlBQ1UsT0FBbUIsRUFDcEIsTUFBdUIsRUFDUSxRQUFhO1FBRjNDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDUSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBOUNaLFNBQUksR0FBZ0MsTUFBTSxDQUFDO0lBK0NoRixDQUFDOzhHQXRETSxlQUFlLDJFQXFESixRQUFRO2tHQXJEbkIsZUFBZSw0R0F5RG5CLGlCQUFpQixxREFBakIsaUJBQWlCLDZJQWpFZCw2QkFBNkI7OzJGQVE1QixlQUFlO2tCQVgzQixTQUFTOytCQUNFLFNBQVMsY0FDUCxLQUFLLFlBQ1AsNkJBQTZCLG1CQUN0Qix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNKLGdCQUFnQixFQUFFLGVBQWU7d0JBQ2pDLGVBQWUsRUFBRSxlQUFlO3FCQUNqQzs7MEJBd0RFLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsUUFBUTs0Q0FqRHJCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDbUMsSUFBSTtzQkFBNUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRTtnQkFDRSxhQUFhO3NCQUFyRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFOztBQWlEekMsU0FBUyxpQkFBaUIsQ0FBQyxLQUFrQztJQUMzRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDL0IsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBQ0wsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ3JCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbWVJY29ucyB9IGZyb20gJ0Btb25pdGVsL21lLWljb25zJztcclxuaW1wb3J0IHsgTWVJY29uc1JlZ2lzdHJ5IH0gZnJvbSAnLi9tZS1pY29ucy1yZWdpc3RyeS5zZXJ2aWNlJztcclxuaW1wb3J0IHR5cGUgeyBJY29uQ29sb3JPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21lLWljb24nLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW3N0eWxlLmhlaWdodF0nOiAnY29udGFpbmVyU2l6ZScsXHJcbiAgICAnW3N0eWxlLndpZHRoXSc6ICdjb250YWluZXJTaXplJ1xyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWUtaWNvbnMuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVJY29uQ29tcG9uZW50IHtcclxuICBwcml2YXRlIHN2Z0ljb24/OiBTVkdFbGVtZW50O1xyXG4gIHByaXZhdGUgc3ZnRGF0YT86IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgY29sb3I/OiBzdHJpbmcgfCBJY29uQ29sb3JPcHRpb25zW107XHJcbiAgQElucHV0KCkgc2VsZWN0b3I/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbmFtZT86IG1lSWNvbnMgfCBzdHJpbmcgfCBudWxsO1xyXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogdmFsaWRhdGVTaXplVmFsdWUgfSkgc2l6ZTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkID0gJzIwcHgnO1xyXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogdmFsaWRhdGVTaXplVmFsdWUgfSkgY29udGFpbmVyU2l6ZTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0SWNvblNpemUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIC8vQ2FsbGVkIGJlZm9yZSBhbnkgb3RoZXIgbGlmZWN5Y2xlIGhvb2suIFVzZSBpdCB0byBpbmplY3QgZGVwZW5kZW5jaWVzLCBidXQgYXZvaWQgYW55IHNlcmlvdXMgd29yayBoZXJlLlxyXG4gICAgLy9BZGQgJyR7aW1wbGVtZW50cyBPbkNoYW5nZXN9JyB0byB0aGUgY2xhc3MuXHJcbiAgICBpZiAoJ25hbWUnIGluIGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5jYWxsSW5pdEZuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdzaXplJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuY2FsbEluaXRGbigpO1xyXG4gICAgICB0aGlzLnNldEljb25TaXplKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsSW5pdEZuKCkge1xyXG4gICAgaWYgKHRoaXMuc3ZnSWNvbikge1xyXG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLnN2Z0ljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm5hbWUpIHtcclxuICAgICAgdGhpcy5zdmdEYXRhID0gdGhpcy5tZUljb24uZ2V0SWNvbkZyb21TdHJpbmcodGhpcy5uYW1lLCB0aGlzLmNvbG9yLCB0aGlzLnNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdmdEYXRhKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuc3ZnRGF0YTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEljb25TaXplKCkge1xyXG4gICAgY29uc3QgaWNvbiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdmcnKVswXSA/PyB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0gPz8gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2knKVswXTtcclxuXHJcbiAgICBpZiAoaWNvbikge1xyXG4gICAgICBpY29uLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLnNpemUpO1xyXG4gICAgICBpY29uLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy5zaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIG1lSWNvbjogTWVJY29uc1JlZ2lzdHJ5LFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICkgeyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlU2l6ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICBpZiAoTnVtYmVyLmlzTmFOKE51bWJlcih2YWx1ZSkpKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB2YWx1ZSArICdweCc7XHJcbiAgfVxyXG59XHJcbiJdfQ==