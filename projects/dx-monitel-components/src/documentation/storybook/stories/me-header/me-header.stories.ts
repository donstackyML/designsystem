import { CommonModule } from '@angular/common';
import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import {
  DxButtonComponent,
  DxDropDownButtonComponent,
} from 'devextreme-angular';
import {
  MeButtonDirective,
  MeDropDownButtonDirective,
  MeHeaderComponent,
  MeIconComponent,
} from '../../../../public-api';

export default {
  title: 'Components/Header',
  component: MeHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MeHeaderComponent, MeIconComponent],
      declarations: [
        MeButtonDirective,
        DxButtonComponent,
        MeDropDownButtonDirective,
        DxDropDownButtonComponent,
      ],
    }),
  ],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'large'],
      description: 'Размер хедера (small или large)',
      table: {
        type: {
          summary: `'small' | 'large'`,
        },
        defaultValue: {
          summary: 'small',
        },
      },
    },
    title: {
      control: 'text',
      description: 'Название приложения',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'text',
        },
      },
    },
    description: {
      control: 'text',
      description: 'Название контента',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'text',
        },
      },
    },
    appInfo: {
      control: 'object',
      description: 'Информация о версии приложения, UI и хосте',
      table: {
        type: {
          summary: `{ appVersion: string; uiVersion: string; host: string }`,
        },
        defaultValue: {
          summary: '{ appVersion: "", uiVersion: "", host: "" }',
        },
      },
    },
    withAppInfoTooltip: {
      control: 'boolean',
      description: 'Отображать тултип с подробной информацией о версиях',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'boolean' },
      },
    },
  },
  args: {
    size: 'small',
    title: 'Название приложения',
    appInfo: {
      appVersion: '3.0.3 HF5',
      uiVersion: '1.0.313',
      host: 'dev-opera-app1.oikdev.local',
    },
    withAppInfoTooltip: false,
  },
  render: (args) => ({
    props: args,
    template: `
     <me-header ${argsToTemplate(args)}>
        <img
          [ngClass]="{
            'icon-large': size === 'large',
            'icon-small': size === 'small'
          }"
          slot="left"
          src="./assets/icons/favicon.svg"
          alt="Логотип"
        />

        <div class="right" slot="right">
          <span
            [ngClass]="{
              'me-text-body1': size === 'large',
              'me-text-body2': size === 'small'
            }"
          >
            Домен подключения
          </span>
          <dx-drop-down-button meDropDownButton [size]="size" text="Личный кабинет" icon="account_circle" stylingMode="contained"> </dx-drop-down-button>
          <dx-button meButton [size]="size" iconOnly="more_vert"> </dx-button>
        </div>
      </me-header>
              `,
    styles: [
      `
      .icon-large {
        width: 40px;
        height: 40px;
      }

      .icon-small {
        width: 28px;
        height: 28px;
      }
      
      .right {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    `,
    ],
  }),
} satisfies Meta<MeHeaderComponent>;

type Story = StoryObj<MeHeaderComponent>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const WithDescription: Story = {
  args: {
    description: 'Название контента',
  },
};

export const WithoutTitleAndDescription: Story = {
  args: {
    title: '',
    description: '',
  },
};

export const WithTitleAndTooltip: Story = {
  args: {
    description: '',
    withAppInfoTooltip: true,
    appInfo: {
      appVersion: '3.0.3 HF5',
      uiVersion: '1.0.313',
      host: 'dev-opera-app1.oikdev.local',
    },
    size: 'large',
  },
  render: (args) => ({
    props: args,
    template: `
      <me-header ${argsToTemplate(args)}>
        <img class="icon" slot="left" src="./assets/icons/favicon.svg" alt="Логотип"/>
        
        <div class="right" slot="right">
          <dx-button meButton [size]="size" iconOnly="more_vert">
          </dx-button>
        </div>
      </me-header>
              `,
    styles: [
      `
      .icon {
        width: 40px;
        height: 40px;
      }
    `,
    ],
  }),
};

export const WithTooltipOnly: Story = {
  args: {
    title: '',
    description: '',
    withAppInfoTooltip: true,
    appInfo: {
      appVersion: '3.0.3 HF5',
      uiVersion: '1.0.313',
      host: 'dev-opera-app1.oikdev.local',
    },
    size: 'large',
  },
  render: (args) => ({
    props: args,
    template: `
      <me-header ${argsToTemplate(args)}>
        <img class="icon" slot="left" src="./assets/icons/favicon.svg" alt="Логотип"/>
        
        <div class="right" slot="right">
          <dx-button meButton [size]="size" iconOnly="more_vert">
          </dx-button>
        </div>
      </me-header>
              `,
    styles: [
      `
      .icon {
        width: 40px;
        height: 40px;
      }
    `,
    ],
  }),
};

export const WithoutVersion: Story = {
  args: {
    appInfo: undefined,
  },
};
