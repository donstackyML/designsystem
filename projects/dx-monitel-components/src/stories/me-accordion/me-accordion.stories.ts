import { Component, Input } from '@angular/core';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxAccordionModule } from 'devextreme-angular';
import { MeAccordionDirective } from '../../lib/directives/me-accordion/accordion.directive';

interface Company {
  CompanyName: string;
  Description: string;
  City: string;
  State: string;
  Zipcode: string;
  Address: string;
  Phone: string;
  Fax: string;
  Website: string;
}

interface MeAccordionProps {
  size: 'small' | 'medium' | 'large';
  customClass: string;
  isCollapsible: boolean;
  isMultiple: boolean;
  animationDuration: number;
  companies: Company[];
  selectedItems: Company[];
}

@Component({
  selector: 'accordion-demo',
  template: `
    <dx-accordion
      meAccordion
      [dataSource]="companies"
      [collapsible]="isCollapsible"
      [multiple]="isMultiple"
      [animationDuration]="animationDuration"
      [selectedItems]="selectedItems"
      [size]="size"
      [customClass]="customClass"
    >
      <div *dxTemplate="let company of 'title'">
        <div class="accordion-header">
          <span class="accordion-title">{{ company.CompanyName }}</span>
          <span class="accordion-description">{{ company.Description }}</span>
        </div>
      </div>
      <div *dxTemplate="let company of 'item'">
        <div>
          <p>
            <b>{{ company.City }}</b> ({{ company.State }})
          </p>
          <p>{{ company.Zipcode }} {{ company.Address }}</p>
        </div>
        <div>
          <p>
            Phone: <b>{{ company.Phone }}</b>
          </p>
          <p>
            Fax: <b>{{ company.Fax }}</b>
          </p>
          <p>
            Website:
            <a href="{{ company.Website }}" target="_blank">{{
              company.Website
            }}</a>
          </p>
        </div>
      </div>
    </dx-accordion>
  `,
})
class AccordionDemoComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() customClass: string = '';
  @Input() isCollapsible: boolean = false;
  @Input() isMultiple: boolean = false;
  @Input() animationDuration: number = 300;
  @Input() companies: Company[] = [];
  @Input() selectedItems: Company[] = [];
}

const meta: Meta<MeAccordionProps> = {
  title: 'Components/Accordion(RC)',
  component: MeAccordionDirective,
  decorators: [
    moduleMetadata({
      declarations: [MeAccordionDirective, AccordionDemoComponent],
      imports: [DxAccordionModule],
    }),
  ],
  render: (args: MeAccordionProps) => ({
    props: args,
    template:
      '<accordion-demo [size]="size" [customClass]="customClass" [isCollapsible]="isCollapsible" [isMultiple]="isMultiple" [animationDuration]="animationDuration" [companies]="companies" [selectedItems]="selectedItems"></accordion-demo>',
  }),
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    customClass: { control: 'text' },
    isCollapsible: { control: 'boolean' },
    isMultiple: { control: 'boolean' },
    animationDuration: {
      control: { type: 'range', min: 0, max: 1000, step: 50 },
    },
  },
};

export default meta;
type Story = StoryObj<MeAccordionProps>;

const defaultCompanies: Company[] = [
  {
    CompanyName: 'Company A',
    Description: 'Description A',
    City: 'City A',
    State: 'State A',
    Zipcode: '12345',
    Address: 'Address A',
    Phone: '123-456-7890',
    Fax: '098-765-4321',
    Website: 'http://www.companya.com',
  },
  {
    CompanyName: 'Company B',
    Description: 'Description B',
    City: 'City B',
    State: 'State B',
    Zipcode: '67890',
    Address: 'Address B',
    Phone: '234-567-8901',
    Fax: '109-876-5432',
    Website: 'http://www.companyb.com',
  },
  {
    CompanyName: 'Company C',
    Description: 'Description C',
    City: 'City C',
    State: 'State C',
    Zipcode: '13579',
    Address: 'Address C',
    Phone: '345-678-9012',
    Fax: '210-987-6543',
    Website: 'http://www.companyc.com',
  },
];

export const Default: Story = {
  args: {
    size: 'medium',
    customClass: '',
    isCollapsible: false,
    isMultiple: false,
    animationDuration: 300,
    companies: defaultCompanies,
    selectedItems: [defaultCompanies[0]],
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const Collapsible: Story = {
  args: {
    ...Default.args,
    isCollapsible: true,
  },
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    isMultiple: true,
  },
};

export const CustomAnimation: Story = {
  args: {
    ...Default.args,
    animationDuration: 1000,
  },
};

export const CustomClass: Story = {
  args: {
    ...Default.args,
    customClass: 'my-custom-accordion',
  },
};
