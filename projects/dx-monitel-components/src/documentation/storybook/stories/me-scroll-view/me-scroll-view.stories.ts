import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxScrollViewComponent, DxScrollViewModule } from 'devextreme-angular';
import { MeScrollViewDirective } from '../../../../lib/directives/me-scroll-view/me-scroll-view.directive';

export default {
  title: 'Components/ScrollView',
  decorators: [
    moduleMetadata({
      declarations: [MeScrollViewDirective],
      imports: [DxScrollViewModule],
    }),
  ],
  argTypes: {
    direction: {
      control: 'select',
      description: 'Направление скролла',
      options: ['both', 'horizontal', 'vertical'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'both' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключение скролла.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showScrollbar: {
      control: 'select',
      description: 'Условия отображения скролла',
      options: ['onHover', 'onScroll', 'always', 'never'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'onHover' },
      },
    },
    useNative: {
      control: 'boolean',
      description: 'Использовать native-скролла.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: 'true (десктоп, кроме Mac), false (в остальных случаях)',
        },
      },
    },
    bounceEnabled: {
      control: 'boolean',
      description: 'Эффект отскока.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      control: 'text',
      description: 'Ширина view',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    height: {
      control: 'text',
      description: 'Высота view',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    height: '150px',
    width: '250px',
    direction: 'both',
    showScrollbar: 'onHover',
    disabled: false,
    bounceEnabled: false,
  },
  render: (args: any) => ({
    props: args,
    template: `
<div id="scrollview-demo">
  <dx-scroll-view
    meScrollView
    [height]="height"
    [width]="width"
    [direction]="direction"
    [showScrollbar]="showScrollbar"
    [disabled]="disabled"
    [bounceEnabled]="bounceEnabled"
    [useNative]="useNative"
  >
    <div>Lorem ipsum,dolorsitametconsecteturadipisicingelit. Explicabo aperiam quo at consequuntur error doloremque voluptate excepturi ad nulla sint pariatur omnis, adipisci perspiciatis quam architecto in, quibusdam facere ab?Lorem ipsum,dolorsitametconsecteturadipisicingelit. Explicabo aperiam quo at consequuntur error doloremque voluptate excepturi ad nulla sint pariatur omnis, adipisci perspiciatis quam architecto in, quibusdam facere ab?Lorem ipsum,dolorsitametconsecteturadipisicingelit. Explicabo aperiam quo at consequuntur error doloremque voluptate excepturi ad nulla sint pariatur omnis, adipisci perspiciatis quam architecto in, quibusdam facere ab?Lorem ipsum,dolorsitametconsecteturadipisicingelit. Explicabo aperiam quo at consequuntur error doloremque voluptate excepturi ad nulla sint pariatur omnis, adipisci perspiciatis quam architecto in, quibusdam facere ab?Lorem ipsum,dolorsitametconsecteturadipisicingelit. Explicabo aperiam quo at consequuntur error doloremque voluptate excepturi ad nulla sint pariatur omnis, adipisci perspiciatis quam architecto in, quibusdam facere ab?
    </div>
  </dx-scroll-view>
</div>
		`,
  }),
} satisfies Meta<DxScrollViewComponent | MeScrollViewDirective>;

type Story = StoryObj<DxScrollViewComponent | MeScrollViewDirective>;

export const Default: Story = {};

export const ScrollDirectionHorizontal: Story = {
  args: {
    direction: 'horizontal',
  },
};

export const ScrollDirectionVertical: Story = {
  args: {
    direction: 'vertical',
  },
};

export const ScrollDirectionBoth: Story = {
  args: {
    direction: 'both',
  },
};

export const HideScrollbar: Story = {
  args: {
    showScrollbar: 'never',
  },
};

export const ShowScrollbarOnHover: Story = {
  args: {
    showScrollbar: 'onHover',
  },
};

export const ShowScrollbarOnScroll: Story = {
  args: {
    showScrollbar: 'onScroll',
  },
};

export const ShowScrollbarAlways: Story = {
  args: {
    showScrollbar: 'always',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithNativeScrollBar: Story = {
  args: {
    useNative: true,
  },
};

export const WithoutNativeScrollBar: Story = {
  args: {
    useNative: false,
  },
};

export const WithBounceEffect: Story = {
  args: {
    bounceEnabled: true,
  },
};
