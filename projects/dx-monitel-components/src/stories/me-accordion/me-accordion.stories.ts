import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxAccordionModule } from 'devextreme-angular';
import { MeAccordionDirective } from '../../public-api';

export default {
  title: 'Components/Accordion',
  decorators: [
    moduleMetadata({
      declarations: [MeAccordionDirective],
      imports: [DxAccordionModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    customClass: {
      control: 'text',
    },
    collapsible: {
      control: 'boolean',
    },
    multiple: {
      control: 'boolean',
    },
    animationDuration: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
    },
  },
  args: {
    size: 'medium',
    customClass: '',
    collapsible: false,
    multiple: false,
    animationDuration: 300,
  },
  render: (args) => ({
    props: {
      ...args,
      onCollapsibleChanged: (e: any) => console.log('Collapsible changed:', e),
      onMultipleChanged: (e: any) => console.log('Multiple changed:', e),
      onSelectedIndexChanged: (e: any) => console.log('Selected index changed:', e),
    },
    template: `
      <dx-accordion
        meAccordion
        [size]="size"
        [customClass]="customClass"
        [collapsible]="collapsible"
        [multiple]="multiple"
        [animationDuration]="animationDuration"
        [dataSource]="dataSource"
        (onCollapsibleChanged)="onCollapsibleChanged($event)"
        (onMultipleChanged)="onMultipleChanged($event)"
        (onSelectedIndexChanged)="onSelectedIndexChanged($event)"
      >
        <div *dxTemplate="let item of 'title'">
          <span>{{item.title}}</span>
        </div>
        <div *dxTemplate="let item of 'item'">
          <p>{{item.content}}</p>
        </div>
      </dx-accordion>
    `,
  }),
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    dataSource: [
      { title: 'Accordion Item 1', content: 'Content for Accordion Item 1' },
      { title: 'Accordion Item 2', content: 'Content for Accordion Item 2' },
      { title: 'Accordion Item 3', content: 'Content for Accordion Item 3' },
    ],
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

export const Collapsible: Story = {
  args: {
    ...Default.args,
    collapsible: true,
  },
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    multiple: true,
  },
};

export const CustomAnimation: Story = {
  args: {
    ...Default.args,
    animationDuration: 1000,
  },
};

export const CustomClass: Story = {
  args: {
    ...Default.args,
    customClass: 'my-custom-accordion',
  },
};

export const CustomHeader: Story = {
  args: {
    ...Default.args,
    dataSource: [
      { id: 1, text: 'Accordion Item 1', description: 'Description for Item 1', icon: 'folder' },
      { id: 2, text: 'Accordion Item 2', description: 'Description for Item 2', icon: 'folder' },
      { id: 3, text: 'Accordion Item 3', description: 'Description for Item 3', icon: 'folder' },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-accordion
        meAccordion
        [dataSource]="dataSource"
        [collapsible]="true"
        itemTitleTemplate="customTitle"
      >
        <div *dxTemplate="let item of 'customTitle'">
           <div style="display: flex; align-items: flex-start;">
              <i class="dx-icon-{{item.icon}}" style="margin-right: 10px; font-size: 18px; color: #000;"></i>
              <div>
                <div style="font-weight: bold; font-size: 16px;">{{item.text}}</div>
                <div style="font-weight: inherit; color: gray; font-size: 14px;">{{item.description}}</div>
              </div>
            </div>
        </div>
        <div *dxTemplate="let item of 'item'">
          <p>Content for {{item.text}}</p>
        </div>
      </dx-accordion>
    `
  }),
};
