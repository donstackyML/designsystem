import { Component, Input, ViewChild } from '@angular/core';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DxButtonComponent } from 'devextreme-angular';
import { MeButtonDirective, MeSidepageComponent } from '../../public-api';

@Component({
  selector: 'selesel',
  template: `
    <me-sidepage
      #meSidePage
      [isSidePageOpen]="isSidePageOpen"
      [position]="position"
      [width]="width"
      [hideOnOutsideClick]="hideOnOutsideClick"
      [shading]="shading"
      [zIndex]="zIndex"
      [zIndexOverlay]="zIndexOverlay"
    >
      <div sidepage-header class="me-sidepage-header">
        <div meIcon icon="public" size="24"></div>
        <div class="me-sidepage-title">
          <span class="me-title-header1">Заголовок</span>
          <span class="me-text-body2">Описание</span>
        </div>
        <dx-button
          meButton
          stylingMode="text"
          iconOnly="close"
          (onClick)="showSidePage()"
        ></dx-button>
      </div>
      <div sidepage-content class="me-text-body1">{{ lorem500 }}</div>
      <div sidepage-footer class="me-sidepage-footer">
        <dx-button
          meButton
          text="Добавить"
          stylingMode="contained"
          [style.margin-right]="'auto'"
        ></dx-button>
        <dx-button
          meButton
          text="Прнинять"
          stylingMode="contained"
          type="default"
        ></dx-button>
        <dx-button
          meButton
          text="Отменить"
          stylingMode="contained"
          (onClick)="onClickHandler()"
        ></dx-button></div
    ></me-sidepage>

    <dx-button
      meButton
      text="Открыть"
      stylingMode="contained"
      (onClick)="showSidePage()"
    ></dx-button>
  `,
})
class SidePageComponent {
  @ViewChild('meSidePage', { static: false }) meSidePage!: MeSidepageComponent;

  @Input() isSidePageOpen: boolean = false;
  @Input() hideOnOutsideClick: boolean = false;
  @Input() position: string = 'right';
  @Input() width: string = '450px';
  @Input() shading: boolean = true;
  @Input() zIndex: string = '1505';
  @Input() zIndexOverlay: string = '1504';

  showSidePage() {
    console.log(this.meSidePage);
    this.isSidePageOpen = !this.isSidePageOpen;
  }
}

export default {
  title: 'Monitel Components/SidePage',
  component: SidePageComponent,
  decorators: [
    moduleMetadata({
      declarations: [DxButtonComponent, MeButtonDirective, SidePageComponent],
      imports: [MeSidepageComponent],
    }),
  ],
  argTypes: {
    showSidePage: {
      table: {
        disable: true,
      },
    },
    meSidePage: {
      table: {
        disable: true,
      },
    },
    isSidePageOpen: {
      table: {
        disable: true,
      },
    },
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Определяет сторону с которой выезжает side page.',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: 'text',
      description:
        'Определяет ширину side page. Значение в px, других единицах измерения css (em, rem, vh, vw и др.), значение auto, inherit и т.п.',
      table: {
        type: { summary: 'string' },
      },
    },
    shading: {
      control: 'boolean',
      description: 'Затеняет фон, когда компонент активен',
    },
    zIndex: {
      control: 'text',
      description: 'Позволяет изменить z-index side page.',
      table: {
        type: { summary: 'string' },
      },
    },
    zIndexOverlay: {
      control: 'text',
      description: 'Позволяет изменить z-index затененного фона',
      table: {
        type: { summary: 'string' },
      },
    },
    hideOnOutsideClick: {
      control: 'boolean',
      description:
        'При устанавлении значения true cкрывает side page при клике вне компонента.',
    },
  },
} as Meta<SidePageComponent>;

type Story = StoryObj<SidePageComponent>;

export const Default: Story = {
  args: {
    isSidePageOpen: false,
    position: 'left',
    width: '450px',
  },
};
