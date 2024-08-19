import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxScrollViewModule } from 'devextreme-angular';
import { MeScrollViewDirective } from '../../lib/directives/me-scroll-view/scroll-view.directive';

export default {
  title: 'Components/ScrollView(RC)',
  decorators: [
    moduleMetadata({
      declarations: [MeScrollViewDirective],
      imports: [DxScrollViewModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер скролла',
    },
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    direction: {
      control: 'select',
      options: ['both', 'horizontal', 'vertical'],
      description: 'Направление скролла',
    },
    showScrollbar: {
      control: 'select',
      options: ['onHover', 'onScroll', 'always', 'never'],
      description: 'Условия отображения скролла',
    },
    disabled: {
      control: 'boolean',
    },
    bounceEnabled: {
      control: 'boolean',
      description: 'Эффект отскока.',
    },
  },
  args: {
    size: 'small',
    height: '150',
    width: '250',
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
	[size]="size"
	[height]="height"
	[width]="width"
	[direction]="direction"
	[showScrollbar]="showScrollbar"
	[disabled]="disabled"
	[bounceEnabled]="bounceEnabled"
	>
		<div>Lorem ipsum,dolorsitametconsecteturadipisicingelit. Explicabo aperiam quo at consequuntur error doloremque voluptate excepturi ad nulla sint pariatur omnis, adipisci perspiciatis quam architecto in, quibusdam facere ab?Lorem ipsum,dolorsitametconsecteturadipisicingelit. Explicabo aperiam quo at consequuntur error doloremque voluptate excepturi ad nulla sint pariatur omnis, adipisci perspiciatis quam architecto in, quibusdam facere ab?Lorem ipsum,dolorsitametconsecteturadipisicingelit. Explicabo aperiam quo at consequuntur error doloremque voluptate excepturi ad nulla sint pariatur omnis, adipisci perspiciatis quam architecto in, quibusdam facere ab?Lorem ipsum,dolorsitametconsecteturadipisicingelit. Explicabo aperiam quo at consequuntur error doloremque voluptate excepturi ad nulla sint pariatur omnis, adipisci perspiciatis quam architecto in, quibusdam facere ab?Lorem ipsum,dolorsitametconsecteturadipisicingelit. Explicabo aperiam quo at consequuntur error doloremque voluptate excepturi ad nulla sint pariatur omnis, adipisci perspiciatis quam architecto in, quibusdam facere ab?
		</div>
	</dx-scroll-view>
</div>
		`,
  }),
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {},
};
