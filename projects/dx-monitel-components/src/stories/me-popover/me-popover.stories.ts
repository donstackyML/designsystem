import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxPopoverModule } from 'devextreme-angular/ui/popover';
import { MeButtonDirective, MePopoverDirective } from '../../public-api';
import { Component } from '@angular/core';
import { DxButtonComponent, DxButtonModule } from 'devextreme-angular';

let args = {
  size: 'medium',
  showEvent: 'mouseenter',
  hideEvent: 'mouseleave',
  position: 'bottom',
  width: 300,
  showTitle: false,
  title: '',
  shading: false,
  shadingColor: '',
  content: 'Это содержимое поповера по умолчанию.',
  animation: {
    show: { type: 'fade', duration: 0 },
    hide: { type: 'fade', duration: 0 },
  },
};

@Component({
  selector: 'me-popover-demo',
  template: `
    <div style="padding: 20px;">
      <a id="popoverTarget">Наведите для показа поповера</a>
      <dx-popover mePopover target="#popoverTarget" ${argsToTemplate(args)}>
        <div *dxTemplate="let data of 'content'">{{ content }}</div>

        <dxi-toolbar-item
          widget="dxButton"
          toolbar="bottom"
          location="before"
          [options]="acceptButton"
        >
        </dxi-toolbar-item>
      </dx-popover>
    </div>
  `,
})
class MePopoverComponent {
  acceptButton = {
    widget: 'dxButton',
    toolbar: 'bottom',
    location: 'before',
    option: {
      icon: '',
      stylingMode: 'filled',
      text: 'Принять',
      onClick: () => {
        console.log('Принять');
      },
    },
  };
}

const meta: Meta = {
  title: 'Components/Popover(RC)',
  component: MePopoverDirective,
  decorators: [
    moduleMetadata({
      declarations: [MePopoverDirective, MePopoverComponent],
      imports: [DxPopoverModule, DxButtonModule],
    }),
  ],
  argTypes: {
    animation: {
      control: 'object',
      description: 'Настройки анимации появления и исчезновения поповера.',
    },
    enableBodyScroll: {
      control: 'boolean',
      description: 'Разрешить скролл страницы внутри поповера.',
    },
    height: {
      control: 'text',
      description: 'Высота поповера.',
    },
    hideEvent: {
      control: 'select',
      options: ['mouseleave', 'click', 'blur'],
      description:
        'Задает свойства скрытия поповера. Игнорируется, если свойство затенения установлено в значение `true`. Селектор: `dxo-hide-event`.',
    },
    hideOnOutsideClick: {
      control: 'boolean',
      description:
        'Указывает, следует ли скрывать компонент пользовательского интерфейса, если пользователь щелкает за пределами всплывающего окна или за пределами целевого элемента.',
    },
    maxHeight: {
      control: 'number',
      description: 'Максимальная высота поповера в пикселях.',
    },
    maxWidth: {
      control: 'number',
      description: 'Максимальная ширина поповера в пикселях.',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция поповера относительно целевого элемента.',
    },
    shading: {
      control: 'boolean',
      description: 'Включить затенение фона при показе поповера.',
    },
    shadingColor: {
      control: 'color',
      description: 'Цвет затенения фона.',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Показывать ли кнопку закрытия поповера.',
    },
    showEvent: {
      control: 'select',
      options: ['mouseenter', 'click', 'focus'],
      description: 'Событие, при котором поповер будет показываться.',
    },
    showTitle: {
      control: 'boolean',
      description: 'Показывать ли заголовок поповера.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер поповера.',
    },
    target: {
      control: 'text',
      description:
        'Указывает элемент, напротив которого будет располагаться всплывающее окно.',
    },
    title: {
      control: 'text',
      description: 'Текст заголовка поповера.',
    },
    titleTemplate: {
      control: 'text',
      description: 'Шаблон заголовка поповера.',
    },
    toolbarItems: {
      control: 'object',
      description:
        'Панель инструментов поповера. Селектор: `dxo-toolbar-items`.',
    },
    width: {
      control: 'number',
      description: 'Ширина поповера в пикселях.',
    },
  },
  // render: (args) => ({
  //   props: args,
  //   template: `
  //     <div style="padding: 20px;">
  //       <a id="popoverTarget">Наведите для показа поповера</a>
  //       <dx-popover
  //         mePopover
  //         target="#popoverTarget"
  //         ${argsToTemplate(args)}
  //       >
  //         <div *dxTemplate="let data of 'content'">
  //           {{ content }}
  //         </div>
  //       </dx-popover>
  //     </div>
  //   `,
  // }),
};

export default meta;

export const Default: StoryObj = {
  args: {
    size: 'medium',
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    position: 'bottom',
    width: 300,
    showTitle: false,
    title: '',
    shading: false,
    shadingColor: '',
    content: 'Это содержимое поповера по умолчанию.',
    animation: {
      show: { type: 'fade', duration: 0 },
      hide: { type: 'fade', duration: 0 },
    },
  },
};

