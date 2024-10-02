import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import {
  DxButtonComponent,
  DxButtonModule,
  DxPopupModule,
  DxScrollViewComponent,
  DxTemplateModule,
} from 'devextreme-angular';
import { MePopupComponent } from 'src/app/components/me-popup/me-popup.component';
import {
  MeButtonDirective,
  MeIconDirective,
  MePopupDirective,
} from '../../public-api';

export default {
  title: 'Components/Popup',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [MePopupDirective, MePopupComponent],
      imports: [DxPopupModule],
    }),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/S2KXryEyWLA9cplaicYrVn/Components?node-id=568-31799&t=AcVCK3Dt91yWxh5R-0',
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['medium', 'large'],
      description:
        'В дизайн-системе размерностям компонента соответствую размерностям включенным в него элементам и прочим параметрам, таким как отступы. Так для размера окна medium используются кнопки меньшего размера, чем для размера large.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    visible: {
      control: 'boolean',
      description: 'Видимость окна.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    title: {
      control: 'text',
      description: 'Текст заголовка.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    minHeight: {
      control: 'text',
      description: 'Минимальная высота окна.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '280px' },
      },
    },
    maxHeight: {
      control: 'text',
      description: 'Максимальная высота окна.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '80vh' },
      },
    },
    minWidth: {
      control: 'text',
      description: 'Минимальная ширина окна.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '360px' },
      },
    },
    maxWidth: {
      control: 'text',
      description: 'Максимальная ширина окна.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    height: {
      control: 'text',
      description: 'Высота окна.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    width: {
      control: 'text',
      description: 'Ширина окна.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '360px' },
      },
    },
    dragEnabled: {
      control: 'boolean',
      description: 'Включить/отключить перетаскивание окна.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    resizeEnabled: {
      control: 'boolean',
      description: 'Включить/отключить изменение размеров окна.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Включить/отключить компонент.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    fullScreen: {
      control: 'boolean',
      description: 'Включить/отключить окно на весь экран.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    hideOnOutsideClick: {
      control: 'boolean',
      description: 'Включить/отключить скрытие окна по клику вне него.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    shading: {
      control: 'boolean',
      description:
        'Включить/отключить затемнение экрана под всплывающим окном.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Показать/скрыть кнопку для закрытия всплывающего окна.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    showTitle: {
      control: 'boolean',
      description: 'Показать/скрыть заголовок.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    position: {
      control: 'object',
      description:
        'Управляет положением всплывающего окна и может принимать объект с настройками или строковые значения.',
      table: {
        defaultValue: {
          summary: `{
            my: 'center',
            at: 'center',
          }`,
        },
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
    container: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    title: '',
    fullScreen: false,
    size: 'medium',
    visible: true,
    dragEnabled: true,
    resizeEnabled: true,
    shading: true,
    animation: {},
    focusStateEnabled: false,
    minHeight: '280px',
    maxHeight: '80vh',
    minWidth: '225px',
    maxWidth: '',
    height: '280px',
    width: '360px',
    disabled: false,
    hideOnOutsideClick: false,
    showCloseButton: true,
    showTitle: true,
  },
  render: (args) => ({
    props: args,
    template: `<div id="myWrapper" style="min-height: 350px; position: relative; box-sizing: border-box;"><dx-popup mePopup ${argsToTemplate(
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
    },
    container: '#myWrapper',
  },
};

export const Title: Story = {
  args: {
    visible: true,
    size: 'medium',
    position: {
      my: 'center',
      at: 'center',
      of: '#myWrapperTitle',
    },
    container: '#myWrapperTitle',
    title: 'Заголовок',
  },
  render: (args) => ({
    props: args,
    template: `<div id="myWrapperTitle" style="min-height: 350px; position: relative;"><dx-popup mePopup ${argsToTemplate(
      args
    )}></dx-popup></div>`,
  }),
};

export const IconDescription: Story = {
  args: {
    visible: true,
    size: 'medium',
    position: {
      my: 'center',
      at: 'center',
      of: '#myWrapperIcon',
    },
    container: '#myWrapperIcon',
    title: 'Заголовок',
    titleTemplate: 'title',
  },
  decorators: [
    moduleMetadata({
      declarations: [
        MePopupDirective,
        MeButtonDirective,
        MeIconDirective,
        MePopupComponent,
      ],
      imports: [DxPopupModule, DxTemplateModule, DxButtonModule],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<div id="myWrapperIcon" style="min-height: 350px; position: relative;">
    <dx-popup mePopup ${argsToTemplate(args)}>
     <div *dxTemplate="let data of 'title'">
        <div class="me-popup-header">
          <div meIcon icon="public" size="24"></div>
          <div class="me-sidepage-title">
            <span class="me-title-header1">Заголовок</span>
            <span class="me-text-body2">Описание</span>
          </div>
            <dx-button meButton size="large" iconOnly="overflow" stylingMode="text"></dx-button>
            <dx-button
              meButton
              stylingMode="text"
              iconOnly="close"
            ></dx-button>
        </div>
      </div>
    </dx-popup></div>`,
  }),
};

