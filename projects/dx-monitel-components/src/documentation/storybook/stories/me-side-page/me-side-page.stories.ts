import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MeIconsModule } from '@monitel/me-icons-registry';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import {
  DxButtonComponent,
  DxCheckBoxComponent,
  DxMenuModule,
} from 'devextreme-angular';
import {
  MeButtonDirective,
  MeCheckBoxDirective,
  MeLabelDirective,
  MeMenuDirective,
  MePosition,
  MeSidePageComponent,
} from '../../../../public-api';

@Component({
  selector: 'me-side-page-demo',
  template: `
    <me-sidepage
      #meSidePage
      [(isSidePageOpen)]="isSidePageOpen"
      [position]="position"
      [width]="width"
      [hideOnOutsideClick]="hideOnOutsideClick"
      [shading]="shading"
      [zIndex]="zIndex"
      [zIndexOverlay]="zIndexOverlay"
      [minWidth]="minWidth"
      [maxWidth]="maxWidth"
      (isSidePageOpenChange)="isSidePageOpenChange.emit($event)"
      (widthChange)="widthChange.emit($event)"
    >
      <div sidepage-header class="me-sidepage-header">
        <me-icon name="public_x24"></me-icon>
        <div class="me-sidepage-title">
          <span class="me-title-header1">Настройки</span>
          <span class="me-text-body2">Выберите параметры отображения</span>
        </div>
        <dx-button
          meButton
          stylingMode="text"
          iconOnly="close"
          (onClick)="toggleSidePage()"
        ></dx-button>
      </div>

      <div sidepage-content class="me-sidepage-content">
        <!-- Checkboxes Section -->
        <div class="settings-section">
          <h3 class="me-title-header2">Основные параметры</h3>
          <div class="checkbox-group">
            <label meLabel labelDirection="row" class="checkbox-item">
              <dx-check-box
                meCheckBox
                [(value)]="settings.showHeaders"
                text="Показывать заголовки"
                [size]="'medium'"
              ></dx-check-box>
            </label>
            <label meLabel labelDirection="row" class="checkbox-item">
              <dx-check-box
                meCheckBox
                [(value)]="settings.enableFilters"
                text="Включить фильтры"
                [size]="'medium'"
              ></dx-check-box>
            </label>
            <label meLabel labelDirection="row" class="checkbox-item">
              <dx-check-box
                meCheckBox
                [(value)]="settings.autoRefresh"
                text="Автоматическое обновление"
                [size]="'medium'"
              ></dx-check-box>
            </label>
          </div>
        </div>

        <!-- Vertical Menu Section -->
        <div class="settings-section">
          <h3 class="me-title-header2">Дополнительные настройки</h3>
          <div class="me-text-body2 settings-description">
            Выберите необходимые параметры из списка
          </div>
          <dx-menu
            meMenu
            [dataSource]="menuItems"
            [orientation]="'vertical'"
            [showFirstSubmenuMode]="{ name: 'onClick', delay: 0 }"
            [showSubmenuMode]="{ name: 'onClick', delay: 0 }"
            [adaptivityEnabled]="false"
            [size]="'medium'"
          ></dx-menu>
        </div>

        <!-- Description Section -->
        <div class="settings-section">
          <div class="me-text-description1">
            Все изменения сохраняются автоматически
          </div>
        </div>
      </div>

      <div sidepage-footer class="me-sidepage-footer">
        <dx-button
          meButton
          text="Сохранить"
          stylingMode="contained"
          type="default"
        ></dx-button>
        <dx-button
          meButton
          text="Отменить"
          stylingMode="contained"
          (onClick)="toggleSidePage()"
        ></dx-button>
      </div>
    </me-sidepage>

    <main class="main-content">
      <dx-button
        meButton
        text="Открыть настройки"
        stylingMode="contained"
        (onClick)="toggleSidePage()"
      ></dx-button>
      <div class="big-content">Какой-то контент на странице</div>
    </main>
  `,
  styles: [
    `
      .me-sidepage-content {
        padding: 24px;
      }
      .settings-section {
        margin-bottom: 32px;
      }
      .settings-description {
        margin: 8px 0 16px;
      }
      .checkbox-group {
        margin-top: 16px;
      }
      .checkbox-item {
        display: block;
        margin-bottom: 16px;
      }
      :host ::ng-deep .dx-menu-vertical .dx-menu-item-wrapper {
        width: 100%;
      }

      .main-content {
        height: calc(100dvh + 300px);

        display: flex;
        flex-direction: column;
        gap: 24px;

        .dx-widget.me-button {
          align-self: flex-start;
        }
      }
      .big-content {
        background-color: rgba(240, 244, 255);
        padding: 24px;
        flex-grow: 1;
        border-radius: 6px;
      }
    `,
  ],
})
class MeSidePageDemoComponent {
  @ViewChild('meSidePage', { static: false }) meSidePage!: MeSidePageComponent;

