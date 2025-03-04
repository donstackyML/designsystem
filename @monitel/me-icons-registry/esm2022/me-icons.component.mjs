import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, Optional, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./me-icons-registry.service";
export class MeIconComponent {
    ngOnChanges(changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        if ('name' in changes) {
            this.callInitFn();
        }
        if ('size' in changes) {
            this.setIconSize();
        }
    }
    callInitFn() {
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        if (this.name) {
            this.svgData = this.meIcon.getIconFromString(this.name, this.color);
        }
        if (this.svgData) {
            this.element.nativeElement.innerHTML = this.svgData;
        }
    }
    setIconSize() {
        const icon = this.element.nativeElement.getElementsByClassName('dx-icon')[0];
        icon.setAttribute('width', this.size);
        icon.setAttribute('height', this.size);
    }
    constructor(element, meIcon, document) {
        this.element = element;
        this.meIcon = meIcon;
        this.document = document;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MeIconComponent, deps: [{ token: i0.ElementRef }, { token: i1.MeIconsRegistry }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: MeIconComponent, selector: "me-icon", inputs: { color: "color", name: "name", size: ["size", "size", validateSizeValue], containerSize: ["containerSize", "containerSize", validateSizeValue] }, host: { properties: { "style.height": "containerSize", "style.width": "containerSize" } }, usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, styles: [":host{display:flex;justify-content:center;align-items:center;flex-shrink:0}:host .dx-icon{font-size:18px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MeIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'me-icon', template: ` <ng-content></ng-content> `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWUtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NyYy9tZS1pY29ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDOzs7QUFpQnZCLE1BQU0sT0FBTyxlQUFlO0lBUzFCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyx5R0FBeUc7UUFDekcsNkNBQTZDO1FBQzdDLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0RDtRQUVELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyRTtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyRDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsWUFDVSxPQUFtQixFQUNwQixNQUF1QixFQUNRLFFBQWE7UUFGM0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUNRLGFBQVEsR0FBUixRQUFRLENBQUs7SUFDakQsQ0FBQzsrR0E5Q00sZUFBZSwyRUE2Q0osUUFBUTttR0E3Q25CLGVBQWUsc0ZBaURuQixpQkFBaUIscURBQWpCLGlCQUFpQiw2SUF6RGQsNkJBQTZCOzs0RkFRNUIsZUFBZTtrQkFWM0IsU0FBUzsrQkFDRSxTQUFTLFlBQ1QsNkJBQTZCLG1CQUN0Qix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNKLGdCQUFnQixFQUFFLGVBQWU7d0JBQ2pDLGVBQWUsRUFBRSxlQUFlO3FCQUNqQzs7MEJBZ0RFLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsUUFBUTs0Q0F6Q3JCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ21DLElBQUk7c0JBQTVDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUU7Z0JBQ0UsYUFBYTtzQkFBckQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRTs7QUEwQ3pDLFNBQVMsaUJBQWlCLENBQUMsS0FBa0M7SUFDM0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQy9CLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQztLQUNyQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG1lSWNvbnMgfSBmcm9tICdAbW9uaXRlbC9tZS1pY29ucyc7XHJcblxyXG5pbXBvcnQgeyBNZUljb25zUmVnaXN0cnkgfSBmcm9tICcuL21lLWljb25zLXJlZ2lzdHJ5LnNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21lLWljb24nLFxyXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW3N0eWxlLmhlaWdodF0nOiAnY29udGFpbmVyU2l6ZScsXHJcbiAgICAnW3N0eWxlLndpZHRoXSc6ICdjb250YWluZXJTaXplJ1xyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWUtaWNvbnMuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVJY29uQ29tcG9uZW50IHtcclxuICBwcml2YXRlIHN2Z0ljb24/OiBTVkdFbGVtZW50O1xyXG4gIHByaXZhdGUgc3ZnRGF0YT86IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgY29sb3I/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbmFtZT86IG1lSWNvbnMgfCBzdHJpbmc7XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiB2YWxpZGF0ZVNpemVWYWx1ZSB9KSBzaXplOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiB2YWxpZGF0ZVNpemVWYWx1ZSB9KSBjb250YWluZXJTaXplOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIC8vQ2FsbGVkIGJlZm9yZSBhbnkgb3RoZXIgbGlmZWN5Y2xlIGhvb2suIFVzZSBpdCB0byBpbmplY3QgZGVwZW5kZW5jaWVzLCBidXQgYXZvaWQgYW55IHNlcmlvdXMgd29yayBoZXJlLlxyXG4gICAgLy9BZGQgJyR7aW1wbGVtZW50cyBPbkNoYW5nZXN9JyB0byB0aGUgY2xhc3MuXHJcbiAgICBpZiAoJ25hbWUnIGluIGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5jYWxsSW5pdEZuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdzaXplJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuc2V0SWNvblNpemUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxJbml0Rm4oKSB7XHJcbiAgICBpZiAodGhpcy5zdmdJY29uKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuc3ZnSWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubmFtZSkge1xyXG4gICAgICB0aGlzLnN2Z0RhdGEgPSB0aGlzLm1lSWNvbi5nZXRJY29uRnJvbVN0cmluZyh0aGlzLm5hbWUsIHRoaXMuY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN2Z0RhdGEpIHtcclxuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5zdmdEYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SWNvblNpemUoKSB7XHJcbiAgICBjb25zdCBpY29uID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHgtaWNvbicpWzBdO1xyXG5cclxuICAgIGljb24uc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuc2l6ZSk7XHJcbiAgICBpY29uLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy5zaXplKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIG1lSWNvbjogTWVJY29uc1JlZ2lzdHJ5LFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICkgeyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlU2l6ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICBpZiAoTnVtYmVyLmlzTmFOKE51bWJlcih2YWx1ZSkpKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB2YWx1ZSArICdweCc7XHJcbiAgfVxyXG59Il19