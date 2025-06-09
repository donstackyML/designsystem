import * as i0 from '@angular/core';
import { Injectable, Component, ChangeDetectionStrategy, Optional, Inject, Input, NgModule } from '@angular/core';
import { meIconSet } from '@monitel/me-icons';
import { DOCUMENT, CommonModule } from '@angular/common';

const REG_EXP_FOR_ICON_PATH = new RegExp("^(/?([^/\0]+/)*[^/\0]+.(svg|jpeg|png|ico))$");
const DX_ICONS = ["add", "airplane", "bookmark", "box", "car", "card", "cart", "chart", "check", "clear", "clock", "close", "coffee", "comment", "doc", "file", "download", "dragvertical", "edit", "email", "event", "eventall", "favorites", "find", "filter", "folder", "activefolder", "food", "gift", "globe", "group", "help", "home", "image", "info", "key", "like", "map", "menu", "message", "money", "music", "overflow", "percent", "photo", "plus", "minus", "preferences", "product", "pulldown", "refresh", "remove", "revert", "runner", "save", "search", "tags", "tel", "tips", "todo", "toolbox", "trash", "user", "upload", "floppy", "arrowleft", "arrowdown", "arrowright", "arrowup", "spinleft", "spinprev", "spinright", "spinnext", "spindown", "spinup", "chevronleft", "chevronprev", "back", "chevronright", "chevronnext", "chevrondown", "chevronup", "chevrondoubleleft", "chevrondoubleright", "equal", "notequal", "less", "greater", "lessorequal", "greaterorequal", "isblank", "isnotblank", "sortup", "sortdown", "sortuptext", "sortdowntext", "sorted", "expand", "collapse", "columnfield", "rowfield", "datafield", "fields", "fieldchooser", "columnchooser", "pin", "unpin", "pinleft", "pinright", "contains", "startswith", "endswith", "doesnotcontain", "range", "export", "exportxlsx", "exportpdf", "exportselected", "ordersbox", "warning", "taskhelpneeded", "more", "square", "clearsquare", "repeat", "selectall", "unselectall", "print", "bold", "italic", "underline", "strike", "indent", "increaselinespacing", "font", "fontsize", "shrinkfont", "growfont", "color", "background", "fill", "palette", "superscript", "subscript", "header", "blockquote", "formula", "codeblock", "orderedlist", "bulletlist", "increaseindent", "decreaseindent", "decreaselinespacing", "alignleft", "alignright", "aligncenter", "alignjustify", "link", "video", "mention", "variable", "clearformat", "accountbox", "fullscreen", "hierarchy", "docfile", "docxfile", "pdffile", "pptfile", "pptxfile", "rtffile", "txtfile", "xlsfile", "xlsxfile", "copy", "cut", "paste", "share", "inactivefolder", "newfolder", "movetofolder", "parentfolder", "rename", "detailslayout", "contentlayout", "smalliconslayout", "mediumiconslayout", "undo", "redo", "hidepanel", "showpanel", "checklist", "verticalaligntop", "verticalaligncenter", "verticalalignbottom", "rowproperties", "columnproperties", "cellproperties", "tableproperties", "splitcells", "mergecells", "deleterow", "deletecolumn", "insertrowabove", "insertrowbelow", "insertcolumnleft", "insertcolumnright", "inserttable", "deletetable", "edittableheader", "addtableheader", "pasteplaintext", "importselected", "import", "textdocument", "jpgfile", "bmpfile", "svgfile", "attach", "return", "indeterminatestate", "lock", "unlock", "imgarlock", "imgarunlock", "bell", "sun", "arrowback", "taskcomplete", "taskrejected", "taskinprogress", "taskstop", "clearcircle", "send", "pinmap", "photooutline", "panelright", "panelleft", "optionsgear", "moon", "login", "eyeopen", "eyeclose", "expandform", "description", "belloutline", "to", "errorcircle", "datatrending", "dataarea", "datausage", "datapie", "handlevertical", "handlehorizontal", "triangleup", "triangledown", "triangleright", "triangleleft", "sendfilled", "chat", "fixcolumn", "unfixcolumn", "fixcolumnleft", "stickcolumn", "fixcolumnright"];
class MeIconsRegistry {
    constructor() {
        this.registry = new Map();
        this.parser = new DOMParser();
        this.serializer = new XMLSerializer();
        this.meIconNameSet = meIconSet.map((item) => item.name);
    }
    registerIcons(icons) {
        icons.forEach((icon) => this.registry.set(icon.name, icon.data));
    }
    getIconFromString(iconName, color, selector) {
        if (!this.registry.has(iconName) && this.meIconNameSet.includes(iconName)) {
            console.error(`Иконка с именем ${iconName} не зарегистрирована!`);
            return undefined;
        }
        else if (!this.registry.has(iconName)) {
            return this.colorIcon(this.parseIcon(iconName), color, selector);
        }
        else {
            const icon = this.registry.get(iconName);
            return this.colorIcon(icon, color, selector);
        }
    }
    colorIcon(iconComponent, color, selector) {
        let result;
        if (this.isSvgString(iconComponent)) {
            result = iconComponent;
        }
        else {
            if (!this.registry.has(iconComponent) && this.meIconNameSet.includes(iconComponent)) {
                console.error(`Иконка с именем ${iconComponent} не зарегистрирована!`);
                return undefined;
            }
            else if (!this.registry.has(iconComponent)) {
                return this.parseIcon(iconComponent);
            }
            else {
                result = this.registry.get(iconComponent);
            }
        }
        if (!color) {
            return result;
        }
        if (!selector && typeof color === 'string') {
            return result.replaceAll('currentColor', color);
        }
        if (selector && typeof color === 'string') {
            const svgDoc = this.parser.parseFromString(result, 'image/svg+xml');
            const selectors = svgDoc.querySelectorAll(selector);
            selectors.forEach((sel) => {
                sel.setAttribute('fill', color);
            });
            return this.serializer.serializeToString(svgDoc.documentElement);
        }
        if ((Array.isArray(color)) || (Array.isArray(color))) {
            const svgDoc = this.parser.parseFromString(result, 'image/svg+xml');
            color.forEach((obj) => {
                const selectors = svgDoc.querySelectorAll(obj.selector);
                selectors.forEach((sel) => {
                    sel.setAttribute('fill', obj.color);
                });
            });
            return this.serializer.serializeToString(svgDoc.documentElement);
        }
        return undefined;
    }
    isSvgString(str) {
        if (!str) {
            return false;
        }
        const trimmed = str.trim();
        const svgRegex = /^<svg[\s\S]*<\/svg>$/i;
        return svgRegex.test(trimmed);
    }
    getIcon(iconComponent, color) {
        if (!iconComponent.data) {
            console.warn(`Компонент ${iconComponent} не содержит svg строку!`);
        }
        this.registry.set(iconComponent.name, iconComponent.data);
        if (color) {
            return iconComponent.data?.replaceAll('currentColor', color) || '';
        }
        else {
            return iconComponent.data || '';
        }
    }
    parseIcon(icon) {
        if (icon) {
            if (DX_ICONS.includes(icon))
                return ('<i class="dx-icon dx-icon-' + icon + '"></i>');
            if (icon.startsWith('<svg')) {
                return (icon);
            }
            if (icon.startsWith("data:image") || icon.startsWith("http"))
                return (`<img src="${icon}"/>`);
            if (REG_EXP_FOR_ICON_PATH.test(icon))
                return (`<img src="${icon}"/>`);
        }
        return icon;
    }
    concatIcon(...icons) {
        let newsvg = icons.reduce((acc, item, index) => {
            if (index === 0) {
                let doc = this.parser.parseFromString(item.data, 'image/svg+xml');
                acc = doc.getElementsByTagName('svg')[0];
            }
            else {
                let nextIcon = this.parser.parseFromString(item.data, 'image/svg+xml');
                let path = nextIcon.getElementsByTagName('path')[0];
                if (!path) {
                    path = nextIcon.getElementsByTagName('circle')[0];
                }
                path.setAttribute('fill', 'red');
                acc.append(path);
            }
            return acc;
        }, []);
        return this.serializer.serializeToString(newsvg);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MeIconsRegistry, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MeIconsRegistry, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MeIconsRegistry, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class MeIconComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MeIconComponent, deps: [{ token: i0.ElementRef }, { token: MeIconsRegistry }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.5", type: MeIconComponent, selector: "me-icon", inputs: { color: "color", selector: "selector", name: "name", size: ["size", "size", validateSizeValue], containerSize: ["containerSize", "containerSize", validateSizeValue] }, host: { properties: { "style.height": "containerSize", "style.width": "containerSize" } }, usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, styles: [":host{display:flex;justify-content:center;align-items:center;flex-shrink:0}:host .dx-icon{font-size:18px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MeIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'me-icon', standalone: false, template: ` <ng-content></ng-content> `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[style.height]': 'containerSize',
                        '[style.width]': 'containerSize'
                    }, styles: [":host{display:flex;justify-content:center;align-items:center;flex-shrink:0}:host .dx-icon{font-size:18px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: MeIconsRegistry }, { type: undefined, decorators: [{
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

class MeIconsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MeIconsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.5", ngImport: i0, type: MeIconsModule, declarations: [MeIconComponent], imports: [CommonModule], exports: [MeIconComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MeIconsModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MeIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [MeIconComponent],
                    exports: [MeIconComponent],
                }]
        }] });

/*
 * Public API Surface of me-icons
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MeIconComponent, MeIconsModule, MeIconsRegistry };
//# sourceMappingURL=monitel-me-icons-registry.mjs.map
