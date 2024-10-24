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
      [message]="message"
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
  @Input() hideOnOutsideClick: boolean = false;

  loadingVisible = false;

  showLoadPanel() {
    this.loadingVisible = true;
  }
}

const meta: Meta = {
  title: 'Components/LoadPanel(RC)',
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
    message: { control: 'text' },
    hideOnOutsideClick: { control: 'boolean' },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    size: 'medium',
    message: 'Loading...',
    hideOnOutsideClick: false,
  },
};
