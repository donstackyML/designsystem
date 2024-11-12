import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxLoadPanelModule } from 'devextreme-angular';
import { MeStatusBarComponent, StatusInfo } from '../../lib/components/me-status-bar/me-status-bar.component';
import { MeLoadPanelModule } from "../../public-api";

type Story = StoryObj<MeStatusBarComponent>;

const meta: Meta<MeStatusBarComponent> = {
  title: 'Components/StatusBar',
  component: MeStatusBarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        DxLoadPanelModule,
        MeLoadPanelModule
      ],
    }),
  ],
} as Meta<MeStatusBarComponent>;

export default meta;

// Базовый объект с данными
const defaultStatusInfo: StatusInfo = {
  organizationName: {
    text: 'Воткинская ГЭС',
    icon: { name: 'home' }
  },
  primaryInfo: {
    text: 'Раскраска схемы без узла ТП',
    icon: { name: 'chart' },
    backgroundColor: '#3257DC',
    color: '#FFFFFF'
  },
  secondaryInfo: {
    text: 'Режим исследования',
    icon: { name: 'clock' },
    backgroundColor: '#FFB82E',
    color: '#000000'
  },
  status: {
    type: 'error',
    message: 'Отсутствует соединение с источником данных',
    icon: { name: 'close' },
    loading: false
  }
};

export const Default: Story = {
  args: {
    statusInfo: defaultStatusInfo
  }
};

export const Loading: Story = {
  args: {
    statusInfo: {
      ...defaultStatusInfo,
      status: {
        type: 'error',
        message: 'Загрузка данных...',
        icon: { name: 'loading' },
        loading: true
      }
    }
  }
};

export const Success: Story = {
  args: {
    statusInfo: {
      ...defaultStatusInfo,
      status: {
        type: 'success',
        message: 'Соединение с источником данных восстановлено',
        icon: { name: 'check' },
        loading: false
      }
    }
  }
};

export const Warning: Story = {
  args: {
    statusInfo: {
      ...defaultStatusInfo,
      status: {
        type: 'warning',
        message: 'Предупреждение о состоянии системы',
        icon: { name: 'warning' },
        loading: false
      }
    }
  }
};

export const Info: Story = {
  args: {
    statusInfo: {
      ...defaultStatusInfo,
      status: {
        type: 'info',
        message: 'Информационное сообщение',
        icon: { name: 'info' },
        loading: false
      }
    }
  }
};

// Пример с SVG иконками
export const WithSvgIcons: Story = {
  args: {
    statusInfo: {
      organizationName: {
        text: 'Воткинская ГЭС',
        icon: {
          name: 'home',
          path: '/assets/icons/home.svg'
        }
      },
      primaryInfo: {
        text: 'Раскраска схемы без узла ТП',
        icon: {
          name: 'chart',
          path: '/assets/icons/chart.svg'
        },
        backgroundColor: '#3257DC',
        color: '#FFFFFF'
      },
      secondaryInfo: {
        text: 'Режим исследования',
        icon: {
          name: 'clock',
          path: '/assets/icons/clock.svg'
        },
        backgroundColor: '#FFB82E',
        color: '#000000'
      },
      status: {
        type: 'success',
        message: 'Пример с SVG иконками',
        icon: {
          name: 'check',
          path: '/assets/icons/check.svg'
        },
        loading: false
      }
    }
  }
};

// Пример с кастомными цветами
export const CustomColors: Story = {
  args: {
    statusInfo: {
      ...defaultStatusInfo,
      organizationName: {
        ...defaultStatusInfo.organizationName,
        color: '#FF5733',
        backgroundColor: '#F8F9FA'
      },
      primaryInfo: {
        ...defaultStatusInfo.primaryInfo,
        color: '#FFFFFF',
        backgroundColor: '#6C757D'
      },
      secondaryInfo: {
        ...defaultStatusInfo.secondaryInfo,
        color: '#FFFFFF',
        backgroundColor: '#17A2B8'
      }
    }
  }
};
