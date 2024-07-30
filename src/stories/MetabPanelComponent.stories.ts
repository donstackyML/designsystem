// tab-panel.stories.ts

import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxTabPanelModule } from 'devextreme-angular';
import { MeTabPanelDirective } from "../app/directives/tab-panel.directive";
import { Component } from '@angular/core';

@Component({
  selector: 'tab-panel-host',
  template: `
    <dx-tab-panel
      meTabPanel
      [height]="height"
      width="400px"
      [selectedIndex]="selectedIndex"
      [animationEnabled]="animationEnabled"
      [swipeEnabled]="swipeEnabled"
      [customClass]="customClass"
      [hoverStateEnabled]="true"
    >
      <dxi-item title="Employee" icon="floppy">
        <div class="tabpanel-content">
          <p>Content for Employee tab</p>
        </div>
      </dxi-item>
      <dxi-item title="Notes" icon="comment">
        <div class="tabpanel-content">
          <p>Content for Notes tab</p>
        </div>
      </dxi-item>
      <dxi-item title="Role" icon="isnotblank">
        <div class="tabpanel-content">
          <p>Content for Role tab</p>
        </div>
      </dxi-item>
    </dx-tab-panel>
  `,
})
class TabPanelHostComponent {
  height: string = '300px';
  selectedIndex: number = 0;
  animationEnabled: boolean = true;
  swipeEnabled: boolean = true;
  customClass: string = '';
}

const meta: Meta<TabPanelHostComponent> = {
  title: 'Directives/MeTabPanel',
  component: TabPanelHostComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [MeTabPanelDirective, TabPanelHostComponent],
      imports: [DxTabPanelModule],
    }),
  ],
  argTypes: {
    customClass: { control: 'text' },
    height: { control: 'text' },
    selectedIndex: { control: 'number' },
    animationEnabled: { control: 'boolean' },
    swipeEnabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<TabPanelHostComponent>;

export const Default: Story = {
  args: {
    height: '300px',
    selectedIndex: 0,
    animationEnabled: true,
    swipeEnabled: true,
    customClass: '',
  },
};

export const WithCustomClass: Story = {
  args: {
    ...Default.args,
    customClass: 'custom-class',
  },
};

export const WithoutAnimation: Story = {
  args: {
    ...Default.args,
    animationEnabled: false,
  },
};

export const WithoutSwipe: Story = {
  args: {
    ...Default.args,
    swipeEnabled: false,
  },
};

export const CustomHeight: Story = {
  args: {
    ...Default.args,
    height: '500px',
  },
};
