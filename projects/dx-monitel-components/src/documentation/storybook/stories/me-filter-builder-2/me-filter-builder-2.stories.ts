import { MeFilterBuilderComponent } from '../../../../public-api';

import { Meta, StoryObj } from '@storybook/angular';

export default {
  title: 'Components/FilterBuilder2',
  component: MeFilterBuilderComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Компонент фильтрации с FilterBuilder и DataGrid, построенный на DevExtreme.',
      },
    },
  },
} satisfies Meta<MeFilterBuilderComponent>;

type Story = StoryObj<MeFilterBuilderComponent>;

export const Default: Story = {};
