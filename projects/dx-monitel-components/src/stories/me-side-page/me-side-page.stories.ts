import { Component, Input, ViewChild } from '@angular/core';
import { MeIconsModule } from '@monitel/me-icons-registry';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
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
  MeSidepageComponent,
} from '../../public-api';

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

   <main class='main-content'>
     <dx-button
      meButton
      text="Открыть настройки"
      stylingMode="contained"
      (onClick)="toggleSidePage()"

      ></dx-button>
      <div class="big-content">
        Какой-то контент на странице
      </div>
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
  @ViewChild('meSidePage', { static: false }) meSidePage!: MeSidepageComponent;

  @Input() hideOnOutsideClick: boolean = false;
  @Input() position: 'left' | 'right' = 'right';
  @Input() width: string = '450px';
  @Input() shading: boolean = true;
  @Input() zIndex: string = '1505';
  @Input() zIndexOverlay: string = '1504';

  isSidePageOpen: boolean = false;

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
  component: MeSidePageDemoComponent,
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
      imports: [MeSidepageComponent, MeIconsModule, DxMenuModule],
    }),
  ],
  argTypes: {
    position: {
      control: 'inline-radio',
      options: ['left', 'right'] as const,
      description: 'Определяет сторону с которой выезжает side page.',
      table: {
        type: { summary: '"left" | "right"' },
        defaultValue: { summary: 'right' },
      },
    },
    width: {
      control: 'text',
      description: 'Определяет ширину side page.',
    },
    shading: {
      control: 'boolean',
      description: 'Затеняет фон, когда компонент активен',
    },
    hideOnOutsideClick: {
      control: 'boolean',
      description: 'Скрывает side page при клике вне компонента.',
    },
  },
} as Meta<MeSidePageDemoComponent>;

type Story = StoryObj<MeSidePageDemoComponent>;

export const Default: Story = {
  args: {
    position: 'right',
    width: '450px',
    shading: true,
    hideOnOutsideClick: false,
    zIndex: '1501',
    zIndexOverlay: '1500',
  },
};
