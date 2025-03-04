import * as i0 from '@angular/core';
import { Injectable, Component, ChangeDetectionStrategy, Optional, Inject, Input, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';

const REG_EXP_FOR_ICON_PATH = new RegExp("^(/?([^/\0]+/)*[^/\0]+.(svg|jpeg|png|ico))$");
const DX_ICONS = ["add", "airplane", "bookmark", "box", "car", "card", "cart", "chart", "check", "clear", "clock", "close", "coffee", "comment", "doc", "file", "download", "dragvertical", "edit", "email", "event", "eventall", "favorites", "find", "filter", "folder", "activefolder", "food", "gift", "globe", "group", "help", "home", "image", "info", "key", "like", "map", "menu", "message", "money", "music", "overflow", "percent", "photo", "plus", "minus", "preferences", "product", "pulldown", "refresh", "remove", "revert", "runner", "save", "search", "tags", "tel", "tips", "todo", "toolbox", "trash", "user", "upload", "floppy", "arrowleft", "arrowdown", "arrowright", "arrowup", "spinleft", "spinprev", "spinright", "spinnext", "spindown", "spinup", "chevronleft", "chevronprev", "back", "chevronright", "chevronnext", "chevrondown", "chevronup", "chevrondoubleleft", "chevrondoubleright", "equal", "notequal", "less", "greater", "lessorequal", "greaterorequal", "isblank", "isnotblank", "sortup", "sortdown", "sortuptext", "sortdowntext", "sorted", "expand", "collapse", "columnfield", "rowfield", "datafield", "fields", "fieldchooser", "columnchooser", "pin", "unpin", "pinleft", "pinright", "contains", "startswith", "endswith", "doesnotcontain", "range", "export", "exportxlsx", "exportpdf", "exportselected", "ordersbox", "warning", "taskhelpneeded", "more", "square", "clearsquare", "repeat", "selectall", "unselectall", "print", "bold", "italic", "underline", "strike", "indent", "increaselinespacing", "font", "fontsize", "shrinkfont", "growfont", "color", "background", "fill", "palette", "superscript", "subscript", "header", "blockquote", "formula", "codeblock", "orderedlist", "bulletlist", "increaseindent", "decreaseindent", "decreaselinespacing", "alignleft", "alignright", "aligncenter", "alignjustify", "link", "video", "mention", "variable", "clearformat", "accountbox", "fullscreen", "hierarchy", "docfile", "docxfile", "pdffile", "pptfile", "pptxfile", "rtffile", "txtfile", "xlsfile", "xlsxfile", "copy", "cut", "paste", "share", "inactivefolder", "newfolder", "movetofolder", "parentfolder", "rename", "detailslayout", "contentlayout", "smalliconslayout", "mediumiconslayout", "undo", "redo", "hidepanel", "showpanel", "checklist", "verticalaligntop", "verticalaligncenter", "verticalalignbottom", "rowproperties", "columnproperties", "cellproperties", "tableproperties", "splitcells", "mergecells", "deleterow", "deletecolumn", "insertrowabove", "insertrowbelow", "insertcolumnleft", "insertcolumnright", "inserttable", "deletetable", "edittableheader", "addtableheader", "pasteplaintext", "importselected", "import", "textdocument", "jpgfile", "bmpfile", "svgfile", "attach", "return", "indeterminatestate", "lock", "unlock", "imgarlock", "imgarunlock", "bell", "sun", "arrowback", "taskcomplete", "taskrejected", "taskinprogress", "taskstop", "clearcircle", "send", "pinmap", "photooutline", "panelright", "panelleft", "optionsgear", "moon", "login", "eyeopen", "eyeclose", "expandform", "description", "belloutline", "to", "errorcircle", "datatrending", "dataarea", "datausage", "datapie", "handlevertical", "handlehorizontal", "triangleup", "triangledown", "triangleright", "triangleleft", "sendfilled", "chat", "fixcolumn", "unfixcolumn", "fixcolumnleft", "stickcolumn", "fixcolumnright"];
class MeIconsRegistry {
    constructor() {
        this.registry = new Map();
        this.parser = new DOMParser();
        this.serializer = new XMLSerializer();
    }
    registerIcons(icons) {
        icons.forEach((icon) => this.registry.set(icon.name, icon.data));
    }
    getIconFromString(iconName, color) {
        if (!this.registry.has(iconName)) {
            console.warn(`Иконка с именем ${iconName} не зарегистрирована!`);
            return this.parseIcon(iconName);
        }
        else if (color) {
            return this.registry.get(iconName)?.replaceAll('currentColor', color);
        }
        else {
            return this.registry.get(iconName);
        }
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
                const INSERT_CLASS_INDEX = 4;
                const before = icon.slice(0, INSERT_CLASS_INDEX);
                const after = icon.slice(INSERT_CLASS_INDEX);
                const substr = ' class="dx-icon"';
                const svgIcon = before + substr + after;
                return (svgIcon);
            }
            if (icon.startsWith("data:image") || icon.startsWith("http"))
                return ('<img class="dx-icon" src="' + icon + '" />');
            if (REG_EXP_FOR_ICON_PATH.test(icon))
                return ('<img class="dx-icon" src="' + icon + '" />');
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
                console.log(item.data);
                console.log(path);
                acc.append(path);
            }
            return acc;
        }, []);
        return this.serializer.serializeToString(newsvg);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MeIconsRegistry, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MeIconsRegistry, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MeIconsRegistry, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class MeIconComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MeIconComponent, deps: [{ token: i0.ElementRef }, { token: MeIconsRegistry }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: MeIconComponent, selector: "me-icon", inputs: { color: "color", name: "name", size: ["size", "size", validateSizeValue], containerSize: ["containerSize", "containerSize", validateSizeValue] }, host: { properties: { "style.height": "containerSize", "style.width": "containerSize" } }, usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, styles: [":host{display:flex;justify-content:center;align-items:center;flex-shrink:0}:host .dx-icon{font-size:18px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MeIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'me-icon', template: ` <ng-content></ng-content> `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MeIconsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MeIconsModule, declarations: [MeIconComponent], imports: [CommonModule], exports: [MeIconComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MeIconsModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MeIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MeIconComponent],
                    exports: [MeIconComponent],
                    imports: [CommonModule],
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
