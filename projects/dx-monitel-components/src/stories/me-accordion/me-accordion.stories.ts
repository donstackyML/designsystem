import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxAccordionModule } from 'devextreme-angular';
import { MeAccordionDirective, MeIconComponent } from '../../public-api';

export default {
  title: 'Компоненты/Accordion',
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
    },
    collapsible: {
      control: 'boolean',
    },
    multiple: {
      control: 'boolean',
    },
  },
  args: {
    size: 'medium',
    collapsible: false,
    multiple: false,
  },
  render: (args) => ({
    props: {
      ...args
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
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    dataSource: [
      {
        title: 'Заголовок 1',
        content: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis',
        icon: 'folder',
      },
      {
        title: 'Заголовок 2',
        content: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis',
        icon: 'folder',
      },
      {
        title: 'Заголовок 3',
        content: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis',
        icon: 'folder',
      },
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

export const CustomHeader: Story = {
  args: {
    ...Default.args,
    size: 'medium',
    dataSource: [
      {
        id: 1,
        text: 'Заголовок 1',
        description: 'Описание',
        icon: 'folder',
      },
      {
        id: 2,
        text: 'Заголовок 2',
        description: 'Описание',
        icon: 'folder',
      },
      {
        id: 3,
        text: 'Заголовокк 3',
        description: 'Описание',
        icon: 'folder',
      },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-accordion
        meAccordion
        [size]="size"
        [dataSource]="dataSource"
        [collapsible]="true"
        itemTitleTemplate="customTitle"
      >
        <div *dxTemplate="let item of 'customTitle'">
          <div class="custom-header-container">
            <me-icon
              class="custom-header-icon"
              [icon]="item.icon"
              [size]="size"
              [color]="item.iconColor || '#000000'"
            ></me-icon>
            <div>
              <div class="custom-header-title">{{ item.text }}</div>
              <div class="custom-header-description">{{ item.description }}</div>
            </div>
          </div>
        </div>
        <div *dxTemplate="let item of 'item'">
          <p>Содержимое для {{ item.text }}</p>
        </div>
      </dx-accordion>
    `,
  }),
};