export const Button: Story = {
  args: {
    visible: true,
    size: 'medium',
    position: {
      my: 'center',
      at: 'center',
      of: '#myWrapperButton',
    },
    container: '#myWrapperButton',
    title: 'Заголовок',
  },
  decorators: [
    moduleMetadata({
      declarations: [MePopupDirective, MeButtonDirective, MePopupComponent],
      imports: [DxPopupModule, DxTemplateModule, DxButtonModule],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<div id="myWrapperButton" style="min-height: 350px; position: relative;">
    <dx-popup mePopup ${argsToTemplate(args)}>
     <dxi-toolbar-item template="addButton" toolbar="bottom" location="center"> </dxi-toolbar-item>
      <div *dxTemplate="let data of 'addButton'">
        <dx-button meButton text="Добавить"></dx-button>
      </div>
    </dx-popup></div>`,
  }),
};

export const Buttons: Story = {
  args: {
    visible: true,
    size: 'medium',
    position: {
      my: 'center',
      at: 'center',
      of: '#myWrapperButtons',
    },
    container: '#myWrapperButtons',
    title: 'Заголовок',
  },
  decorators: [
    moduleMetadata({
      declarations: [MePopupDirective, MeButtonDirective, MePopupComponent],
      imports: [DxPopupModule, DxTemplateModule, DxButtonModule],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<div id="myWrapperButtons" style="min-height: 350px; position: relative;">
    <dx-popup mePopup ${argsToTemplate(args)}>
     <dxi-toolbar-item template="addButton" toolbar="bottom" location="after"></dxi-toolbar-item>
     <dxi-toolbar-item template="cancelButton" toolbar="bottom" location="after"></dxi-toolbar-item>
      <div *dxTemplate="let data of 'addButton'">
        <dx-button meButton type="default" text="Добавить"></dx-button>
      </div>
      <div *dxTemplate="let data of 'cancelButton'">
          <dx-button meButton text="Отмена"></dx-button>
        </div>
    </dx-popup></div>`,
  }),
};

const lorem25 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id ad quasi? Suscipit natus corrupti enim impedit? Cum aliquid, qui eligendi eveniet sunt molestias aperiam?';
export const Dialog: Story = {
  args: {
    visible: true,
    size: 'medium',
    showTitle: false,
    position: {
      my: 'center',
      at: 'center',
      of: '#myWrapperDialog',
    },
    container: '#myWrapperDialog',
    title: 'Заголовок',
  },
  decorators: [
    moduleMetadata({
      declarations: [MePopupDirective, MeButtonDirective, MePopupComponent],
      imports: [DxPopupModule, DxTemplateModule, DxButtonModule],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<div id="myWrapperDialog" style="min-height: 350px; position: relative;">
      <dx-popup mePopup titleTemplate="title"
       ${argsToTemplate(args)}>
      <dxi-toolbar-item template="confirmButton" toolbar="bottom"> </dxi-toolbar-item>
      <dxi-toolbar-item template="cancelButton" toolbar="bottom"> </dxi-toolbar-item>
      <div *dxTemplate="let data of 'content'">
        <dx-scroll-view width="100%" height="100%">
          <div class="me-flex-column" style="align-items: center;">
            <h3 class="me-title-header1" style="margin: 0;">Заголовок</h3>
            <div class="me-text-body2">${lorem25}}</div>
          </div>
        </dx-scroll-view>
      </div>
      <div *dxTemplate="let data of 'confirmButton'">
        <dx-button
          meButton
          size="medium"
          text="Принять"
          type="default"
          (onClick)="hidePopup(12)"
        ></dx-button>
      </div>
      <div *dxTemplate="let data of 'cancelButton'">
        <dx-button meButton size="medium" text="Отклонить" (onClick)="hidePopup(12)"></dx-button>
      </div>
    </dx-popup></div>`,
  }),
};

export const DialogLarge: Story = {
  args: {
    visible: true,
    size: 'large',
    showTitle: false,
    position: {
      my: 'center',
      at: 'center',
      of: '#myWrapperDialogLarge',
    },
    container: '#myWrapperDialogLarge',
    title: 'Заголовок',
  },
  decorators: [
    moduleMetadata({
      declarations: [MePopupDirective, MeButtonDirective, MePopupComponent],
      imports: [DxPopupModule, DxTemplateModule, DxButtonModule],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<div id="myWrapperDialogLarge" style="min-height: 350px; position: relative;">
      <dx-popup mePopup titleTemplate="title"
       ${argsToTemplate(args)}>
      <dxi-toolbar-item template="confirmButton" toolbar="bottom"> </dxi-toolbar-item>
      <dxi-toolbar-item template="cancelButton" toolbar="bottom"> </dxi-toolbar-item>
      <div *dxTemplate="let data of 'content'">
        <dx-scroll-view width="100%" height="100%">
          <div class="me-flex-column" style="align-items: center;">
            <h3 class="me-title-header1" style="margin: 0;">Заголовок</h3>
            <div class="me-text-body2">${lorem25}}</div>
          </div>
        </dx-scroll-view>
      </div>
      <div *dxTemplate="let data of 'confirmButton'">
        <dx-button
          meButton
          size="large"
          text="Принять"
          type="default"
        ></dx-button>
      </div>
      <div *dxTemplate="let data of 'cancelButton'">
        <dx-button meButton size="large" text="Отклонить"></dx-button>
      </div>
    </dx-popup></div>`,
  }),
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
    <div id="myWrapperScroll" style="height: 350px; position: relative;">
      <dx-popup mePopup height='200px' width='360px' ${argsToTemplate(args)}>
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
    <div id="myWrapperTollbar" style="height: 350px; position: relative;">
      <dx-popup mePopup height='200px' width='360px' ${argsToTemplate(args)}>
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
    <div id="myWrapperSize" style="min-height: 350px; position: relative;">
      <dx-popup mePopup height='200px' width='360px' ${argsToTemplate(args)}>
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

export const SizeMedium: Story = {
  args: {
    visible: true,
    size: 'medium',
    position: {
      my: 'center',
      at: 'center',
      of: '#myWrapperSizemedium',
    },
    title: 'Заголовок',
    container: '#myWrapperSizemedium',
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
    <div id="myWrapperSizemedium" style="min-height: 350px; position: relative;">
      <dx-popup mePopup height='200px' width='360px' ${argsToTemplate(args)}>
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
          <dx-button meButton iconOnly="overflow" stylingMode="text" iconSize="12px" size="medium">
            </dx-button>
        </div>
        <div *dxTemplate="let data of 'confirmButton'">
          <dx-button meButton text="Принять" type="default" size="medium"></dx-button>
        </div>
        <div *dxTemplate="let data of 'cancelButton'">
          <dx-button meButton text="Отмена" size="medium"></dx-button>
        </div>
        <div *dxTemplate="let data of 'addButton'">
          <dx-button meButton text="Добавить" size="medium"></dx-button>
        </div>
      </dx-popup>
    </div>`,
  }),
};
