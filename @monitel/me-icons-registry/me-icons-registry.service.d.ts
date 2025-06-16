import { meIcons, MeIcon } from '@monitel/me-icons';
import type { IconColorOptions } from './types';
import * as i0 from "@angular/core";
export declare class MeIconsRegistry {
    private registry;
    private parser;
    private serializer;
    registerIcons(icons: MeIcon[]): void;
    private meIconNameSet;
    getIconFromString(iconName: meIcons | string, color?: string | IconColorOptions[], selector?: string): string | undefined;
    colorIcon(iconComponent: any, color?: string | IconColorOptions[], selector?: string): string | undefined;
    private isSvgString;
    getIcon(iconComponent: any, color?: string): string;
    parseIcon(icon: string): string;
    concatIcon(...icons: MeIcon[]): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MeIconsRegistry, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MeIconsRegistry>;
}
