import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import {
  DxButtonComponent,
  DxPopupModule,
  DxScrollViewComponent,
  DxTemplateModule,
} from 'devextreme-angular';
import { MeButtonDirective, MePopupDirective } from '../../public-api';

export default {
  title: 'Components/mePopup',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [MePopupDirective],
      imports: [DxPopupModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'Меняет размер компонента' },
        defaultValue: { summary: 'medium' },
      },
    },
    dragEnabled: {
      table: {
        disable: true,
      },
    },
    animation: {
      table: {
        disable: true,
      },
    },
    focusStateEnabled: {
      table: {
        disable: true,
      },
    },
    position: {
      table: {
        disable: true,
      },
    },
    container: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    title: '',
    dragEnabled: false,
    animation: {},
    focusStateEnabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<div id="myWrapper" style="min-height: 350px; position: relative;"><dx-popup mePopup ${argsToTemplate(
      args
    )}></dx-popup></div>`,
  }),
} as Meta<DxPopupModule | MePopupDirective>;

type Story = StoryObj<DxPopupModule | MePopupDirective>;

export const Default: Story = {
  args: {
    visible: true,
    size: 'medium',
    position: {
      my: 'center',
      at: 'center',
      of: '#myWrapper',
      // boundary: '',
      // collision: 'fit',
    },
    container: '#myWrapper',
  },
};

const words =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim, quos qui temporibus repellat architecto, ratione deleniti culpa adipisci beatae perferendis illo eum minima modi libero. Deleniti harum cum accusantium similique obcaecati quae, maxime dignissimos iusto repellat qui temporibus? Culpa quod eius officia pariatur soluta, deleniti tempore atque repellendus, non, eveniet ex repudiandae rerum distinctio autem eligendi consectetur quasi quia impedit ipsum inventore alias! Unde commodi ipsa, excepturi quibusdam nisi, quia vero nemo repudiandae blanditiis repellendus minus porro quasi dolores reiciendis placeat? Itaque commodi enim consectetur, recusandae blanditiis incidunt illum dolor quaerat, eum architecto possimus obcaecati omnis, nulla dignissimos corrupti.';
export const Scroll: Story = {
  args: {
    visible: true,
    size: 'medium',
    position: {
      my: 'center',
      at: 'center',
      of: '#myWrapperScroll',
      // boundary: '',
      // collision: 'fit',
    },
    title: 'Заголовок',
    container: '#myWrapperScroll',
  },
  decorators: [
    moduleMetadata({
      declarations: [MePopupDirective, DxScrollViewComponent],
      imports: [DxPopupModule, DxTemplateModule],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
    <div id="myWrapperScroll" style="height: 300px; position: relative;">
      <dx-popup mePopup height='200px' ${argsToTemplate(args)}>
        <div *dxTemplate="let data of 'content'">
          <dx-scroll-view width="100%" height="100%">
          ${words}
          </dx-scroll-view>
        </div>
      </dx-popup>
    </div>`,
  }),
};

export const Toolbar: Story = {
  args: {
    visible: true,
    size: 'medium',
    position: {
      my: 'center',
      at: 'center',
      of: '#myWrapperTollbar',
      // boundary: '',
      // collision: 'fit',
    },
    title: 'Заголовок',
    container: '#myWrapperTollbar',
  },
  decorators: [
    moduleMetadata({
      declarations: [
        MePopupDirective,
        DxScrollViewComponent,
        DxButtonComponent,
        MeButtonDirective,
      ],
      imports: [DxPopupModule, DxTemplateModule],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
    <div id="myWrapperTollbar" style="height: 300px; position: relative;">
      <dx-popup mePopup height='200px' ${argsToTemplate(args)}>
        <dxi-toolbar-item template="overflowButton" toolbar="top" location="after">
          </dxi-toolbar-item>
        <dxi-toolbar-item template="confirmButton" toolbar="bottom" location="after">
          </dxi-toolbar-item>
        <dxi-toolbar-item template="cancelButton" toolbar="bottom" location="after">
          </dxi-toolbar-item>
        <dxi-toolbar-item template="addButton" toolbar="bottom" location="before">
          </dxi-toolbar-item>

        <div *dxTemplate="let data of 'content'">
          <dx-scroll-view width="100%" height="100%">
            ${words}
          </dx-scroll-view>
        </div>
        
        <div *dxTemplate="let data of 'overflowButton'">
        <dx-button meButton iconOnly="overflow" stylingMode="text" iconSize="12px">
          </dx-button>
        </div>
        <div *dxTemplate="let data of 'confirmButton'">
          <dx-button meButton text="Принять" type="default"></dx-button>
        </div>
        <div *dxTemplate="let data of 'cancelButton'">
          <dx-button meButton text="Отмена"></dx-button>
        </div>
        <div *dxTemplate="let data of 'addButton'">
          <dx-button meButton text="Добавить"></dx-button>
        </div>
      </dx-popup>
    </div>`,
  }),
};

export const Size: Story = {
  args: {
    visible: true,
    size: 'large',
    position: {
      my: 'center',
      at: 'center',
      of: '#myWrapperSize',
      // boundary: '',
      // collision: 'fit',
    },
    title: 'Заголовок',
    container: '#myWrapperSize',
  },
  decorators: [
    moduleMetadata({
      declarations: [
        MePopupDirective,
        DxScrollViewComponent,
        DxButtonComponent,
        MeButtonDirective,
      ],
      imports: [DxPopupModule, DxTemplateModule],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
    <div id="myWrapperSize" style="height: 350px; position: relative;">
      <dx-popup mePopup height='200px' ${argsToTemplate(args)}>
        <dxi-toolbar-item template="overflowButton" toolbar="top" location="after">
          </dxi-toolbar-item>
        <dxi-toolbar-item template="confirmButton" toolbar="bottom" location="after">
          </dxi-toolbar-item>
        <dxi-toolbar-item template="cancelButton" toolbar="bottom" location="after">
          </dxi-toolbar-item>
        <dxi-toolbar-item template="addButton" toolbar="bottom" location="before">
          </dxi-toolbar-item>

        <div *dxTemplate="let data of 'content'">
          <dx-scroll-view width="100%" height="100%">
            ${words}
          </dx-scroll-view>
        </div>
        
        <div *dxTemplate="let data of 'overflowButton'">
          <dx-button meButton iconOnly="overflow" stylingMode="text" iconSize="18px" size="large">
            </dx-button>
        </div>
        <div *dxTemplate="let data of 'confirmButton'">
          <dx-button meButton text="Принять" type="default" size="large"></dx-button>
        </div>
        <div *dxTemplate="let data of 'cancelButton'">
          <dx-button meButton text="Отмена" size="large"></dx-button>
        </div>
        <div *dxTemplate="let data of 'addButton'">
          <dx-button meButton text="Добавить" size="large"></dx-button>
        </div>
      </dx-popup>
    </div>`,
  }),
};
