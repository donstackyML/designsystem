import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxAccordionModule } from 'devextreme-angular';
import { MeAccordionDirective, MeIconComponent } from '../../public-api';
import { meAccordionMockData } from './me-accordion-mock-data';

export default {
  title: 'Components/Accordion',
  decorators: [
    moduleMetadata({
      declarations: [MeAccordionDirective],
      imports: [DxAccordionModule, MeIconComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Меняет размер аккордиона и его элементов.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    collapsible: {
      control: 'boolean',
      description: 'Определяет, может ли аккордеон сворачиваться.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Разрешает одновременное раскрытие нескольких секций.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    dataSource: meAccordionMockData,
    size: 'medium',
    collapsible: false,
    multiple: false,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
      <dx-accordion
        meAccordion
        [size]="size"
        [collapsible]="collapsible"
        [multiple]="multiple"
        [dataSource]="dataSource"
      >
        <div *dxTemplate="let item of 'title'">
          <div class="custom-header-container">
            <me-icon
              class="custom-header-icon"
              [icon]="item.icon"
              [size]="size"
              [color]="item.iconColor || '#000000'"
            ></me-icon>
            <span class="custom-header-title">{{ item.title }}</span>
          </div>
        </div>
        <div *dxTemplate="let item of 'item'">
          <p>{{ item.content }}</p>
        </div>
      </dx-accordion>
    `,
  }),
} satisfies Meta<DxAccordionModule | MeAccordionDirective>;

type Story = StoryObj<DxAccordionModule | MeAccordionDirective>;

export const Default: Story = {
  args: {}
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};

export const Collapsible: Story = {
  args: {
    collapsible: true
  },
};

export const Multiple: Story = {
  args: {
    multiple: true
  },
};

export const WithDescription: Story = {
  render: (args) => ({
    props: args,
    template: `
      <dx-accordion
        meAccordion
        [size]="size"
        [dataSource]="dataSource"
        [collapsible]="collapsible"
        [multiple]="multiple"
        itemTitleTemplate="customTitle"
      >
        <div *dxTemplate="let item of 'customTitle'">
          <div class="custom-header-container" style="align-items: flex-start">
            <me-icon
              class="custom-header-icon"
              [icon]="item.icon"
              [size]="size"
            ></me-icon>
            <div class="custom-header-content">
              <div class="custom-header-title">{{ item.title }}</div>
              <div class="custom-header-description">{{ item.description }}</div>
            </div>
          </div>
        </div>
        <div *dxTemplate="let item of 'item'">
          <p>{{ item.content }}</p>
        </div>
      </dx-accordion>
    `,
  }),
};
