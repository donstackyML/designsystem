import { Component, Input } from '@angular/core';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxLoadPanelModule,
} from 'devextreme-angular';
import { MeLoadPanelDirective } from '../../public-api';

@Component({
  selector: 'load-panel-demo',
  template: `
    <dx-button text="Load Data" (onClick)="showLoadPanel()"> </dx-button>

    <dx-load-panel
      #loadPanel
      meLoadPanel
      [(visible)]="loadingVisible"
      [hideOnOutsideClick]="hideOnOutsideClick"
      [size]="size"
      [color]="color"
      [stylingMode]="stylingMode"
      [message]="message"
      [shading]="shading"
      [showPane]="showPane"
    ></dx-load-panel>
  `,
  styles: [
    `
      .header {
        font-size: 24px;
        margin-bottom: 20px;
      }
      #employee {
        margin: 20px 0;
      }
      .options {
        margin-top: 20px;
      }
      .option {
        margin-bottom: 10px;
      }
    `,
  ],
})
export class LoadPanelDemoComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() color: 'normal' | 'default' | 'accent' = 'default';
  @Input() stylingMode: 'circle' | 'line' = 'circle';
  @Input() hideOnOutsideClick: boolean = false;

  loadingVisible = false;

  showLoadPanel() {
    this.loadingVisible = true;
  }
}

const meta: Meta = {
  title: 'Components/LoadPanel',
  component: LoadPanelDemoComponent,
  decorators: [
    moduleMetadata({
      declarations: [MeLoadPanelDirective, LoadPanelDemoComponent],
      imports: [DxButtonModule, DxLoadPanelModule, DxCheckBoxModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['normal', 'default', 'accent'],
      description: 'Цвет индикатора загрузки',
    },
    stylingMode: {
      control: 'select',
      options: ['line', 'circle'],
      description: 'Стиль индикатора загрузки',
    },
    shading: { control: 'boolean', description: 'Затемнение экрана' },
    message: { control: 'text', description: 'Текст загрузки' },
    showPane: { control: 'boolean', description: 'Показывать панель загрузки' },
    hideOnOutsideClick: {
      control: 'boolean',
      description: 'Скрыть по клику вне панели',
    },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    size: 'medium',
    color: 'default',
    stylingMode: 'line',
    shading: true,
    message: 'Loading...',
    showPane: true,
    hideOnOutsideClick: false,
  },
};
