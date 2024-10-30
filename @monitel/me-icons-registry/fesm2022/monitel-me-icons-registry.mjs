import * as i0 from '@angular/core';
import {
  Injectable,
  Component,
  ChangeDetectionStrategy,
  Optional,
  Inject,
  Input,
  NgModule,
} from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';

class MeIconsRegistry {
  constructor() {
    this.registry = new Map();
  }
  registerIcons(icons) {
    icons.forEach((icon) => this.registry.set(icon.name, icon.data));
  }
  getIconFromString(iconName, color = 'var(--Icon-Default)') {
    if (!this.registry.has(iconName)) {
      console.warn(`Иконка с именем ${iconName} не зарегистрирована!`);
    }
    return this.registry.get(iconName)?.replaceAll('color', color);
  }
  getIcon(iconComponent, color = 'var(--Icon-Default)') {
    if (!iconComponent.data) {
      console.warn(`Компонент ${iconComponent} не содержит svg строку!`);
    }
    this.registry.set(iconComponent.name, iconComponent.data);
    return iconComponent.data?.replaceAll('color', color) || '';
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: MeIconsRegistry,
      deps: [],
      target: i0.ɵɵFactoryTarget.Injectable,
    });
  }
  static {
    this.ɵprov = i0.ɵɵngDeclareInjectable({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: MeIconsRegistry,
      providedIn: 'root',
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: MeIconsRegistry,
  decorators: [
    {
      type: Injectable,
      args: [
        {
          providedIn: 'root',
        },
      ],
    },
  ],
});

const DEFAULT_ICON_COLOR = 'var(--Icon-Default)';
class MeIconComponent {
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
        { token: MeIconsRegistry },
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
      { type: MeIconsRegistry },
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

class MeIconsModule {
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: MeIconsModule,
      deps: [],
      target: i0.ɵɵFactoryTarget.NgModule,
    });
  }
  static {
    this.ɵmod = i0.ɵɵngDeclareNgModule({
      minVersion: '14.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: MeIconsModule,
      declarations: [MeIconComponent],
      imports: [CommonModule],
      exports: [MeIconComponent],
    });
  }
  static {
    this.ɵinj = i0.ɵɵngDeclareInjector({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: MeIconsModule,
      imports: [CommonModule],
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: MeIconsModule,
  decorators: [
    {
      type: NgModule,
      args: [
        {
          declarations: [MeIconComponent],
          exports: [MeIconComponent],
          imports: [CommonModule],
        },
      ],
    },
  ],
});

/*
 * Public API Surface of me-icons
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MeIconComponent, MeIconsModule, MeIconsRegistry };
//# sourceMappingURL=monitel-me-icons-registry.mjs.map
