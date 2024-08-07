import { Component, Input } from '@angular/core';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxPopoverModule } from 'devextreme-angular/ui/popover';
import { MePopoverDirective } from '../../public-api';

@Component({
  selector: 'popover-host',
  template: `
    <div class="dx-fieldset form">
      <div class="dx-field">
        <div class="dx-field-label me-title-subheader1">{{ label }}</div>
        <div class="dx-field-value-static">
          <p>
            <span id="subject" class="me-text-body2">{{ subject }}</span>
            (<a class="test-details me-action-link1" id="link">details</a>)
          </p>
          <dx-popover
            mePopover
            target="#link"
            [showEvent]="showEvent"
            [hideEvent]="hideEvent"
            [position]="position"
            [width]="width"
            [maxWidth]="maxWidth"
            [showTitle]="showTitle"
            [title]="title"
            [shading]="shading"
            [shadingColor]="shadingColor"
          >
            <dxo-animation *ngIf="animationEnabled">
              <dxo-show
                type="pop"
                [from]="{ scale: 0 }"
                [to]="{ scale: 1 }"
              ></dxo-show>
              <dxo-hide type="fade" [from]="1" [to]="0"></dxo-hide>
            </dxo-animation>
            <div *dxTemplate="let data of 'content'">
              {{ content }}
            </div>
          </dx-popover>
        </div>
      </div>
    </div>
  `,
})
class PopoverHostComponent {
  @Input() label: string = 'Default mode';
  @Input() subject: string = 'Google AdWords Strategy';
  @Input() showEvent: string = 'mouseenter';
  @Input() hideEvent: string = 'mouseleave';
  @Input() position: string = 'top';
  @Input() width: number = 300;
  @Input() maxWidth: number | undefined;
  @Input() showTitle: boolean = false;
  @Input() title: string = '';
  @Input() shading: boolean = false;
  @Input() shadingColor: string = '';
  @Input() content: string = 'Popover content';
  @Input() animationEnabled: boolean = false;
}

const meta: Meta<PopoverHostComponent> = {
  title: 'Components/Popover(RC)',
  component: PopoverHostComponent,
  decorators: [
    moduleMetadata({
      declarations: [MePopoverDirective, PopoverHostComponent],
      imports: [DxPopoverModule],
    }),
  ],
  argTypes: {
    label: { control: 'text' },
    subject: { control: 'text' },
    showEvent: { control: 'text' },
    hideEvent: { control: 'text' },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    width: { control: 'number' },
    maxWidth: { control: 'number' },
    showTitle: { control: 'boolean' },
    title: { control: 'text' },
    shading: { control: 'boolean' },
    shadingColor: { control: 'color' },
    content: { control: 'text' },
    animationEnabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<PopoverHostComponent>;

export const Default: Story = {
  args: {
    label: 'Default mode',
    subject: 'Show Popover',
    // showEvent: 'mouseenter',
    // hideEvent: 'mouseleave',
    position: 'top',
    width: 300,
    content:
      'Make final decision on whether we are going to increase our Google AdWord spend based on our 2013 marketing plan.',
  },
};

export const WithTitle: Story = {
  args: {
    ...Default.args,
    label: 'With title',
    subject: 'Rollout of New Website and Marketing Brochures',
    position: 'bottom',
    showTitle: true,
    title: 'Details',
    maxWidth: 400,
    content:
      'The designs for new brochures and website have been approved. Launch date is set for Feb 28.',
  },
};

export const WithAnimation: Story = {
  args: {
    ...Default.args,
    label: 'With animation',
    subject: 'Create 2012 Sales Report',
    animationEnabled: true,
    content:
      '2012 Sales Report has to be completed so we can determine if major changes are required to sales strategy.',
  },
};

export const WithOverlay: Story = {
  args: {
    ...Default.args,
    label: 'With overlay',
    subject: 'Website Re-Design Plan',
    showEvent: 'click',
    shading: true,
    shadingColor: 'rgba(0, 0, 0, 0.5)',
    content:
      'The changes in our brochure designs for 2013 require us to update key areas of our website.',
  },
};
