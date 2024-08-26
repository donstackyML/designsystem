import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonComponent } from 'devextreme-angular';
import { MeButtonDirective, MeSidepageComponent } from '../../public-api';

// @Component({
//   template: `
//     <me-sidepage
//       #meSidePage
//       [(isSidePageOpen)]="isSidePageOpen"
//       position="left"
//       width="340px"
//     >
//       <div sidepage-header class="me-sidepage-header">
//         <div meIcon icon="public" size="24"></div>
//         <div class="me-sidepage-title">
//           <span class="me-title-header1">Заголовок</span>
//           <span class="me-text-body2">Описание</span>
//         </div>
//         <dx-button
//           meButton
//           stylingMode="text"
//           iconOnly="close"
//           (onClick)="onClickHandler()"
//         ></dx-button>
//       </div>
//       <div sidepage-content class="me-text-body1">{{ lorem500 }}</div>
//       <div sidepage-footer class="me-sidepage-footer">
//         <dx-button
//           meButton
//           text="Добавить"
//           stylingMode="contained"
//           [style.margin-right]="'auto'"
//         ></dx-button>
//         <dx-button
//           meButton
//           text="Прнинять"
//           stylingMode="contained"
//           type="default"
//         ></dx-button>
//         <dx-button
//           meButton
//           text="Отменить"
//           stylingMode="contained"
//           (onClick)="onClickHandler()"
//         ></dx-button></div
//     ></me-sidepage>

//     <dx-button
//       meButton
//       text="Открыть"
//       stylingMode="contained"
//       (onClick)="showSidePage()"
//     ></dx-button>
//   `,
// })
// class SidePageComponent {
//   @ViewChild('meSidePage', { static: false }) meSidePage!: MeSidepageComponent;

//   @Input() isSidePageOpen: boolean = false;
//   @Input() position: string = 'left';
//   @Input() width: string = '340px';

//   showSidePage() {
//     console.log(this.meSidePage);
//     this.meSidePage.isSidePageOpen = true;
//   }
// }

export default {
  title: 'Monitel Components/SidePage',
  component: MeSidepageComponent,
  decorators: [
    moduleMetadata({
      declarations: [DxButtonComponent, MeButtonDirective],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
    <div style=" width: 300px; height: 300px;">
      <me-sidepage ${argsToTemplate(args)}>
          <div sidepage-header class="me-sidepage-header">
          <div meIcon icon="public" size="24"></div>
          <div class="me-sidepage-title">
              <span class="me-title-header1">Заголовок</span>
              <span class="me-text-body2">Описание</span>
          </div>
          <dx-button meButton stylingMode="text" iconOnly="close" (onClick)="onClickHandler()"></dx-button>
          </div>
          <div sidepage-content class="me-text-body1">{{ lorem500 }}</div>
          <div sidepage-footer class="me-sidepage-footer">
          <dx-button meButton text="Добавить" stylingMode="contained" [style.margin-right]="'auto'"></dx-button>
          <dx-button meButton text="Прнинять" stylingMode="contained" type="default"></dx-button>
          <dx-button meButton text="Отменить" stylingMode="contained" (onClick)="onClickHandler()"></dx-button>
      </div></me-sidepage>
    </div>`,
  }),
} as Meta<MeSidepageComponent>;

type Story = StoryObj<MeSidepageComponent>;

export const Default: Story = {
  args: {
    isSidePageOpen: true,
    position: 'left',
    width: '340px',
  },
};
