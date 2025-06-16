import { ElementRef, SimpleChanges } from '@angular/core';
import { meIcons } from '@monitel/me-icons';
import { MeIconsRegistry } from './me-icons-registry.service';
import type { IconColorOptions } from './types';
import * as i0 from "@angular/core";
export declare class MeIconComponent {
    private element;
    meIcon: MeIconsRegistry;
    private document;
    private svgIcon?;
    private svgData?;
    color?: string | IconColorOptions[];
    selector?: string;
    name?: meIcons | string | null;
    size: string | number | undefined;
    containerSize: string | number | undefined;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    callInitFn(): void;
    setIconSize(): void;
    constructor(element: ElementRef, meIcon: MeIconsRegistry, document: any);
    static ɵfac: i0.ɵɵFactoryDeclaration<MeIconComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MeIconComponent, "me-icon", never, { "color": { "alias": "color"; "required": false; }; "selector": { "alias": "selector"; "required": false; }; "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; "containerSize": { "alias": "containerSize"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_size: string | number | undefined;
    static ngAcceptInputType_containerSize: string | number | undefined;
}