// export const WithTitleAndOverlay: StoryObj = {
//   args: {
//     ...Default.args,
//     position: 'bottom',
//     showCloseButton: true,
//     showEvent: 'click',
//     hideEvent: 'click',
//     shading: true,
//     showTitle: true,
//     title: 'Заголовок поповера',
//     maxWidth: 400,
//     content: 'Это поповер с заголовком и ограничением максимальной ширины.',
//   },
// };

// export const WithContent: StoryObj = {
//   args: {
//     ...Default.args,
//     showEvent: 'click',
//     hideEvent: 'click',
//     shading: true,
//     showTitle: true,
//     title: 'Заголовок поповера',
//     showCloseButton: true,
//     shadingColor: 'rgba(0, 0, 0, 0.5)',
//     content: 'Это поповер с затенением фона.',
//     options: {
//       widget: 'dxButton',
//       toolbar: 'bottom',
//       location: 'before',
//     },
//   },
//   render: (args: any) => ({
//     props: args,
//     template: `
//       <div style="padding: 20px;">
//         <a id="popoverTarget">Наведите для показа поповера</a>
//         <dx-popover
//           mePopover
//           target="#popoverTarget"
//           ${argsToTemplate(args)}
//         >
//           <div *dxTemplate="let data of 'content'">{{ content }}</div>

//           <dxi-toolbar-item
//           widget="dxButton"
// 					toolbar="bottom"
//           location="before"
// 					>
//           </dxi-toolbar-item>

//         </dx-popover>
//       </div>
//     `,
//   }),
// };

// export default {
//   title: 'Components/Popover',
//   component: MePopoverComponent,
//   decorators: [
//     moduleMetadata({
//       declarations: [DxButtonComponent, MeButtonDirective, MePopoverComponent],
//       imports: [],
//     }),
//   ],
//   argTypes: {
//     animation: {
//       control: 'object',
//       description: 'Настройки анимации появления и исчезновения поповера.',
//     },
//     enableBodyScroll: {
//       control: 'boolean',
//       description: 'Разрешить скролл страницы внутри поповера.',
//     },
//     height: {
//       control: 'text',
//       description: 'Высота поповера.',
//     },
//     hideEvent: {
//       control: 'select',
//       options: ['mouseleave', 'click', 'blur'],
//       description:
//         'Задает свойства скрытия поповера. Игнорируется, если свойство затенения установлено в значение `true`. Селектор: `dxo-hide-event`.',
//     },
//     hideOnOutsideClick: {
//       control: 'boolean',
//       description:
//         'Указывает, следует ли скрывать компонент пользовательского интерфейса, если пользователь щелкает за пределами всплывающего окна или за пределами целевого элемента.',
//     },
//     maxHeight: {
//       control: 'number',
//       description: 'Максимальная высота поповера в пикселях.',
//     },
//     maxWidth: {
//       control: 'number',
//       description: 'Максимальная ширина поповера в пикселях.',
//     },
//     position: {
//       control: 'select',
//       options: ['top', 'bottom', 'left', 'right'],
//       description: 'Позиция поповера относительно целевого элемента.',
//     },
//     shading: {
//       control: 'boolean',
//       description: 'Включить затенение фона при показе поповера.',
//     },
//     shadingColor: {
//       control: 'color',
//       description: 'Цвет затенения фона.',
//     },
//     showCloseButton: {
//       control: 'boolean',
//       description: 'Показывать ли кнопку закрытия поповера.',
//     },
//     showEvent: {
//       control: 'select',
//       options: ['mouseenter', 'click', 'focus'],
//       description: 'Событие, при котором поповер будет показываться.',
//     },
//     showTitle: {
//       control: 'boolean',
//       description: 'Показывать ли заголовок поповера.',
//     },
//     size: {
//       control: 'select',
//       options: ['small', 'medium', 'large'],
//       description: 'Размер поповера.',
//     },
//     target: {
//       control: 'text',
//       description:
//         'Указывает элемент, напротив которого будет располагаться всплывающее окно.',
//     },
//     title: {
//       control: 'text',
//       description: 'Текст заголовка поповера.',
//     },
//     titleTemplate: {
//       control: 'text',
//       description: 'Шаблон заголовка поповера.',
//     },
//     toolbarItems: {
//       control: 'object',
//       description:
//         'Панель инструментов поповера. Селектор: `dxo-toolbar-items`.',
//     },
//     width: {
//       control: 'number',
//       description: 'Ширина поповера в пикселях.',
//     },
//   },
// } as Meta<MePopoverComponent>;

// export const Demo: StoryObj = {
//   args: {
//     size: 'medium',
//     showEvent: 'mouseenter',
//     hideEvent: 'mouseleave',
//     position: 'bottom',
//     width: 300,
//     showTitle: false,
//     title: '',
//     shading: false,
//     shadingColor: '',
//     content: 'Это содержимое поповера по умолчанию.',
//     animation: {
//       show: { type: 'fade', duration: 0 },
//       hide: { type: 'fade', duration: 0 },
//     },
//   },
// };
