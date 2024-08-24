import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { NgStyle } from '@angular/common';
import {MeIconComponent} from "../../public-api";

// Предопределенный список иконок из Material Symbols
export const iconOptions = [
  'home', 'star', 'settings', 'favorite', 'search', 'person', 'info', 'warning',
  'check_circle', 'close', 'add', 'remove', 'edit', 'delete', 'alarm', 'account_circle',
  'calendar_today', 'camera', 'chat', 'cloud', 'download', 'email', 'file_copy', 'help',
  'lock', 'logout', 'menu', 'notifications', 'palette', 'phone', 'print', 'save',
  'shopping_cart', 'thumb_up', 'visibility', 'wifi', 'zoom_in', 'zoom_out', 'arrow_forward',
  'arrow_back', 'arrow_upward', 'arrow_downward', 'play_arrow', 'pause', 'stop', 'skip_next',
  'skip_previous', 'volume_up', 'volume_down', 'mute', 'brightness_high', 'brightness_low',
  'account_balance', 'add_circle', 'airplanemode_active', 'attach_file', 'backspace', 'battery_alert',
  'bluetooth', 'book', 'bookmark', 'build', 'business', 'call', 'category', 'check_box',
  'cleaning_services', 'code', 'computer', 'contacts', 'content_copy', 'dashboard', 'description',
  'directions', 'directions_car', 'directions_bike', 'done', 'drafts', 'drive_eta', 'eco',
  'emoji_emotions', 'enhanced_encryption', 'equalizer', 'event', 'explore', 'face', 'fast_forward',
  'fast_rewind', 'favorite_border', 'file_download', 'filter_list', 'fingerprint', 'fitness_center',
  'flag', 'folder', 'folder_open', 'format_align_center', 'format_align_justify', 'format_align_left',
  'format_align_right', 'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset',
  'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic',
  'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_paint', 'format_quote',
  'format_shapes', 'format_size', 'format_strikethrough', 'format_textdirection_l_to_r',
  'format_textdirection_r_to_l', 'format_underlined', 'fullscreen', 'fullscreen_exit', 'functions',
];

export default {
  title: 'Components/Icon',
  component: MeIconComponent,
  decorators: [
    moduleMetadata({
      imports: [MeIconComponent, NgStyle], // Подключаем компонент и NgStyle
    }),
  ],
  argTypes: {
    icon: {
      control: {
        type: 'select', // Используем select для выбора иконки
      },
      options: iconOptions,
      description: 'Имя иконки из Material Symbols',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер иконки',
    },
    color: {
      control: 'color',
      description: 'Цвет иконки',
    },
  },
  args: {
    icon: 'home',
    size: 'medium',
    color: '#000000',
  },
} as Meta<MeIconComponent>;

type Story = StoryObj<MeIconComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `
      <me-icon
        [icon]="icon"
        [size]="size"
        [color]="color">
      </me-icon>
    `,
  }),
};

export const Default: Story = {
  ...Template,
  args: {},
};

export const Small: Story = {
  ...Template,
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  ...Template,
  args: {
    size: 'large',
  },
};

export const CustomIcon: Story = {
  ...Template,
  args: {
    icon: 'star',
  },
};

export const CustomColor: Story = {
  ...Template,
  args: {
    color: '#ff5722',
  },
};


export const AllIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-wrap: wrap;">
        ${iconOptions.map(icon => `
          <div style="display: inline-block; margin: 10px; text-align: center; width: 100px;">
            <me-icon icon="${icon}" size="large" color="#000000"></me-icon>
            <p style="font-size: 12px; word-wrap: break-word;">${icon}</p>
          </div>
        `).join('')}
      </div>
    `,
  }),
};
