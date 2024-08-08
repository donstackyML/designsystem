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
      shadingColor="rgba(0,0,0,0.4)"
      [position]="{ of: '#employee' }"
      [(visible)]="loadingVisible"
      [showIndicator]="showIndicator"
      [showPane]="showPane"
      [shading]="shading"
      [hideOnOutsideClick]="hideOnOutsideClick"
      (onShown)="onShown()"
      (onHidden)="onHidden()"
      [size]="size"
      [customClass]="customClass"
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
  @Input() customClass: boolean = false;
  @Input() showIndicator: boolean = true;
  @Input() showPane: boolean = true;
  @Input() shading: boolean = true;
  @Input() hideOnOutsideClick: boolean = false;

  loadingVisible = false;
  employeeInfo = {
    Birth_Date: '1985-01-15',
    City: 'Los Angeles',
    Zipcode: '90001',
    Address: '1234 Main St',
    Mobile_Phone: '555-1234',
    Email: 'john.heart@example.com',
  };

  showLoadPanel() {
    this.loadingVisible = true;
  }

  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, 300000);
  }

  onHidden() {
    // do something when hidden
  }
}

const meta: Meta<LoadPanelDemoComponent> = {
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
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    customClass: { control: 'boolean' },
    showIndicator: { control: 'boolean' },
    showPane: { control: 'boolean' },
    shading: { control: 'boolean' },
    hideOnOutsideClick: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<LoadPanelDemoComponent>;

export const Default: Story = {
  args: {
    size: 'medium',
    customClass: false,
    showIndicator: true,
    showPane: true,
    shading: true,
    hideOnOutsideClick: false,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const CustomClass: Story = {
  args: {
    ...Default.args,
    customClass: true,
  },
};

export const HideOnOutsideClick: Story = {
  args: {
    ...Default.args,
    hideOnOutsideClick: true,
  },
};
