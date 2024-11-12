import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxLoadPanelModule } from 'devextreme-angular';
<<<<<<< HEAD
import {
  MeStatusBarComponent,
  StatusInfo,
} from '../../lib/components/me-status-bar/me-status-bar.component';
import { MeLoadPanelModule } from '../../public-api';
=======
import { MeStatusBarComponent, StatusInfo } from '../../lib/components/me-status-bar/me-status-bar.component';
import { MeLoadPanelModule } from "../../public-api";
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7

type Story = StoryObj<MeStatusBarComponent>;

const meta: Meta<MeStatusBarComponent> = {
  title: 'Components/StatusBar',
  component: MeStatusBarComponent,
  decorators: [
    moduleMetadata({
<<<<<<< HEAD
      imports: [DxLoadPanelModule, MeLoadPanelModule],
=======
      imports: [
        DxLoadPanelModule,
        MeLoadPanelModule
      ],
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
    }),
  ],
} as Meta<MeStatusBarComponent>;

export default meta;

// Базовый объект с данными
const defaultStatusInfo: StatusInfo = {
  organizationName: {
    text: 'Воткинская ГЭС',
<<<<<<< HEAD
    icon: { name: 'home' },
=======
    icon: { name: 'home' }
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
  },
  primaryInfo: {
    text: 'Раскраска схемы без узла ТП',
    icon: { name: 'chart' },
    backgroundColor: '#3257DC',
<<<<<<< HEAD
    color: '#FFFFFF',
=======
    color: '#FFFFFF'
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
  },
  secondaryInfo: {
    text: 'Режим исследования',
    icon: { name: 'clock' },
    backgroundColor: '#FFB82E',
<<<<<<< HEAD
    color: '#000000',
=======
    color: '#000000'
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
  },
  status: {
    type: 'error',
    message: 'Отсутствует соединение с источником данных',
    icon: { name: 'close' },
<<<<<<< HEAD
    loading: false,
  },
=======
    loading: false
  }
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
};

export const Default: Story = {
  args: {
<<<<<<< HEAD
    statusInfo: defaultStatusInfo,
  },
=======
    statusInfo: defaultStatusInfo
  }
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
};

export const Loading: Story = {
  args: {
    statusInfo: {
      ...defaultStatusInfo,
      status: {
        type: 'error',
        message: 'Загрузка данных...',
        icon: { name: 'loading' },
<<<<<<< HEAD
        loading: true,
      },
    },
  },
=======
        loading: true
      }
    }
  }
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
};

export const Success: Story = {
  args: {
    statusInfo: {
      ...defaultStatusInfo,
      status: {
        type: 'success',
        message: 'Соединение с источником данных восстановлено',
        icon: { name: 'check' },
<<<<<<< HEAD
        loading: false,
      },
    },
  },
=======
        loading: false
      }
    }
  }
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
};

export const Warning: Story = {
  args: {
    statusInfo: {
      ...defaultStatusInfo,
      status: {
        type: 'warning',
        message: 'Предупреждение о состоянии системы',
        icon: { name: 'warning' },
<<<<<<< HEAD
        loading: false,
      },
    },
  },
=======
        loading: false
      }
    }
  }
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
};

export const Info: Story = {
  args: {
    statusInfo: {
      ...defaultStatusInfo,
      status: {
        type: 'info',
        message: 'Информационное сообщение',
        icon: { name: 'info' },
<<<<<<< HEAD
        loading: false,
      },
    },
  },
=======
        loading: false
      }
    }
  }
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
};

// Пример с SVG иконками
export const WithSvgIcons: Story = {
  args: {
    statusInfo: {
      organizationName: {
        text: 'Воткинская ГЭС',
        icon: {
          name: 'home',
<<<<<<< HEAD
          path: '/assets/icons/home.svg',
        },
=======
          path: '/assets/icons/home.svg'
        }
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
      },
      primaryInfo: {
        text: 'Раскраска схемы без узла ТП',
        icon: {
          name: 'chart',
<<<<<<< HEAD
          path: '/assets/icons/chart.svg',
        },
        backgroundColor: '#3257DC',
        color: '#FFFFFF',
=======
          path: '/assets/icons/chart.svg'
        },
        backgroundColor: '#3257DC',
        color: '#FFFFFF'
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
      },
      secondaryInfo: {
        text: 'Режим исследования',
        icon: {
          name: 'clock',
<<<<<<< HEAD
          path: '/assets/icons/clock.svg',
        },
        backgroundColor: '#FFB82E',
        color: '#000000',
=======
          path: '/assets/icons/clock.svg'
        },
        backgroundColor: '#FFB82E',
        color: '#000000'
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
      },
      status: {
        type: 'success',
        message: 'Пример с SVG иконками',
        icon: {
          name: 'check',
<<<<<<< HEAD
          path: '/assets/icons/check.svg',
        },
        loading: false,
      },
    },
  },
=======
          path: '/assets/icons/check.svg'
        },
        loading: false
      }
    }
  }
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
};

// Пример с кастомными цветами
export const CustomColors: Story = {
  args: {
    statusInfo: {
      ...defaultStatusInfo,
      organizationName: {
        ...defaultStatusInfo.organizationName,
        color: '#FF5733',
<<<<<<< HEAD
        backgroundColor: '#F8F9FA',
=======
        backgroundColor: '#F8F9FA'
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
      },
      primaryInfo: {
        ...defaultStatusInfo.primaryInfo,
        color: '#FFFFFF',
<<<<<<< HEAD
        backgroundColor: '#6C757D',
=======
        backgroundColor: '#6C757D'
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
      },
      secondaryInfo: {
        ...defaultStatusInfo.secondaryInfo,
        color: '#FFFFFF',
<<<<<<< HEAD
        backgroundColor: '#17A2B8',
      },
    },
  },
=======
        backgroundColor: '#17A2B8'
      }
    }
  }
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
};