  @Input() hideOnOutsideClick: boolean = false;
  @Input() isSidePageOpen: boolean = false;
  @Input() position: MePosition = 'left';
  @Input() shading: boolean = true;
  @Input() zIndex: string = '1500';
  @Input() zIndexOverlay: string = '1499';
  @Input() width: string = '27vw';
  @Input() minWidth: string = '250px';
  @Input() maxWidth: string = '80vw';

  @Output() isSidePageOpenChange = new EventEmitter<boolean>();
  @Output() widthChange = new EventEmitter<string>();

  settings = {
    showHeaders: true,
    enableFilters: false,
    autoRefresh: true,
  };

  menuItems = [
    {
      text: 'Основные настройки',
      items: [
        { text: 'Профиль пользователя' },
        { text: 'Уведомления' },
        { text: 'Безопасность' },
      ],
    },
    {
      text: 'Внешний вид',
      items: [
        { text: 'Тема оформления' },
        { text: 'Шрифты' },
        { text: 'Цветовая схема' },
      ],
    },
    {
      text: 'Дополнительно',
      items: [
        { text: 'Резервное копирование' },
        { text: 'Производительность' },
        { text: 'Диагностика' },
      ],
    },
  ];

  toggleSidePage() {
    this.isSidePageOpen = !this.isSidePageOpen;
  }
}

export default {
  title: 'Components/SidePage',
  decorators: [
    moduleMetadata({
      declarations: [
        DxButtonComponent,
        MeButtonDirective,
        MeSidePageDemoComponent,
        DxCheckBoxComponent,
        MeCheckBoxDirective,
        MeLabelDirective,
        MeMenuDirective,
      ],
      imports: [MeSidePageComponent, MeIconsModule, DxMenuModule],
    }),
  ],
  argTypes: {
    position: {
      control: 'inline-radio',
      options: ['left', 'right'],
      description: 'Определяет сторону с которой выезжает side page.',
      table: {
        type: { summary: '"left" | "right"' },
        defaultValue: { summary: 'left' },
      },
    },
    isSidePageOpen: {
      control: 'boolean',
      description: 'Определяет, является ли side page активным.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideOnOutsideClick: {
      control: 'boolean',
      description:
        'Определяет, будет ли side page скрываться при клике вне компонента.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    shading: {
      control: 'boolean',
      description: 'Затеняет фон, когда компонент активен.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    width: {
      control: 'text',
      description: 'Определяет ширину side page.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '27vw' },
      },
    },
    minWidth: {
      control: 'text',
      description: 'Определяет минимальную ширину side page.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '250px' },
      },
    },
    maxWidth: {
      control: 'text',
      description: 'Определяет максимальную ширину side page.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '80vw' },
      },
    },
    zIndex: {
      control: 'text',
      description: 'Определяет z-index side page.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1500' },
      },
    },
    zIndexOverlay: {
      control: 'text',
      description: 'Определяет z-index overlay.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1499' },
      },
    },
    isSidePageOpenChange: {
      action: 'isSidePageOpenChange',
      description: 'Вызывается при изменении состояния side page.',
      table: {
        type: { summary: '(isSidePageOpen: boolean) => void' },
      },
    },
    widthChange: {
      action: 'widthChange',
      description: 'Вызывается при изменении ширины side page.',
      table: {
        type: { summary: '(width: string) => void' },
      },
    },
  },
  args: {
    position: 'left',
    shading: true,
    hideOnOutsideClick: false,
    zIndex: '1500',
    zIndexOverlay: '1499',
    isSidePageOpen: false,
    width: '27vw',
    minWidth: '250px',
    maxWidth: '80vw',
  },
  render: (args) => ({
    props: args,
    template: `<me-side-page-demo ${argsToTemplate(args)}></me-side-page-demo>`,
  }),
} satisfies Meta<MeSidePageComponent>;

type Story = StoryObj<MeSidePageComponent>;

export const Default: Story = {
  args: {
    shading: false,
  },
};

export const PositionLeft: Story = {
  args: {
    position: 'left',
  },
};

export const PositionLeftWitoutShading: Story = {
  args: {
    position: 'left',
    shading: false,
  },
};

export const PositionRight: Story = {
  args: {
    position: 'right',
  },
};

export const PositionRightWithoutShading: Story = {
  args: {
    position: 'right',
    shading: false,
  },
};

export const WithoutShadingAndFixedScroll: Story = {
  args: {
    shading: false,
  },
};
